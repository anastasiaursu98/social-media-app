import * as React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-purple-200 to-white w-full min-h-screen flex flex-col items-center px-4 sm:px-0">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center mt-6 text-center overflow-visible">
        <div className="py-6 overflow-visible">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-kaushan-script overflow-visible">
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent inline-block py-3 px-1">
              StoryLine
            </span>
          </h1>
        </div>
        <p className="text-sm sm:text-base md:text-lg font-normal text-gray-500 px-2 sm:px-0">
          Connect with your friends and the world around you
        </p>
      </div>

      {/* Children content */}
      <div className="flex flex-col items-center justify-center w-full mt-8 sm:mt-10">
        {children}
      </div>
    </div>
  );
}
