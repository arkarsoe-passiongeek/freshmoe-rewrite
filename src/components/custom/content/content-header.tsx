import React from 'react'

const ContentHeader = ({ children, variant, className }: { children: any, variant?: string, className?: any }) => {
    const variants = {

    }

    return (
        <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-c-primary text-c-primary-2 mb-3 text-shadow font-bold w-full ${className}`}>
            {children}
        </h1>
    )
}

export default ContentHeader