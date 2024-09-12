import "../styles/routes/HeroPage.css";
import {
  faChartLine,
  faLock,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <span>Scopri di più</span>
          </button>
        </div>
      </main>
      <section className="heroPage-info-container">
        <div className="card-info">
          <FontAwesomeIcon icon={faChartLine} size="lg" />
          <p>Visualizza l’andamento delle tue spese mensili.</p>
        </div>
        <div className="card-info">
          <FontAwesomeIcon icon={faLock} size="lg" />
          <p>
            Inserisci i dati senza collegare i tuoi veri conti, in tutta
            sicurezza
          </p>
        </div>
        <div className="card-info">
          <FontAwesomeIcon icon={faPiggyBank} size="lg" />
          <p>Imposta piani di risparmio personalizzati</p>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
