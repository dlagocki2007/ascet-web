export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full text-center space-y-12">
          <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[10rem] font-semibold tracking-[-0.04em] leading-none">
            ASCET<span className="align-top text-3xl md:text-5xl">™</span>
          </h1>

          <div className="space-y-3">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-zinc-200">
              Discipline Is Freedom
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-zinc-500">
              Dyscyplina to wolność
            </p>
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="flex items-center justify-center px-6 py-40">
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
