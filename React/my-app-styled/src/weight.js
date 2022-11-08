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

width:170px;
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

width:170px;
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

width:170px;
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

    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.obj);

    function updateProps(key, value, res){
      setPetProp( prev =>{
        return{
          ...prev,
          [key]:value
        }
      });
      console.log(props.petObj);
      props.setResultValue(prev=> prev+res);
    }

    let smallCat = {small:8};
    let smallDog = {small:12};

    let middleCat = {middle:15};
    let middleDog = {middle:20};
    
    let bigCat = {big:20}
    let bigDog = {big:30};

    let pet = 3;


  return (
    <MainWeight>
      
        <WeightH1>
          Якого розміру ваш улюблнець?
        </WeightH1>

        <WeightButtonDiv>

          <Small onClick={() => {
          props.recount(pet);
          if(props.petObj.type ==='cat'){
          props.updateProps('weight', smallCat, 8);
            }
            else{
              props.updateProps('weight', smallDog, 12);
              }
            }}>Маленького</Small>

          <Middle onClick={() => {
          props.recount(pet);
          if(props.petObj.type ==='cat'){
          props.updateProps('weight', middleCat, 15);
            }
            else{
              props.updateProps('weight', middleDog, 20);
              };}}>Середнього</Middle>

          <Big onClick={() => {
           props.recount(pet);
           if(props.petObj.type ==='cat'){
            props.updateProps('weight', bigCat, 20);
              }
              else{
                props.updateProps('weight', bigDog, 30);
                };}}>Великого</Big>

        </WeightButtonDiv>
    </MainWeight>
  );
}

export default WeightPet ;