import React, { useState } from 'react';
import styled from 'styled-components';
import App from './App';



const ResultDiv = styled.div`

width: 60%;
margin-left:auto;
margin-right:auto;
height: 100vh;
`;

const ResultH1 = styled.h1`

font-size: 1.5em;
color:plum;
text-align:center;
font-family: sans-serif;
`;

function Result(props){

    return(

        <ResultDiv>
            <ResultH1>
                 Варість стрижки {props.value}: {props.resultValue} грн
            </ResultH1>
        </ResultDiv>
    )
}

export default Result;