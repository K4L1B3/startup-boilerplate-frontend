import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProfileProps {
  src: string | StaticImageData;
  alt: string;
}

const ProfilePicture: React.FC<ProfileProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="block h-14 w-14 rounded-full object-cover"
    />
  );
};

export default ProfilePicture;
