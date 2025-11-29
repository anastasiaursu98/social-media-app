export const AuthCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      {children}
    </div>
  );
};
