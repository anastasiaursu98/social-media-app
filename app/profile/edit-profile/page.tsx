import { RouteLoader } from "@/components/shared/RouteLoader";
import { EditProfileForm } from "@/features/profile/components/personal-info/edit-profile/EditProfileForm";
import { Suspense } from "react";

export default function EditProfilePage() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <EditProfileForm />
    </Suspense>
  );
}
