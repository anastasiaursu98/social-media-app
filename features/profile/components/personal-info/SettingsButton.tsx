import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export const SettingsButton = () => {
  return (
    <Button variant="outline">
      <Settings className="w-5 h-5 text-gray-700" />
    </Button>
  );
};
