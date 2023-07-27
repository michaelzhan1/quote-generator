'use client'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Image from 'next/image';


export default function BackgroundImage({ image }) {
  return (
    <Container fluid className='p-0' style={{zIndex: -1}}>
      <div className='position-absolute w-100 vh-100 overflow-hidden'>
        <Image src={ image } fill style={{objectFit: 'cover'}} alt='Picture of nature'/>
      </div>
    </Container>
  )
}