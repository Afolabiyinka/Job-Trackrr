import { Button } from "@/components/ui/button";
import { prodEndpoint } from "@/shared/api/api-data";
import { cn } from "@/shared/lib/utils";

export const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="size-5 shrink-0"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      d="M19 19H16.3V14.8C16.3 13.8 16.28 12.5 14.9 12.5C13.5 12.5 13.3 13.6 13.3 14.7V19H10.6V10.4H13.2V11.6H13.23C13.6 10.9 14.5 10.2 15.8 10.2C18.5 10.2 19 12 19 14.3V19ZM7.4 9.2C6.5 9.2 5.8 8.5 5.8 7.6C5.8 6.7 6.5 6 7.4 6C8.3 6 9 6.7 9 7.6C9 8.5 8.3 9.2 7.4 9.2ZM8.7 19H6V10.4H8.7V19Z"
      fill="#FFFFFF"
    />
  </svg>
);

interface LinkedInLoginButtonProps {
  text?: string;
  className?: string;
}

const LinkedInLoginButton = ({
  text = "Sign in with LinkedIn",
  className,
}: LinkedInLoginButtonProps) => {
  const handleLinkedInLogin = () => {
    window.location.assign(`${prodEndpoint}/auth/linkedin`);
  };

  return (
    <Button
      className={cn(
        "w-full h-10 rounded-full font-medium text-sm flex items-center justify-center gap-2 border border-border shadow-xs",
        className
      )}
      variant="outline"
      type="button"
      onClick={() => handleLinkedInLogin()}
    >
      <LinkedInIcon />
      <span>{text}</span>
    </Button>
  );
};

export default LinkedInLoginButton;
