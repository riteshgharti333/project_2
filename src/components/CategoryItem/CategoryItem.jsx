import './CategoryItem.scss';

const CategoryItem = ({ image, title }) => {
  return (
    <div className='categoryItem'>
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default CategoryItem
