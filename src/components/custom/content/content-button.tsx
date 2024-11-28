import CBaseButton from "../c-base-button"

const ContentButton = ({ children }: { children: any }) => {
    return (
        <CBaseButton className="rounded-lg text-c-transform-primary bg-c-secondary 2xl:w-[197px] 2xl:h-[50px] text-white 2xl:text-base">{children}</CBaseButton>
    )
}

export default ContentButton