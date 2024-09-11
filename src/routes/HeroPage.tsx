import "../styles/routes/HeroPage.css";
const HeroPage = () => {
  return (
    <div className="heroPage-container">
      <main className="heroPage-main">
        <div>
          <h1>My balance</h1>
          <h2>Gestisci le tue finanze in modo semplice</h2>
        </div>
        <p>
          Mantieni traccia delle tue finanze, crea piani di risparmio e
          condividi i tuoi conti con chi vuoi.
        </p>
        <div className="heroPage-btn-container">
          <button className="cta-btn">
            <span>Iscrivi ora gratis!</span>
          </button>
          <button className="secondary-btn">
            <span>Più informazioni</span>
          </button>
        </div>
      </main>
      <section className="heroPage-info">
        <div className="card-info">
          <p>Visualizza l’andamento delle tue spese mensili.</p>
        </div>
        <div className="card-info">
          <p>Condividi i conti con chi vuoi, in tutta sicurezza</p>
        </div>
        <div className="card-info">
          <p>Imposta piani di risparmio personalizzati</p>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
