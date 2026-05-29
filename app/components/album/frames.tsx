'use client'

const PHOTO_PATHS = [
    '/photos/primer_dia.jpg',
    '/photos/bonita.jpg',
    '/photos/preciosa.jpg',
    '/photos/mua.jpg',
    '/photos/princesa.jpg'
]

export default function Frames() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full p-4 animate-fade-in">
            {PHOTO_PATHS.map((src, index) => (
                <div
                    key={index}
                    className='bg-white p-3 pb-6 rounded-sm shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 md:odd:-rotate-1 flex flex-col items-center'
                >
                    <div className='w-full aspect-square bg-gray-100 overflow-hidden relative rounded-sm border-black/5'>
                        <img
                            src={src}
                            alt={`Recuerdo ${index + 1}`}
                            className='w-[200] h-[200] object-cover filter brightness-95 contrast-105'
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <span className='font-serif text-xs text-gray-400 tracking-widest uppercase'>
                            {index + 1} / {PHOTO_PATHS.length}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}