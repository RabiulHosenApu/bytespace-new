import { PenTool, Code, Monitor, Briefcase, TrendingUp, Camera } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Design", icon: <PenTool className="w-8 h-8 text-black" /> },
    { name: "Development", icon: <Code className="w-8 h-8 text-black" /> },
    { name: "IT & Software", icon: <Monitor className="w-8 h-8 text-black" /> },
    { name: "Business", icon: <Briefcase className="w-8 h-8 text-black" /> },
    { name: "Marketing", icon: <TrendingUp className="w-8 h-8 text-black" /> },
    { name: "Photography", icon: <Camera className="w-8 h-8 text-black" /> },
  ];

  return (
    <section className="w-full bg-white py-20 px-4 text-black text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="text-gray-500">At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl w-40 h-40 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#ccff00] flex items-center justify-center mb-4">
              {cat.icon}
            </div>
            <span className="font-medium text-gray-800">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
