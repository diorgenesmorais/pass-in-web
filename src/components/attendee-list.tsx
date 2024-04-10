import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableTh } from './table/table-th'
import { TableTd } from './table/table-td'
import { TableRow } from './table/table-row'
import { ChangeEvent, useEffect, useState } from 'react'
import { IAttendee } from '../interfaces/attendee.interface'
import { toDateRelative } from '../utils/format-to';

export const AttendeeList = () => {
    const [searchForParticipants, setSearchForParticipants] = useState('')
    const [page, setPage] = useState(1)
    const [attendees, setAttendees] = useState<Array<IAttendee>>([])
    const totalPages = Math.ceil(attendees.length / 10)

    useEffect(() => {
        fetch('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
            .then(res => res.json())
            .then(data => {
                setAttendees(data.attendees.map((at: IAttendee) => {
                    return {
                        ...at,
                        createdAt: new Date(at.createdAt),
                        checkedInAt: at.checkedInAt ? new Date(at.checkedInAt) : ''
                    }
                }))
            })
    }, [page])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchForParticipants(event.target.value);
    }

    const goPreviousToPage = () => {
        setPage(page - 1)
    }

    const goNextToPage = () => {
        setPage(page + 1)
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
                    {attendees.map(({id, name, email, createdAt, checkedInAt }: IAttendee) => {
                        return (
                            <TableRow key={id} className='hover:bg-white/5'>
                                <TableTd>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                </TableTd>
                                <TableTd>{id}</TableTd>
                                <TableTd>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>{name}</span>
                                        <span>{email}</span>
                                    </div>
                                </TableTd>
                                <TableTd>{toDateRelative(createdAt)}</TableTd>
                                <TableTd>{checkedInAt ? toDateRelative(checkedInAt) : 'Não fez check-in'}</TableTd>
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
                            Mostrando 10 de {attendees.length} itens
                        </TableTd>
                        <TableTd className='text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página {page} de {totalPages}</span>
                                <div className='flex gap-1.5'>
                                    <IconButton onClick={() => setPage(1)} disabled={page === 1}>
                                        <ChevronsLeft className='size-4' />
                                    </IconButton>
                                    <IconButton onClick={goPreviousToPage} disabled={page === 1}>
                                        <ChevronLeft className='size-4' />
                                    </IconButton>
                                    <IconButton onClick={goNextToPage} disabled={page === totalPages}>
                                        <ChevronRight className='size-4' />
                                    </IconButton>
                                    <IconButton onClick={() => setPage(totalPages)} disabled={page === totalPages}>
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