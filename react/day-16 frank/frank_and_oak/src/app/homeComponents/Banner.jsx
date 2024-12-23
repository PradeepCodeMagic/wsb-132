import React from 'react'
import bannerImg from '../../../public/images/mobile-1_eec4fb3b-def6-4009-95f9-f88cb1ce365b_1536x.jpg'
import Image from 'next/image'

export default function Banner() {
    return (
        <section>
            <div div className='w-full' >
                <Image src={bannerImg} className='w-full h-[95vh]  ' />
            </div>
        </section>
    )
}
