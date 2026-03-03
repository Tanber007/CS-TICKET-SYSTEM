import React from 'react';

const TicketHero = () => {
  

  return (
    <div className=" p-8 min-h-[300px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden rounded-xl shadow-lg h-64 flex flex-col items-center justify-center text-white transition-transform`}>
            <div><h1 className='text-4xl font-bold'>In-Progress</h1></div>
            <div><h1 className='text-4xl font-bold'>0</h1></div>
        </div>
        <div className={`relative bg-gradient-to-r from-[#54CF68] to-[#00827A] overflow-hidden rounded-xl shadow-lg h-64 flex flex-col items-center justify-center text-white transition-transform`}>
            <div><h1 className='text-4xl font-bold'>Resolved</h1></div>
            <div><h1 className='text-4xl font-bold'>0</h1></div>
        </div>
      </div>
    </div>
  );
};

export default TicketHero;