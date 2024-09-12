import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/routes/HeroDiscover.css";
import heroImg from "/images/heroDiscover.jpg";
import {
  faMagnifyingGlassDollar,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const HeroDiscover = () => {
  return (
    <main className="heroDiscover-container">
      <div className="heroDiscover-title-container">
        <h1>La tua finanza sotto il tuo controllo</h1>
        <h2>
          Un'app semplice e sicura per tracciare le tue spese e i tuoi risparmi.
        </h2>
      </div>
      <div className="heroDiscover-img-container">
        <img src={heroImg} alt="hero image" />
      </div>
      <section>
        <h3>Come funziona l'applicazione</h3>

        <div className="card-info">
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="heroDiscover-step-icon"
          />
          <p>
            Registrati in pochi semplici passi per iniziare a gestire i tuoi
            risparmi
          </p>
        </div>
        <div className="card-info">
          <FontAwesomeIcon icon={faPlusCircle} size="lg" />
          <p>
            Crea ed inserisci manualmente i tuoi conti come banca, casa, budget.
            Nessun collegamento diretto ai tuoi veri conti, tutta la privacy
            nelle tue mani
          </p>
        </div>
        <div className="card-info">
          <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="lg" />
          <p>
            Visualizza grafici chiari e dettagliati sull'andamento delle tue
            spese, risparmi e obbiettivi di risparmio
          </p>
        </div>
      </section>
      <section>
        <h3>I vantaggi dell'app</h3>
        <ul>
          <li>Privacy garantita</li>
          <li>Gestione personalizzata dei conti</li>
          <li>Grafici dettagliati</li>
          <li>obbiettivi di risparmio</li>
        </ul>
      </section>
      <section>
        <h2>Pronto a prendere il controllo delle tue finanze?</h2>
        <button className="cta-btn">Iscriviti gratis!</button>
      </section>
    </main>
  );
};

export default HeroDiscover;
