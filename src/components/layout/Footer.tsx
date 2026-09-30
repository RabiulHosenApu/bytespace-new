export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-16 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-2xl mb-6">
            <div className="w-6 h-6 bg-[#ccff00] rounded-tl-xl rounded-br-xl"></div>
            ByteSpace
          </div>
          <p className="text-sm text-gray-500 mb-6">Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <div className="flex bg-white border border-gray-200 rounded-full overflow-hidden p-1">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 text-sm outline-none w-full" />
            <button className="bg-[#ccff00] text-black font-semibold px-6 py-2 rounded-full text-sm">Search</button>
          </div>
          <p className="text-[10px] text-gray-400 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
        
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-800">Featured Courses</span>
            <span className="font-semibold text-gray-800">Featured Categories</span>
            <span className="font-semibold text-gray-800">Business</span>
            <span className="font-semibold text-gray-800">IT</span>
            <span className="font-semibold text-gray-800">Design</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-800">Development</span>
            <span className="font-semibold text-gray-800">Marketing</span>
            <span className="font-semibold text-gray-800">Photography</span>
            <span className="font-semibold text-gray-800">Finance</span>
            <span className="font-semibold text-gray-800">Sport</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-gray-800">Become a Creator</span>
            <span className="font-semibold text-gray-800">Affiliate Program</span>
            <span className="font-semibold text-gray-800">Contact</span>
            <span className="font-semibold text-gray-800">Help</span>
            <span className="font-semibold text-gray-800">About</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies Settings</span>
        </div>
      </div>
    </footer>
  );
}
