import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/modules/main/theme/useTheme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Laptop, label: "System" },
  ];

  return (
    <div className="relative flex w-full max-w-75 rounded-full bg-muted p-1 gap-3 px-4">
      <motion.div
        layoutId="theme-indicator"
        className="absolute top-1 bottom-1 w-1/3 rounded-full bg-background shadow-sm"
        style={{
          left:
            theme === "light" ? "0%" : theme === "dark" ? "33.33%" : "66.66%",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {options.map((opt) => {
        const Icon = opt.icon;

        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value as Theme)}
            className="relative z-10 flex flex-1 items-center justify-center gap-2 py-2 text-sm"
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
