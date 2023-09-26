import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/localstorage";
import DonationPage from "./DonationPage";


const Donation = () => {
    const donation = useLoaderData();
    const [donated, setDonated] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        const storedDonation = getStoredDonation();
        if (donation.length > 0) {
            const donatedMoney = [];
            for (const id of storedDonation) {
                const donate = donation.find(donate => donate.id === id);
                if (donate) {
                    donatedMoney.push(donate)
                }
            }
            setDonated(donatedMoney)
        }
    }, [donation])
    return (
        <> <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto my-10">
            {
                donated.slice(0,dataLength).map(donate => <DonationPage key={donate.id} donate={donate}></DonationPage>)
            }
            </div>
            <div className={dataLength >= donated.length && 'hidden' }>
            <div className="text-center">
            <button onClick={()=> setDataLength(donated.length)} className="btn my-5 btn-primary">See All</button>
                
            </div>
            </div>
        </>
    );
};

export default Donation;