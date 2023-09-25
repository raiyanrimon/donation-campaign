const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations');
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return [];
}

const saveDonation = id => {
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find(donateId => donateId === id);
    if(!exists){
        storedDonation.push(id);
        localStorage.setItem('donations', JSON.stringify(storedDonation))
    }

}
export {getStoredDonation, saveDonation}