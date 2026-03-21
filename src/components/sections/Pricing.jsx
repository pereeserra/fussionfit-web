const Pricing = () => (
  <section id="options" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:px-8">
    <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Opcions</h3>
    <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-[#ccc] md:text-base">Opcions adaptades a tu. Demana informació i t’assessoram personalment segons els teus objectius. Sense compromís!</p>
    <div className="grid gap-4 md:grid-cols-3">
      <article className="fusion-card">
        <h4 className="mb-2 text-xl font-extrabold">Accés lliure</h4>
        <p className="text-[#ddd]">Entrena al teu ritme amb accés complet a la sala de màquines, vestidors i zona d’estiraments.</p>
        <a href="#contact" className="btn-primary mt-4 inline-block">Demana informació</a>
      </article>
      <article className="fusion-card">
        <h4 className="mb-2 text-xl font-extrabold">Classes en grup</h4>
        <p className="text-[#ddd]">Sessions dirigides per entrenadors experts. Grups reduïts i atenció personalitzada.</p>
        <a href="#contact" className="btn-primary mt-4 inline-block">Reserva plaça</a>
      </article>
      <article className="fusion-card">
        <h4 className="mb-2 text-xl font-extrabold">Entrenador personal</h4>
        <p className="text-[#ddd]">Assessorament 1:1, planificació i seguiment adaptat als teus objectius.</p>
        <a href="#contact" className="btn-primary mt-4 inline-block">Contacta’ns</a>
      </article>
    </div>
  </section>
);

export default Pricing;
