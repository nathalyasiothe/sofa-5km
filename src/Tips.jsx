import React from 'react';
import './Dashboard.css';

export default function Tips() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dicas de Ouro</h1>
        <p>Tudo o que você precisa saber para correr com segurança</p>
      </header>

      <main className="dashboard-content">
        <div className="actions-grid" style={{ gridTemplateColumns: '1fr', gap: '15px' }}>
          <div className="action-card" style={{ textAlign: 'left' }}>
            <h4>👟 Escolha do Tênis</h4>
            <p>Não precisa do tênis mais caro do mercado, mas procure um que tenha um bom amortecimento para proteger os joelhos e tornozelos do impacto.</p>
          </div>

          <div className="action-card" style={{ textAlign: 'left' }}>
            <h4>🌬️ Respiração Correta</h4>
            <p>Tente puxar o ar pelo nariz e soltar pela boca de forma ritmada. Se estiver sem fôlego a ponto de não conseguir falar frases curtas, diminua o ritmo!</p>
          </div>

          <div className="action-card" style={{ textAlign: 'left' }}>
            <h4>💧 Hidratação</h4>
            <p>Beba água ao longo do dia. Evite beber grandes quantidades logo antes de correr para não sentir desconforto no estômago.</p>
          </div>
        </div>
      </main>
    </div>
  );
}