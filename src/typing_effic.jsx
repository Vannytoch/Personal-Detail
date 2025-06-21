
import React, { useState, useEffect } from "react";

export default function TypingEffect({ words = [], typingSpeed = 150, deletingSpeed = 50, pauseTime = 1500 }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, words, wordIndex, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="border-r-2 border-white animate-caret pr-1" style={{ whiteSpace: "nowrap" }}>
      {text}
      <style jsx>{`
        @keyframes caret {
          0%, 100% { border-color: transparent; }
          50% { border-color: white; }
        }
        .animate-caret {
          animation: caret 1s steps(1) infinite;
        }
      `}</style>
    </span>
  );
}
