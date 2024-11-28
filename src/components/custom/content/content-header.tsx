import React from 'react'

const ContentHeader = ({ children, variant, className }: { children: any, variant?: string, className?: any }) => {
    const variants = {

    }

    return (
        <h1 className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-c-primary mb-3 font-bold w-full ${className}`}>
            {children}
        </h1>
    )
}

export default ContentHeader