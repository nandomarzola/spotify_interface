import { Laptop2, LayoutList, Maximize2, Mic, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center gap-3 justify-between">
            <div className='flex items-center gap-3'>
                <Image src="/images/1.jpg" width={48} height={48} alt="Capa do álbum" />
            <div className='flex flex-col'>
                <strong className='font-normal'>Nome da musica</strong>
                <span className='text-xs text-zinc-400'>Atleta e treinador</span>
            </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-3'>
                <Shuffle size={20} className='text-zinc-200' />
                <SkipBack size={20} className='text-zinc-200' />
                <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black ml-auto '> 
                <Play />
                </button>
                <SkipForward size={20} className='text-zinc-200' />
                <Repeat size={20} className='text-zinc-200' />
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-400'>0:58</span>
                <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-80 h-1 rounded'/>
                </div>
                <span className='text-xs text-zinc-400'>2:54</span>
            </div>
            </div>

            <div className='flex items-center gap-2'>
                <Mic size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <div className='h-1 rounded-full w-20 bg-zinc-600'>
                    <div className='bg-zinc-200 w-9 h-1 rounded'/>
                    </div>
                    <Volume size={20} />
                </div>
                <Maximize2 size={20} />
            </div>
      </footer>
    )
}