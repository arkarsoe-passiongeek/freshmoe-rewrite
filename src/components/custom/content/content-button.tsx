import CBaseButton from "../c-base-button"

const ContentButton = ({ children }: { children: any }) => {
    return (
        <CBaseButton className="rounded-lg text-c-transform-primary !text-xss bg-c-secondary text-white">{children}</CBaseButton>
    )
}

export default ContentButton