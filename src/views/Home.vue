<template>
  <div id="app">
    <Header />
    
    <!-- Main Content -->
    <main>
      
      <div class="container">
        <!-- Welcome Section -->
        <section class="welcome-section">
          <div class="welcome-card">
            <div class="welcome-icon">
              <i class="fas fa-heart"></i>
            </div>
            <div class="welcome-text">
              <h1>Bonjour, {{ userName }} !</h1>
              <p>Continuez vos efforts, vous êtes sur la bonne voie !</p>
            </div>
          </div>


        </section>

        <!-- Substances Section avec icônes -->
        <section class="substances-icons">
          <h3 class="substances-title">Addictions accompagnées</h3>
          <div class="substances-grid">
            <div 
              class="substance-icon-card" 
              v-for="substance in substances" 
              :key="substance.name"
              @click="goToSubstancePage(substance.name)"
            >
              <div class="substance-icon-wrapper">
                <i :class="substance.icon"></i>
              </div>
              <span class="substance-name">{{ substance.name }}</span>
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section">
          <h2 class="section-title"><i class="fas fa-chart-line"></i> Vos Progrès</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon days-icon">
                <i class="fas fa-calendar-check"></i>
              </div>
              <div class="stat-value">{{ daysWithout }}</div>
              <div class="stat-label">Jours sans consommation</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon money-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="stat-value">{{ moneySaved }} €</div>
              <div class="stat-label">Argent économisé</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon time-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="stat-value">{{ timeRegained }}</div>
              <div class="stat-label">Temps de vie regagné</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon health-icon">
                <i class="fas fa-heartbeat"></i>
              </div>
              <div class="stat-value">{{ healthImprovement }}%</div>
              <div class="stat-label">Amélioration santé</div>
            </div>
          </div>
        </section>

        <!-- Pourquoi je fais ça -->
<section class="why-section">
  <h2 class="section-title"><i class="fas fa-question-circle"></i> Pourquoi je fais ça</h2>

  <!-- First Row: Image Left, Text Right -->
  <div class="why-row">
    <div class="why-image-container">
      <img src="../assets/familly.jpeg" alt="Raisons personnelles" class="why-image">
    </div>
    <div class="why-content">
      <h3 class="why-title">Votre bien-être avant tout</h3>
      <p class="why-description">
        Avant de consommer, pense à ceux qui t’attendent, ceux qui tremblent pour toi : ta famille.
        Leur cœur vit avec le tien. Ne les fais pas souffrir… choisis de rester debout, pour eux.
      </p>
    </div>
  </div>

  <!-- Second Row: Text Left, Image Right -->
  <div class="why-row reverse">
    <div class="why-content">
      <h3 class="why-title">Une vie plus épanouissante</h3>
      <p class="why-description">
       Quand tu arrêtes de consommer, la vie reprend ses couleurs. Tu te réveilles plus léger, plus fier, plus libre. Tu retrouves ton énergie, tes rêves, et tu vois enfin un futur où tout devient possible. Chaque jour sans addiction, c’est une victoire… et c’est une nouvelle version de toi qui renaît.
      </p>
    </div>

    <div class="why-image-container">
      <img src="../assets/after.jpeg" alt="Vie épanouissante" class="why-image">
    </div>
  </div>

  <!-- Third Row: Image Left, Text Right -->
  <div class="why-row">
    <div class="why-image-container">
      <img src="../assets/after3.jpeg" alt="Communauté solidaire" class="why-image">
    </div>
    <div class="why-content">
      <h3 class="why-title">Vous n'êtes pas seul</h3>
      <p class="why-description">
        Tu as deux choix : continuer à vivre comme un prisonnier de la consommation… ou briser tes chaînes et retrouver une vie libre, pleine d’énergie, de santé et de vrais sourires. Quand tu arrêtes de consommer, tout change : tu respires mieux, tu penses plus clair, tu reprends le contrôle. Tu redeviens toi-même.
      </p>
    </div>
  </div>
</section>


        <!-- Features Section -->
        <section class="features-section">
          <h2 class="section-title"><i class="fas fa-th-large"></i> Fonctionnalités</h2>
          <div class="features-grid">

             <!-- Carte Daily Activity -->
            <div class="feature-card" @click="goToDailyActivity">
              <div class="feature-image-container">
                <img src="../assets/daili.jpeg" alt="Activités Quotidiennes" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Activités Quotidiennes</h3>
                <p class="feature-description">Remplacez vos habitudes par des activités positives et enrichissantes.</p>
                <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
            </div>

            <!-- hethi bch tweli podcaste -->
            <div class="feature-card" @click="goTopodcaste">
              <div class="feature-image-container">
                <img src="../assets/podcaste.jpeg" alt="Communauté" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Podcaste</h3>
                <p class="feature-description">Un podcast contre l’addiction, c’est une émission audio qui informe, sensibilise et aide les personnes à lutter contre les dépendances.</p>
                <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
            </div>

            <!-- histoires inspirantes -->
            <div class="feature-card" @click="gotohistory">
              <div class="feature-image-container">
                <img src="../assets/histoirin.jpg" alt="Histoires de Succès" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">histoires inspirantes</h3>
                <p class="feature-description">Découvrez comment d'autres ont réussi à surmonter leur addiction.</p>
                <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
            </div>

            <!-- profile utilisateur -->
            <div class="feature-card" @click="goToprofile">
              <div class="feature-image-container">
                <img src="../assets/profile.jpg" alt="Profile" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Profile</h3>
                <p class="feature-description">Trouvez des spécialistes près de chez vous pour un accompagnement personnalisé.</p>
              </div>
            </div>

            <!-- urgence -->
            <div class="feature-card" @click="gotourgence">
              <div class="feature-image-container">
                <img src="../assets/urgence.jpeg" alt="Urgence" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Urgence</h3>
                <p class="feature-description">Obtenez de l'aide immédiate en cas de besoin urgent.</p>
                 <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
            </div>

            <!-- centre de toxicomanie -->
            <div class="feature-card" @click="navigateTocentre">
              <div class="feature-image-container">
                <img src="../assets/cntr.jpg" alt="Centre de toxicomanie" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Centre de toxicomanie</h3>
                <p class="feature-description">Vous pouvez consulter les centres et les psychologues dans votre région.</p>
                 <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
              
            </div>

            <!-- information sur les substances -->
            <div class="feature-card" @click="gotoloi">
              <div class="feature-image-container">
                <img src="../assets/loi.jpg" alt="loi" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Consommation et sanctions</h3>
                <p class="feature-description">Les sanctions légales contre les consommateurs de drogue</p>
                <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
            </div>

            <!-- anatomie des addictions -->
            <div class="feature-card" @click="gotoanatomie">
              <div class="feature-image-container">
                <img src="../assets/anatomie.jpg" alt="Anatomie des addictions" class="feature-image">
              </div>
              <div class="feature-content">
                <h3 class="feature-title">Anatomie des addictions</h3>
                <p class="feature-description">Découvrez quelle partie de votre corps sera submergée.</p>
                <div class="feature-badge">
                  <i class="fas fa-play-circle"></i>
                  Commencer
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Header from '../components/header.vue'  // Chemin corrigé
import Footer from '../components/footer.vue'  // Chemin corrigé
import { useRouter } from 'vue-router'
import ProfilePage from './ProfilePage.vue'

const userName = ref(ProfilePage.data().profile.nom || ' Achref')
const daysWithout = ref(0)
const moneySaved = ref(0)
const timeRegained = ref('0h 0m')
const healthImprovement = ref(0)
const currentMotivationIndex = ref(0)
// Substances data
const substances = ref([
  { name: 'Alcool', icon: 'fas fa-wine-glass-alt' },
  { name: 'Tabac', icon: 'fas fa-smoking' },
  { name: 'Cannabis', icon: 'fas fa-cannabis' },
  { name: 'Opiacés', icon: 'fas fa-pills' },
  { name: 'Autres Drogues', icon: 'fas fa-syringe' },
  { name: 'Médicaments', icon: 'fas fa-capsules' },
  { name: 'Jeux', icon: 'fas fa-dice' },
  { name: 'Écrans', icon: 'fas fa-desktop' },
  { name: 'Comportements', icon: 'fas fa-brain' }
])
const router = useRouter()
const goToDailyActivity = () => {
  router.push('./daily-activity')
}
const gotohistory = () => {
  router.push('./history')
}

const navigateTocentre = () => {
  router.push('./centre')
}
const gotoloi = () => {
  router.push('./loi')
}
const gotourgence = () => {
  router.push('./urgence')
}

const goTopodcaste =   () =>{
  router.push('./podcaste')
}

const gotoanatomie = () => {
  router.push('./anatomie')
}
const goToprofile = () => {
  router.push('/profile')
}


</script>

<style>
:root {
  --primary: #ff6b6b;
  --secondary: #6b8cbc;
  --accent: #6b8cbc;
  --success: #51cf66;
  --light: #f8f9fa;
  --dark: #343a40;
  --gray: #6c757d;
  --light-gray: #e9ecef;
  --why-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --why-secondary: #4ecdc4;
  --why-accent: #ff6b6b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f5f7fa;
  color: var(--dark);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* hethaa lmain */
main {
  padding: 30px 0;
  min-height: calc(100vh - 140px);
}

.welcome-section {
  margin-bottom: 30px;
}

.welcome-card {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 20px;
}

.welcome-icon {
  background: var(--primary);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.welcome-text h1 {
  color: var(--primary);
  margin-bottom: 5px;
}

.welcome-text p {
  color: var(--gray);
}
/* Substances Section avec icônes */
.substances-icons {
  margin-bottom: 30px;
  padding: 25px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary);
}

.substances-title {
  color: var(--dark);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.substances-title::before {
  content: "•";
  color: var(--primary);
  font-size: 1.5rem;
}

.substances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  justify-items: center;
}

.substance-icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 15px 10px;
  border-radius: 12px;
  width: 100%;
}

.substance-icon-card:hover {
  background: var(--light-gray);
  transform: translateY(-5px);
}

.substance-icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.substance-icon-card:hover .substance-icon-wrapper {
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  transform: scale(1.1);
}

.substance-icon-wrapper i {
  font-size: 1.5rem;
  color: white;
}

.substance-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--dark);
  text-align: center;
  line-height: 1.2;
}

/* Responsive */
@media (max-width: 768px) {
  .substances-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  
  .substance-icon-wrapper {
    width: 50px;
    height: 50px;
  }
  
  .substance-icon-wrapper i {
    font-size: 1.2rem;
  }
  
  .substance-name {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .substances-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .substances-icons {
    padding: 20px 15px;
  }
}
/* Stats  */
.stats-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--dark);
  display: flex;
  align-items: center;
  gap: 10px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 15px;
}



.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.stat-label {
  color: var(--gray);
  font-size: 0.9rem;
}

/* Why Section - Nouvelle section */
.why-section {
  margin-bottom: 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%);
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.why-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 50px;
}

.why-row:last-child {
  margin-bottom: 0;
}

/* Inverse image + texte */
.why-row.reverse {
  flex-direction: row-reverse; 
}

.why-row.reverse > * {
   flex-direction: row-reverse; 
}

.why-image-container {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.why-image-container:hover {
  transform: scale(1.02);
}

.why-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.why-content {
  padding: 20px;
}

.why-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--why-bg));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.why-description {
  font-size: 1.2rem;
  line-height: 1.9;
  font-weight: 800;
  color:#0f2792;

  padding: 22px 25px;
  border-radius: 15px;
  margin-bottom: 30px;
}


/* Substances Section - Version simplifiée */
.substances-simple {
  margin-bottom: 30px;
  padding: 25px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary);
}

.substances-title {
  color: var(--dark);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.substances-title::before {
  content: "•";
  color: var(--primary);
  font-size: 1.5rem;
}

.substances-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.substance-item {
  background: var(--light-gray);
  color: var(--dark);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.substance-item:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .substances-list {
    gap: 8px;
  }
  
  .substance-item {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
}
/* Features */
.why-features {
  display: flex;
  gap: 20px;
  margin-top: 25px;
  flex-wrap: wrap;
}

.why-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
}

.why-feature:hover {
  transform: translateY(-3px);
}

.why-feature i {
  color: var(--why-secondary);
  font-size: 1.3rem;
}

.why-feature span {
  font-weight: 600;
  color: var(--dark);
}


/* Features les cards*/
.features-section {
  margin-bottom: 30px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.feature-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-image-container {
  height: 180px;
  overflow: hidden;
  position: relative;
  background: #f8f9fa;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.feature-card:hover .feature-image {
  transform: scale(1.1);
}

.feature-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--dark);
  line-height: 1.3;
}

.feature-description {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.5;
  flex-grow: 1;
}

/* Style images  */
.feature-image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  opacity: 0.1;
  z-index: 1;
}



/* Responsive Design */
@media (max-width: 768px) {
  .why-row {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .why-row.reverse {
    direction: ltr;
  }
  
  .why-title {
    font-size: 1.6rem;
  }
  
  .why-stats {
    grid-template-columns: 1fr;
  }
  
  .why-features {
    flex-direction: column;
  }
  
  .why-image {
    height: 250px;
  }
}
</style>