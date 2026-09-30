/** Soft lime / blue radial glows used behind the light #fafafa sections. */
export default function GlowBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-canvas">
      <div className="absolute top-[-10%] left-[-10%] h-[70%] max-h-[1137px] w-[80%] max-w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgb(212_251_32/0.35),transparent)]" />
      <div className="absolute top-[20%] right-[-25%] h-[70%] max-h-[1137px] w-[80%] max-w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgb(0_59_226/0.12),transparent)]" />
      <div className="absolute bottom-[-10%] left-[-20%] h-[60%] max-h-[1137px] w-[70%] max-w-[1137px] rounded-full bg-[radial-gradient(closest-side,rgb(212_251_32/0.3),transparent)]" />
    </div>
  );
}
