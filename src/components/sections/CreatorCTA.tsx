export default function CreatorCTA() {
  return (
    <section className="relative w-full bg-[#0f4cff] text-white py-24 px-4 overflow-hidden text-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Unlock Your Potential as a<br/>Creator with ByteSpace</h2>
        <p className="text-white/80 mb-10 max-w-3xl text-sm md:text-base">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="bg-[#ccff00] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#b3e600] transition">
          Join as Creator
        </button>
      </div>
      
      {/* Abstract Shapes Placeholder */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#ccff00] rounded-full blur-2xl opacity-50 z-0"></div>
    </section>
  );
}
