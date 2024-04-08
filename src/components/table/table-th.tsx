import { ComponentProps } from "react";

interface ITableTh extends ComponentProps<'th'> {}

export const TableTh = (props: ITableTh) => {
    return (
        <th {...props} className='py-3 px-4 text-sm font-semibold text-left' />
    )
}