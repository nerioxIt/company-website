
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M20 5L33.6603 30H6.33975L20 5Z"
          className="fill-primary"
        />
        <circle
          cx="20"
          cy="25"
          r="10"
          className="fill-accent-teal"
        />
      </svg>
      <span className="font-heading font-bold text-xl text-primary">Lovable</span>
    </div>
  );
};
