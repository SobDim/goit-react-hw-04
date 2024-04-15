import s from './Images.module.css';

import Image from './Image/Image';

const Images = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images.map(img => (
        <Image key={img.id} img={img} openModal={openModal} />
      ))}
    </ul>
  );
};

export default Images;
