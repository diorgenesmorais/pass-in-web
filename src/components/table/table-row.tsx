import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface ITableTr extends ComponentProps<'tr'> {}

export const TableRow = (props: ITableTr) => {
    return (
        <tr {...props} className={twMerge('border-b border-white/10', props.className)} />
    )
}