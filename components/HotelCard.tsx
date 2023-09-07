import { Hotel } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function HotelCard({
  hotel,
  checkIn,
  checkOut,
}: {
  hotel: Hotel;
  checkIn: string;
  checkOut: string;
}) {
  const { title, cardPhotos } = hotel;

  const imageWidthReplace = cardPhotos[0].sizes.urlTemplate.replace(
    '{width}',
    '1000'
  );
  const image = imageWidthReplace.replace('{height}', '1200');

  return (
    <Link href={`/hotels/${hotel.id}and${checkIn}and${checkOut}`}>
      <Image
        src={image}
        alt={hotel.title}
        width={450}
        height={450}
        className="aspect-video h-[150px] w-full object-cover"
      />
      <h3>{title}</h3>
    </Link>
  );
}
