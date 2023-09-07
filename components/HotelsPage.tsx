'use client';

import { Main } from '@/types';
import { fetchHotels } from '@/utils/fetchHotels';
import { useState } from 'react';
import Loading from './Loading';
import HotelCard from './HotelCard';

export default function HotelsPage() {
  const [searchedHotel, setSearchedHotel] = useState<Main | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ isTrue: false, message: '' });
  const [form, setForm] = useState({
    checkIn: '2023-09-08',
    checkOut: '2023-09-09',
    latitude: '56.123980',
    longitude: '10.178200',
  });
  if (!searchedHotel === undefined) return null;

  async function searchHotel() {
    setIsLoading(true);
    setSearchedHotel(
      await fetchHotels({
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        latitude: form.latitude,
        longitude: form.longitude,
      })
    );
    console.log(searchedHotel);
    setIsLoading(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className="flex flex-col text-white bg-red-600 p-10 w-max rounded-lg mt-6 mx-auto gap-[20px]">
        <div className="flex gap-[20px]">
          <Input
            handleChange={handleChange}
            name="checkIn"
            placeholder="Write this format: 2023-10-10"
            value={form.checkIn}
          />
          <Input
            handleChange={handleChange}
            name="checkOut"
            placeholder="Write this format: 2023-12-10"
            value={form.checkOut}
          />
        </div>
        <div className="flex gap-[20px]">
          <Input
            handleChange={handleChange}
            name="latitude"
            placeholder="Write this format: 40.23423"
            value={form.latitude}
          />

          <Input
            handleChange={handleChange}
            name="longitude"
            placeholder="Write this format: 73.2342"
            value={form.longitude}
          />
        </div>
        <button
          onClick={searchHotel}
          className="bg-white text-red-600 w-max mx-auto px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-auto-fit p-8 gap-[40px]">
        {searchedHotel?.data && !isLoading && (
          <>
            {searchedHotel?.data.data.map((hotel) => (
              <HotelCard
                hotel={hotel}
                key={hotel.id}
                checkIn={form.checkIn}
                checkOut={form.checkOut}
              />
            ))}
          </>
        )}
      </div>
      {isLoading && <Loading />}
      {error.isTrue && <div>{error.message}</div>}
    </div>
  );
}

export function Input({
  name,
  handleChange,
  value,
  placeholder,
}: {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}) {
  return (
    <div className="max-w-[230px] w-full">
      <label className="uppercase font-bold" htmlFor={name}>
        {name}:
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        className="text-black px-4 py-2 rounded-md w-full"
      />
    </div>
  );
}
