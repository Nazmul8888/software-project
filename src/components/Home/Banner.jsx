

const Banner = () => {
    return (
        <div className="bg-[#A6F6FF] h-[70vh] ">
           <div className="flex  items-center space-y-10 justify-evenly">
            <div>
                <h1 className="text-6xl text-[#17a2b8]  font-extrabold">Our Mission</h1>
                <br />
                
                <h2 className="text-3xl text-[#17a2b8] font-semibold">To transform every IT investment into reportable ROI</h2>
                <br />
                <br />
                <button className="btn bg-blue-400">Contact Us</button>
            </div>
            <div>
                <img className=" " src="https://i.ibb.co/TKRhHdF/banner-img.png" alt="" />
            </div>
            </div> 

            
        </div>
    );
};

export default Banner;