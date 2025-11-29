import { Button } from "@/components/ui/button";

interface OAuthButtonProps {
  icon: React.ReactNode;
  label: string;
}
export const OAuthButton = ({ icon, label }: OAuthButtonProps) => {
  return (
    <Button type="button" variant="outline" size="lg" className="w-full">
      {icon}
      <span className="text-sm font-medium text-gray-600"> {label}</span>
    </Button>
  );
};
