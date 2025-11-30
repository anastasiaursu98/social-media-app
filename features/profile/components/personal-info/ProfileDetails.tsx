import { Briefcase, Globe, MapPin } from "lucide-react";

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
  return (
    <div className="flex items-center text-sm gap-2 text-gray-700">
      {icon}
      <span>{text}</span>
    </div>
  );
};

interface ProfileDetailsProps {
  fullName: string;
  bio: string;
  location?: string;
  job?: string;
  website?: string;
}

export const ProfileDetails = ({
  fullName,
  bio,
  location,
  job,
  website,
}: ProfileDetailsProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base sm:text-lg md:text-xl lg:text-lg font-bold mt-2 md:mt-4">
        {fullName}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-700">{bio}</p>
      {location && (
        <ContactInfo
          icon={<MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />}
          text={location}
        />
      )}
      {job && (
        <ContactInfo
          icon={<Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />}
          text={job}
        />
      )}
      {website && (
        <ContactInfo
          icon={<Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />}
          text={website}
        />
      )}
    </div>
  );
};
