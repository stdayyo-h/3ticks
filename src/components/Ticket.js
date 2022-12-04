import React from 'react';

export default function Ticket({Img, Date, Time}) {
    return (
        <div className="mx-auto py-16 flex items-center justify-center h-screen">
        <div className="w-full relative flex items-center justify-center ">
            <img src={Img} alt="fifa" className="w-full h-full absolute z-0 xl:block" />
            <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                <h1 className="text-4xl font-semibold leading-9 text-white text-center">Grab your tickets now!</h1>
                <p className="text-base leading-normal text-center text-white mt-6">
                    Date:{Date}<br />
                    Time:{Time} <br />
                </p>
                <div classNameName='gird grid-col-2'>
                <button type="button" className="text-blue-700 bg-white mt-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">User</button>
                <button type="button" className="text-blue-700 bg-white mt-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Organization</button>
                </div>
            </div>
        </div>
    </div>
    );
}

