import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveDonation } from "../Utility/localstorage";
import 'react-toastify/dist/ReactToastify.css';


const Description = () => {
    const desc = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const donationId = desc.find(donation => donation.id === idInt);
    console.log(donationId);
    const textBg = {
        background: donationId.text_button_bg_color
    }
    const handleDonation = ()=>{
        saveDonation(idInt)
        toast('You have donated successfully')
    }



    return (
        <>
            <div className="max-w-7xl mx-auto mt-10 space-y-10">
                <div className="lg:relative">
                    <div className="flex justify-center"><img className="lg:min-w-screen lg:w-auto md:w-full lg:min-h-[calc(100vh-100px)]" src={donationId.picture} alt="" /></div>
                   <div className=" lg:absolute  lg:top-[760px] text-center lg:text-justify bg-black lg:bg-opacity-40  bg-opacity-10 inset-0 "> <button onClick={handleDonation} className=" border shadow-xl rounded-lg px-5 py-3 text-white font-semibold lg:ml-10 lg:my-5 " style={textBg}>Donate ${donationId.price}</button></div></div>
                   <h2 className="font-bold text-2xl md:text-4xl  ">{donationId.title}</h2>
                   <p className=" text-lg ">{donationId.description}</p>
                   <ToastContainer></ToastContainer>
                    

                </div>
           
        </>
    );
};

export default Description;