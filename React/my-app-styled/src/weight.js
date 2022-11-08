import React, { useState } from 'react';
import styled from 'styled-components';
import App from './App';




const MainWeight = styled.div`

  width: 60%;
  margin-left:auto;
  margin-right:auto;
  height: 100vh;
  
`;

const WeightH1 = styled.h1`

  font-size: 1.5em;
  color:plum;
  text-align: center;
  font-family: sans-serif;
`;

const WeightButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Small = styled.button`

width:150px;
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

const Middle = styled.button`

width:150px;
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

const Big = styled.button`

width:150px;
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


function WeightPet (props) {

    const [weight, setWeight] = useState('');
    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.obj);


    let small = {weight:'small'};
    let middle = {weight:'middle'};
    let big = {weight:'big'};
    let pet = 3;


    function addSmallProp(){
      setPetProp( prev => {
          return{
              ...prev,
               weight:'small'}});
  console.log(props.petProp);
  }

  function addMiddleProp(){
    setPetProp( prev => {
        return{
            ...prev,
             weight:'middle'}});
console.log(props.petProp);
}

function addBigProp(){
  setPetProp( prev => {
      return{
          ...prev,
           weight:'big'}});
console.log(props.petProp);
}

  return (
    <MainWeight>
      
        <WeightH1>
          Якого він розміру?
        </WeightH1>

        <WeightButtonDiv>
          <Small onClick={() => {setWeight('small');
          console.log(` розмір ${weight}`);
          props.recount(pet);
          console.log(pet);
          props.addSmallProp();
            }}>small</Small>

          <Middle onClick={() => {setWeight('middle');
          console.log(` розмір ${weight}`);
          props.recount(pet);
          console.log(pet)
          props.addMiddleProp();}}>middle</Middle>

          <Big onClick={() => {setWeight('big');
          console.log( ` розмір ${weight}`);
         props.recount(pet);
         console.log(pet);
          props.addBigProp();}}>big</Big>
        </WeightButtonDiv>
    </MainWeight>
  );
}

export default WeightPet ;