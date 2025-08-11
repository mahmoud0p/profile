import { useEffect , FC } from 'react'
import { cn } from '../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode , 
    className?: string
}

export const Button: FC<ButtonProps> = ({ children , className , ...props  }) => {
    useEffect(() => {
        const btn = document.querySelectorAll<HTMLButtonElement>('.btn-ripple')
        const handleClick = ({ pageX, pageY, currentTarget }: MouseEvent) => {
            console.log('hello world')
            const button = currentTarget as HTMLButtonElement
            const rect = button.getBoundingClientRect()
            const x = pageX - (rect.left + window.scrollX)
            const y = pageY - (rect.top + window.scrollY)
            const ripple = document.createElement('span')
            ripple.classList.add('ripple', 'bg-indigo-700/30', 'absolute', 'rounded-full', 'size-10', '-translate-x-1/2', '-translate-y-1/2')
            ripple.style.left = `${x}px`
            ripple.style.top = `${y}px`
            button.appendChild(ripple)
        }

        btn.forEach(button => {
            button.addEventListener('click', handleClick)
        })

        return () => {
            btn.forEach(button => {
                button.removeEventListener('click', handleClick)
            })
        }
    }, [])

    return (
        <button className={cn('py-2 relative justify-center btn-ripple flex gap-2 items-center px-5 rounded-xl border border-white/10 hover:border-indigo-700 transition-colors overflow-hidden duration-300' , className)} {...props}>
            {children}
        </button>
    )
}