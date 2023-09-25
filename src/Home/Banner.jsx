

const Banner = () => {
    
    return (
        <div className="hero lg:min-h-[calc(100vh-100px)] space-y-10 w-full lg:space-y-0" style={{ backgroundImage: 'url(https://i.ibb.co/gPFfhD6/Rectangle-4281.png)' }}>
            <div className="hero-overlay bg-opacity-90 bg-slate-100"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 md:text-3xl text-xl lg:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                    <div className="form-control lg:ml-40">
                        <label className="input-group input-group-md rounded-lg">
                            <input type="text" placeholder="Search here" className="input input-bordered" />
                            <span className=" btn bg-[#FF444A] text-white font-semibold">Search</span>
                        </label>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Banner;