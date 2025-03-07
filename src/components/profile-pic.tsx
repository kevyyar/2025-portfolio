import Image from "next/image";

function ProfilePic() {
  return (
    <Image
      src="/images/me.jpeg"
      alt="Profile Pic"
      width={400}
      height={400}
      priority
      className="rounded-full border-2 border-blue-500"
    />
  );
}

export default ProfilePic;
