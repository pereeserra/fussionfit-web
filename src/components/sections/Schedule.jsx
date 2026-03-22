const Schedule = () => (
  <section
    id="schedules"
    className="scroll-mt-24 bg-[#070707] px-4 py-16 md:px-8"
  >
    <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
      <span className="mb-4 inline-block rounded-full bg-yellow-400/90 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-black shadow-md">
        Obert cada dia
      </span>
      <h3 className="mb-3 text-3xl font-black uppercase text-white md:text-4xl drop-shadow-lg">
        Horari Fussion Fit
      </h3>
      <p className="mb-8 max-w-xl text-base text-[#ccc] md:text-lg">
        Gaudeix de flexibilitat total: <span className="font-semibold text-yellow-400">de 6:00 a 23:00</span> <br className="hidden md:inline" />
        <span className="font-semibold text-yellow-400">365 dies l’any</span>
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400/60 via-yellow-400/0" />
          <span className="px-4 py-2 rounded-lg bg-[#111] border border-yellow-400 text-yellow-400 font-bold text-lg shadow-sm">
            6:00 – 23:00
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-yellow-400/60 via-yellow-400/0" />
        </div>
        <span className="mt-2 text-xs uppercase tracking-widest text-[#aaa]">
          Tots els dies de la setmana
        </span>
      </div>
    </div>
  </section>
);

export default Schedule;