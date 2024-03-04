import Link from "next/link";
import React from "react";

const Navbar = () => {
  const user = false;
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Home
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {user ? (
                <>
                  <Link
                    href="/favorites"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Favorites
                  </Link>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import Link from "next/link";
// import React from "react";

// export default function Navbar() {
//   const user = false;
//   return (
//     <div className="bg-blue-500 p-4 flex items-center justify-between">
//       <Link href="/" className="text-white">Home</Link>
//       {user ? (
//         <div className="flex space-x-4">
//           <Link href="/favorites" className="text-white">Favorites</Link>
//           <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
//         </div>
//       ) : (
//         <Link href="/login" className="text-white">Login</Link>
//       )}
//     </div>
//   );
// }
