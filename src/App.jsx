const googleMapsUrl = 'https://maps.app.goo.gl/ND1nDq1FM3XEJqNWA';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#333] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <h1 className="text-base font-black tracking-wider text-fussion-500 md:text-lg">Fussion Fit</h1>
          <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-white md:text-sm">
            <a href="#services" className="hover:text-fussion-500">Serveis</a>
            <a href="#schedules" className="hover:text-fussion-500">Horaris</a>
            <a href="#options" className="hover:text-fussion-500">Opcions</a>
            <a href="#contact" className="hover:text-fussion-500">Contacte</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="hero" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,199,0,0.15),_transparent)]">
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:py-28">
            <p className="rounded-full border border-fussion-500 bg-black/40 px-4 py-1 text-xs uppercase tracking-wider text-fussion-500">Sa Pobla · Obert 6–23h</p>
            <h2 className="animate-fadeInUp text-3xl font-black uppercase leading-tight md:text-5xl">El teu gimnàs de confiança a Sa Pobla</h2>
            <p className="animate-fadeInUp max-w-2xl text-sm text-[#d7d7d7] md:text-lg">Entrena amb esperit local, equipaments top i un ambient que et porta al millor de tu. Sense compromisos, només resultats.</p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">Demana informació</a>
              <a href="tel:+34604417552" className="btn-secondary">Trucar ara</a>
            </div>

            <div className="grid grid-cols-1 gap-3 text-left text-sm md:grid-cols-3 md:text-base">
              <div className="rounded-xl border border-[#222] bg-[#111]/70 px-4 py-3">
                <p className="text-fussion-500 font-bold">Horari ampli</p>
                <p>6:00 - 23:00 cada dia, flexibilitat completa.</p>
              </div>
              <div className="rounded-xl border border-[#222] bg-[#111]/70 px-4 py-3">
                <p className="text-fussion-500 font-bold">Consulta les opcions disponibles</p>
                <p>Accés lliure a sala, classes i assessorament bàsic.</p>
              </div>
              <div className="rounded-xl border border-[#222] bg-[#111]/70 px-4 py-3">
                <p className="text-fussion-500 font-bold">Ambient proper</p>
                <p>Equip local que et motiva des del primer dia.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Serveis destacats</h3>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-[#ccc] md:text-base">A Fussion Fit transformem cada sessió en progrés: entrenament intel·ligent, grup reduït i suport personalitzat.</p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="fusion-card">
              <h4 className="mb-2 text-xl font-extrabold">Sala de màquines</h4>
              <p className="text-[#ddd]">Equipament d’última generació per cardio, força i funcional. Ràpid entrenament, resultats visibles.</p>
            </article>
            <article className="fusion-card">
              <h4 className="mb-2 text-xl font-extrabold">Classes en grup reduït</h4>
              <p className="text-[#ddd]">Sessions d’alta intensitat i tonificació amb entrenadors experts. Atenció individual en grups petits.</p>
            </article>
            <article className="fusion-card">
              <h4 className="mb-2 text-xl font-extrabold">Entrenador personal</h4>
              <p className="text-[#ddd]">Plans a mida, seguiment setmanal i adaptació en temps real per assolir objectius concrets.</p>
            </article>
          </div>
        </section>

        <section id="schedules" className="bg-[#070707] px-4 py-16 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Horaris</h3>
            <p className="mx-auto mb-6 max-w-3xl text-center text-sm text-[#ccc] md:text-base">Obert de 6:00 a 23:00 cada dia de la setmana, 365 dies l’any.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#222] bg-[#111]/80">
              <table className="w-full min-w-[440px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr className="bg-[#151515] text-[#fff]">
                    <th className="px-4 py-3">Dia</th>
                    <th className="px-4 py-3">Horari sala</th>
                    <th className="px-4 py-3">Classes</th>
                  </tr>
                </thead>
                <tbody>
                  {['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'].map((dia) => (
                    <tr key={dia} className="border-t border-[#222] hover:bg-[#1a1a1a]">
                      <td className="px-4 py-3 font-bold">{dia}</td>
                      <td className="px-4 py-3">6:00 – 23:00</td>
                      <td className="px-4 py-3">{dia === 'Dissabte' ? 'Espai lliure + HIIT' : dia === 'Diumenge' ? 'Recuperació activa' : '18:00 – 20:00 | Cross+Fit'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="options" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Opcions</h3>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-[#ccc] md:text-base">T’informam personalment de les opcions disponibles. Sense compromisos, sense pagaments online. Apunta’t avui i comença a entrenar demà.</p>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="fusion-card">
              <h4 className="mb-2 text-xl font-extrabold">Accés lliure</h4>
              <p className="text-[#ddd]">Accés lliure a la sala de màquines, vestidors i zone d’estiraments. Consulta les condicions.</p>
              <a href="#contact" className="btn-primary mt-4 inline-block">Demana informació</a>
            </article>
            <article className="fusion-card">
              <h4 className="mb-2 text-xl font-extrabold">Classes en grup</h4>
              <p className="text-[#ddd]">Classe cross, funcionalitat i HIIT amb màxim 10 persones. Atenció personalitzada.</p>
              <a href="#contact" className="btn-primary mt-4 inline-block">Reserva plaça</a>
            </article>
            <article className="fusion-card">
              <h4 className="mb-2 text-xl font-extrabold">Entrenador personal</h4>
              <p className="text-[#ddd]">Assessorament 1:1, planificació i seguiment adaptat als teus objectius.</p>
              <a href="#contact" className="btn-primary mt-4 inline-block">Contacta’ns</a>
            </article>
          </div>
        </section>

        <section id="testimonials" className="bg-[#070707] px-4 py-16 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Opinions</h3>
            <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-[#ccc] md:text-base">La nostra comunitat recomana Fussion Fit: abans i després de cada entrenament.</p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: 'Marina', quote: 'He guanyat força i he baixat 5 kg en 8 setmanes. Equip proper i molt motivador.' },
                { name: 'Joan', quote: 'Les classes reduïdes són el millor: atenció personalitzada i ambient d’alt nivell.' },
                { name: 'Clara', quote: 'Sense estrès, només progressos constants i un ambient excepcional a Sa Pobla.' },
              ].map((t) => (
                <blockquote key={t.name} className="fusion-card">
                  <p className="mb-3 text-[#ddd]">“{t.quote}”</p>
                  <footer className="text-sm font-bold text-fussion-500">{t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Contacte</h3>
          <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-[#ccc] md:text-base">Vine a provar una classe gratis o escriu-nos per WhatsApp. El primer pas cap al teu nou tu és directe.</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="fusion-card">
              <h4 className="mb-3 text-xl font-bold">Dades</h4>
              <p className="text-[#ddd]"><span className="font-semibold text-fussion-500">Telèfon:</span> <a href="tel:+34604417552" className="hover:text-fussion-500">+34 604 417 552</a></p>
              <p className="text-[#ddd]"><span className="font-semibold text-fussion-500">WhatsApp:</span> <a href="https://wa.me/34604417552" target="_blank" rel="noreferrer" className="hover:text-fussion-500">xerrar ara</a></p>
              <p className="text-[#ddd]"><span className="font-semibold text-fussion-500">Adreça:</span> Carrer Major, 122, Sa Pobla</p>
              <p className="text-[#ddd]"><span className="font-semibold text-fussion-500">Accés:</span> estacionament gratuït i transport local.</p>
              <p className="mt-4 text-sm">Sense pagament online. Tan sols apareix i entrenaràs.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="tel:+34604417552" className="btn-primary">Truca</a>
                <a href="https://wa.me/34604417552" target="_blank" rel="noreferrer" className="btn-secondary">WhatsApp</a>
                <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">Com arribar</a>
              </div>
            </div>

            <form className="fusion-card grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <label className="text-sm font-semibold" htmlFor="name">Nom</label>
              <input id="name" type="text" placeholder="Nom" className="rounded-lg border border-[#333] bg-[#111] px-3 py-2 text-sm text-white outline-none focus:border-fussion-500" required />

              <label className="text-sm font-semibold" htmlFor="email">Correu</label>
              <input id="email" type="email" placeholder="email@exemple.com" className="rounded-lg border border-[#333] bg-[#111] px-3 py-2 text-sm text-white outline-none focus:border-fussion-500" required />

              <label className="text-sm font-semibold" htmlFor="message">Missatge</label>
              <textarea id="message" rows="4" placeholder="Digueu-nos el vostre objectiu" className="rounded-lg border border-[#333] bg-[#111] px-3 py-2 text-sm text-white outline-none focus:border-fussion-500" required />

              <button type="submit" className="btn-primary">Enviar sol·licitud</button>
            </form>
          </div>
        </section>

        <section className="bg-[#050505] px-4 py-8 text-center text-xs text-[#aaa] md:px-8">
          © {new Date().getFullYear()} Fussion Fit · Gimnàs a Sa Pobla · Registrar la teva visita ara.
        </section>
      </main>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a href="tel:+34604417552" className="btn-primary px-4 py-2 text-xs">Trucar</a>
        <a href="https://wa.me/34604417552" target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">WhatsApp</a>
      </div>
    </div>
  )
}

export default App
