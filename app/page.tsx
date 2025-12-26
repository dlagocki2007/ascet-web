export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white antialiased">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="relative max-w-6xl w-full text-center space-y-14">
          
          {/* subtle glow */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-zinc-800/20 rounded-full" />

          <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[10rem] font-semibold tracking-[-0.05em] leading-none">
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

      {/* separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      {/* FILOZOFIA */}
      <section className="flex justify-center px-6 py-40">
        <div className="max-w-3xl w-full rounded-2xl border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-sm p-12 space-y-10">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            Filozofia
          </h2>

          <p className="text-xl sm:text-2xl font-light leading-relaxed text-zinc-300">
            ASCET™ to system oparty na ciszy, procesie i samokontroli.
            Nie szukamy bodźców. Budujemy strukturę.
          </p>

          <p className="text-xl sm:text-2xl font-light leading-relaxed text-zinc-400">
            To ścieżka dla tych, którzy nie potrzebują motywacji,
            bo posiadają dyscyplinę.
          </p>
        </div>
      </section>

      {/* separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      {/* MANIFEST */}
      <section className="flex justify-center px-6 py-40">
        <div className="max-w-3xl w-full rounded-2xl border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-sm p-12 space-y-14">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-100">
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

      {/* separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      {/* PROTOKOŁY */}
      <section className="flex justify-center px-6 py-40">
        <div className="max-w-5xl w-full space-y-14">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            Protokoły ASCET
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              ["Ciało", "Rytm. Regeneracja. Minimalizm ruchu."],
              ["Umysł", "Fokus. Cisza informacyjna. Samokontrola."],
              ["Proces", "Małe kroki. Codzienność. Konsekwencja."],
              ["Dyscyplina", "Bez negocjacji. Bez impulsów. Bez wymówek."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-sm p-8 space-y-3"
              >
                <h3 className="text-xl font-medium text-zinc-100">
                  {title}
                </h3>
                <p className="font-light text-zinc-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 text-center text-zinc-600 text-sm">
        ASCET™ — Discipline Is Freedom
      </footer>

    </main>
  );
}
