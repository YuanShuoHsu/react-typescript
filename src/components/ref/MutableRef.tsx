import { useState, useRef, useEffect } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <span>HookTimer - {timer} - </span>
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
}