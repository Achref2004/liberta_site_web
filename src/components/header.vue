<template>
  <header class="header">
    <nav class="nav">
      <!-- Logo avec image -->
      <div class="logo">
        <img src="./logologin.jpg" alt="Libre" class="logo-image">
        <span class="logo-text">Liberta</span>
      </div>

      <!-- Menu Hamburger -->
      <button class="hamburger-btn" @click="toggleMenu">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
      </button>

      <!-- Menu déroulant -->
      <div class="dropdown-menu" :class="{ active: menuOpen }">
        <!-- Liste des fonctionnalités -->
        <ul class="menu-list">
          <li>
            <a href="#" @click="navigateTo('profile')">
              <i class="fas fa-chart-bar"></i> Profile
            </a>
          </li>
          <li>
            <a href="#" @click="gotohome">
              <i class="fas fa-home"></i> Accueil
            </a>
          </li>
          <li>
            <a href="#" @click="goToDailyActivity">
              <i class="fas fa-chart-bar"></i> Suivi Quotidien
            </a>
            
          </li>
          <li>
            <a href="#" @click="gotopodcaste">
              <i class="fas fa-users"></i> Podcaste
            </a>
          </li>
          <li>
            <a href="#" @click="goTohistory">
              <i class="fas fa-book-open"></i> Histoires de Succès
            </a>
          </li>
          <li>
            <a href="#" @click="navigateTo('pcychologists')">
              <i class="fas fa-hand-holding-heart"></i> pcychologists
            </a>
          </li>
          <li>
            <a href="#" @click="gotocentre">
              <i class="fas fa-user-md"></i> Centre de Toxicomanie
            </a>
          </li>
          
          <li>
            <a href="#" @click="gotoloi"> 
              <i class="fas fa-chart-bar"></i> Sanctions
            </a>
          </li>

        <li>
            <a href="#" @click="gotoanatomie">
              <i class="fas fa-chart-bar"></i> Anatomie 
            </a>
          </li>
          <li>
            <a href="#" @click="goTourgence" class="emergency-link">
              <i class="fas fa-first-aid"></i> Urgence
            </a>
          </li>
        </ul>

        <!-- Section compte utilisateur -->
        <div class="account-section">
          <div v-if="isLoggedIn" class="user-info">
            <p>Connecté en tant que <strong>{{ userName }}</strong></p>
            <button class="btn btn-logout" @click="handleLogout">
              <i class="fas fa-sign-out-alt"></i> Déconnexion
            </button>
          </div>
          <div v-else class="auth-buttons">
            <button class="btn btn-login" @click="handleLogin">
              <i class="fas fa-sign-in-alt"></i> Se connecter
            </button>
            <button class="btn btn-signup" @click="handleSignup">
              <i class="fas fa-user-plus"></i> Créer un compte
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();

const goToDailyActivity = () => {
  router.push('/daily-activity')
};
const goTourgence = () => {
  router.push('/urgence')
};
const goTohistory = () => {
  router.push('/histoire')
};
const gotoloi = () => {
  router.push('/loi')
}
const gotoanatomie = () => {
  router.push('/anatomie')
}
const gotocentre = () => {
  router.push('/centre')
}
const gotohome = () => {
  router.push('/home')
}
const gotopodcaste = () => {
  router.push('/podcaste')
}
const menuOpen = ref(false);
const isLoggedIn = ref(false);
const userName = ref('');

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const navigateTo = (page) => {
  menuOpen.value = false;
  alert(`Navigation vers: ${page}`);
};

const handleLogin = () => {
  menuOpen.value = false;
  isLoggedIn.value = true;
  alert('Connexion réussie');
};

const handleSignup = () => {
  menuOpen.value = false;
  alert('Redirection vers la création de compte');
};

const handleLogout = () => {
  menuOpen.value = false;
  isLoggedIn.value = false;
  alert('Déconnexion réussie');
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: relative;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-image {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

/* Bouton Hamburger */
.hamburger-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: transform 0.3s ease;
}

.hamburger-btn:hover {
  transform: scale(1.1);
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Menu déroulant */
.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  min-width: 280px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.dropdown-menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Liste du menu */
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #eee;
}

.menu-list li {
  border-bottom: 1px solid #f5f5f5;
}

.menu-list li:last-child {
  border-bottom: none;
}

.menu-list a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  font-weight: 500;
}

.menu-list a:hover {
  background: #f8f9fa;
  color: var(--primary);
}

.menu-list a i {
  width: 20px;
  text-align: center;
  color: var(--primary);
}

.emergency-link {
  color: #e74c3c !important;
  font-weight: 600 !important;
}

.emergency-link i {
  color: #e74c3c !important;
}

.emergency-link:hover {
  background: #ffeaea !important;
}

/* Section compte */
.account-section {
  padding: 20px;
}

.user-info {
  text-align: center;
}

.user-info p {
  margin-bottom: 15px;
  color: #666;
  font-size: 0.9rem;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Boutons */
.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.9rem;
}

.btn-login {
  background: var(--primary);
  color: white;
}

.btn-login:hover {
  background: var(--secondary);
  transform: translateY(-2px);
}

.btn-signup {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-signup:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
}

.btn-logout {
  background: #e74c3c;
  color: white;
  width: 100%;
}

.btn-logout:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    padding: 0 15px;
  }
  
  .dropdown-menu {
    right: 15px;
    left: 15px;
    min-width: auto;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .logo-image {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .nav {
    height: 60px;
  }
  
  .logo-text {
    font-size: 1.2rem;
  }
  
  .logo-image {
    width: 30px;
    height: 30px;
  }
  
  .menu-list a {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  .account-section {
    padding: 15px;
  }
}
</style>