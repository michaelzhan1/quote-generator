import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Footer({ imageAuthor, imageAuthorLink }) {
  return (
    <>
      <div className='fixed bottom-0 flex justify-between bg-slate-700 text-white'>
        <div className='ms-3 my-2 text-start'>
          <span>
            Connect:
            <a href='mailto:michaelzhan2001@gmail.com' target='_blank' rel='noreferrer' className='ms-1 text-white'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href='https://linkedin.com/in/michaelzhan1' target='_blank' rel='noreferrer' className='ms-1 text-white'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/michaelzhan1' target='_blank' rel='noreferrer' className='ms-1 text-white'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
        </div>
        <div className='me-3 my-2 text-end'>
          <span>
            Photo by
            <a href={imageAuthorLink} target='_blank' rel='noreferrer' className='ms-1 text-white'>{imageAuthor}</a>
            &nbsp;on
            <a href='https://unsplash.com/' target='_blank' rel='noreferrer' className='ms-1 text-white'>Unsplash</a>
          </span>
        </div>
      </div>
    </>
  )
}