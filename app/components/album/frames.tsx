'use client'

import { useState } from "react";

const PHOTO_PATHS = [
    '/photos/primer_dia.jpg',
    '/photos/bonita.jpg',
    '/photos/preciosa.jpg',
    '/photos/mua.jpg',
    '/photos/nosotros.png',
    '/photos/me_gustas.png',
    '/photos/inicio.png',
    '/photos/flor.png',
    '/photos/cartita.png',
    '/photos/mensajitos.jpg',
    '/photos/ella.jpg'
]

const ITEMS_PER_PAGE = 6;

export default function Frames() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(PHOTO_PATHS.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentPhotos = PHOTO_PATHS.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div className="flex flex-col items-center max-w-2xl w-full p-4 gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl w-full p-4 animate-fade-in">
                {currentPhotos.map((src, index) => {
                    const globalIndex = startIndex + index
                    return (
                        <div
                            key={globalIndex}
                            className='bg-white p-3 pb-6 rounded-sm shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 md:odd:-rotate-1 flex flex-col items-center'
                        >
                            <div className='w-full aspect-square bg-gray-100 overflow-hidden relative rounded-sm border-black/5'>
                                <img
                                    src={src}
                                    alt={`Recuerdo ${globalIndex + 1}`}
                                    className='w-aut h-auto md:w-[200] md:h-[200] object-cover filter brightness-95 contrast-105'
                                    loading="lazy"
                                />
                            </div>

                            <div>
                                <span className='font-serif text-xs text-gray-400 tracking-widest uppercase'>
                                    {globalIndex + 1} / {PHOTO_PATHS.length}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            {PHOTO_PATHS.length > ITEMS_PER_PAGE && (
                <div className="flex items-center gap-4 mt-4 font-serif text-sm">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Anterior
                    </button>

                    <span className="text-gray-600">
                        Página {currentPage} de {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Siguiente
                    </button>
                </div>
            )}


        </div>
    );
}