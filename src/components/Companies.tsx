export default function Companies() {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
  return (
    <section className="w-full bg-white py-10 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-2 font-bold text-xl text-gray-500">
            <div className="w-6 h-6 rounded-full bg-gray-500"></div>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
