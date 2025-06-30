import { useEffect, useState } from "react";

/**
 * Animated typewriter‑style text.
 *
 * @param {Object}   props
 * @param {string[]} props.texts  – array of strings to cycle through
 * @param {number}   [props.speed=80]  – typing speed (ms per char)
 * @param {number}   [props.pause=1500] – pause before next word (ms)
 */
export default function TypingText({ texts, speed = 80, pause = 1500 }) {
  const [current, setCurrent] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIdx < texts[textIdx].length) {
        setCurrent((prev) => prev + texts[textIdx][charIdx]);
        setCharIdx((prev) => prev + 1);
      } else {
        // finished a word → wait, then reset for next
        setTimeout(() => {
          setCurrent("");
          setCharIdx(0);
          setTextIdx((prev) => (prev + 1) % texts.length);
        }, pause);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, textIdx, texts, speed, pause]);

  return (
    <h2 className="text-xl md:text-2xl font-medium text-accent h-10">
      {current}
      <span className="animate-pulse ml-1">|</span>
    </h2>
  );
}
