import react, {useEffect, useState} from 'react'
import axios from "axios";
export default function Date(){
    const [date, setDate] = useState({})
    const [hasData , setHasData] = useState(false)


    useEffect(
        function () {
            axios
                .get("https://api.keybit.ir/time/")
                .then((res) => {
                    setDate(res.data.date);
                    setHasData(!hasData)
                })
                .catch((res) => {

                })
                .finally(() => {
                });
        },
        []
    );
    console.log("date", date);
    console.log("hasData", hasData);
    return(
        <>
            Test
        </>
    )
}