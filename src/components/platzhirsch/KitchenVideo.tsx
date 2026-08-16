import kitchenVideo from "@/assets/kitchen.mp4.asset.json";
import poster from "@/assets/spread.jpg";
import { mapRange, useScrollProgress } from "@/hooks/use-scroll-progress";

export function KitchenVideo() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  const inset = mapRange(progress, 0, 0.5, 18, 0);
  const radius = mapRange(progress, 0, 0.5, 40, 0);
  const scale = mapRange(progress, 0.5, 1, 1, 1.12);

  return (
    <section ref={ref} className="relative h-[300vh] bg-soot">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(${inset}% ${inset}% ${inset}% ${inset}% round ${radius}px)`,
          }}
        >
          <video
            src={kitchenVideo.url}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover grayscale brightness-75 contrast-125"
            style={{ transform: `scale(${scale})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-soot via-soot/20 to-soot/60" />
        </div>

        <div className="relative flex h-full flex-col items-start justify-end gap-4 px-6 pb-28 md:px-16">
          <span className="text-xs uppercase tracking-[0.35em] text-ember">Aus der Küche</span>
          <h2
            className="display max-w-3xl text-[10vw] leading-[0.85] md:text-[7vw]"
            style={{ transform: `translateY(${(1 - progress) * 60}px)`, opacity: mapRange(progress, 0.1, 0.45, 0, 1) }}
          >
            Butter, Hitze,
            <br />
            <span className="text-ember">Geduld.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
