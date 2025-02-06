import { sidebar_Content } from "../../assets/data";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {sidebar_Content.map((category, index) => (
        <div key={index} className="sidebar-category">
          <h2>{category.title}</h2>
          {category.subCategories.map((subCategory, subIndex) => (
            <div key={subIndex} className="sidebar-subcategory">
              <h3>{subCategory.sm_title}</h3>
              <ul>
                {subCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
