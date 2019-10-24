import React from 'react';
import './global.css';
import './index.css';

function ScoresDashboard() {
  return (
    <div className="container mx-auto p-4 pt-8">
      <div className="flex mb-6">
        <p className="flex-1 text-2xl font-black text-gray-200">Carolyn</p>
        <p className="flex-2 text-2xl font-bold text-gray-200 text-right bg-gray-700 rounded-full pl-4 pr-4">
          0<span className="text-gray-500 font-bold text-sm"> pts</span>
        </p>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 bg-gray-500 bg-blue-800 h-12 p-2">
          <div className="flex bg-blue-500 h-8"/>
        </div>
        <div className="w-1/2 bg-gray-400 bg-blue-400 h-12 p-2">
          <div className="flex bg-blue-500 h-8"/>

        </div>
      </div>
    </div>
  );
}

export default ScoresDashboard;
