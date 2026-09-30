import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 px-6 py-6 text-white flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <div className="w-6 h-6 bg-[#ccff00] rounded-tl-xl rounded-br-xl"></div>
        ByteSpace
      </div>
      <div className="hidden md:flex gap-8 items-center border border-white/20 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
        <Link href="#" className="font-medium hover:text-[#ccff00] transition">Home</Link>
        <Link href="#" className="font-medium hover:text-[#ccff00] transition">Courses</Link>
        <Link href="#" className="font-medium hover:text-[#ccff00] transition">Creators</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="#" className="font-medium hover:text-[#ccff00] transition">Sign In</Link>
        <Link href="#" className="font-medium hover:text-[#ccff00] transition">Join Us</Link>
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-[#ccff00]" />
      </div>
    </nav>
  );
}
