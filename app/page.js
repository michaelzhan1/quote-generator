import styles from './page.module.css'
import BackgroundImage from './BackgroundImage'
import Footer from './Footer'
import Quote from './Quote'
import { fetchQuote, fetchImage } from 'utils/api'
import { use } from 'react'



export default function Home() {
  const { quote, author, image } = use(getData());
  return (
    <>
      <BackgroundImage image={image} />
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

  const query = 'nature';
  const orientation = 'landscape';
  const data2 = await fetchImage({query, orientation});
  const image = data2.urls.full;
  const imageAuthor = data2.user.name;
  return { quote, author, image, imageAuthor }
}