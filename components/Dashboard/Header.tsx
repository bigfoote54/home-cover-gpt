import { Shield, UserCircle } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm">
      <Link href="/" className="flex items-center space-x-2">
        <Shield className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-900">Home Cover GPT</span>
      </Link>
      <nav className="flex items-center space-x-6">
        <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
        <Link href="/analyses" className="text-gray-600 hover:text-gray-900">Past Analyses</Link>
        <Link href="/settings" className="text-gray-600 hover:text-gray-900">Settings</Link>
        <button className="ml-4 bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500 text-white px-4 py-2 rounded-md shadow">
          Upgrade
        </button>
        <UserCircle className="h-8 w-8 text-gray-600 hover:text-gray-900 cursor-pointer" />
      </nav>
    </header>
  );
};

export default Header;