import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableTh } from './table/table-th'
import { TableTd } from './table/table-td'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'

export const AttendeeList = () => {
    const [searchForParticipants, setSearchForParticipants] = useState('')

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchForParticipants(event.target.value);
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="w-72 px-3 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />
                    <input type="text" placeholder="Buscar participante..." 
                        className="bg-transparent h-9 focus:right-0 flex-1 outline-none border-0 p-0 text-sm"
                        onChange={handleSearch} />
                </div>
                {searchForParticipants /* apenas para teste */}
            </div>
            <Table>
                <thead>
                    <TableRow>
                        <TableTh style={{width: 48}}>
                            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                        </TableTh>
                        <TableTh>Código</TableTh>
                        <TableTh>Participante</TableTh>
                        <TableTh>Data da inscrição</TableTh>
                        <TableTh>Data do check-in</TableTh>
                        <TableTh style={{width: 64}} />
                    </TableRow>
                </thead>
                <tbody>
                    {Array.from({length: 10}).map((_, i) => {
                        return (
                            <TableRow key={i} className='hover:bg-white/5'>
                                <TableTd>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                </TableTd>
                                <TableTd>2465187</TableTd>
                                <TableTd>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>Diorgenes Morais</span>
                                        <span>diorgenesmorais@gmail.com</span>
                                    </div>
                                </TableTd>
                                <TableTd>7 dias atrás</TableTd>
                                <TableTd>3 dias atrás</TableTd>
                                <TableTd>
                                    <IconButton transparent>
                                        <MoreHorizontal className='size-4' />
                                    </IconButton>
                                </TableTd>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableTd colSpan={3}>
                            Mostrando 10 de 228 itens
                        </TableTd>
                        <TableTd className='text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página 1 de 23</span>
                                <div className='flex gap-1.5'>
                                    <IconButton>
                                        <ChevronsLeft className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className='size-4' />
                                    </IconButton>
                                </div>
                            </div>
                        </TableTd>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}