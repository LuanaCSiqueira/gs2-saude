import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const greeting = 'Olá, eu sou a Clara! Qual é o seu nome?';

  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= greeting.length; i++) {
        setTimeout(() => {
          setText(greeting.slice(0, i));
        }, 100 * i);
      }
    };

    typeText();
  }, []);

  return (
    <div className="text-gray-900">
      <p>{text}</p>
    </div>
  );
};

export default TypingEffect;
