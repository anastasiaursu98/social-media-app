import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 overflow-y-auto py-8 px-12">{children}</main>
      </div>
    </div>
  );
}
