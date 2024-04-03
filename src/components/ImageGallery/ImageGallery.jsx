import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {items.map((item) => ( 
        <li key={item.id}>
          <ImageCard 
            src={item.urls.small}
            alt={item.alt_description}
            onClick={() => onImageClick(item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;