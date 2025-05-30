import { useEffect, useState } from 'react';
import './countdown.css';

type CountdownProps = {
  onComplete: () => void;
};

const Countdown: React.FC<CountdownProps> = ({ onComplete }) => {
  const target = new Date("2025-05-31T16:00:00-05:00"); // 4:00 PM CDT (UTC-5)

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = Math.max(target.getTime() - now.getTime(), 0); // Never go below 0

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      total: diff,
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.total === 0) {
        clearInterval(timer);
        onComplete(); // Trigger complete callback
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const labels = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

  return (
    <div className="countdown-wrapper">
      {labels.map((label, index) => {
        const value = timeLeft[label.toLowerCase() as keyof typeof timeLeft];
        return (
          <div key={label} className="time-col">
            <div className="time-group">
              <div className="digit-pair">
                {String(value).split('').map((digit, i) => (
                  <div key={`${label}-${i}`} className="digit-card">{digit}</div>
                ))}
              </div>
              <div className="label">{label}</div>
            </div>
            {index < 3 && <div className="colon">:</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Countdown;
