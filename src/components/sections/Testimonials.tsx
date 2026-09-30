export default function Testimonials() {
  const testimonials = [
    { name: "Sarah M.", role: "Enthusiastic Learner", text: "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"" },
    { name: "James L.", role: "Lifelong Learner", text: "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"" },
    { name: "Alex B.", role: "Inspired Creator", text: "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#f0f4ff] to-[#f4ffe6] py-24 px-4 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Discover What Our<br/>Community Is Saying</h2>
        <p className="text-gray-600 text-sm md:text-base">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-sm text-[#0f4cff]">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
