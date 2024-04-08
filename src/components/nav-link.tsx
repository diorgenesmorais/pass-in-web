import { ComponentProps } from "react"

interface INavLink extends ComponentProps<'a'> {

}

export const NavLink = (props: INavLink) => {
    return (
        <a {...props} className="font-medium text-sm">{props.children}</a>
    )
}