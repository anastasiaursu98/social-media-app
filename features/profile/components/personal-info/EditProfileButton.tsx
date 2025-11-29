import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";

export const EditProfileButton = () => {
  return (
    <Button variant="destructive" size="default">
      <NotebookPen className="w-4 h-4" />
      <span>Edit Profile</span>
    </Button>
  );
};
