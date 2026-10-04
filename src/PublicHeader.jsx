export default function PublicHeader({ atual, onHome, onContato }) {
  const ir = (e, acao) => {
    e.preventDefault();
    if (acao) acao();
  };

  return (
    <header className="meu-header">
      <div className="logo">Do Sofá aos <span>5Km</span></div>
      <nav>
        <ul className="menu-links">
          <li><a href="#" className={atual === 'home' ? 'ativo' : ''} onClick={(e) => ir(e, onHome)}>Home</a></li>
          <li><a href="#" className={atual === 'contato' ? 'ativo' : ''} onClick={(e) => ir(e, onContato)}>Contato</a></li>
          <li><a href="#" onClick={(e) => ir(e)}>Assinaturas</a></li>
        </ul>
      </nav>
    </header>
  );
}
