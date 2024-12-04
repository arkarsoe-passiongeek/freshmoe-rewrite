const ContentButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="inline-flex items-center justify-center cursor-pointer rounded-[10px] text-c-transform-primary bg-c-secondary text-white text-sm lg:text-base hover:bg-c-hover px-3 py-2 xl:py-3 xl:px-10">
            {children}
        </div>
    )
}

export default ContentButton