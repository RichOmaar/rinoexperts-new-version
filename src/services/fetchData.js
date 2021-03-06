let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET",url,true)
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error al solicitar datos de la API ', url))
            }
        })
        xhttp.send()
    })
}