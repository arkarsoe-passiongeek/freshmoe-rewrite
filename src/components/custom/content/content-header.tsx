import React from 'react'

const ContentHeader = ({ children, variant }: { children: any, variant?: string }) => {
    const variants = {

    }

    return (
        <h1 className="text-xl lg:text-2xl font-c-primary text-c-primary-2 mb-3 text-shadow font-bold w-full">
            {children}
        </h1>
    )
}

export default ContentHeader