type DogProfile = {
  id: number;
  name: string;
  breed: string;
  sex: 'male' | 'female';
  description: string;
  available: boolean;
  image: string;
  age: number;
};

export const DogProfile = ({
  name,
  breed,
  description,
  age,
  image,
}: DogProfile) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img
        className='w-full'
        src={image}
        alt={`Doggie profile for ${name}`}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        {age && <p className='text-gray-700 text-base'>
          Age: {age}
        </p>}
        <p className='text-gray-700 text-base'>
          {description}
        </p>
      </div>
      {/* TODO: Edit Dog Button */}
    </div>
  );
};

export default DogProfile;
