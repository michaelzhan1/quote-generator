'use client'


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


export default function Quote({quote, author}) {
  return (
    <>
      <Container fluid className='p-0 d-flex justify-content-center align-items-center vh-100'>
        <div className='text-center' style={{backgroundColor: 'darkslategray', color: 'white', opacity: '0.9', zIndex: '9999'}}>
          <h1 className='display-2 p-3'>{ quote }</h1>
          <h2 className='display-4 p-3'>-{ author }</h2>
        </div>
      </Container>
    </>
  )
}