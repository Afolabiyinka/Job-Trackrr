import { motion } from "framer-motion";

type Props = {
  score: number;
};

const ScoreCircle = ({ score }: Props) => {
  const radius = 25;
  const strokeWidth = 5;
  const normalizedRadius = radius - strokeWidth / 2;

  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // color based on score
  const getColor = () => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          {/* Background circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Animated progress */}
          <motion.circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={getColor()}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold ${getColor()}`}>{score}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCircle;
