import '../App.css';
import { FaHeart } from 'react-icons/fa';

const AddFavourite = () => {
  return (
    <div className="favouriteSection">
      <span className="favouritetitle">Add to Favourites</span>
      <br />
      <FaHeart className="heart" />
    </div>
  );
};

export default AddFavourite;
