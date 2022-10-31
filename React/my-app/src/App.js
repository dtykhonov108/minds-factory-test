
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';

  
function App() {
 
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);


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
      let partOne = arr.slice(0, arr.indexOf(item));
      let partTwo = arr.slice(arr.indexOf(item)+1);
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
                   <div className='full'>
                      <div className='item'> <li className='li'>{item}</li></div>
                      <div className='div-remove'>
                        <button onClick={() => removePoint(item)} className="remove">X</button>
                      </div>
                    </div> 
                     );
                  }) 
                   
                }
            </ul>
            
        </div>
       
    </div>
      
  );
}

export default App;
