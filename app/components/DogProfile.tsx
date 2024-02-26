'use client'

import Image from "next/image";
import { petAdoptedAction, removePetAction } from "../api/actions";
import { useOptimistic } from "react";

type DogProfile = {
  id: number;
  name: string;
  breed: string;
  sex: 'male' | 'female';
  description: string;
  adopted: boolean;
  age: number;
};

export const DogProfile = ({
  id,
  name,
  breed,
  description,
  age,
  adopted
}: DogProfile) => {

  const [optimisticAdopted, updateOptimisticAdopted] = useOptimistic(adopted, (state, newAdoptedState: boolean) => {
    return newAdoptedState;
  });

  return (
    <div className='w-full flex m-2 border-2 border-slate-500'>
      <Image width={150} height={200} src={`/dogs/${id % 2 === 0 ? 'lady' : 'scout'}.jpeg`} alt='doggie profile image' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>
          Age: {age}
        </p>
        <p className='text-gray-700 text-base'>
          Breed: {breed}
        </p>
        <p className='text-gray-700 text-base'>
          {description}
        </p>
        {optimisticAdopted && (
          <div
            className=" justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
            data-te-close="true">
            I'm Adopted!
          </div>
        )}
        {/* <i>Server adopted status: {adopted.toString()}</i> */}
      </div>
      <form>
        <input type="hidden" name="id" id="id" value={id} />
        {!optimisticAdopted && <button
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
          formAction={async formData => {
            updateOptimisticAdopted(true);
            const res = await petAdoptedAction(formData);
            if (res) {
              alert(res.error)
            }
          }}>🐾</button>}
        <button
          className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          formAction={removePetAction}>🗑️</button>
      </form>
    </div>
  );
};

export default DogProfile;
