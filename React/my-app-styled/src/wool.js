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
    const [wool, setWool] = useState('');
    const [petProp, setPetProp] = useState(props.obj);
    const [countPet, setCountPet] = useState();
    let pet = 4;
    function recount(){
        setCountPet(pet);
    }

    function addShortWoolProp(){
        setPetProp( prev => {
            return{
                ...prev,
                 wool:'short'}});
    console.log(props.petProp);
    }

    function addLongWoolProp(){
        setPetProp( prev => {
            return{
                ...prev,
                 wool:'long'}});
    console.log(props.petProp);
    }
  return (
    <WoolMainDiv>
      
        <WoolH1>
          Яка в нього довжина шерсті?
        </WoolH1>

        <WoolButtonDiv>
            <ShortWool onClick={() => {setWool('short')
            console.log(` шерсть: ${wool}`)
            props.recount(pet);
            console.log(pet);
            props.addShortWoolProp();}}>short</ShortWool>

            <LongWool onClick={() => {setWool('long')
            console.log( ` шерсть: ${wool}`)
            props.recount(pet);
            console.log(pet);
            props.addLongWoolProp();}}>long</LongWool>
        </WoolButtonDiv>

    </WoolMainDiv>
  );
}

export default WoolPet ;