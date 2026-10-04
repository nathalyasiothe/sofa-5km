import React from 'react';
import './Dashboard.css';

export default function Dashboard({ userName, onNavigate }) {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Sofá aos 5km</h1>
        <p>Do sedentarismo à sua primeira corrida de 5 quilômetros!</p>
      </header>

      <main className="dashboard-content">
        {/* Cartão de Boas-Vindas */}
        <section className="welcome-card">
          <h2>Olá, {userName || 'Corredor(a)'}! 👋</h2>
          <p>
            Seu perfil foi configurado com sucesso. O primeiro passo — que é tomar a decisão de mudar — você já deu. 
            Agora, nossa jornada rumo aos 5km começa de verdade, respeitando o seu ritmo e os seus limites.
          </p>
        </section>

        {/* Seção de Progresso da Meta */}
        <section className="progress-section">
          <h3>Sua Meta: 5km</h3>
          <p className="progress-description">Progresso atual na jornada:</p>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: '20%' }}></div>
          </div>
          <div className="progress-stats">
            <span>Início: 0km</span>
            <span>Atual: 1km (Foco na consistência)</span>
            <span>Meta: 5km</span>
          </div>
        </section>

        {/* Blocos de Ação Lado a Lado */}
        <div className="actions-grid">
          <div className="action-card">
            <h4>Seu Plano de Treino</h4>
            <p>Acompanhe suas metas semanais e veja sua evolução passo a passo.</p>
            <button className="dashboard-btn" onClick={() => onNavigate('workouts')}>
              Ver Treinos
            </button>
          </div>

          <div className="action-card">
            <h4>Dicas de Corrida</h4>
            <p>Aprenda sobre postura, respiração, escolha de tênis e prevenção de lesões.</p>
            <button className="dashboard-btn secondary" onClick={() => onNavigate('tips')}>
              Ler Dicas
            </button>
          </div>
        </div>

        {/* Sobre o Projeto */}
        <section className="info-section">
          <h3>Sobre o "Sofá aos 5km"</h3>
          <p>
            Este é um espaço dedicado a quem quer sair do sofá e criar o hábito da corrida de forma gradual e segura. 
            Não importa se você nunca correu antes; aqui nós acreditamos que consistência vale mais do que velocidade. 
            Cada caminhada trocada por trote é uma vitória rumo à linha de chegada! Desenvolvido por Sabrina, Nathalya e Mario.
          </p>
        </section>
      </main>
    </div>
  );
}