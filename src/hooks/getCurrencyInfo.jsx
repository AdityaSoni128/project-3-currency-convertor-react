import { useEffect, useState } from "react";

export function getCurrencyInfo(currency) {
    const [data, setData] = useState({});

   useEffect(()=> {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((response)=> response.json())
    .then((response)=> {
        setData(response[currency]);
        console.log(data, response);
    })
   },[currency])

    return data;
}