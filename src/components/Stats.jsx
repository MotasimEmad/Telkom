import React from 'react';

const Stats = () => {
  return (
    <div className="bg-primary text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="flex justify-center items-center mb-4">
            <span className="text-orange-500 text-4xl mr-2">👥</span>
            <span className="text-4xl font-bold">21+</span>
          </div>
          <div>Customers</div>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4">
            <span className="text-orange-500 text-4xl mr-2">💼</span>
            <span className="text-4xl font-bold">37+</span>
          </div>
          <div>Number Of Projects</div>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4">
            <span className="text-orange-500 text-4xl mr-2">📢</span>
            <span className="text-4xl font-bold">40M+</span>
          </div>
          <div>Number Of Views</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
