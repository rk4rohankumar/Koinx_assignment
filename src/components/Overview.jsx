import React from 'react';

const Overview = ({ data }) => {
  const {
    todayLow,
    todayHigh,
    marketCap,
    current,
    ...rest
  } = data;

  const progress = ((current - todayLow) / (todayHigh - todayLow)) * 100;
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Performance</h2>
      <div className="bg-gray-100 p-4 rounded shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Bitcoin (BTC)</h2>
        <div className="flex items-center space-x-2">
          <span className="text-green-500 font-bold">▲</span>
          <span className="text-sm text-gray-500">Live</span>
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-800 text-center mt-4 mb-2">
        {current}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-green-500 rounded-full"
        ></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="flex items-center justify-between text-gray-700">
          <span className="text-sm">Today's Low</span>
          <span className="text-sm">{todayLow}</span>
        </div>
        <div className="flex items-center justify-between text-gray-700">
          <span className="text-sm">Today's High</span>
          <span className="text-sm">{todayHigh}</span>
        </div>
      </div>
    </div>
    {/*  */}
      <h2 className="text-xl font-bold mt-6 mb-4">Fundamentals</h2>
      {Object.entries(rest).map(([key, value]) => (
        <div className="flex items-center justify-between text-gray-700 py-2 border-b border-gray-200" key={key}>
          <span>{key}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default Overview;
