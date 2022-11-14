import './App.css';
import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
//import Qs from 'qs';
//import crypto from 'crypto';

const DivMain = styled.div`
background-color: #282c34;
display: flex;
width:100%;
height:100%;
align-items: flex-start;
flex-wrap: wrap;
`;

const DivBinance = styled.div`
margin-top:20px;

width:30%;
color: white;
text-align:center;
font-size:20px;
font-family:sans-serif;
`;

const DivKuna = styled.div`
margin-top:20px;

width:30%;
color: white;
text-align:center;
font-size:20px;
font-family:sans-serif;
`;

const DivKunaBin = styled.div`
display: flex;
justify-content: space-evenly;
width:100%;
height:100%;
`

const Greet = styled.div`
text-align:left;
margin-left:100px;
font-size:40px;
font-family:sans-serif;
width:100%
color: white;
`;


const LiBids = styled.li`
display:flex;
justify-content: space-between;
margin-top:5px;
list-style-type: none; 
color:greenyellow;
border-radius: 20px;
font-size: 16px;
font-family: sans-serif;
margin-left:0px;
`;

const LiAsks = styled.li`
display:flex;
justify-content: space-between;
margin-top:5px;
list-style-type: none; 
color:red;
border-radius: 20px;
font-size: 16px;
font-family: sans-serif;
margin-left:0px;
`;

const DivItem = styled.div`
text-align:left;
width:50%;
`;

const DivItemTwo = styled.div`
text-align:left;
width:50%;
color:white;
`;


const Ul = styled.ul`
margin-left:10px;
margin-right:10px;
padding-left:0px;
`;

const DivForm = styled.div`
width:100%;
display:flex;
justify-content: center;
`;
const Form = styled.form`
margin-top: 100px;
width:30%;
height:500px;
`;

const Input = styled.input`
width:350px;
height:30px;
font-size:20px;
font-family:sans-serif;
border-radius:5px;
border: black 2px solid;
margin-top:3px;
`;

const ButtonDiv = styled.div`
margin-top:10px;
width:70%;
display:flex;
justify-content: space-between;
`;


const Buy = styled.button`
width:130px;
height:40px;
background-color: mediumseagreen;
color:white;
font-size:20px;
font-family:sans-serif;
border-radius:5px;
border: black 2px solid;

&:hover{
  cursor:pointer;
}
`;

const Sell = styled.button`
width:130px;
height:40px;
background-color: red;
color:white;
font-size:20px;
font-family:sans-serif;
border-radius:5px;
border: black 2px solid;

&:hover{
  cursor:pointer;
}
`;

// <div>{percentBin}</div>
// <div>{percentBinTwo}</div>
//
//<div>{percentKuna}</div>
//<div>{percentKunaTwo}</div>

function App() {

  const [binanceBids, setBinanceBids] = useState([]);
  const [binanceAsks, setBinanceAsks] = useState([]);

  const [kunaBids, setKunaBids] = useState([]);
  const [kunaAsks, setKunaAsks] = useState([]);

useEffect( () => {
   let timer = setTimeout(async function getBinance(){
    const { data } = await axios.get('https://api.binance.com/api/v3/depth', {
      params:{
        symbol:'BTCUSDT',
        limit:10
      }
    });
    setBinanceBids(data.bids);
    setBinanceAsks((data.asks).reverse());
    timer = setTimeout(getBinance, 2000)
   }, 0)
   return () =>{clearTimeout(timer)}
}, [])

//const percentBin = Math.round((kunaBids[0][0]-binanceAsks[9][0])/kunaBids[0][0]*100*100)/100;
//const percentBinTwo = Math.round(((kunaBids[0][0]-binanceBids[0][0])/kunaBids[0][0])*100*100)/100;


//const percentKuna = Math.round((binanceBids[0][0]-kunaAsks[9][0])/binanceBids[0][0]*100*100)/100;
//const percentKunaTwo = Math.round(((binanceAsks[9][0]-kunaAsks[9][0])/binanceAsks[9][0])*100*100)/100;
//
/*
  const getBinance = async () =>{

    const { data } = await axios.get('https://api.binance.com/api/v3/depth', {
      params:{
        symbol:'BTCUSDT',
        limit:10
      }
    });
    setBinanceBids(data.bids);
    setBinanceAsks(data.asks);
    console.log(data.bids);
   } ;

  */
   useEffect( () => {
    let timer = setTimeout(async function getKuna(){
      const { data } = await axios.get('https://api.kuna.io/v3/book/btcusdt');
      setKunaBids(data.filter(item => item[1] > 0).splice(0, 10));
      setKunaAsks(data.filter(item => item[1] < 0 ).splice(0, 10).reverse());
     timer = setTimeout(getKuna, 2000)
    }, 0)
    return () =>{clearTimeout(timer)}
 }, [])

 
 /*
 const getKuna = async () =>{

  const { data } = await axios.get('https://api.kuna.io/v3/book/btcusdt');
  console.log(data);
  setKunaBids(data.filter(item => item[1] > 0).splice(0, 10));
  setKunaAsks(data.filter(item => item[1] < 0 ).splice(0, 10));

 } ;
*/


 
  return (
      
    <DivMain>
      <DivKunaBin>
      <DivBinance>

        <Greet>
        Binance
        </Greet>
        <Ul>{
             binanceAsks.map((item)=>{
              return(
               <LiAsks><DivItem>{item[0]}</DivItem><DivItemTwo>{item[1]}</DivItemTwo></LiAsks>     
                 );
              }) 
               
        }</Ul>
        <Ul>{
             binanceBids.map((item)=>{
              return(
               <LiBids><DivItem>{item[0]}</DivItem><DivItemTwo>{item[1]}</DivItemTwo></LiBids>     
                 );
              }) 
              
        }</Ul>
        <> { binanceBids.length > 0 && kunaBids.length > 0  && binanceAsks.length > 0  &&<>
          <div>{Math.round((kunaBids[0][0]-binanceAsks[9][0])/kunaBids[0][0]*100*100)/100}</div>
          <div>{Math.round(((kunaBids[0][0]-binanceBids[0][0])/kunaBids[0][0])*100*100)/100}</div>
         </>
          }</>
            
      </DivBinance>

      <DivKuna>

         <Greet>
        Kuna
        </Greet>
        <Ul>{
             kunaAsks.map((item)=>{
              return(
               <LiAsks><DivItem>{item[0]}</DivItem><DivItemTwo>{-item[1]}</DivItemTwo></LiAsks>     
                 );
              }) 
               

        }</Ul>

        <Ul>{
             kunaBids.map((item)=>{
              return(
               <LiBids><DivItem>{item[0]}</DivItem><DivItemTwo>{item[1]}</DivItemTwo></LiBids>     
                 );
              }) 
  
        }</Ul>
       <> { binanceBids.length > 0 && kunaAsks.length > 0  && binanceAsks.length > 0  &&<>
        <div>{Math.round((binanceBids[0][0]-kunaAsks[9][0])/binanceBids[0][0]*100*100)/100}</div> 
        <div>{Math.round(((binanceAsks[9][0]-kunaAsks[9][0])/binanceAsks[9][0])*100*100)/100}</div>
        </> }</>
      </DivKuna>
        </DivKunaBin>


      <DivForm>

        <Form>
          <Input placeholder='Price'></Input>
          <Input placeholder="Amount"></Input>
          <Input placeholder='Value'></Input>

          <ButtonDiv>
            <Buy>buy</Buy>
            <Sell>sell</Sell>
          </ButtonDiv>

        </Form>

      </DivForm>


    </DivMain>
      

  );
}

export default App;

