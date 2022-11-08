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
    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.petObj);
    let count = 2;
    
    function recount(){
        setCountPet(count);
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

  return (
    <MainDiv>
      
        <MainH1>
          {props.value} - це котик чи собака?
        </MainH1>

        <ButtonDiv>
            <CatButton onClick={() =>{
            props.recount(count);
            props.updateProps('type', 'cat', 0);
            }}>Котик</CatButton>

            <DogButton onClick={() => {
            props.recount(count);
            props.updateProps('type', 'dog', 0);
            }} > Песик </DogButton>
        </ButtonDiv>

    </MainDiv>
  );
}

export default CatAndDogApp ;
