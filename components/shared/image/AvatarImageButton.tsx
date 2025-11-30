import { Camera } from "lucide-react";

interface AvatarImageButtonProps {
  onClick?: () => void;
  size?: number;
}

export const AvatarImageButton = ({
  onClick,
  size = 32,
}: AvatarImageButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-0 right-0 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
      style={{ width: size, height: size }}
    >
      <Camera className="w-4 h-4 text-white" />
    </button>
  );
};
