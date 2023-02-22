
// функция получения данных с сервера 
const getData = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return res.json();
};


export{getData};
