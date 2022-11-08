import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import CatAndDogApp from './cat-or-dog'
import WeightPet from './weight';
import WoolPet from './wool';
import RoomPet from './room';
import Result from './result';


const Input  = styled.input`

height:50px;
width:500px;
border-radius:5px;
border:palevioletred 3px solid;
font-family:sans-serif;
font-size: 25px;
padding-left:10px;

&:hover{
  border:palevioletred 3px solid;
  background-color:papayawhip;
}

&:focus{
  border:palevioletred 3px solid;
  background-color:papayawhip;
}
`;

const Div = styled.div`

  width: 60%;
  margin-left:auto;
  margin-right:auto;
  height: 100vh;
`;

const JystifyDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const H1 = styled.h1`

  font-size: 1.5em;
  color:plum;
  text-align:center;
  font-family: sans-serif;
`;

const Button = styled.button`

height:58px;
margin-left:20px;
border-radius:5px;
border:palevioletred 3px solid;
font-family:sans-serif;
font-size: 25px;
padding-left:10px;
color:purple;

&:hover{
  border:palevioletred 3px solid;
  background-color:papayawhip;
  cursor:pointer;
}

&:focus{
  border:palevioletred 3px solid;
  background-color:papayawhip;
}
`;


function App() {

  const [petObj, setPetObj] = useState(
    {  type:undefined, 
       weight:undefined,
       wool:undefined,
       room:undefined
    }  
  );
  const [resultValue, setResultValue] = useState(0);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const onChange = (event) =>{
      setValue(event.target.value);
    };

    function updateProps(key, value, res){
      setPetObj( prev =>{
        return{
          ...prev,
          [key]:value
        }
      });
      console.log(petObj);
      setResultValue(prev=> prev+res);
    }


  function changeCount(changedCount){
    setCount(changedCount);
  }

  if (count === 0){
  return (
    <Div>
        <H1>
          Введіть ім'я вашего улюбленця: 
        </H1>
        <JystifyDiv>
        <Input value={value} onChange={onChange}/>

        <Button onClick={() => {
           setValue(value);
           console.log( `his name ${value}`);
           setCount(count+1)}}>зберегти</Button>
      </JystifyDiv>
    </Div>
  );}  

  if(count === 1){
          return(
              <CatAndDogApp value={value} recount = {changeCount} updateProps = {updateProps} />
          );
      }

  if(count === 2){
        return(
            <WeightPet recount = {changeCount} petObj={petObj} updateProps = {updateProps}/>
        );
    }

  if(count === 3){
      return(
          <WoolPet recount = {changeCount} petObj={petObj} updateProps = {updateProps}/>
      );
  }

  if(count === 4){
    return(
        <RoomPet recount = {changeCount} petObj={petObj} updateProps = {updateProps}/>
    );
  }

  if(count === 5){
    return(
      <Result value={value} resultValue={resultValue}/>
    )
  }

}

export default App;



