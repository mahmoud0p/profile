import React from 'react'
import { Button } from './Button'
import validator from "validator"
import { useForm } from '@tanstack/react-form'
import {AnimatePresence, motion} from "motion/react"
import { MailIcon } from './icons/mail'
import toast, { Toaster } from 'react-hot-toast'
import { CloseIcon } from './icons/Close'
import { SuccessIcon } from './icons/success'

const InvalidAlert = ({ error }: { error: string }) => {
    
    return(
        <AnimatePresence>
            {error&&
            <motion.em initial={{opacity:0 , y:-5 ,scaleY:0.8}} animate={{opacity:1 , y:0 , scaleY:1}} exit={{opacity:0 , y:-5 , scaleY:0.8}} className='text-xs mt-2 text-rose-900'>
                {error}
            </motion.em>
            }
            
        </AnimatePresence>
    )

}
export const Contact = () => {
    const inputStyles = "border border-neutral-900/60 focus:border-blue-500 mt-1 transition-all duration-300 hover:bg-neutral-900/70 focus:bg-neutral-900/50 outline-none bg-neutral-900/50 placeholder:text-neutral-800"
    const form = useForm({
        defaultValues: {
            email: '',
            message: ''
        },
        onSubmit: async(values) => {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "2eec55cd-89d8-43ba-858f-17c42a8b3e17",
                    email: values.value.email,
                    message: values.value.message,
                }),
            });
            const result = await response.json();
            if (result.success) {

                toast.custom((t: { visible: boolean; id: string }) => (
                    <AnimatePresence>
                        {t.visible &&<motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={` max-w-md w-full border border-white/10 bg-black shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                        >
                            <div className="flex-1 w-0 p-4">
                                <div className="flex items-center">
                                    <SuccessIcon className='text-green-400 ' />
                                    <div className="ml-3 flex-1">
                                        <p className="text-sm font-medium text-neutral-500]">
                                            Message Sent Successfully! 🎉
                                        </p>
                                        <p className="mt-1 text-sm text-neutral-300">
                                            Thank you for reaching out. I will get back to you soon!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-l  border-white/10">
                                <Button
                                    onClick={() => toast.dismiss(t.id)}
                                    className='border-none p-2 py-7 '
                                >
                                    <CloseIcon/>
                                </Button>
                            </div>
                        </motion.div>}
                    </AnimatePresence>
                ), {
                    duration: 4000,
                });
                form.reset();
            }
        }
    })
    return (
        <motion.section initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8 }} viewport={{once:true}} className='min-h-[50vh] w-3/4 mt-10 mx-auto flex flex-col justify-center items-center gap-5'>
            <Toaster position="top-center" />
            <h1 className='text-2xl relative'>
                Get In Touch
                <span className='left-0 absolute top-full w-3/4 h-1 bg-[#DDDDDD]' />
            </h1>
            <p className='text-center text-sm text-neutral-600'>Need assistance or a free website? Send me a message and I will get back to you promptly.</p>
            <hr className=' border-none h-[1px] bg-gradient-to-r via-neutral-900 w-full'/>
            <form onSubmit={(e)=>{
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
                }} className='grid w-full max-w-lg'>
                <form.Field name="email" validators={{ 
                    onChange :({value}) => {
                    if (!value) {
                        return 'Email is required'
                    }
                    if (!validator.isEmail(value)) {
                        return 'Email is invalid'
                    }
                    return ""
                }} }
                >
                    {(field)=><>
                        <label htmlFor="email" className={`text-xl transition-all duration-300 ${ field.state.meta.isTouched && field.state.meta.errors.length>0 && "text-rose-900"}`}>Email</label>
                        <div className='w-full relative flex items-center'>
                            <input  
                                type="email" 
                                name={field.name}
                                value={field.state.value}
                                onChange={(e)=>field.handleChange(e.target.value)}
                                onBlur={field.handleBlur}
                                id={field.name} 
                                placeholder='example@example.com' 
                                className={`${inputStyles} rounded-xl  w-full pl-16 p-3 ${field.state.meta.isTouched && field.state.meta.errors.length > 0 ? 'border-rose-900 bg-rose-900/10 focus:border-rose-900 focus:bg-rose-900/10 hover:bg-rose-900/30' : ''}`}
                            />
                            <MailIcon className={`text-neutral-800 absolute left-3  size-10 pr-2 translate-y-[2px] border-r border-neutral-900/30 `}/>
                        </div>
                        <InvalidAlert error={field.state.meta.errors.join(', ')}/>
                    </>}
                </form.Field>
                <form.Field name="message" validators={{
                    onChange :({value}) => {
                    if (!value) {
                        return 'Message is required'
                    }
                    if(value.length<10){
                        return 'Message must be at least 10 characters long'
                    }
                    return ""
                }} }
                >
                {(field)=><>
                    <label htmlFor="message" className={`mt-3 text-xl ${ field.state.meta.isTouched && field.state.meta.errors.length>0 && "text-rose-900"}`}>Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        rows={10} 
                        onChange={(e)=>field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        value={field.state.value}
                        className={`${inputStyles} rounded-2xl p-4 resize-none ${field.state.meta.isTouched && field.state.meta.errors.length > 0 ? 'border-rose-900 bg-rose-900/10 focus:border-rose-900 focus:bg-rose-900/10 hover:bg-rose-900/30' : ''}`}
                        placeholder='Tell me about your project'
                    />
                    <InvalidAlert error={field.state.meta.errors.join(', ')}/>
                </>}
                </form.Field>
                <form.Subscribe
                    selector={(state)=>[state.canSubmit, state.isSubmitting]}
                >
                    {([canSubmit , isSubmitting])=><Button type='submit' className={"disabled:opacity-50 my-5 disabled:hover:border-white/10"} disabled={!canSubmit} >{isSubmitting ? "Sending..." :"Send"}</Button>}
                </form.Subscribe>
            </form>
        </motion.section>
    )
}