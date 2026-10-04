import React, { useState } from 'react';

export default function UserProfile({ onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    birthDate: '',
    gender: 'prefiro-nao-dizer',
    plan: 'premium',
    acceptTerms: false
  });

  const [fotoPerfil, setFotoPerfil] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const alterarFoto = () => {
    const novaUrl = prompt("Cole o link da nova imagem para a sua foto de perfil:");
    if (novaUrl) {
      setFotoPerfil(novaUrl);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert('Você precisa aceitar os termos de uso!');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      if (onSuccess) onSuccess({ ...formData, fotoPerfil });
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatarContainer}>
            <img src={fotoPerfil} alt="Foto de Perfil" style={styles.avatar} />
            <button
              type="button"
              onClick={alterarFoto}
              style={styles.lapisButton}
              title="Alterar foto de perfil"
            >
              ✏️
            </button>
          </div>
          <p style={styles.subtitle}>
            Cadastre-se para começar sua jornada!
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Nome Completo</label>
            <input
              type="text"
              name="fullName"
              placeholder="Ex: Maria Silva"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Nome de Usuário (@handle)</label>
            <input
              type="text"
              name="username"
              placeholder="Ex: mariasilva"
              value={formData.username}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Crie uma Senha</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Mínimo 8 caracteres"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.passwordInput}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
                title={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  /* Olho aberto */
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  /* Olho cortado/fechado estilo Instagram */
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div style={styles.row}>
            <div style={{ ...styles.fieldGroup, flex: 1 }}>
              <label style={styles.label}>Data de Nascimento</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={{ ...styles.fieldGroup, flex: 1 }}>
              <label style={styles.label}>Gênero</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="nao-binario">Não-binário</option>
                <option value="prefiro-nao-dizer">Prefiro não dizer</option>
              </select>
            </div>
          </div>

          <div style={styles.fieldGroup}>
            <label style={styles.label}>Escolha seu Plano</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="free">Gratuito - R$ 0,00/mês</option>
              <option value="premium">Premium Individual - R$ 21,90/mês</option>
              <option value="family">Plano Família - R$ 34,90/mês</option>
              <option value="student">Universitário - R$ 11,90/mês</option>
            </select>
          </div>

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              style={styles.checkbox}
            />
            <label htmlFor="acceptTerms" style={styles.checkboxLabel}>
              Concordo com os <a href="#" style={styles.link}>Termos de Uso</a> e <a href="#" style={styles.link}>Política de Privacidade</a>.
            </label>
          </div>

          <button 
            type="submit" 
            style={styles.button}
            onMouseDown={(e) => e.currentTarget.style.backgroundColor = 'rgb(34, 141, 160)'}
            onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'rgb(32, 170, 194)'}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
          >
            {submitted ? '🎉 Cadastrando...' : 'Finalizar Cadastro'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '24px 16px',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
  },
  card: {
    width: '100%',
    maxWidth: '480px',
    backgroundColor: '#0a0a0a',
    borderRadius: '16px',
    padding: '32px',
    border: '2px solid rgb(34, 141, 160)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
    boxSizing: 'border-box'
  },
  header: {
    textAlign: 'center',
    marginBottom: '24px'
  },
  avatarContainer: {
    position: 'relative',
    width: '88px',
    height: '88px',
    margin: '0 auto 12px auto'
  },
  avatar: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgb(34, 141, 160)',
    backgroundColor: '#222'
  },
  lapisButton: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundColor: 'rgb(32, 170, 194)',
    color: '#fff',
    border: '2px solid rgb(34, 141, 160)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px'
  },
  subtitle: {
    fontSize: '14px',
    color: 'darkgray',
    fontStyle: 'italic',
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  passwordWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  passwordInput: {
    padding: '10px 42px 10px 14px',
    borderRadius: '8px',
    border: '1px solid rgb(34, 141, 160)',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  },
  eyeButton: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px'
  },
  row: {
    display: 'flex',
    gap: '12px'
  },
  label: {
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'rgb(32, 170, 194)'
  },
  input: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid rgb(34, 141, 160)',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  },
  select: {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid rgb(34, 141, 160)',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '6px'
  },
  checkbox: {
    accentColor: 'rgb(32, 170, 194)',
    width: '16px',
    height: '16px',
    cursor: 'pointer'
  },
  checkboxLabel: {
    fontSize: '12px',
    color: '#e0e0e0'
  },
  link: {
    color: 'rgb(32, 170, 194)',
    textDecoration: 'underline'
  },
  button: {
    marginTop: '12px',
    padding: '12px',
    borderRadius: '50px',
    border: '2px solid rgb(34, 141, 160)',
    backgroundColor: 'rgb(32, 170, 194)',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.1s ease-in-out'
  }
};