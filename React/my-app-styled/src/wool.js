import React, { useState } from 'react';
import styled from 'styled-components';
import App from './App';




const WoolMainDiv = styled.div`

  width: 60%;
  margin-left:auto;
  margin-right:auto;
  height: 100vh;
  
`;

const WoolButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const WoolH1 = styled.h1`

  font-size: 1.5em;
  color:plum;
  text-align: center;
  font-family: sans-serif;
`;

const ShortWool = styled.button`

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

const LongWool = styled.button`

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


function WoolPet (props) {
    const [countPet, setCountPet] = useState();
    const [petProp, setPetProp] = useState(props.obj);
    let pet = 4;

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

    let shortCat = {short:12};
    let shortDog = {short:10};

    let longCat = {long:20};
    let longDog = {long:30};


    function recount(){
        setCountPet(pet);
    }

  return (
    <WoolMainDiv>
      
        <WoolH1>
          Яка довжина шерсті вашого улюбленця?
        </WoolH1>

        <WoolButtonDiv>
            <ShortWool onClick={() => {
            props.recount(pet);
            if(props.petObj.type ==='cat'){
              props.updateProps('wool', shortCat, 12);
                }
                else{
                  props.updateProps('wool', shortDog, 10);
                  }
                }}>Коротка</ShortWool>

            <LongWool onClick={() => {
            props.recount(pet);
            if(props.petObj.type ==='cat'){
              props.updateProps('wool', longCat, 20);
                }
                else{
                  props.updateProps('wool', longDog, 30);
                  }
                }}>Довга</LongWool>
        </WoolButtonDiv>

    </WoolMainDiv>
  );
}

export default WoolPet ;