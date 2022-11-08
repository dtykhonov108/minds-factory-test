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
    const [room, setRoom] = useState('');
    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.obj);
    let pet = 5;
    function recount(){
        setCountPet(pet);
    }

    function addStandartProp(){
        setPetProp( prev => {
            return{
                ...prev,
                 room:'standart'}});
    console.log(props.petProp);
    }

    function addLuxProp(){
        setPetProp( prev => {
            return{
                ...prev,
                 room:'lux'}});
    console.log(props.petProp);
    }
  return (
    <RoomMainDiv>
      
        <RoomH1>
          Яий тип кімнати бажаєте?
        </RoomH1>

        <RoomButtonDiv>
            <Standart onClick={() => {setRoom('standart')
            console.log(` кімната: ${room}`);
            props.addStandartProp();
            props.recount(pet);
            console.log(pet);}}>standart</Standart>

            <Lux onClick={() => {setRoom('lux')
            console.log( ` кімната: ${room}`);
            props.addLuxProp();
            props.recount(pet);
            console.log(pet);}}>lux</Lux>
        </RoomButtonDiv>

    </RoomMainDiv>
  );
}

export default RoomPet ;