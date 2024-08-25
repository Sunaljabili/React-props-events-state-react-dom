import './App.css'
import Hello from './components/Hello'

function App() {

  function hi(){
    console.log('HEY USER');
    
  }
  return (
    <>
    <Hello greet={()=>hi()}/>
    </>
  )
}

export default App
