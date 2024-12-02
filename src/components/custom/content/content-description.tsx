import React from 'react'

const ContentDescription = ({ children, className }: { children: any, className?: any }) => {
    return (
        <p className={`text-sm md:text-[14px] lg:text-base xl:text-lg 2xl:text-lg text-c-contrast ${className}`}>
            {children}
        </p>
    )
}

export default ContentDescription