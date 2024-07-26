import Image from 'next/image';

function ProfileImage() {
  return (
    <div className='flex justify-end xl:pr-32 xl:w-[40vw]' >
      <Image className='rounded-full '
        src="/images/3d woman-2.png"  // Make sure the path matches the location within the public folder
        alt="Profile Picture" width={250} height={200}
      />
    </div>
  );
}

export default ProfileImage;
