#!/ust/bin/env mode

import { getArgs } from "./helpers/args.js";

import { printHelp, printSuccess, printError, printWeather } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from "./services/storage.service.js";
import { getWeather, getIcon } from "./services/api.service.js";

const saveToken = async (token) =>{
    if(!token.length){
        printError('Не передан token');
        return
    }

    try{

        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token is saved');  

        } catch(e){
             printError(e.message)
        }
}

const saveCity = async (city) =>{
    if(!city.length){
        printError('Не передан city');
        return
    }

    try{

        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City is saved');  

        } catch(e){
             printError(e.message)
        }
}

const getForcast = async () =>{
    try{

    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await  getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
    }catch(e){
       if(e?.response?.status == 404){
        printError('Невірно вказано місто')
       } else if(e?.response?.status == 401){
        printError('Невірно вказаний токен')
        } else{
            printError(e.message)
        }
    }
}

const initCLI = () =>{
    const args = getArgs(process.argv);
   
    if(args.h){
        // Вивод help
       return printHelp();
    }

    if(args.s){
        // Зберегти місто
        return saveCity(args.s);
    }

    if(args.t){
        // Зберегети токен
       return saveToken(args.t);
    }
    // Вивести погоду
   return getForcast();
    
};

initCLI();