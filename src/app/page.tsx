import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">

          <div className='flex items-center gap-4'>  
            <button className='rounded-xl bg-black/40 p-1 hover:text-zinc-400'>
              <ChevronLeft />
            </button>
            <button className='rounded-xl bg-black/40 p-1 hover:text-zinc-400'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>
            Good Afternoon
          </h1>

          <div className='grid grid-cols-3 gap-5 mt-4'>

            <div className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'>
              <Image src="/images/27.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Adelito e Rebelde</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'> 
                <Play />
              </button>
            </div>

            <div className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'>
              <Image src="/images/13_36_32_340_file.jpeg" width={104} height={104} alt="Capa do álbum" />
              <strong>Sorriso e Sincero</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'> 
                <Play />
              </button>
            </div>


            <div className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'>
              <Image src="/images/1.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Atleta e Treinador</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'> 
                <Play />
              </button>
            </div>

            <div className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'>
              <Image src="/images/16.jpg" width={104} height={104} alt="Capa do álbum" />
              <strong>Perito e Paquera</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'> 
                <Play />
              </button>
            </div>


            <div className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'>
              <Image src="/images/images.jpeg" width={104} height={104} alt="Capa do álbum" />
              <strong>Patrão e Funcionário</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'> 
                <Play />
              </button>
            </div>

            <div className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors cursor-pointer'>
              <Image src="/images/cigarro.jpeg" width={104} height={104} alt="Capa do álbum" />
              <strong>Marlboro e Hollywood</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'> 
                <Play />
              </button>
            </div>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made for Nando Marzola</h1>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <div className='bg-white/5 p-3 rounded-xl hover:bg-white/10 cursor-pointer flex flex-col gap-2'>
              <Image src="/images/27.jpg" className='w-full' width={120} height={120} alt="Capa do álbum" />
              <strong className='font-semibold'>CD principal</strong>
              <span className='text-xs text-zinc-500'>descrição com nome dos artitas</span>
            </div>
            <div className='bg-white/5 p-3 rounded-xl hover:bg-white/10 cursor-pointer flex flex-col gap-2'>
              <Image src="/images/1.jpg" className='w-full' width={120} height={120} alt="Capa do álbum" />
              <strong className='font-semibold'>CD principal</strong>
              <span className='text-xs text-zinc-500'>descrição com nome dos artitas</span>
            </div>
            <div className='bg-white/5 p-3 rounded-xl hover:bg-white/10 cursor-pointer flex flex-col gap-2'>
              <Image src="/images/16.jpg" className='w-full' width={120} height={120} alt="Capa do álbum" />
              <strong className='font-semibold'>CD principal</strong>
              <span className='text-xs text-zinc-500'>descrição com nome dos artitas</span>
            </div>
            <div className='bg-white/5 p-3 rounded-xl hover:bg-white/10 cursor-pointer flex flex-col gap-2'>
              <Image src="/images/images.jpeg" className='w-full' width={120} height={120} alt="Capa do álbum" />
              <strong className='font-semibold'>CD principal</strong>
              <span className='text-xs text-zinc-500'>descrição com nome dos artitas</span>
            </div>
            <div className='bg-white/5 p-3 rounded-xl hover:bg-white/10 cursor-pointer flex flex-col gap-2'>
              <Image src="/images/cigarro.jpeg" className='w-full' width={120} height={120} alt="Capa do álbum" />
              <strong className='font-semibold'>CD principal</strong>
              <span className='text-xs text-zinc-500'>descrição com nome dos artitas</span>
            </div>
          </div>

        </main>
      </div>
     <Footer />
   </div>
  )
}
