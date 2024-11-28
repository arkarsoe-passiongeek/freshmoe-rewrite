import React from 'react'

const ContentDescription = ({ children, className }: { children: any, className?: any }) => {
    return (
        <p className={`text-xs sm:text-base xl:text-lg 2xl:text-lg text-c-contrast ${className}`}>
            {children}
        </p>
    )
}

export default ContentDescription