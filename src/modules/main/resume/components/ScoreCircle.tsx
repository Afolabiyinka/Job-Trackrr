import { motion } from "framer-motion";

type Props = {
  score: number;
  radius?: number;
  strokeWidth?: number;
  textSize?: string;
};

const ScoreCircle = ({
  score,
  radius = 25,
  strokeWidth = 5,
  textSize,
}: Props) => {
  const normalizedRadius = radius - strokeWidth / 2;

  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getColor = () => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e5e7eb"
            className="dark:stroke-neutral-800"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

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

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-bold ${getColor()} ${
              textSize || (radius > 35 ? "text-2xl font-extrabold" : "text-base")
            }`}
          >
            {score}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCircle;
