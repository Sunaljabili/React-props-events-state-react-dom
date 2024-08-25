import "./App.css";
import Hello from "./components/Hello";
import Products from "./components/Products";

function App() {
  const products = [
    { name: "user 1", id: 1 },
    { name: "user 2", id: 2 },
    { name: "user 3", id: 3 },
  ];
  const person1 = { name: "Sunal", username: "Jabiyev", age: 25 };
  function display() {
    console.log("HEY USER");
  }

  function displayInfo(obj) {
    return `${obj.name} ${obj.username} ${obj.age}`;
  }

  function handleClick(e) {
    // window.alert("button clicked")
    // console.log('num',e.target);
  }
  return (
    <>
      <Hello greet={display} info={() => displayInfo(person1)} />
      <Products  products={products}/>
      <button onClick={() => handleClick(e)}>Click Me</button>
      <input onKeyUp={(e) => console.log(e.target.value)} type="text" />
      <hr />
      <select
        name="countries"
        id=""
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option value="az">Azerbaijan</option>
        <option value="tr">Turkey</option>
        <option value="ru">Russian</option>
        <option value="en">English</option>
      </select>

      <hr />

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submited");
        }}
      >
        <input type="text" placeholder="Age" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
