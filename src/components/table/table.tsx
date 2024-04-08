import { ComponentProps } from "react";

interface ITable extends ComponentProps<'table'> {

}

export const Table = (props: ITable) => {
    return (
        <div className='border border-white/10 rounded-lg'>
            <table {...props} className='w-full' />
        </div>
    )
}