// import s from './cards.module.css';
const Image = ({ img }) => {
  const { urls } = img;
  return (
    <li>
      <div>
        <img src={urls.thumb} alt="" />
      </div>
    </li>
  );
};

export default Image;
