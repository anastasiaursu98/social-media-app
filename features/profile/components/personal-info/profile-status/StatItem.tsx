interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="text-lg sm:text-xl font-bold">{value}</span>
      <span className="text-xs sm:text-sm text-gray-500">{label}</span>
    </div>
  );
};
