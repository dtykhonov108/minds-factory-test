import './App.css'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import CryptoJS from 'crypto-js'

const DivMain = styled.div`
    background-color: #282c34;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
`

const DivBinance = styled.div`
    margin-top: 20px;

    width: 30%;
    color: white;
    text-align: center;
    font-size: 20px;
    font-family: sans-serif;
`

const DivKuna = styled.div`
    margin-top: 20px;

    width: 30%;
    color: white;
    text-align: center;
    font-size: 20px;
    font-family: sans-serif;
`

const DivKunaBin = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`

const Greet = styled.div`
text-align:left;
margin-left:100px;
font-size:40px;
font-family:sans-serif;
width:100%
color: white;
`

const LiBids = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    list-style-type: none;
    color: greenyellow;
    border-radius: 20px;
    font-size: 16px;
    font-family: sans-serif;
    margin-left: 0px;
`

const LiAsks = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    list-style-type: none;
    color: red;
    border-radius: 20px;
    font-size: 16px;
    font-family: sans-serif;
    margin-left: 0px;
`

const DivItem = styled.div`
    text-align: left;
    width: 50%;
`

const DivItemTwo = styled.div`
    text-align: left;
    width: 50%;
    color: white;
`

const Ul = styled.ul`
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 0px;
`

const DivForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const DivBinanceBalance = styled.div`
    margin-top: 100px;
    width: 30%;
`

const DivKunaBalance = styled.div`
    margin-top: 100px;
    width: 30%;
`

const Form = styled.form`
    margin-top: 100px;
    width: 30%;
    height: 500px;
`

const Input = styled.input`
    width: 350px;
    height: 30px;
    font-size: 20px;
    font-family: sans-serif;
    border-radius: 5px;
    border: black 2px solid;
    margin-top: 3px;
`

const Label = styled.label`
    color: white;
    font-size: 24px;
    font-family: sans-serif;
`

const ButtonDiv = styled.div`
    margin-top: 10px;
    width: 70%;
    display: flex;
    justify-content: space-between;
`

const RadioDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-left: 20px;
`

const Buy = styled.button`
    width: 130px;
    height: 40px;
    background-color: mediumseagreen;
    color: white;
    font-size: 20px;
    font-family: sans-serif;
    border-radius: 5px;
    border: black 2px solid;

    &:hover {
        cursor: pointer;
    }
`

const Sell = styled.button`
    width: 130px;
    height: 40px;
    background-color: red;
    color: white;
    font-size: 20px;
    font-family: sans-serif;
    border-radius: 5px;
    border: black 2px solid;

    &:hover {
        cursor: pointer;
    }
`

// <div>{percentBin}</div>
// <div>{percentBinTwo}</div>
//
//<div>{percentKuna}</div>
//<div>{percentKunaTwo}</div>

function App() {
    const [binanceBids, setBinanceBids] = useState([])
    const [binanceAsks, setBinanceAsks] = useState([])

    const [kunaBids, setKunaBids] = useState([])
    const [kunaAsks, setKunaAsks] = useState([])

    useEffect(() => {
        let timer = setTimeout(async function getBinance() {
            const { data } = await axios.get('https://api.binance.com/api/v3/depth', {
                params: {
                    symbol: 'BTCUSDT',
                    limit: 10,
                },
            })
            setBinanceBids(data.bids)
            setBinanceAsks(data.asks.reverse())
            timer = setTimeout(getBinance, 2000)
        }, 0)
        return () => {
            clearTimeout(timer)
        }
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

    const getBinanceBalance = async () => {
        const { data } = await axios.get('http://localhost:8000/data/bin', {
            headers: { 'Access-Control-Allow-Origin': 'https://api.binance.com', 'Content-Type': 'application/json;charset=utf-8' },
        })

        console.log(data.find(item => item.asset === 'BTC'))
        console.log(data.find(item => item.asset === 'USDT'))
    }

    const getBinanceSell = async () => {
        const symbol = 'BTCUSDT'
        const type = 'MARKET'
        const qauntity = 1

        const { data } = await axios.post('http://localhost:8000/binc/sell', {
            headers: { 'Access-Control-Allow-Origin': 'https://api.binance.com', 'Content-Type': 'application/json;charset=utf-8' },
            body: {
                symbol: symbol,
                type: type,
                qauntity: qauntity,
            },
        })
        console.log(data)
    }

    useEffect(() => {
        let timer = setTimeout(async function getKuna() {
            const { data } = await axios.get('https://api.kuna.io/v3/book/btcusdt')
            setKunaBids(data.filter(item => item[1] > 0).splice(0, 10))
            setKunaAsks(
                data
                    .filter(item => item[1] < 0)
                    .splice(0, 10)
                    .reverse()
            )
            timer = setTimeout(getKuna, 2000)
        }, 0)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    /*
 const getKuna = async () =>{

  const { data } = await axios.get('https://api.kuna.io/v3/book/btcusdt');
  console.log(data);
  setKunaBids(data.filter(item => item[1] > 0).splice(0, 10));
  setKunaAsks(data.filter(item => item[1] < 0 ).splice(0, 10));

 } ;

*/
    /*
const secretApi = 'qS2OxI6iEmdaz6ey3hXRJP10uNW8Glq5gmhbshIDHilwCKVwtEey9sQMCPZZYkD7';

const dataQueryString = qs.stringify({
  timestamp:Date.now(),
  recvWindow:5000
})
const shaApiKey = CryptoJS.HmacSHA256(dataQueryString, secretApi);



const getData = async () =>{

  const { data } = await axios.get('https://api.binance.com/api/v3/account', {

    headers: {
     // 'Access-Control-Allow-Origin': 'https://api.binance.com',
      'Content-Type':'application/json;charset=utf-8'
    },
    params:{  
      timestamp:Date.now(),
      recvWindow:5000,
      signature:signature
      
    }

  });
 console.log(data);
}


const apiPath = 'https://api.binance.com/api/v3/account';
const nonce = Date.now();
const body = {};
const signatureString = `${apiPath}${nonce}${JSON.stringify(body)}`;
const signature = CryptoJS.HmacSHA256(signatureString, secretApi);

function cmacLog(){
  console.log(signature);
}

*/

    return (
        <DivMain>
            <DivKunaBin>
                <DivBinance>
                    <Greet>Binance</Greet>
                    <Ul>
                        {binanceAsks.map(item => {
                            return (
                                <LiAsks>
                                    <DivItem>{item[0]}</DivItem>
                                    <DivItemTwo>{item[1]}</DivItemTwo>
                                </LiAsks>
                            )
                        })}
                    </Ul>
                    <Ul>
                        {binanceBids.map(item => {
                            return (
                                <LiBids>
                                    <DivItem>{item[0]}</DivItem>
                                    <DivItemTwo>{item[1]}</DivItemTwo>
                                </LiBids>
                            )
                        })}
                    </Ul>
                    <>
                        {' '}
                        {binanceBids.length > 0 && kunaBids.length > 0 && binanceAsks.length > 0 && (
                            <>
                                <div>{Math.round(((kunaBids[0][0] - binanceAsks[9][0]) / kunaBids[0][0]) * 100 * 100) / 100}</div>
                                <div>{Math.round(((kunaBids[0][0] - binanceBids[0][0]) / kunaBids[0][0]) * 100 * 100) / 100}</div>
                            </>
                        )}
                    </>
                </DivBinance>

                <DivKuna>
                    <Greet>Kuna</Greet>
                    <Ul>
                        {kunaAsks.map(item => {
                            return (
                                <LiAsks>
                                    <DivItem>{item[0]}</DivItem>
                                    <DivItemTwo>{-item[1]}</DivItemTwo>
                                </LiAsks>
                            )
                        })}
                    </Ul>

                    <Ul>
                        {kunaBids.map(item => {
                            return (
                                <LiBids>
                                    <DivItem>{item[0]}</DivItem>
                                    <DivItemTwo>{item[1]}</DivItemTwo>
                                </LiBids>
                            )
                        })}
                    </Ul>
                    <>
                        {' '}
                        {binanceBids.length > 0 && kunaAsks.length > 0 && binanceAsks.length > 0 && (
                            <>
                                <div>{Math.round(((binanceBids[0][0] - kunaAsks[9][0]) / binanceBids[0][0]) * 100 * 100) / 100}</div>
                                <div>{Math.round(((binanceAsks[9][0] - kunaAsks[9][0]) / binanceAsks[9][0]) * 100 * 100) / 100}</div>
                            </>
                        )}
                    </>
                </DivKuna>
            </DivKunaBin>

            <DivForm>
                <Form>
                    <RadioDiv>
                        <Label>
                            Binance<input type="radio" value="binance"></input>
                        </Label>
                        <Label>
                            Kuna<input type="radio" value="kuna"></input>
                        </Label>
                    </RadioDiv>
                    <Input placeholder="Price"></Input>
                    <Input placeholder="Amount"></Input>
                    <Input placeholder="Value"></Input>

                    <ButtonDiv>
                        <Buy type="button" onClick={getBinanceBalance}>
                            buy
                        </Buy>
                        <Sell type="button" onClick={getBinanceSell}>
                            sell
                        </Sell>
                    </ButtonDiv>
                </Form>
            </DivForm>
        </DivMain>
    )
}

export default App
