import { useEffect, useState } from "react";
import Card from "./Card";


const Banner = () => {

    
    const [displaycat, setDisplaycat] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=> setDisplaycat(data))
    },[])
    const handleCategory = search => {
        if (search === 'Health'){
           const health = displaycat.filter(cat => cat.category === 'Health')
           setDisplaycat(health)
        }
        else if(search === 'Food'){
            const food = displaycat.filter(cat => cat.category === 'Food')
            setDisplaycat(food)
        }
        else if ( search === 'Clothing'){
            const clothing = displaycat.filter(cat => cat.category === 'Clothing')
            setDisplaycat(clothing)
        }
        else if (search === 'Education'){
            const education = displaycat.filter(cat=> cat.category === 'Education')
            setDisplaycat(education)
        }
    }
    
    return (
        <>
        <div className="hero lg:min-h-[calc(100vh-100px)] space-y-10 w-full lg:space-y-0" style={{ backgroundImage: 'url(https://i.ibb.co/gPFfhD6/Rectangle-4281.png)' }}>
            <div className="hero-overlay bg-opacity-90 bg-slate-100"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 md:text-3xl text-xl lg:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                    <div className="form-control lg:ml-40">
                        <label className="input-group input-group-md rounded-lg">
                            <input type="text" placeholder="Search here" className="input input-bordered" />
                            <span onClick={()=>handleCategory()} className=" btn bg-[#FF444A] text-white font-semibold">Search</span>
                        </label>
                    </div>

                </div>
                
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {
                displaycat.map(donation => <Card key={donation.id} donation={donation}></Card>)
            }
            
        </div></>
    );
};

export default Banner;