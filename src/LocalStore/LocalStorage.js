
const getDataFromId = () => {
    const getData = localStorage.getItem('home');
    if(getData){
        return JSON.parse(getData);
    }
    return []
}

const setDataFromId = (id) =>{
    const saveData = getDataFromId(); 
    saveData.push(id);
    localStorage.setItem('home', JSON.stringify(saveData))
}

export {getDataFromId, setDataFromId}