import PublicHeader from './PublicHeader';
import './Contato.css';

// Para colocar foto: salve a imagem na pasta "public" e troque foto: null por foto: '/mario.jpg'
// Para mostrar Instagram/LinkedIn, adicione instagram: 'https://...' ou linkedin: 'https://...' na pessoa.
const criadores = [
  {
    nome: 'Mario Sergio',
    tag: 'Dev Lead',
    funcao: 'Desenvolvedor',
    bio: 'Responsável pela arquitetura visual e interface do usuário da plataforma.',
    foto: null,
    email: 'mailto:criador1@email.com',
  },
  {
    nome: 'Sabrina',
    tag: 'Fullstack',
    funcao: 'Desenvolvedora',
    bio: 'Especialista na lógica do projeto, rotas de treino e integração de dados.',
    foto: null,
    email: 'mailto:criador2@email.com',
  },
  {
    nome: 'Nathalya',
    tag: 'Design',
    funcao: 'Designer & Conteúdo',
    bio: 'Focada na experiência do usuário, na acessibilidade e na jornada motivacional.',
    foto: null,
    email: 'mailto:criador3@email.com',
  },
];

const icone = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export default function Contato({ publico, onHome, onContato }) {
  return (
    <div className="contato-pagina">
      {publico && <PublicHeader atual="contato" onHome={onHome} onContato={onContato} />}

      <main className="contato-hero">
        <div className="hero-header">
          <span className="badge">A equipe por trás do projeto</span>
          <h1>Quem move o <span>Sofá aos 5Km</span></h1>
          <p>
            Conheça os criadores que desenvolveram a plataforma para transformar a sua rotina
            e levar a sua caminhada até os primeiros 5 km.
          </p>
        </div>

        <div className="cards-criadores">
          {criadores.map((c) => (
            <article className="card-criador" key={c.nome}>
              <div className="avatar-wrapper">
                {c.foto ? (
                  <img className="foto-criador" src={c.foto} alt={`Foto de ${c.nome}`} />
                ) : (
                  <div className="foto-criador iniciais" aria-hidden="true">{c.nome[0]}</div>
                )}
                <span className="tag-role">{c.tag}</span>
              </div>

              <h3>{c.nome}</h3>
              <span className="funcao">{c.funcao}</span>
              <p>{c.bio}</p>

              <div className="redes-sociais">
                {c.instagram && (
                  <a href={c.instagram} aria-label={`Instagram de ${c.nome}`} target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" {...icone}>
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.6" />
                    </svg>
                  </a>
                )}
                {c.linkedin && (
                  <a href={c.linkedin} aria-label={`LinkedIn de ${c.nome}`} target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" {...icone}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
                <a href={c.email} aria-label={`E-mail de ${c.nome}`} title="E-mail">
                  <svg width="18" height="18" viewBox="0 0 24 24" {...icone}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
