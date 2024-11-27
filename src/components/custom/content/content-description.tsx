import React from 'react'

const ContentDescription = ({ children, className }: { children: any, className?: any }) => {
    return (
        <p className={`text-xs sm:text-base xl:text-lg ${className}`}>
            {children}
        </p>
    )
}

export default ContentDescription