import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ image, title , link }) => {
  return (
    <Link to={`/${link}`}>
    <div className="categoryItem">
      <img src={image} alt="" />
      <p>{title}</p>
    </div> 
    </Link>
   
  );
};

export default CategoryItem;
