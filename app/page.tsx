import Image from 'next/image';
import Tile from "../comps/Tile.tsx";
import Collection from '../comps/Collection.tsx';
import Programs from '@/comps/Program.tsx';
import Hero from "../comps/Hero.tsx"
import Footer from '@/comps/Footer.tsx';
//className="flex min-h-screen flex-col items-center justify-between p-24"



export default function Home() {
  return (
    <main>

      {/* <Collection/> */}
      {/* <Programs /> */}
      <Hero></Hero>
      
   

    </main>
  )
}
