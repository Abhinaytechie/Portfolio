// TypingText.tsx
import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  texts: string[];
  speed?: number;
  pause?: number;
}

const Typingtext: React.FC<TypingTextProps> = ({
  texts,
  speed = 80,
  pause = 1500,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[textIndex].length) {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, pause);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, texts, speed, pause]);

  return (
    <h2 className="text-2xl sm:text-3xl font-semibold text-purple-400 h-12 mb-2">
      {currentText}
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default Typingtext;
