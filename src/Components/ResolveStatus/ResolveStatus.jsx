import React from 'react';

const ResolveStatus = ({ ticket }) => {
    return (
        <div className="flex justify-center p-4">
            <div className="bg-gray-100 rounded-lg shadow-sm p-8 w-full max-w-md border border-gray-200 opacity-80">
                <h2 className="text-[22px] font-semibold text-gray-700 mb-2 text-center">{ticket.title}</h2>
                <p className="text-center text-[#00a651] font-bold">Resolved</p>
            </div>
        </div>
    );
};

export default ResolveStatus;