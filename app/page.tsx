export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      
      {/* HERO WITH VIDEO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/ascet-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl w-full text-center px-6 space-y-12">
          <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[10rem] font-semibold tracking-[-0.04em] leading-none">
            ASCET<span className="align-top text-3xl md:text-5xl">™</span>
          </h1>

          <div className="space-y-3">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-zinc-200">
              Discipline Is Freedom
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-zinc-400">
              Dyscyplina to wolność
            </p>
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="flex items-center justify-center px-6 py-40 bg-black">
        <div className="max-w-3xl w-full space-y-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-100">
            Manifest
          </h2>

          <div className="space-y-8 text-xl sm:text-2xl leading-relaxed font-light text-zinc-300">
            <p>ASCET™ to wybór świadomy.</p>
            <p>Dyscyplina ponad motywację.</p>
            <p>Cisza ponad hałas.</p>
            <p>Proces ponad dopaminę.</p>
            <p>Długoterminowe myślenie ponad chwilowy impuls.</p>
            <p className="text-zinc-400">
              Budujemy siłę, która nie potrzebuje oklasków.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
