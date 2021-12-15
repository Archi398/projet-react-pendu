import { useState, useEffect } from 'react';
import axios from 'axios';


export function GetData(apiName) {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://animalfinderapi.herokuapp.com/${apiName}`,
            );
            console.log(result.data);
            setData(result.data);
        }
        fetchData();
    }, [])

    return data;
}