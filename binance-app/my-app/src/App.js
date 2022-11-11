import './App.css';
import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import axios from 'axios';


const DivMain = styled.div`
background-color: #282c34;
display: flex;
justify-content: space-evenly;
width:100%;
height:100vh;
`;

const DivBinance = styled.div`
margin-top:20px;
height:60vh;
width:30%;
color: white;
text-align:center;
font-size:20px;
font-family:sans-serif;
`;

const DivKuna = styled.div`
margin-top:20px;
height:60vh;
width:30%;
color: white;
text-align:center;
font-size:20px;
font-family:sans-serif;
`;


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




const Ul = styled.ul`
margin-left:10px;
margin-right:10px;
padding-left:0px;
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

const percentBin = Math.round((kunaBids[0][0]-binanceAsks[9][0])/kunaBids[0][0]*100*100)/100;
const percentBinTwo = Math.round(((kunaBids[0][0]-binanceBids[0][0])/kunaBids[0][0])*100*100)/100;
//const percentBin2 = (binanceBids[1][0]-kunaAsks[9][0])/kunaAsks[9][0]*100


//const percentKuna = Math.round((kunaBids[1][0] - Math.round(binanceBids[9][0]*100)/100)/binanceBids[9][0]*100*100)/100;
const percentKuna = Math.round((binanceBids[0][0]-kunaAsks[9][0])/binanceBids[0][0]*100*100)/100;
const percentKunaTwo = Math.round(((binanceAsks[9][0]-kunaAsks[9][0])/binanceAsks[9][0])*100*100)/100;
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

      <DivBinance>

        <Greet>
        Binance
        </Greet>
        <Ul>{
             binanceAsks.map((item)=>{
              return(
               <LiAsks><DivItem>{item[0]}</DivItem><DivItem>{item[1]}</DivItem></LiAsks>     
                 );
              }) 
               
        }</Ul>
        <Ul>{
             binanceBids.map((item)=>{
              return(
               <LiBids><DivItem>{item[0]}</DivItem><DivItem>{item[1]}</DivItem></LiBids>     
                 );
              }) 
              
        }</Ul>
           
           <div>{percentBin}</div>
           <div>{percentBinTwo}</div>   
          

      </DivBinance>

      <DivKuna>

         <Greet>
        Kuna
        </Greet>
        <Ul>{
             kunaAsks.map((item)=>{
              return(
               <LiAsks><DivItem>{item[0]}</DivItem><DivItem>{-item[1]}</DivItem></LiAsks>     
                 );
              }) 
               

        }</Ul>

        <Ul>{
             kunaBids.map((item)=>{
              return(
               <LiBids><DivItem>{item[0]}</DivItem><DivItem>{item[1]}</DivItem></LiBids>     
                 );
              }) 
  
        }</Ul>
     
     <div>{percentKuna}</div>
      <div>{percentKunaTwo}</div>
      </DivKuna>

    </DivMain>
  );
}

export default App;
