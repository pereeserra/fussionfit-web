const services = [
  {
    icon: (
      // Dumbbell icon (Heroicons outline)
      <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5l11 11M17.5 6.5l-11 11M3 9.5v5M21 9.5v5M7.5 3h-2A2.5 2.5 0 003 5.5v2M16.5 21h2A2.5 2.5 0 0021 18.5v-2" />
      </svg>
    ),
    title: "Sala de musculació moderna",
    desc: "Equipament d’última generació i espais amplis per entrenar amb comoditat i seguretat.",
  },
  {
    icon: (
      // Heartbeat icon (custom SVG)
      <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13c2.5-4 7-4 9.5 0 2.5-4 7-4 9.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6" />
      </svg>
    ),
    title: "Zona càrdio i funcional",
    desc: "Cintes, el·líptiques, rem, box i material funcional per a tot tipus d’entrenament.",
  },
  {
    icon: (
      // User support icon (Heroicons outline)
      <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-1a4 4 0 014-4h0a4 4 0 014 4v1" />
      </svg>
    ),
    title: "Assessorament personalitzat",
    desc: "Entrena amb el suport d’un equip proper i professional. T’ajudem a aconseguir els teus objectius.",
  },
  {
    icon: (
      // People icon (Heroicons outline)
      <svg className="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth={2.2} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 20v-2a4 4 0 00-3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Ambient proper i professional",
    desc: "A Fussion Fit et sentiràs com a casa. Tracte personal, bon ambient i comunitat real.",
  },
];

const Services = () => (
  <section id="services" className="scroll-mt-24 bg-[#070707] px-4 py-16 md:px-8">
    <div className="mx-auto max-w-6xl">
      <h3 className="mb-4 text-center text-3xl font-black uppercase tracking-tight text-yellow-400 md:text-4xl drop-shadow-lg">
        Serveis Fussion Fit
      </h3>
      <p className="mx-auto mb-10 max-w-2xl text-center text-base text-[#e5e5e5] md:text-lg">
        Obert de <span className="font-semibold text-yellow-400">6:00 a 23:00</span> cada dia, 365 dies l’any.<br />
        Vine a descobrir el teu nou gimnàs de referència a Sa Pobla.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group flex flex-col items-center rounded-2xl border border-[#222] bg-[#111]/90 px-6 py-8 shadow-lg transition hover:border-yellow-400 hover:shadow-yellow-400/20"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#181818] shadow-inner group-hover:bg-yellow-400/10">
              {icon}
            </div>
            <h4 className="mb-2 text-center text-lg font-bold uppercase tracking-wide text-yellow-400">{title}</h4>
            <p className="text-center text-sm text-[#ccc]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;