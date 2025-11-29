interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
};
