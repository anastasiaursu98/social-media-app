export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-white w-full min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
