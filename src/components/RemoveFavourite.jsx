import '../App.css';
import { FaHeart } from 'react-icons/fa';

const RemoveFavourite = () => {
  return (
    <div className="removeSection">
      <span className="favouritetitle">Remove from Favourites</span>
      <br />
      <FaHeart className="heart" />
    </div>
  );
};

export default RemoveFavourite;
