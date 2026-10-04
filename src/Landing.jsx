import { useRef } from 'react';
import PublicHeader from './PublicHeader';
import './Landing.css';

export default function Landing({ onLogin, onContato }) {
  const descricaoRef = useRef(null);

  const irParaDescricao = (e) => {
    e.preventDefault();
    descricaoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const entrar = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="landing">
      <PublicHeader
        atual="home"
        onHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onContato={onContato}
      />

      <section className="hero">
        <div className="hero-text">
          <h1>Do Sofá aos 5Km</h1>
          <p className="subtitulo">Transforme pequenos passos em grandes conquistas.</p>
          <div className="button_inicio">
            <a href="#" className="btn" onClick={entrar}>Inicie sua jornada</a>
            <a href="#" className="btn secondary" onClick={irParaDescricao}>Conheça o programa</a>
          </div>
        </div>
      </section>

      <section className="sobre" ref={descricaoRef}>
        <h2>Um ponto de partida para quem nunca correu</h2>
        <div className="descricao">
          <p>
            O programa conecta pessoas fisicamente inativas a uma metodologia de evolução gradual e segura,
            com foco em inclusão e bem-estar. Cada etapa vira uma conquista que você consegue medir.
          </p>
        </div>
        <div className="formas">
          <div>
            <h3>Presencial</h3>
            <p>Treinos acompanhados nas orlas e parques do Rio de Janeiro.</p>
          </div>
          <div>
            <h3>Online</h3>
            <p>Acompanhamento flexível, no seu horário e no seu ritmo.</p>
          </div>
          <div>
            <h3>Aplicativo</h3>
            <p>Metas e conquistas gamificadas, além de uma central de conhecimento para iniciantes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
