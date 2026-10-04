import React, { useState } from 'react';
import './Dashboard.css';

export default function Workouts() {
  const [concluido, setConcluido] = useState(false);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Plano de Treinos</h1>
        <p>Sua progressão gradual rumo aos 5km</p>
      </header>

      <main className="dashboard-content">
        <section className="welcome-card">
          <h2>Semana 1: O Começo de Tudo</h2>
          <p>
            O foco desta semana não é velocidade, mas sim adaptação. Alterne entre 1 minuto de trote leve e 2 minutos de caminhada. Repita por 20 minutos.
          </p>
        </section>

        <div className="actions-grid">
          <div className="action-card">
            <h4>Treino A (Terça)</h4>
            <p>5 min aquecimento + 20 min (1' trote / 2' caminhada)</p>
          </div>
          <div className="action-card">
            <h4>Treino B (Quinta)</h4>
            <p>5 min aquecimento + 20 min (1' trote / 2' caminhada)</p>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button 
            className={concluido ? 'dashboard-btn done' : 'dashboard-btn'}
            onClick={() => setConcluido(true)}
          >
            {concluido ? '🎉 Treino Concluído com Sucesso!' : 'Marcar Treino como Concluído ✅'}
          </button>
        </div>
      </main>
    </div>
  );
}