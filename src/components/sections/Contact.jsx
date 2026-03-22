const googleMapsUrl = 'https://maps.app.goo.gl/ND1nDq1FM3XEJqNWA';

const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-24 mx-auto max-w-4xl px-4 py-16 md:px-8"
  >
    <div className="mb-10 text-center">
      <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-fussion-500 drop-shadow-sm">
        Contacta amb Fussion Fit
      </h3>
      <p className="mt-3 text-base md:text-lg text-[#ccc] font-medium">
        Vine a conèixer el teu nou gimnàs premium a Sa Pobla.<br className="hidden md:inline" />
        Truca, escriu per WhatsApp o visita’ns sense compromís.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {/* Targeta de confiança i dades */}
      <div className="bg-[#111] rounded-2xl shadow-lg border border-[#222] p-7 flex flex-col justify-between min-h-[340px]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-3 h-3 rounded-full bg-fussion-500" />
            <span className="uppercase text-xs font-bold tracking-widest text-fussion-500">
              Obert cada dia 6:00–23:00
            </span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Fussion Fit · Sa Pobla</h4>
          <p className="text-[#ddd] mb-2">
            <span className="font-semibold text-fussion-500">Adreça:</span> Carrer Major, 122, Sa Pobla
          </p>
          <p className="text-[#ddd] mb-2">
            <span className="font-semibold text-fussion-500">Accés:</span> Aparcament gratuït i transport local.
          </p>
          <p className="text-[#aaa] text-sm mb-4">
            Sense pagament online. Només vine i entrena.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href="tel:+34604417552"
            className="flex-1 min-w-[120px] btn-primary text-base py-2 font-semibold"
          >
            Truca ara
          </a>
          <a
            href="https://wa.me/34604417552"
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[120px] btn-secondary text-base py-2 font-semibold"
          >
            WhatsApp
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[120px] btn-secondary text-base py-2 font-semibold"
          >
            Com arribar
          </a>
        </div>
        <div className="mt-5">
          <p className="text-[#ccc] text-xs">
            Telèfon: <a href="tel:+34604417552" className="hover:text-fussion-500 font-semibold">+34 604 41 75 52</a>
          </p>
        </div>
      </div>
      {/* Formulari de contacte */}
      <form
        className="bg-[#111] rounded-2xl shadow-lg border border-[#222] p-7 grid gap-4"
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <h4 className="text-lg font-bold text-white mb-2">Demana informació</h4>
        <label className="text-sm font-semibold text-[#ccc]" htmlFor="name">
          Nom
        </label>
        <input
          id="name"
          type="text"
          placeholder="El teu nom"
          className="rounded-lg border border-[#333] bg-[#181818] px-3 py-2 text-sm text-white outline-none focus:border-fussion-500 transition"
          required
        />
        <label className="text-sm font-semibold text-[#ccc]" htmlFor="email">
          Correu electrònic
        </label>
        <input
          id="email"
          type="email"
          placeholder="email@exemple.com"
          className="rounded-lg border border-[#333] bg-[#181818] px-3 py-2 text-sm text-white outline-none focus:border-fussion-500 transition"
          required
        />
        <label className="text-sm font-semibold text-[#ccc]" htmlFor="message">
          Missatge
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Quin és el teu objectiu?"
          className="rounded-lg border border-[#333] bg-[#181818] px-3 py-2 text-sm text-white outline-none focus:border-fussion-500 transition"
          required
        />
        <button
          type="submit"
          className="btn-primary mt-2 text-base font-semibold py-2"
        >
          Enviar sol·licitud
        </button>
        <p className="text-xs text-[#888] mt-2">
          Et respondrem el mateix dia. Sense compromís.
        </p>
      </form>
    </div>
  </section>
);

export default Contact;