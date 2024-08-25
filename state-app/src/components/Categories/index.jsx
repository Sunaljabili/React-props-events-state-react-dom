import React from "react";
import { useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

  function sortCategoryByGrade(){
    const sortedCategory = category.sort((x,y)=>x.price-y.price);
    setCategory([...sortedCategory])
  }
  function sortbyCategoryByName(){
    const sortedCategory = category.sort((x,y)=>x.categoryName.localeCompare(y.categoryName));
    setCategory([...sortedCategory]);
  }
 
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newCategory = {
            id: new Date().valueOf(),
            categoryName: e.target.categoryName.value,
            price: e.target.price.value,
          };
          setCategory([...category, newCategory]);
          e.target.categoryName.value = "";
          e.target.price.value = "";
        }}
        action=""
      >
        <input name="categoryName" type="text" placeholder="enter name" />
        <input
          name="price"
          type="number"
          min={0}
          step={10}
          placeholder="enter price"
        />
        <button>Add</button>
      </form>

      <hr />
      <h3>Product List</h3>
      <button onClick={()=>sortCategoryByGrade()}>sort by grade</button>
      <button onClick={()=>sortbyCategoryByName()}>sort by name</button>
      <input  onKeyUp={(e)=>{
        setCategory([...category.filter((x)=>x.categoryName.toLowerCase().trim().includes(e.target.value))])
      }} type="text" placeholder="search cateory" />

      <ul>
        {category &&
          category.map((cat) => {
            return (
              <li key={cat.id}>
                {cat.categoryName} {cat.price}
                <button onClick={()=>{
                    if(window.confirm("are you sure to delete ?")){
                        setCategory(category.filter((x)=>x.id !=cat.id))
                    }
                }}>X</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Category;




