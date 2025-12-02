"use client";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const EditProfileButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="destructive"
      size="default"
      name="edit-profile-button"
      aria-label="Edit Profile"
      aria-describedby="Edit Profile"
      aria-required="true"
      className="cursor-pointer"
      onClick={() => router.push(ROUTES.EDIT_PROFILE)}
    >
      <Edit2 className="w-4 h-4" />
      <span>Edit Profile</span>
    </Button>
  );
};
