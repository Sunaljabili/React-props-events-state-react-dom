import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Students from "./components/Students";
import Category from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";

function App() {
  // Hooks - useState
  const [counter, setCounter] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function handleClickIncrease() {
    setCounter(counter + 1);
  }
  // function handleClickDecrease(){
  //   if(counter>0){
  //     setCounter(counter-1);
  //   }
  // }
  return (
    <>
      {/* <Students /> */}
      {/* <Category /> */}
      <hr />
      {/* <button onClick={() => handleClickIncrease()}>+</button>
      <span>{counter}</span>
      <button onClick={()=>{
        // if(counter > 0)
        // setCounter(counter-1)
        counter > - 5 ? setCounter(counter-1) :null
      }}>-</button>
      <button onClick={()=>setCounter(0)}>Reset</button> */}

      {/* <button onClick={()=>{setOpenModal(true)}}>Open Modal</button>
     {openModal && <Modal setOpenModal={setOpenModal}/>} */}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
