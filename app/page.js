import styles from './page.module.css'
import BackgroundImage from './BackgroundImage'
import Footer from './Footer'
import Quote from './Quote'



export default function Home() {
  return (
    <>
      <BackgroundImage />
      <Quote />
      <Footer />
    </>
  )
}

// use 'getServerSideProps' to fetch data from an API here, then pass into Background image, quote, and footer
