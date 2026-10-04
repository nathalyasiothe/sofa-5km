import './Navbar.css';

export default function Navbar({ currentView, onNavigate, onSair }) {
  const links = [
    { id: 'dashboard', label: 'início' },
    { id: 'workouts', label: 'treinos' },
    { id: 'tips', label: 'dicas' },
    { id: 'contato', label: 'contato' },
    { id: 'profile', label: 'perfil' },
  ];

  const clicar = (e, acao) => {
    e.preventDefault();
    acao();
  };

  return (
    <header className="app-header">
      <div className="app-logo">Do Sofá aos <span>5Km</span></div>
      <nav>
        <ul className="app-menu">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href="#"
                className={currentView === l.id ? 'ativo' : ''}
                onClick={(e) => clicar(e, () => onNavigate(l.id))}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={(e) => clicar(e, onSair)}>sair</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}