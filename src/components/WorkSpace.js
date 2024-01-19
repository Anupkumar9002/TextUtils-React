import React,{useState} from 'react'

 const WorkSpace = (props) => {
 
  const[Text,settext]=useState('');

  function ConvertUpper(){
    let newText=Text.toUpperCase();
    settext(newText);
    props.showAlert("Upper Case conversion successfully")
  }
  function ConvertLower(){
    let newText=Text.toLowerCase();
    settext(newText);
    props.showAlert("lower Case conversion successfully")
  }

  function conversion(event){
    console.log(event.target.value)
    settext(event.target.value);
  }
  function handleCopy(){
    var text=document.getElementById("txtcopy");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard");
  }
  function ClearText(){
    settext('')
    props.showAlert("Text cleared successfully")
  }
  return (
    <div className={`${props.mode===null?'bg-white':'bg-slate-600'} flex items-center -mt-4 justify-center h-[100vh] w-[100vw]`}>
    <div className='flex flex-col items-start mb-[10rem]'>
    <h1 className={`text-[40px] mx-auto ${props.mode===null?' mt-6 text-black':'text-white'} my-4`}>{props.heading}</h1>
        <textarea id='txtcopy' className=' border-2 border-black  mt-9' style={props.style} onChange={conversion} value={Text} placeholder='Enter your Text Here' rows={8} cols={100}>
        </textarea>
        <div className='flex flex-row'>
        <button disabled={Text.length===0} onClick={ConvertUpper} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2
          mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-2
           dark:focus:ring-blue-800">Upcase</button>

           <button disabled={Text.length===0} onClick={ConvertLower} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2
          mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-2
           dark:focus:ring-blue-800">Locase</button>
           <button disabled={Text.length===0} onClick={ClearText} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2
          mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-2
           dark:focus:ring-blue-800">clear</button>

          <button disabled={Text.length===0} onClick={handleCopy} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2
          mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none mt-2
           dark:focus:ring-blue-800">Copytext</button> 
          
        </div>
        <div className='mt-4'>
        <h1 className='flex justify-start items-start text-[25px] font-semibold '>Text Summary</h1>
       <p className='text-[20px]'>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.replace(" ","").length} characters</p>
        </div>
        <div className='mt-4'>
        <h1 className='flex justify-start items-start text-[25px] text-black font-semibold '>Preview</h1>
       <p className='text-[20px]'>{Text}</p>
        </div>
        
       
    </div>

    </div>
    
  )
}
export default WorkSpace
