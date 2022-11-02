
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';

 
function LiComp(props){


  const [value, setValue] = useState(props.item);
  const [change, setChange] = useState(true);
  


 

  function changeButton(){
    setChange(!change);
    
  }
  
  const onChange = (event) =>  { 
    setValue(event.target.value);
  };

  function replace(){
    if(value.length !== 0){
    const index = props.indexOf(value);
     setValue(value);  
     setChange(change);
      }
   
  }
  
  if (change){
     return (
      <div className='full'>
      <div className='item'> <li>{props.item}</li></div>
      <div className='div-remove'>
       <button onClick={() => changeButton(change)} className="edit">{change? "...":"V"}</button>
        <button onClick={() => props.removePoint(props.item)} className="remove">X</button>
      </div>
    </div> 
        );
    } else return( 
    
      <div className='full'>
      <div className='item'><input value={value} onChange={onChange} className="edit-input"></input> </div>
      <div className='div-remove'>
          <button onClick={() => props.replace(value, props.item, changeButton(change))} className="edit">V</button>
         <button onClick={() => changeButton(change)} className="remove">{change? "R":"X"}</button>
        </div>
      </div> 
    )
}





function App() {
 
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const [changedItem, setChangedItem] = useState('');
    //const [changedArr, setChangedArr] = useState(arr);

    function edit(changedItem, index){
      
          setChangedItem(value);   
          console.log(`chengedItem: ${changedItem}`);

          const itemIndex = arr.indexOf(index);
          console.log(itemIndex);
        
          const one = arr.slice(0, itemIndex);
          const editArr = (one.concat(changedItem))
          const two = arr.slice(itemIndex+1);
          setArr(editArr.concat(two)); 
         

        /*
          setChangedArr(arr.splice(itemIndex, 0, changedItem));
          console.log(changedArr);*/
       // setArr(arr.concat(changedItem));
       // setArr(arr.splice(itemIndex, 0, changedItem));
      
    }

    const onChange = (event) =>{
      setValue(event.target.value);
    };

    function myTodo(){ 
      if(value.length !== 0){
      setArr(arr.concat(value));
      setValue('');  
      }
    }
    
    function removePoint(item){
      const partOne = arr.slice(0, arr.indexOf(item));
      const partTwo = arr.slice(arr.indexOf(item)+1);
      setArr(partOne.concat(partTwo)); 
    }

  return (
    <div className="App">

      <header className="App-header"> </header>

        <div>
            
            <h1>TO DO LIST</h1>
            <p></p>
            
            
            <input value={value} onChange={onChange} className="input" placeholder="text something..." />

            <button onClick={myTodo} className="submit">Submit</button>
            <h3>You have todos:  </h3>
            <ul className='ul'>
                {
                arr.map((item)=>{
                  return(
                   <LiComp item={item}  removePoint={removePoint} replace={edit}/>     
                     );
                  }) 
                   
                }
            </ul>
            
        </div>
       
    </div>
      
  );
}

export default App;
