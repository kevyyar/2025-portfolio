import Image from 'next/image';

function ProfilePic() {
  return (
    <div className="w-full max-w-[400px] md:max-w-[500px]">
      <Image
        src="/images/me.jpeg"
        alt="Profile Pic"
        width={400}
        height={400}
        priority
        className="rounded-full border-2 border-blue-500 object-cover w-full h-auto"
        sizes="(max-width: 768px) 500px, 400px"
      />
    </div>
  );
}

export default ProfilePic;
