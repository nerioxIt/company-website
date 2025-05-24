
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/logo.png"
        alt="Lovable Logo"
        className="mr-2 h-16 w-16 object-contain"
      />
      
    </div>
  );
};
