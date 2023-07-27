import styles from './page.module.css'
import BackgroundImage from './BackgroundImage'
import Footer from './Footer'
import Quote from './Quote'
import { fetchQuote } from 'utils/api'



export default async function Home() {
  const { quote, author } = await getData();
  return (
    <>
      <BackgroundImage />
      <Quote quote={quote} author={author} />
      <Footer />
    </>
  )
}

// need to add Unsplash API to get random background image
async function getData () {
  const category = 'inspirational';
  const data = await fetchQuote({category});
  const quote = data[0].quote;
  const author = data[0].author;
  return { quote, author }
}