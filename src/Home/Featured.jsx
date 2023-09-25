import { useEffect, useState } from "react";
import Card from "./Card";



const Featured = () => {
    const [donate, setDonate]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setDonate(data))
        
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {
                donate.map(donation => <Card key={donation.id} donation={donation}></Card>)
            }
            
        </div>
    );
};

export default Featured;