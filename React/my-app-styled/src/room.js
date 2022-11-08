import React, { useState } from 'react';
import styled from 'styled-components';
import App from './App';




const RoomMainDiv = styled.div`

  width: 60%;
  margin-left:auto;
  margin-right:auto;
  height: 100vh;
  
`;

const RoomButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const RoomH1 = styled.h1`

  font-size: 1.5em;
  color:plum;
  text-align: center;
  font-family: sans-serif;
`;

const Standart = styled.button`

width:200px;
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

const Lux = styled.button`

width:200px;
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


function RoomPet (props) {
    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.obj);
    let pet = 5;
    function recount(){
        setCountPet(pet);
    }

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

    let standCat = {standart:4};
    let standDog = {standart:5};

    let luxCat = {lux:12};
    let luxDog = {lux:15};

  return (
    <RoomMainDiv>
      
        <RoomH1>
          Яий тип кімнати бажаєте?
        </RoomH1>

        <RoomButtonDiv>
            <Standart onClick={() => {
           props.recount(pet);
            if(props.petObj.type ==='cat'){
              props.updateProps('room', standCat, 4);
                }
                else{
                  props.updateProps('room', standDog, 5);
                  }
                }}>Стандарт</Standart>

            <Lux onClick={() => { 
           props.recount(pet);
            if(props.petObj.type ==='cat'){
              props.updateProps('room', luxCat, 12);
                }
                else{
                  props.updateProps('room', luxDog, 15);
                  }
                }}>Люкс</Lux>
        </RoomButtonDiv>

    </RoomMainDiv>
  );
}

export default RoomPet ;