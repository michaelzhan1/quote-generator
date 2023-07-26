'use client'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


export default function Footer() {
  return (
    <>
      <Container fluid className='p-0 fixed-bottom text-center'>
        <div className='w-100 h-100' style={{backgroundColor: 'darkslategray', color: 'white'}}>
          Test
        </div>
      </Container>
    </>
  )
}