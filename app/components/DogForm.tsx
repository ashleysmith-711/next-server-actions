'use client'

import { createRef } from "react";
import { createPetAction } from "../api/actions";
import ClearSaveBtns from "./ClearSaveBtns";

export const DogForm = () => {
  const ref = createRef<HTMLFormElement>();
  return (
    <form ref={ref} action={async formData => {
      const result = await createPetAction(formData);
      if (result?.error) {
        alert(result.error)
      } else {
        ref.current?.reset();
      }
    }}>
      <div className='form-container'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Pet Information
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='breed'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Breed
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='breed'
                  id='breed'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-1'>
              <label
                htmlFor='age'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Age
              </label>
              <div className='mt-2'>
                <input
                  type='number'
                  name='age'
                  id='age'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='col-span-full'>
              <label
                htmlFor='description'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Description
              </label>
              <div className='mt-2'>
                <textarea
                  id='description'
                  name='description'
                  rows={3}
                  placeholder="Add notes on personality, traits, likes/dislikes, etc..."
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <ClearSaveBtns />
      </div>
    </form>
  );
};

export default DogForm;
