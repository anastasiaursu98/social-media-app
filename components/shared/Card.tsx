export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="align-center bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-5xl w-full">
      {children}
    </div>
  );
};
