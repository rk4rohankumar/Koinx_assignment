import React, { useEffect, useState } from 'react';

const Trending = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await response.json();
                setTrending(data.coins || []);
            } catch (error) {
                console.error('Error fetching trending data:', error);
            }
        };

        fetchTrending();
    }, []);

    // Filtering the first three items with  score from 0 to 2
    const filteredTrending = trending
        .filter((crypto) => crypto.item.score >= 0 && crypto.item.score <= 2)
        .slice(0, 3);

    return (
        <div>
            <div className="flex flex-col bg-white shadow-md rounded-lg my-6 text-black text-xl">
                <div className="flex p-4 font-bold border-gray-300 text-2xl">
                    <div className="flex-1 text-xl my-2"><p className='text-2xl'>Trending Coins (24 Hr)</p></div>
                </div>
                {filteredTrending.map((crypto, index) => (
                    <div key={index} className="flex py-2 px-4 mb-2 items-center">
                        {crypto.item.small && (
                            <img
                                src={crypto.item.small}
                                alt={crypto.item.name}
                                className="w-8 h-8 object-cover rounded-full mr-2"
                            />
                        )}
                        <div className="flex-1 font-semibold">
                            <div className="flex items-center">
                                <div>{crypto.item.name}</div>
                                <div className="  ml-2">({crypto.item.symbol})</div>
                            </div>
                        </div>
                        <div className="flex-1">{crypto.item.score}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
