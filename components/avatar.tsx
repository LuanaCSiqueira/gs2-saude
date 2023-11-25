import React from 'react';

const Avatar = () => {
  return (
    <div className="flex items-center gap-4 mr-8">
      <div className="relative">
        <img
          className="w-20 h-20 rounded-full"
          src="clara.jpg"
          alt=""
        />
        <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6 border-2 border-white"></div>
      </div>
      <div className="font-medium text-gray-900">
        <div>Clara</div>
      </div>
    </div>
  );
};

export default Avatar;
