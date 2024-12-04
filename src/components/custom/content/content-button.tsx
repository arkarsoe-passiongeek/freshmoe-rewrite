const ContentButton = ({ children }: { children: any }) => {
    return (
        <div className="inline-flex items-center justify-center cursor-pointer rounded-[10px] text-c-transform-primary bg-c-secondary w-[91px] h-[30px] lg:w-[120px] 2xl:w-[197px] lg:h-[40px] 2xl:h-[50px] text-white text-sm lg:text-base hover:bg-c-hover">{children}</div>
    )
}

export default ContentButton