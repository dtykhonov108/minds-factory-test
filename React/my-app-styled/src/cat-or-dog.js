import React, { useState } from 'react';
import styled from 'styled-components';
import App from './App';




const MainDiv = styled.div`

  width: 60%;
  margin-left:auto;
  margin-right:auto;
  height: 100vh;
  
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const MainH1 = styled.h1`

  font-size: 1.5em;
  color:plum;
  text-align: center;
  font-family: sans-serif;
`;

const CatButton = styled.button`

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

const DogButton = styled.button`

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


function CatAndDogApp (props) {
    const [family, setFamily] = useState('');
    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.petObj);
    let count = 2;
    
    function recount(){
        setCountPet(count);
    }
    function addPetDogProp(){
        setPetProp( prev => {
            return{
                ...prev,
                 type:'dog'}});
    console.log(props.petProp);
    }

    function addPetCatProp(){
        setPetProp( prev => {
            return{
                ...prev,
                 type:'cat'}});
    console.log(props.petProp);
    }

  return (
    <MainDiv>
      
        <MainH1>
          {props.value} - це котик чи собака?
        </MainH1>

        <ButtonDiv>
            <CatButton onClick={() =>{setFamily('cat');
            console.log(` це ${family}`);

            props.recount(count);
            console.log(count);

            props.addPetCatProp();
            }}>cat</CatButton>

            <DogButton onClick={() => {setFamily('dog');
            console.log(` це ${family}`);

            props.recount(count);
            console.log(count);

            props.addPetDogProp();
            }} > dog </DogButton>
        </ButtonDiv>

    </MainDiv>
  );
}

export default CatAndDogApp ;
