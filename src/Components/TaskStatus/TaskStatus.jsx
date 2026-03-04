import React from 'react';

const ShowCard = () => {
    return (
        <div className="flex justify-center p-4">
            <div className="bg-white rounded-lg shadow-sm p-8 w-full max-w-md border border-gray-50">
                <h2 className="text-[22px] font-semibold text-[#001737] mb-6 text-center">
                    Payment Failed - Card Declined
                </h2>
                
                <button 
                    className="w-full bg-[#00a651] hover:bg-[#008f45] text-white text-lg font-medium py-3 px-6 rounded-md transition-colors"
                >
                    Complete
                </button>
            </div>
        </div>
    );
};

export default ShowCard;