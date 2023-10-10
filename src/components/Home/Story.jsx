

const Story = () => {

    const storyHandel = ()=>{
        console.log('nazmul')
        
    }
    return (
        <div className="bg-[#DFCCFB]">
             <div className="flex  items-center space-y-10 justify-evenly">

             <div>
                <img className=" " src="https://i.ibb.co/7k1BF92/image-1.png" alt="" />
            </div>
            <div>
                <h1 className="text-4xl text-[#17a2b8]  font-extrabold">Our Story</h1>
                <br />
                
                <p className="text-xl text-[#17a2b8] ">Founded in 2018 by experts in technology and marketing process optimization,<br /> XRMROI possesses the experience, professionalism and commitment to service,<br /> coupled with the passion for excellence to drive successful outcomes. We are a <br /> privately owned multinational ICT provider and have a dedicated recruitment arm <br /> that specialises in finding, screening, orienting, and hiring qualified employees.</p>
                <br />
                <p className="text-xl text-[#17a2b8] ">Founded in 2018 by experts in technology and marketing process optimization,<br /> XRMROI possesses the experience, professionalism and commitment to service,<br /> coupled with the passion for excellence to drive successful outcomes. We are a <br /> privately owned multinational ICT provider and have a dedicated recruitment arm <br /> that specialises in finding, screening, orienting, and hiring qualified employees.</p>
                <br />
                <br />
                <button onClick={storyHandel} className="btn bg-blue-400">Read More</button>
            </div>
            
            </div> 
        </div>
    );
};

export default Story;