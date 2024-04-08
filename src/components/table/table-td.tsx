import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface ITableTd extends ComponentProps<'td'> {}

export const TableTd = (props: ITableTd) => {
    return (
        <td {...props} className={twMerge('py-3 px-4 text-sm text-left text-zinc-300', props.className)} />
    )
}