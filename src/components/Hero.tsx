import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0f4cff] text-white flex flex-col items-center pt-40 px-4 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Get Access to Hundreds<br />Courses Available
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        
        {/* Search */}
        <div className="flex w-full max-w-xl bg-white rounded-full p-2 pl-6 items-center shadow-lg">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input type="text" placeholder="Course, topic, creator" className="flex-1 bg-transparent text-gray-800 outline-none placeholder:text-gray-400" />
          <button className="bg-[#ccff00] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#b3e600] transition">
            Search
          </button>
        </div>
      </div>
      
      {/* Illustration Area */}
      <div className="relative z-10 mt-16 w-full max-w-5xl h-[500px] flex justify-center">
        {/* We can place abstract shapes here */}
        <div className="absolute w-[600px] h-[600px] bg-[#ccff00] rounded-full -bottom-[300px] z-0"></div>
        {/* Main Character Image placeholder */}
        <div className="relative z-10 w-80 h-96 bg-gray-200 rounded-t-full overflow-hidden border-4 border-white shadow-xl flex items-end justify-center">
            <span className="text-gray-500 mb-10">Hero Image</span>
        </div>
        
        {/* Floating Cards */}
        <div className="absolute top-1/4 left-10 bg-white text-black p-4 rounded-xl shadow-lg flex flex-col gap-1 z-20">
          <span className="font-bold">UI/UX Design</span>
          <span className="text-xs text-gray-500">200 Courses • 1000+ Students</span>
        </div>
        <div className="absolute top-1/3 right-10 bg-white text-black p-4 rounded-xl shadow-lg flex flex-col gap-1 z-20 border-r-4 border-[#ccff00]">
          <span className="text-xs text-gray-500">Learning Progress</span>
          <span className="font-bold text-3xl">55%</span>
        </div>
        <div className="absolute bottom-10 left-20 bg-white text-black p-4 rounded-xl shadow-lg flex flex-col gap-2 z-20">
          <span className="text-sm font-bold">Happy Students</span>
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
