import { StatItem } from "./StatItem";

interface ProfileStatsProps {
  posts: number;
  followers: string;
  following: number;
}

const stats = [
  {
    key: "posts",
    getValue: (props: ProfileStatsProps) => props.posts.toString(),
    label: "Posts",
  },
  {
    key: "followers",
    getValue: (props: ProfileStatsProps) => props.followers,
    label: "Followers",
  },
  {
    key: "following",
    getValue: (props: ProfileStatsProps) => props.following.toString(),
    label: "Following",
  },
];

export const ProfileStats = (props: ProfileStatsProps) => {
  return (
    <div className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-10 mb-3">
      {stats.map((stat) => (
        <StatItem
          key={stat.key}
          value={stat.getValue(props)}
          label={stat.label}
        />
      ))}
    </div>
  );
};
