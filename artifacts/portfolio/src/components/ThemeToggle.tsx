import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 p-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-md shadow-lg">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={`w-10 h-10 rounded-full transition-all ${
          theme === "light" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Sun className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`w-10 h-10 rounded-full transition-all ${
          theme === "dark" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Moon className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("midnight")}
        className={`w-10 h-10 rounded-full transition-all ${
          theme === "midnight" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Monitor className="w-4 h-4" />
      </Button>
    </div>
  );
}
