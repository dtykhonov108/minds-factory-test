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


  function updateObj(){
    setPetObj( prev => {
      return{
          ...prev,
          type:'cat'}});
  console.log(petObj);
  }

  function updateTypeDogObj(){
    setPetObj( prev => {
      return{
          ...prev,
          type:'dog'}});
  console.log(petObj);
  }


  function addSmallProp(){
    if(petObj.type ==="cat"){
      setPetObj( prev => {
          return{
              ...prev,
               weight:{small:8}}});
        setResultValue(resultValue+8);
               console.log(petObj);
               console.log(resultValue);
              }
               else{
                setPetObj( prev => {
                  return{
                      ...prev,
                       weight:{small:12}}});
          setResultValue(resultValue+12);
                      console.log(resultValue);
                       console.log(petObj);
               }
}

function addMiddleProp(){
  if(petObj.type ==="cat"){
  setPetObj( prev => {
      return{
          ...prev,
           weight:{middle:15}}});
      setResultValue(resultValue+15);
           console.log(petObj);
           console.log(resultValue);
          }
           else{
            setPetObj( prev => {
              return{
                  ...prev,
                   weight:{middle:20}}});
                   setResultValue(resultValue+20);
                   console.log(resultValue);
                   console.log(petObj);
           }
}


function addBigProp(){
  if(petObj.type ==="cat"){
    setPetObj( prev => {
        return{
            ...prev,
             weight:{big:20}}});
             setResultValue(resultValue+20);
             console.log(resultValue);
             console.log(petObj);
            }
             else{
              setPetObj( prev => {
                return{
                    ...prev,
                     weight:{big:30}}});
                     setResultValue(resultValue+30);
                     console.log(resultValue);
                     console.log(petObj);
             }
}

function addShortWoolProp(){
  if(petObj.type ==="cat"){
    setPetObj( prev => {
        return{
            ...prev,
             wool:{short:12}}});
        setResultValue(resultValue+12);
        console.log(resultValue);
             console.log(petObj);
            }
             else{
              setPetObj( prev => {
                return{
                    ...prev,
                     wool:{short:10}}});
                     setResultValue(resultValue+10);
                     console.log(resultValue);
                     console.log(petObj);
             }
}

function addLongWoolProp(){
  if(petObj.type ==="cat"){
    setPetObj( prev => {
        return{
            ...prev,
             wool:{long:20}}});
             console.log(petObj);
             setResultValue(resultValue+20);
             console.log(resultValue);
            }
             else{
              setPetObj( prev => {
                return{
                    ...prev,
                      wool:{long:30}}});
                      setResultValue(resultValue+30);
                      console.log(resultValue);
                     console.log(petObj);
             }
}

function addStandartProp(){
  if(petObj.type ==="cat"){
    setPetObj( prev => {
        return{
            ...prev,
             room:{standart:4}}});
             setResultValue(resultValue+4);
             console.log(resultValue);
             console.log(petObj);
            }
             else{
              setPetObj( prev => {
                return{
                    ...prev,
                    room:{standart:5}}});
                    setResultValue(resultValue+5);
                    console.log(resultValue);
                     console.log(petObj);
             }
}

function addLuxProp(){
  if(petObj.type ==="cat"){
    setPetObj( prev => {
        return{
            ...prev,
             room:{lux:12}}});
             console.log(petObj);
             setResultValue(resultValue+12);
                    console.log(resultValue);
            }
             else{
              setPetObj( prev => {
                return{
                    ...prev,
                      room:{lux:15}}});
                      setResultValue(resultValue+15);
                    console.log(resultValue);
                     console.log(petObj);
             }
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
              <CatAndDogApp value={value} recount = {changeCount} addPetDogProp = {updateTypeDogObj}  addPetCatProp = {updateObj}/>
          );
      }

  if(count === 2){
        return(
            <WeightPet recount = {changeCount} addSmallProp = {addSmallProp} addMiddleProp={addMiddleProp} addBigProp ={addBigProp} />
        );
    }

  if(count === 3){
      return(
          <WoolPet recount = {changeCount} addShortWoolProp ={addShortWoolProp} addLongWoolProp={addLongWoolProp}/>
      );
  }

  if(count === 4){
    return(
        <RoomPet recount = {changeCount} addStandartProp={addStandartProp} addLuxProp={addLuxProp}/>
    );
  }

  if(count === 5){
    return(
      <Result value={value} resultValue={resultValue}/>
    )
  }
/**/
}

export default App;



