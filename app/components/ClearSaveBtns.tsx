'use client'

import { useFormStatus } from "react-dom";

const ClearSaveBtns = () => {
    const { pending } = useFormStatus();
    return (
        <>
            <button
                type='reset'
                className='text-sm font-semibold leading-6 text-gray-900'
            >
                Clear
            </button>
            <button
                type='submit'
                disabled={pending}
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-6000'
            >
                {pending ? 'Saving...' : 'Save'}
            </button>
        </>
    )
}

export default ClearSaveBtns;