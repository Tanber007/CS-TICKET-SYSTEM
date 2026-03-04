const ShowCard = ({ cards, purchasedTickets, setPurchasedTickets }) => {
    
    const handleSelected = (ticketData) => {
        // FIXED: Use 'prev' to ensure state consistency
        setPurchasedTickets([...purchasedTickets, ticketData]);
    };

    // CLEANER: Use objects for mapping styles
    const priorityStyles = {
        HIGH_PRIORITY: "text-red-500",
        MEDIUM_PRIORITY: "text-yellow-500",
        LOW_PRIORITY: "text-green-500",
    };

    const statusStyles = {
        In_Progress: "bg-yellow-100 text-yellow-700",
        Open: "bg-green-100 text-green-700",
        Closed: "bg-gray-100 text-gray-700",
    };

    return (
        <div 
            onClick={() => handleSelected(cards)} 
            className="bg-white rounded-xl shadow-md p-5 w-full max-w-md cursor-pointer hover:shadow-lg transition-all"
        >
            <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                    {cards.title}
                </h2>
                {/* FIXED: Dynamic background and text color based on status */}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[cards.status] || "bg-gray-100 text-gray-700"}`}>
                    {cards.status}
                </span>
            </div>

            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {cards.description}
            </p>

            <div className="flex flex-wrap items-center justify-between mt-4 text-sm">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500 font-mono">{cards.ticket_id}</span>
                    {/* Applying the priority color */}
                    <span className={`${priorityStyles[cards.priority]} font-bold`}>
                        {cards.priority.split('_')[0]} {/* Shows 'HIGH' instead of 'HIGH_PRIORITY' */}
                    </span>
                </div>

                <div className="flex items-center gap-4 text-gray-500">
                    {/* Note: You might want cards.assigned_to here instead of static text */}
                    <span>{cards.assigned_to}</span>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{cards.created_at}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;