import Image from 'next/image';
import Link from 'next/link';
import hotel from '../public/hotel.jpg';

export default async function Home() {
  return (
    <main className="relative">
      <Image
        src={hotel}
        alt="Hotel Picure"
        width={1440}
        height={1080}
        placeholder="blur"
        className="min-h-hero w-full object-cover"
      />
      <section className="absolute inset-0 flex items-center justify-center">
        <Link className='bg-red-600 text-white font-semibold uppercase p-6 rounded-[8px] hover:bg-red-600/80 transition-colors' href={'/hotels'}>Find A Hotel</Link>
      </section>
    </main>
  );
}
