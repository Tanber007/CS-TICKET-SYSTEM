import React from 'react';
import bgImge1 from "../../assets/vector1.png";
import bgImge2 from "../../assets/vector2.png";

const TicketHero = () => {
  return (
    <div className="p-8 min-h-[300px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        <div
          style={{
            backgroundImage: `url(${bgImge1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          className="relative overflow-hidden rounded-xl shadow-lg h-64 flex flex-col items-center justify-center text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3]/85 to-[#9F62F2]/85"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold">In-Progress</h1>
            <h1 className="text-4xl font-bold">0</h1>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${bgImge2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          className="relative overflow-hidden rounded-xl shadow-lg h-64 flex flex-col items-center justify-center text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68]/85 to-[#00827A]/85"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold">In-Progress</h1>
            <h1 className="text-4xl font-bold">0</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketHero;