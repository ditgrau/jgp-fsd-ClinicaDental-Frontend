import React, { useEffect , useState } from 'react'
import { getAllTreatments } from '../../services/apiCalls';


export function Treatments () {

    const [treatments, setTreatments] = useState([]);

    useEffect(()=> {
        if(treatments.length === 0){
            getAllTreatments()
            .then(result => console.log(result.data.allTreatments))

    }
},[treatments])

    return (
        <h1>Treatments</h1>
    )
}