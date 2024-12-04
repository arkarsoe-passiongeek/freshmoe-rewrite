import React from 'react'

const ContentHeader = ({ children, className }: { children: React.ReactNode, variant?: string, className?: string }) => {
    return (
        <h1 className={`text-lg lg:text-3xl 2xl:text-4xl text-c-primary mb-2 font-bold w-full ${className}`}>
            {children}
        </h1>
    )
}

export default ContentHeader