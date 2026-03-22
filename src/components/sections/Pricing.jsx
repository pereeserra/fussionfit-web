const options = [
  {
    title: "Accés lliure",
    icon: (
      <svg className="w-8 h-8 text-yellow-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
      </svg>
    ),
    description: "Entrena al teu ritme amb accés complet a totes les instal·lacions. Llibertat total per adaptar els teus horaris i rutines.",
    value: "Flexibilitat màxima i autonomia.",
    cta: { label: "Demana informació", href: "#contact" },
  },
  {
    title: "Classes en grup",
    icon: (
      <svg className="w-8 h-8 text-yellow-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75M12 17v-1a4 4 0 00-3-3.87" />
      </svg>
    ),
    description: "Sessions dinàmiques amb entrenadors experts. Grups reduïts per garantir atenció personalitzada i motivació constant.",
    value: "Comunitat, energia i suport professional.",
    cta: { label: "Reserva plaça", href: "#contact" },
  },
  {
    title: "Entrenador personal",
    icon: (
      <svg className="w-8 h-8 text-yellow-400 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7" />
      </svg>
    ),
    description: "Assessorament 1:1, planificació i seguiment adaptat als teus objectius. Resultats reals amb un coach al teu costat.",
    value: "Atenció exclusiva i progrés garantit.",
    cta: { label: "Contacta’ns", href: "#contact" },
  },
];

const Pricing = () => (
  <section
    id="options"
    className="scroll-mt-24 mx-auto max-w-6xl px-4 py-20 md:px-8"
  >
    <h3 className="anchor-title mb-3 text-center text-3xl font-black uppercase tracking-wide text-yellow-400 drop-shadow-lg md:text-4xl">
      Opcions Fussion Fit
    </h3>
    <p className="mx-auto mb-12 max-w-2xl text-center text-base text-[#e5e5e5] md:text-lg">
      Descobreix la varietat d’opcions que t’oferim a Fussion Fit Sa Pobla. Tant si vols entrenar pel teu compte, formar part d’una comunitat o rebre atenció personalitzada, tenim la solució perfecta per a tu. <span className="text-yellow-400 font-semibold">Tria el teu camí, nosaltres t’acompanyam.</span>
    </p>
    <div className="grid gap-8 md:grid-cols-3">
      {options.map((opt, idx) => (
        <article
          key={opt.title}
          className="relative flex flex-col items-center rounded-2xl bg-[#111] border border-[#222] shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300 px-7 py-10 text-center group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] rounded-full border-4 border-yellow-400 shadow-md p-2">
            {opt.icon}
          </div>
          <h4 className="mt-8 mb-2 text-xl font-extrabold text-yellow-400 uppercase tracking-wide">
            {opt.title}
          </h4>
          <p className="mb-3 text-[#e5e5e5]">{opt.description}</p>
          <span className="mb-5 block text-sm font-medium text-yellow-300">{opt.value}</span>
          <a
            href={opt.cta.href}
            className="btn-primary inline-block rounded-full bg-yellow-400 text-black font-bold px-6 py-2 mt-auto shadow-md hover:bg-yellow-300 transition-colors duration-200"
          >
            {opt.cta.label}
          </a>
        </article>
      ))}
    </div>
    <div className="mt-14 flex flex-col items-center gap-2 text-center">
      <span className="text-[#bbb] text-sm">Horari: <span className="text-yellow-400 font-semibold">6:00–23:00</span> cada dia, 365 dies l’any</span>
      <a
        href="tel:+34604417552"
        className="text-yellow-400 font-bold text-lg hover:underline"
      >
        +34 604 41 75 52
      </a>
      <span className="text-[#888] text-xs">Visita’ns a Sa Pobla i descobreix Fussion Fit!</span>
    </div>
  </section>
);

export default Pricing;