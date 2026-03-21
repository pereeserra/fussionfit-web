const Schedule = () => (
  <section id="schedules" className="scroll-mt-24 bg-[#070707] px-4 py-16 md:px-8">
    <div className="mx-auto max-w-6xl">
      <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Horaris</h3>
      <p className="mx-auto mb-6 max-w-3xl text-center text-sm text-[#ccc] md:text-base">Obert de 6:00 a 23:00 cada dia de la setmana, 365 dies l’any.</p>
      <div className="overflow-x-auto rounded-2xl border border-[#222] bg-[#111]/80">
        <table className="w-full min-w-[440px] border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr className="bg-[#151515] text-[#fff]">
              <th className="px-4 py-3">Dia</th>
              <th className="px-4 py-3">Horari</th>
            </tr>
          </thead>
          <tbody>
            {['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'].map((dia) => (
              <tr key={dia} className="border-t border-[#222] hover:bg-[#1a1a1a]">
                <td className="px-4 py-3 font-bold">{dia}</td>
                <td className="px-4 py-3">6:00 – 23:00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Schedule;
