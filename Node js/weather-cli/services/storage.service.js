import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), 'weather-data.json');

const TOKEN_DICTIONARY = {
    token:'token',
    city:'city'
}

const saveKeyValue = async (key, value) =>{

    let data = {};
    if(await isExist(filePath)){
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) =>{
    if( await isExist(filePath)){
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
}

const isExist = async (path) =>{
    try{
        await promises.stat(path);
        return true;
    } catch(e){
        return false;
    }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };











/*import { join , basename, dirname, extname, relative, isAbsolute, resolve, sep } from "path";*/
/* console.log(basename(filePath));                        // назва поточного файлу
    console.log(dirname(filePath));                         // назва папки
    console.log(extname(filePath));                             // ім'я після крапки, наприклад .js
    console.log(relative(filePath, dirname(filePath)));         // скільки потрібно пройти відноносно одного до другого
    console.log(isAbsolute(filePath));                          //перевіряє чи асболютний гшлях
    console.log(resolve(filePath));                             // повний шлях
    console.log(sep)   */                                         // сепаратор, в випадку віндоус "\"