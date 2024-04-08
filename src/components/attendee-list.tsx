import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'

export const AttendeeList = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="w-72 px-3 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />
                    <input type="text" placeholder="Buscar participante..." className="bg-transparent h-9 focus:right-0 flex-1 outline-none border-0 p-0 text-sm" />
                </div>
            </div>
            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <th style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'>
                            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                        </th>
                        <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                        <th className='py-3 px-4 text-sm font-semibold text-left'>Participante</th>
                        <th className='py-3 px-4 text-sm font-semibold text-left'>Data da inscrição</th>
                        <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
                        <th style={{width: 64}} className='py-3 px-4 text-sm font-semibold text-left'></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({length: 10}).map((_, i) => {
                        return (
                            <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                                <td className='py-3 px-4 text-sm text-left text-zinc-300'>
                                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                </td>
                                <td className='py-3 px-4 text-sm text-left text-zinc-300'>2465187</td>
                                <td className='py-3 px-4 text-sm text-left text-zinc-300'>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>Diorgenes Morais</span>
                                        <span>diorgenesmorais@gmail.com</span>
                                    </div>
                                </td>
                                <td className='py-3 px-4 text-sm text-left text-zinc-300'>7 dias atrás</td>
                                <td className='py-3 px-4 text-sm text-left text-zinc-300'>3 dias atrás</td>
                                <td className='py-3 px-4 text-sm text-left text-zinc-300'>
                                    <IconButton transparent>
                                        <MoreHorizontal className='size-4' />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className='py-3 px-4 text-sm text-left text-zinc-300' colSpan={3}>
                            Mostrando 10 de 228 itens
                        </td>
                        <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
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
                            
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}