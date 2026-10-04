import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Workouts from './Workouts';
import Tips from './Tips';
import UserProfile from './UserProfile';
import Landing from './Landing';
import Navbar from './Navbar';
import Contato from './Contato';
import './App.css';

export default function App() {
  // Telas: 'dashboard', 'workouts', 'tips' ou 'profile'
  const [currentView, setCurrentView] = useState('dashboard');
  const [logado, setLogado] = useState(false);
  const [paginaPublica, setPaginaPublica] = useState('home');

  if (!logado) {
    if (paginaPublica === 'contato') {
      return <Contato publico onHome={() => setPaginaPublica('home')} />;
    }
    return (
      <Landing
        onLogin={() => setLogado(true)}
        onContato={() => setPaginaPublica('contato')}
      />
    );
  }

  const BotaoVoltar = () => (
    <button
      className="dashboard-btn back-btn"
      onClick={() => setCurrentView('dashboard')}
    >
      ← Voltar ao Início
    </button>
  );

  return (
    <div className="app-container">
      <Navbar
        currentView={currentView}
        onNavigate={setCurrentView}
        onSair={() => {
          setLogado(false);
          setCurrentView('dashboard');
        }}
      />

      {currentView === 'dashboard' && (
        <Dashboard
          userName="Corredor(a)"
          onNavigate={(view) => setCurrentView(view)}
        />
      )}

      {currentView === 'workouts' && (
        <div>
          <BotaoVoltar />
          <Workouts />
        </div>
      )}

      {currentView === 'tips' && (
        <div>
          <BotaoVoltar />
          <Tips />
        </div>
      )}

      {currentView === 'contato' && (
        <div>
          <BotaoVoltar />
          <Contato />
        </div>
      )}

      {currentView === 'profile' && (
        <div>
          <BotaoVoltar />
          <UserProfile onSuccess={() => setCurrentView('dashboard')} />
        </div>
      )}
        </div>
  );
}