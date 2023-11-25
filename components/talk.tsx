import React from 'react';
import Avatar from './avatar';
import Form from './form';
import TypingEffect from './TypingEffect';

export default function Talk() {
  return (
    <div>
      <div className="mt-20 w-full flex justify-center items-center">
        <Avatar />
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
          <TypingEffect />
        </div>
      </div>
      <Form />
    </div>
  );
}
