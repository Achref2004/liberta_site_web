<template>
  <div class="centers-page">
    <Header />
    
    <main class="centers-main">
      <div class="container">
        <!-- En-tête -->
        <section class="centers-header">
          <div class="header-content">
            <h1><i class="fas fa-clinic-medical"></i> Centres de Toxicomanie - Tunisie</h1>
            <p>Trouvez l'aide professionnelle dont vous avez besoin près de chez vous</p>
          </div>
          <div class="emergency-banner">
            <i class="fas fa-phone-alt"></i>
            <div class="emergency-info">
              <strong>Urgence 24h/24</strong>
              <span>Appelez le 190 - Service gratuit et confidentiel</span>
            </div>
          </div>
        </section>

        <!-- Statistiques -->
        <section class="stats-section">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-hospital"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ centers.length }}</div>
                <div class="stat-label">Centres spécialisés</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-user-md"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ psychologists.length }}</div>
                <div class="stat-label">Psychologues</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ uniqueCities.length }}</div>
                <div class="stat-label">Villes couvertes</div>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">24h/24</div>
                <div class="stat-label">Urgence disponible</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Liste des centres et psychologues -->
        <section class="results-section">
          <!-- Centres de toxicomanie -->
          <div class="centers-section">
            <h2 class="section-title">
              <i class="fas fa-hospital"></i>
              Centres de Toxicomanie
            </h2>
            <div class="cards-grid">
              <div 
                v-for="center in centers" 
                :key="center.id"
                class="center-card"
              >
                <div class="card-header">
                  <div class="center-avatar">
                    <i class="fas fa-clinic-medical"></i>
                  </div>
                  <div class="center-info">
                    <h3 class="center-name">{{ center.name }}</h3>
                    <div class="center-specialty">{{ center.specialty }}</div>
                    <div class="center-rating">
                      <i class="fas fa-star"></i>
                      <span>{{ center.rating }}/5</span>
                      <span class="reviews">({{ center.reviews }} avis)</span>
                    </div>
                  </div>
                </div>

                <div class="card-content">
                  <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ center.address }}, {{ center.city }}</span>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <a :href="`tel:${center.phone}`">{{ center.phone }}</a>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>{{ center.hours }}</span>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>{{ center.price }}</span>
                  </div>
                </div>

                <div class="card-features">
                  <span 
                    v-for="feature in center.features" 
                    :key="feature"
                    class="feature-tag"
                  >
                    {{ feature }}
                  </span>
                </div>

                <div class="card-actions">
                  <button class="action-btn primary" @click="contactCenter(center)">
                    <i class="fas fa-phone"></i>
                    Appeler
                  </button>
                  <button class="action-btn secondary" @click="showDetails(center)">
                    <i class="fas fa-info-circle"></i>
                    Détails
                  </button>
                  <button class="action-btn map" @click="openMap(center)">
                    <i class="fas fa-map-marked-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Psychologues -->
          <div class="psychologists-section">
            <h2 class="section-title">
              <i class="fas fa-user-md"></i>
              Psychologues Spécialisés
            </h2>
            <div class="cards-grid">
              <div 
                v-for="psychologist in psychologists" 
                :key="psychologist.id"
                class="psychologist-card"
              >
                <div class="card-header">
                  <div class="psychologist-avatar">
                    <i class="fas fa-user-md"></i>
                  </div>
                  <div class="psychologist-info">
                    <h3 class="psychologist-name">Dr. {{ psychologist.name }}</h3>
                    <div class="psychologist-specialty">{{ psychologist.specialty }}</div>
                    <div class="psychologist-experience">
                      <i class="fas fa-award"></i>
                      {{ psychologist.experience }} d'expérience
                    </div>
                  </div>
                </div>

                <div class="card-content">
                  <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>{{ psychologist.address }}, {{ psychologist.city }}</span>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <a :href="`tel:${psychologist.phone}`">{{ psychologist.phone }}</a>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <a :href="`mailto:${psychologist.email}`">{{ psychologist.email }}</a>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>{{ psychologist.price }}</span>
                  </div>
                </div>

                <div class="card-features">
                  <span 
                    v-for="approach in psychologist.approaches" 
                    :key="approach"
                    class="feature-tag"
                  >
                    {{ approach }}
                  </span>
                </div>

                <div class="languages">
                  <strong>Langues :</strong>
                  <span>{{ psychologist.languages.join(', ') }}</span>
                </div>

                <div class="card-actions">
                  <button class="action-btn primary" @click="contactPsychologist(psychologist)">
                    <i class="fas fa-calendar-check"></i>
                    Prendre RDV
                  </button>
                  <button class="action-btn secondary" @click="showPsychologistDetails(psychologist)">
                    <i class="fas fa-user"></i>
                    Profil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Information importante -->
        <section class="info-section">
          <div class="info-card">
            <h3><i class="fas fa-info-circle"></i> Informations importantes</h3>
            <div class="info-content">
              <div class="info-item">
                <i class="fas fa-shield-alt"></i>
                <div>
                  <strong>Confidentialité garantie</strong>
                  <p>Tous vos échanges sont strictement confidentiels</p>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-money-bill-wave"></i>
                <div>
                  <strong>Tarifs adaptés</strong>
                  <p>Certains centres proposent des tarifs sociaux</p>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-hand-holding-heart"></i>
                <div>
                  <strong>Accompagnement complet</strong>
                  <p>Suivi médical, psychologique et social</p>
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
import { ref, computed } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

// États réactifs
const selectedItem = ref(null)

// Centres de toxicomanie
const centers = ref([
  {
    id: 1,
    name: 'Centre de Réhabilitation Addictions Tunis',
    specialty: 'Toxicomanie et Alcoolisme',
    address: 'Rue de la République',
    city: 'Tunis',
    phone: '+216 70 100 100',
    hours: 'Lun-Ven: 8h-18h, Sam: 8h-13h',
    price: 'Gratuit - Prise en charge état',
    rating: 4.5,
    reviews: 47,
    features: ['Désintoxication', 'Thérapie groupe', 'Suivi médical', 'Urgence 24h'],
    description: 'Centre public spécialisé dans le traitement des addictions avec une équipe pluridisciplinaire.'
  },
  {
    id: 2,
    name: 'Clinique Es-Salem Addictologie',
    specialty: 'Addictions comportementales',
    address: 'Avenue Habib Bourguiba',
    city: 'Sfax',
    phone: '+216 74 200 200',
    hours: '24h/24',
    price: 'Consultation: 50 DT',
    rating: 4.3,
    reviews: 32,
    features: ['Hospitalisation', 'Thérapie familiale', 'Ateliers', 'Suivi longue durée'],
    description: 'Clinique privée offrant un accompagnement complet pour toutes les formes d\'addiction.'
  },
  {
    id: 3,
    name: 'Unité Addictologie CHU Farhat Hached',
    specialty: 'Addictions sévères',
    address: 'Avenue Ibn El Jazzar',
    city: 'Sousse',
    phone: '+216 73 300 300',
    hours: 'Lun-Sam: 7h-19h',
    price: 'Gratuit - Carte d\'assuré',
    rating: 4.2,
    reviews: 28,
    features: ['Urgence', 'Sevrage médical', 'Psychiatrie', 'Médecine légale'],
    description: 'Unité hospitalière spécialisée dans la prise en charge des addictions complexes.'
  },
  {
    id: 4,
    name: 'Centre El Amal Addictions',
    specialty: 'Toxicomanie jeunes',
    address: 'Rue Ali Belhouane',
    city: 'Nabeul',
    phone: '+216 72 400 400',
    hours: 'Lun-Ven: 9h-17h',
    price: 'Tarifs sociaux',
    rating: 4.6,
    reviews: 39,
    features: ['Prévention', 'Accueil jeunes', 'Orientation', 'Cellule écoute'],
    description: 'Association spécialisée dans la prévention et le traitement des addictions chez les jeunes.'
  },
  {
    id: 5,
    name: 'Service Addictologie Hôpital Razi',
    specialty: 'Psychiatrie addictologie',
    address: 'La Manouba',
    city: 'Manouba',
    phone: '+216 71 500 500',
    hours: '24h/24',
    price: 'Gratuit',
    rating: 4.4,
    reviews: 56,
    features: ['Urgence psy', 'Hospitalisation', 'Réhabilitation', 'Réinsertion'],
    description: 'Service de psychiatrie spécialisé dans les troubles addictifs sévères.'
  },
  {
    id: 6,
    name: 'Centre de Cure Monastir',
    specialty: 'Alcool et Médicaments',
    address: 'Zone médicale',
    city: 'Monastir',
    phone: '+216 73 600 600',
    hours: 'Lun-Sam: 8h-20h',
    price: 'Consultation: 40 DT',
    rating: 4.1,
    reviews: 24,
    features: ['Cure ambulatoire', 'Bilan santé', 'Thérapie', 'Prévention rechute'],
    description: 'Centre spécialisé dans les addictions à l\'alcool et aux médicaments.'
  }
])

// Psychologues
const psychologists = ref([
  {
    id: 1,
    name: 'Samira Ben Ahmed',
    specialty: 'Psychologue clinicienne - Addictologie',
    address: 'Rue du Liban',
    city: 'Tunis',
    phone: '+216 98 100 100',
    email: 'dr.samira@psy.tn',
    price: '3la 7sseb achref jnayeh',
    experience: '15 ans',
    approaches: ['TCC', 'Entretien motivationnel', 'Mindfulness'],
    languages: ['Arabe', 'Français', 'Anglais'],
    description: 'Spécialiste des thérapies cognitivo-comportementales appliquées aux addictions.'
  },
  {
    id: 2,
    name: 'Mohamed Dridi',
    specialty: 'Psychothérapeute - Dépendances',
    address: 'Avenue Habib Thameur',
    city: 'Sfax',
    phone: '+216 97 200 200',
    email: 'm.dridi@therapy.tn',
    price: '3la 7sseb achref jnayeh',
    experience: '12 ans',
    approaches: ['Analyse transactionnelle', 'PNL', 'Thérapie systémique'],
    languages: ['Arabe', 'Français'],
    description: 'Expérience en accompagnement des dépendances comportementales et substances.'
  },
  {
    id: 3,
    name: 'Leila Trabelsi',
    specialty: 'Psychologue - Thérapie familiale',
    address: 'Rue de Palestine',
    city: 'Sousse',
    phone: '+216 96 300 300',
    email: 'leila.t@support.tn',
    price: '3la 7sseb achref jnayeh',
    experience: '18 ans',
    approaches: ['Thérapie familiale', 'Systémique', 'Gestion émotionnelle'],
    languages: ['Arabe', 'Français', 'Italien'],
    description: 'Spécialiste de l\'accompagnement familial dans le cadre des addictions.'
  },
  {
    id: 4,
    name: 'Karim Bouaziz',
    specialty: 'Psychologue - Adolescents',
    address: 'Centre ville',
    city: 'Nabeul',
    phone: '+216 95 400 400',
    email: 'k.bouaziz@jeunes.tn',
      price: '3la 7sseb achref jnayeh',
    experience: '10 ans',
    approaches: ['Thérapie brève', 'Accompagnement jeunes', 'Prévention'],
    languages: ['Arabe', 'Français'],
    description: 'Spécialisé dans l\'accompagnement des adolescents et jeunes adultes.'
  },
  {
    id: 5,
    name: 'Amira Chérif',
    specialty: 'Neuropsychologue - Addictions',
    address: 'Rue Ibn Khaldoun',
    city: 'Bizerte',
    phone: '+216 99 500 500',
    email: 'a.cherif@neuro.tn',
    price: '3la 7sseb achref jnayeh',
    experience: '14 ans',
    approaches: ['Réhabilitation cognitive', 'Bilan neuro', 'Thérapie intégrative'],
    languages: ['Arabe', 'Français', 'Anglais'],
    description: 'Approche neuroscientifique des troubles addictifs et de leur traitement.'
  },
  {
    id: 6,
    name: 'Hichem Marzouk',
    specialty: 'Psychothérapeute - Trauma',
    address: 'Avenue de la Liberté',
    city: 'Gabès',
    phone: '+216 94 600 600',
    email: 'h.marzouk@trauma.tn',
    price: '3la 7sseb achref jnayeh',
    experience: '16 ans',
    approaches: ['EMDR', 'ICV', 'Psychotraumatologie'],
    languages: ['Arabe', 'Français'],
    description: 'Spécialiste des addictions liées au trauma et aux troubles anxieux.'
  }
])

// Données calculées
const uniqueCities = computed(() => {
  const cities = [...centers.value.map(c => c.city), ...psychologists.value.map(p => p.city)]
  return [...new Set(cities)]
})

// Méthodes
const contactCenter = (center) => {
  window.open(`tel:${center.phone}`, '_self')
}


 
const showPsychologistDetails = (psychologist) => {
  selectedItem.value = psychologist
  alert(`Profil du Dr. ${psychologist.name}\n\n${psychologist.description}`)
}

const openMap = (location) => {
  const query = encodeURIComponent(`${location.address}, ${location.city}, Tunisie`)
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank')
}
</script>

<style scoped>
.centers-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.centers-main {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.centers-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-content h1 {
  color: #2d3748;
  font-size: 2.2rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-content h1 i {
  color: #ff6b6b;
}

.header-content p {
  color: #718096;
  font-size: 1.1rem;
}

.emergency-banner {
  background: linear-gradient(135deg, #ff6b6b, #e53e3e);
  color: white;
  padding: 15px 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.emergency-banner i {
  font-size: 1.5rem;
}

.emergency-info {
  display: flex;
  flex-direction: column;
}

/* Statistiques */
.stats-section {
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #2d3748;
  line-height: 1;
}

.stat-label {
  color: #718096;
  font-size: 0.9rem;
  margin-top: 5px;
}

/* Sections résultats */
.results-section {
  margin-bottom: 40px;
}

.section-title {
  color: #2d3748;
  font-size: 1.8rem;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title i {
  color: #ff6b6b;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

/* Cartes centres */
.center-card,
.psychologist-card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.center-card:hover,
.psychologist-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.center-avatar,
.psychologist-avatar {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  flex-shrink: 0;
}

.center-name,
.psychologist-name {
  color: #2d3748;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.center-specialty,
.psychologist-specialty {
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 8px;
}

.center-rating {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #f6ad55;
}

.center-rating .reviews {
  color: #a0aec0;
  font-size: 0.9rem;
}

.psychologist-experience {
  color: #718096;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Contenu des cartes */
.card-content {
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #4a5568;
}

.info-item i {
  color: #ff6b6b;
  width: 16px;
}

.info-item a {
  color: #4299e1;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.feature-tag {
  background: #f7fafc;
  color: #4a5568;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid #e2e8f0;
}

.languages {
  margin-bottom: 20px;
  padding: 12px;
  background: #f0fff4;
  border-radius: 10px;
  border-left: 4px solid #48bb78;
}

.languages strong {
  color: #2d3748;
}

/* Actions */
.card-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem;
}

.action-btn.primary {
  background: #ff6b6b;
  color: white;
}

.action-btn.primary:hover {
  background: #e53e3e;
  transform: translateY(-2px);
}

.action-btn.secondary {
  background: #f7fafc;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.action-btn.secondary:hover {
  border-color: #ff6b6b;
  color: #ff6b6b;
  transform: translateY(-2px);
}

.action-btn.map {
  flex: 0 0 auto;
  width: 50px;
  background: #4299e1;
  color: white;
}

.action-btn.map:hover {
  background: #3182ce;
  transform: translateY(-2px);
}

/* Section information */
.info-section {
  margin-bottom: 40px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.info-card h3 {
  color: #2d3748;
  font-size: 1.5rem;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-card h3 i {
  color: #ff6b6b;
}

.info-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.info-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.info-item i {
  color: #ff6b6b;
  font-size: 1.5rem;
  margin-top: 2px;
}

.info-item strong {
  color: #2d3748;
  display: block;
  margin-bottom: 5px;
}

.info-item p {
  color: #718096;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .centers-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
  
  .center-avatar,
  .psychologist-avatar {
    align-self: center;
  }
  
  .card-actions {
    flex-direction: column;
  }
  
  .info-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .header-content h1 {
    font-size: 1.8rem;
  }
}
</style>