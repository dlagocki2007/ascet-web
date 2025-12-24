export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center space-y-10">
          <h1 className="text-7xl sm:text-8xl md:text-[12rem] font-bold tracking-tight leading-none">
            ASCET™
          </h1>

          <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Discipline Is Freedom
          </p>

          <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-zinc-400">
            Dyscyplina to wolność
          </p>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl w-full space-y-10 text-left">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-200">
            Manifest
          </h2>

          <div className="space-y-6 text-xl sm:text-2xl font-light text-zinc-300">
            <p>ASCET™ to wybór świadomy.</p>
            <p>Dyscyplina ponad motywację.</p>
            <p>Cisza ponad hałas.</p>
            <p>Proces ponad dopaminę.</p>
            <p>Długoterminowe myślenie ponad chwilowy impuls.</p>
            <p>Budujemy siłę, która nie potrzebuje oklasków.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
