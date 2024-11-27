import React from 'react'

const ContentDescription = ({ children }: { children: any }) => {
    return (
        <h2 className={`text-xss lg:text-sm`}>
            {children}
        </h2>
    )
}

export default ContentDescription