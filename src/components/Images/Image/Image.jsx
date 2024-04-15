import s from './Image.module.css';
import Tilty from 'react-tilty';

const Image = ({ img, openModal }) => {
  // console.log(img);
  const { urls, alt_description } = img;
  return (
    <li>
      <Tilty>
        <a
          // href={urls.regular}
          onClick={() => {
            openModal({ url: urls.regular, alt: alt_description });
          }}
        >
          <img src={urls.small} alt={alt_description} />
        </a>
      </Tilty>
    </li>
  );
};

export default Image;
