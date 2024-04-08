import { ComponentProps } from "react";

interface ITableTd extends ComponentProps<'td'> {}

export const TableTd = (props: ITableTd) => {
    return (
        <td {...props} className='py-3 px-4 text-sm text-left text-zinc-300' />
    )
}