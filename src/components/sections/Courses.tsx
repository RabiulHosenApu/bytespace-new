import { Star, Users } from "lucide-react";

export default function Courses() {
  const tags = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", "Web Development", "Data Science", "Cooking", "+ More"];
  const courses = [
    { title: "Learn Figma from Basic", author: "purepearl studio", rating: 4.5, price: 25 },
    { title: "Build Digital Asset", author: "purepearl studio", rating: 4.5, price: 25 },
    { title: "The Power of Big Data", author: "purepearl studio", rating: 4.5, price: 25 },
    { title: "Balancing Productivity and...", author: "purepearl studio", rating: 4.5, price: 25 },
    { title: "Mastering Money Manage...", author: "purepearl studio", rating: 4.5, price: 25 },
    { title: "From Idea to Startup Succ...", author: "purepearl studio", rating: 4.5, price: 25 },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 text-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Passion,<br/>Build Your Skills</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {tags.map((tag, i) => (
          <span key={i} className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors border ${i === 0 ? 'bg-[#ccff00] border-[#ccff00] font-medium' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            {tag}
          </span>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((c, i) => (
          <div key={i} className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition ${i === 4 ? 'ring-2 ring-orange-500' : ''}`}>
            <div className="h-48 bg-gray-200 w-full relative">
               <div className="absolute bottom-2 left-2 right-2 flex gap-2">
                 <span className="bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md">17 Lessons</span>
                 <span className="bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md">2 hours 15 mins</span>
               </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg">{c.title}</h3>
                <div className="flex items-center text-sm font-medium text-gray-600 gap-1">
                  {c.rating} <Star className="w-4 h-4 text-gray-300 fill-current" />
                </div>
              </div>
              <p className="text-xs text-[#0f4cff] mb-4">by {c.author}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-full px-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span> Beginner
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3].map(j => <div key={j} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>)}
                  <div className="w-6 h-6 rounded-full bg-[#ccff00] border-2 border-white flex items-center justify-center text-[10px] font-bold">26+</div>
                </div>
              </div>
              
              <div className="text-xl font-bold text-[#0f4cff]">${c.price}<span className="text-sm font-normal text-gray-400">/lifetime</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
