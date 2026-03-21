const googleMapsUrl = 'https://maps.app.goo.gl/ND1nDq1FM3XEJqNWA';

const Contact = () => (
  <section id="contact" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:px-8">
    <h3 className="anchor-title mb-4 text-center text-2xl font-black uppercase md:text-3xl">Contacte</h3>
    <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-[#ccc] md:text-base">Vine a provar una classe gratis o escriu-nos per WhatsApp. El primer pas cap al teu nou tu és directe.</p>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="fusion-card">
        <h4 className="mb-3 text-xl font-bold">Dades</h4>
        <p className="text-[#ddd]"><span className="font-semibold text-fussion-500">Telèfon:</span> <a href="tel:+34604417552" className="hover:text-fussion-500">+34 604 41 75 52</a></p>
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
);

export default Contact;
