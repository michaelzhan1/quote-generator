import Image from 'next/image';


export default function BackgroundImage({ image }) {
  return (
    <>
      <div className='w-screen h-screen overflow-hidden'>
        <Image src={ image } layout='fill' objectFit='cover' alt='Picture of nature'/>
      </div>
    </>
  )
}