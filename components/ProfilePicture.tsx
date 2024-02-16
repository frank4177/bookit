import Image from 'next/image'
import React from 'react'


const ProfilePicture = () => {
  return (
    <>
        <div className="box">
          <Image
            src="/m2short.jpg"
            height={200}
            width={200}
            alt="avatar"
            className="border-[5px] border-[#3D5654] rounded-full w-[80px] h-[80px]"
          />
        </div>
    </>
  )
}

export default ProfilePicture