import React, { useState } from 'react'
import { ShoppingIcon } from './icons/shopping'
import { BlogIcon } from './icons/BlogIcon'
import { ChatIcon } from './icons/Chatting'
import { SocialIcon } from './icons/Social'
import { StudyIcon } from './icons/studyIcon'
import { motion, AnimatePresence } from "framer-motion"
import { CloseIcon } from './icons/Close'

const Projects = () => {
    const [selectedId, setSelectedId] = useState<number>()

    const projects = [
        {
            id: 1,
            title: "Creating Blogs",
            Icon: BlogIcon,
            description: "A comprehensive blogging platform with user authentication, content management system, commenting capabilities, and advanced features like tagging, search functionality, and email notifications. Includes rich text editing and multimedia support.",
            features: [
                "User authentication and authorization",
                "Rich text editor with markdown support",
                "Image upload and management",
                "Comment system with nested replies",
                "Tag and category management",
                "Search functionality with filters",
                "Email notification system",
                "RSS feed generation",
                "Social media sharing"
            ]
        },
        {
            id: 2,
            title: "Creating Ecommerce Platform",
            Icon: ShoppingIcon,
            description: "A full-featured online shopping platform with product management, secure payment processing, order tracking, and user accounts. Includes search and filter capabilities, review system, and inventory management.",
            features: [
                "Product catalog management",
                "Shopping cart functionality",
                "Secure payment integration",
                "Order tracking system",
                "User reviews and ratings",
                "Inventory management",
                "Multiple payment gateways",
                "Discount and coupon system",
                "Analytics dashboard"
            ]
        },
        {
            id: 3,
            title: "Creating Real Time Chat Applications Using SocketIO",
            Icon: ChatIcon,
            description: "A modern chat application featuring real-time messaging, private conversations, group chats, and file sharing. Enhanced with typing indicators, message history, and end-to-end encryption for secure communication.",
            features: [
                "Real-time messaging",
                "Private and group chats",
                "File sharing capabilities",
                "Typing indicators",
                "Message history",
                "End-to-end encryption",
                "Online status indicators",
                "Push notifications",
                "Message search"
            ]
        },
        {
            id: 4,
            title: "Creating Social Media Platform",
            Icon: SocialIcon,
            description: "A dynamic social networking platform with customizable user profiles, interactive news feed, and comprehensive friend system. Features include media sharing, real-time notifications, and privacy controls.",
            features: [
                "User profile customization",
                "News feed algorithm",
                "Friend/Follow system",
                "Media sharing",
                "Real-time notifications",
                "Privacy settings",
                "Post engagement features",
                "Story/Status updates",
                "Content moderation tools"
            ]
        },
        {
            id: 5,
            title: "Online Learning Platform",
            Icon: StudyIcon,
            description: "An interactive educational platform offering comprehensive course management, video lectures, and assessment tools. Includes progress tracking, discussion forums, and certification system with detailed analytics.",
            features: [
                "Course management system",
                "Video lecture hosting",
                "Interactive assessments",
                "Progress tracking",
                "Discussion forums",
                "Certificate generation",
                "Learning analytics",
                "Student dashboard",
                "Assignment submission"
            ]
        }
    ]

    // Card hover animation variants
    const cardHoverVariants = {
        initial: { opacity: 0, scale: 0.8 },
        hover: { opacity: 1, scale: 1 }
    }
    
    // Entrance animation variants
    const cardEntranceVariants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(15px)" },
        visible: { 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { 
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }
    
    // Modal backdrop variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.3 
            }
        },
        exit: { 
            opacity: 0,
            transition: { 
                delay: 0.2,
                duration: 0.3 
            }
        }
    }

    return (
        <>
            <section className='w-11/12 max-w-[1400px] min-h-screen mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4'>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layoutId={`project-container-${project.id}`}
                        onClick={() => setSelectedId(project.id)}
                        variants={cardEntranceVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex items-center border border-white/10 p-7 rounded-3xl group gap-5 justify-center flex-col cursor-pointer relative
                            ${index === 0 ? 'md:col-span-6 lg:col-span-8 md:row-span-2 ' : ''}
                            ${index === 1 ? 'md:col-span-3 lg:col-span-4 md:row-span-2 ' : ''}
                            ${index === 2 ? 'md:col-span-3 lg:col-span-4 min-h-[320px]' : ''}
                            ${index === 3 ? 'md:col-span-3 lg:col-span-4 min-h-[320px]' : ''}
                            ${index === 4 ? 'md:col-span-3 lg:col-span-4 min-h-[320px]' : ''}`}
                    >
                        <motion.div layoutId={`project-title-${project.id}`}>
                            <h2 className='text-2xl font-bold'>{project.title}</h2>
                        </motion.div>
                        <motion.div layoutId={`project-icon-${project.id}`}>
                            <project.Icon />
                        </motion.div>
                        <motion.p layoutId={`project-description-${project.id}`} className='text-neutral-400 text-center leading-relaxed line-clamp-3'>
                            {project.description}
                        </motion.p>
                        <motion.div 
                            className='w-full h-full bg-white/5 absolute rounded-3xl'
                            variants={cardHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                        />
                    </motion.div>
                ))}
            </section>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-[1600] p-4 bg-black/50"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setSelectedId(undefined)}
                    >
                        <motion.div
                            layoutId={`project-container-${selectedId}`}
                            className="bg-black max-w-3xl border relative flex flex-col overflow-hidden border-white/10 p-8 rounded-3xl max-h-[90%] w-full"
                            onClick={(e) => e.stopPropagation()}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                mass: 1
                            }}
                        >
                            {(() => {
                                const project = projects.find(p => p.id === selectedId)
                                if (!project) return null
                                return (
                                    <>
                                        <motion.div layoutId={`project-title-${selectedId}`}>
                                            <h2 className='text-3xl text-center font-bold mb-4'>{project.title}</h2>
                                        </motion.div>
                                        <hr className='border-none h-[1px] bg-gradient-to-r via-neutral-900 w-full mb-10'/>
                                        <motion.div 
                                            layoutId={`project-icon-${selectedId}`}
                                            className="mx-auto mb-4"
                                        >
                                            <project.Icon className="size-52" />
                                        </motion.div>
                                        <motion.p 
                                            layoutId={`project-description-${selectedId}`}
                                            className='text-neutral-400 leading-relaxed mb-6'
                                        >
                                            {project.description}
                                        </motion.p>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ 
                                                opacity: 1, 
                                                y: 0,
                                                transition: {
                                                    delay: 0.2,
                                                    duration: 0.5,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 15
                                                }
                                            }}
                                        >
                                            <h3 className='text-xl font-bold mb-3'>Key Features:</h3>
                                            <div className='relatitve overflow-hidden flex-1'>
                                                <ul className='list-disc overflow-hidden relative hover:overflow-y-auto h-[5em] flex-1 pl-6 text-neutral-400 mb-6'>
                                                    {project.features.map((feature, index) => (
                                                        <motion.li 
                                                            key={index} 
                                                            className="mb-2"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ 
                                                                opacity: 1, 
                                                                x: 0,
                                                                transition: {
                                                                    delay: 0.3 + (index * 0.05),
                                                                    duration: 0.5,
                                                                    type: "spring",
                                                                    stiffness: 100,
                                                                    damping: 15
                                                                }
                                                            }}
                                                        >
                                                            {feature}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                        
                                        <button
                                            onClick={() => setSelectedId(undefined)}
                                            className="absolute top-5 right-5 text-rose-500/30 hover:text-rose-500 hover:rotate-90 transition-all duration-300"
        
                                        >
                                            <CloseIcon className='size-5'/>
                                        </button>
                                    </>
                                )
                            })()}                        
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Projects