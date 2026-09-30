/** Soft lime / blue blurred glows used behind light sections. */
export default function GlowBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gray-50/60">
      <div className="absolute top-0 left-1/3 h-80 w-80 rounded-full bg-lime/40 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-lime/30 blur-3xl" />
    </div>
  );
}
