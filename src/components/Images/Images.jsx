import s from './Images.module.css';

import Image from './Image/Image';

const Images = ({ images }) => {
  return (
    <ul>
      {images.map(img => (
        <Image key={img.id} img={img} />
      ))}
    </ul>
  );
};

export default Images;
