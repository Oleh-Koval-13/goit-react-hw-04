import css from './ImageCard.module.css';

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick} className={css.imageItem}>
  <img src={src} alt={alt} />
</div>
  )
}

export default ImageCard;