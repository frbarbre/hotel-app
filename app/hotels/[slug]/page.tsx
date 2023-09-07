import { fetchHotel } from '@/utils/fetchHotel';
import Image from 'next/image';

export default async function Hotel({ params }: { params: { slug: string } }) {
  const parameters = params.slug.split('and');
  const hotelId = parameters[0];
  const checkIn = parameters[1];
  const checkOut = parameters[2];

  console.log(parameters);

  const currentHotel = await fetchHotel({
    id: hotelId,
    checkIn: checkIn,
    checkOut: checkOut,
  });

  const imageWidthReplace = currentHotel?.data.photos[0].urlTemplate.replace(
    '{width}',
    '1000'
  );
  const image = imageWidthReplace?.replace('{height}', '1200');

  return (
    <section className="max-w-[800px] mx-auto py-[32px]">
      <Image
        src={image || ''}
        alt="image"
        width={1200}
        height={800}
        className="max-h-[450px] w-full object-cover"
      />
      <h1 className="font-bold text-[38px] pt-[10px]">
        {currentHotel?.data.title}
      </h1>
      <div className='flex gap-[12px]'>
        <h2 className='text-[20px] font-semibold'>{currentHotel?.data.reviews.ratingValue} / 5</h2>
        <Image src={'/star.svg'} alt="star" width={20} height={20} />
      </div>
    </section>
  );
}
