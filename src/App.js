import './App.css';
import Navbar from './components/Navbar';
import WorkSpace from './components/WorkSpace';
import { useState } from 'react';
import Alert from './components/Alert';
//import { Route,Routes } from 'react-router-dom';
//import About from './components/About';


function App() {
const[mode,setMode]=useState(null)
const[alert,setAlert]=useState(null)

const showAlert=(message)=>{
  setAlert({
    message:message   
  })
  setTimeout(() => {
    setAlert(null)
  },2000);
}

const[mystyle,setMystyle]=useState({
  backgroundColor:'white',
  color:'black',
  border:'1px solid-white'
})

const toggleMode = ()=>{
  if(mode===null){
    setMode('')
    setMystyle({
      backgroundColor:'black',
      color:'white',
    })
    showAlert("Dark mode enabled successfully")
  }
  else{
     setMode(null)
    setMystyle({
      backgroundColor:'white',
      color:'black'
    })
    showAlert("Dark mode disabled successfully")
  }
}
  return (
    <div className="App flex flex-col  justify-center w-[100vw] h-[100vh]">
   
    <Navbar togglemode={toggleMode} mode={mode} title="TextUtils" 
    about="About" contact="contactUs"/> 
    <div className='flex mr-[15rem] justify-center mt-4'><Alert alert={alert} /></div>
    <WorkSpace showAlert={showAlert}style={mystyle} mode={mode} heading="Text analyser"/>
       {/* <Routes>
        <Route path='/' element={<WorkSpace showAlert={showAlert}style={mystyle} mode={mode} heading="Text analyser"/>}/> 
        <Route path='/about' element={<About/>}>

      </Route>
    
      
    </Routes>   */}
    </div>
    
    
  );
}

export default App;

