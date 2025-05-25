import { cn } from "@/lib/utils";

export const Logo = ({ 
  className,
  darkMode = false 
}: { 
  className?: string;
  darkMode?: boolean;
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src={darkMode ? "/logo-dark.png" : "/logo.png"}
        alt="Logo"
        className="mr-2 h-16 w-16 object-contain"
      />
      
    </div>
  );
};
