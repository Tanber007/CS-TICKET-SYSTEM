import React, { use } from 'react';

const Tickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    console.log(ticketsData);
    return (
        <div className='w-10/12 mx-auto my-5 flex justify-between gap-3'>

            <div className='w-2/3'>
                <h1 className='text-4xl font-bold mb-4'>Customer Tickets</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Card Section */}
                {
                   ticketsData.map(cards =><div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Login Issues - Can't Access Account
                        </h2>
                        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            Open
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                        Customer is unable to log in to their account. They've tried resetting
                        their password multiple times but still...
                    </p>

                    <div className="flex flex-wrap items-center justify-between mt-4 text-sm">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">#1001</span>
                            <span className="text-red-500 font-medium">HIGH PRIORITY</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-500">
                            <span>John Smith</span>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>1/15/2024</span>
                            </div>
                        </div>
                    </div>
                </div>) 
                }

            </div>
            </div>


            <div className='bg-green-600 w-1/3 h-20'>ksjofksa</div>
        </div>
    );
};

export default Tickets;