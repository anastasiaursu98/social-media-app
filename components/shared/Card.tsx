export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 w-full max-w-full md:max-w-4xl lg:max-w-5xl">
      {children}
    </div>
  );
};
