
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
        theme === "dark" 
          ? "bg-secondary/60 hover:bg-secondary/80 text-white" 
          : "bg-secondary/80 hover:bg-secondary text-foreground",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <Moon size={18} className="transition-transform duration-300 ease-in-out" />
      ) : (
        <Sun size={18} className="transition-transform duration-300 ease-in-out" />
      )}
    </button>
  );
}
