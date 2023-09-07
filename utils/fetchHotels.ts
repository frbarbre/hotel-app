import { Main } from '@/types';

export async function fetchHotels({
  latitude,
  longitude,
  checkIn,
  checkOut,
}: {
  latitude: string;
  longitude: string;
  checkIn: string;
  checkOut: string;
}) {
  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${latitude}&longitude=${longitude}&checkIn=${checkIn}&checkOut=${checkOut}&pageNumber=1&currencyCode=USD`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1094431a69msh94d0bb0346f032fp11055ejsnb4ac28ef5ea2',
      'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = (await response.json()) as Main;
    return result;
  } catch (error) {
    console.error(error);
  }
}
