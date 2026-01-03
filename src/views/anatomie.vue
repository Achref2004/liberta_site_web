<template>
  <div class="anatomy-page">
    <Header />
    
    <main class="anatomy-main">
      <div class="container">
        <!-- En-tête -->
        <section class="anatomy-header">
          <div class="header-content">
            <h1><i class="fas fa-brain"></i> Anatomie des Addictions</h1>
            <p>Découvrez l'impact des substances sur votre corps</p>
          </div>
          <div class="header-stats">
            <div class="stat">
              <i class="fas fa-heartbeat"></i>
              <span>{{ affectedOrgansCount }} organes affectés</span>
            </div>
          </div>
        </section>

        <!-- Sélecteur de substance -->
        <section class="substance-selector">
          <h2 class="section-title">
            <i class="fas fa-flask"></i>
            Choisissez une substance
          </h2>
          <div class="substances-grid">
            <div 
              v-for="substance in substances" 
              :key="substance.id"
              class="substance-card"
              :class="{ active: selectedSubstance === substance.id }"
              @click="selectSubstance(substance.id)"
            >
              <div class="substance-icon" :style="{ backgroundColor: substance.color }">
                <i :class="substance.icon"></i>
              </div>
              <h3>{{ substance.name }}</h3>
              <p>{{ substance.shortDesc }}</p>
            </div>
          </div>
        </section>

        <!-- Corps humain interactif -->
        <section class="human-anatomy" v-if="selectedSubstance">
          <div class="anatomy-container">
            <!-- Légende -->
            <div class="anatomy-legend">
              <h3>Impact de {{ currentSubstance.name }} sur le corps</h3>
              <div class="severity-levels">
                <div class="severity-item">
                  <div class="severity-dot low"></div>
                  <span>Impact Léger</span>
                </div>
                <div class="severity-item">
                  <div class="severity-dot medium"></div>
                  <span>Impact Modéré</span>
                </div>
                <div class="severity-item">
                  <div class="severity-dot high"></div>
                  <span>Impact Sévère</span>
                </div>
                <div class="severity-item">
                  <div class="severity-dot critical"></div>
                  <span>Impact Critique</span>
                </div>
              </div>
            </div>

            <!-- Corps humain avec images réelles -->
            <div class="human-body-real">
              <div class="body-container">
                <div class="base-human-body">
                  <!-- Image de base du corps humain -->
                  <img 
                    src="../assets/humain_body.jpeg" 
                    alt="Corps humain"
                    class="body-image"
                  />
                  
                  <!-- Organes interactifs superposés -->
                  <div 
                    v-for="organ in currentSubstance.organs" 
                    :key="organ.id"
                    class="organ-image-container"
                    :class="[
                      organ.severity, 
                      { 
                        'active': selectedOrgan === organ.id,
                        'highlighted': hoveredOrgan === organ.id
                      }
                    ]"
                    :style="getOrganPosition(organ.id)"
                    @click="selectOrgan(organ.id)"
                    @mouseenter="highlightOrgan(organ.id)"
                    @mouseleave="unhighlightOrgan"
                  >
                    <img 
                      :src="getOrganImage(organ.id)" 
                      :alt="organ.name"
                      class="organ-image"
                    />
                    <div class="organ-overlay">
                      <span class="organ-name">{{ organ.name }}</span>
                      <div class="severity-indicator" :class="organ.severity"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Détails de l'organe sélectionné -->
            <div class="organ-details" v-if="selectedOrgan">
              <div class="details-card">
                <div class="details-header">
                  <h3>{{ selectedOrganData.name }}</h3>
                  <div class="severity-badge" :class="selectedOrganData.severity">
                    {{ getSeverityText(selectedOrganData.severity) }}
                  </div>
                </div>
                
                <div class="details-content">
                  <div class="organ-visual">
                    <img 
                      :src="getOrganImage(selectedOrgan)" 
                      :alt="selectedOrganData.name"
                      class="organ-detail-image"
                    />
                  </div>
                  
                  <p class="organ-description">{{ selectedOrganData.description }}</p>
                  
                  <div class="symptoms-list">
                    <h4>📋 Symptômes et effets :</h4>
                    <ul>
                      <li v-for="(symptom, index) in selectedOrganData.symptoms" :key="index">
                        {{ symptom }}
                      </li>
                    </ul>
                  </div>
                  
                  <div class="protection-tips" v-if="selectedOrganData.protectionTips.length > 0">
                    <h4>🛡️ Conseils de protection :</h4>
                    <ul>
                      <li v-for="(tip, index) in selectedOrganData.protectionTips" :key="index">
                        {{ tip }}
                      </li>
                    </ul>
                  </div>
                  
                  <div class="recovery-info" v-if="selectedOrganData.recovery">
                    <h4>💊 Récupération :</h4>
                    <p>{{ selectedOrganData.recovery }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Statistiques d'impact -->
        <section class="impact-stats" v-if="selectedSubstance">
          <h2 class="section-title">
            <i class="fas fa-chart-bar"></i>
            Statistiques d'Impact
          </h2>
          
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon" style="background: #e53e3e;">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ criticalOrgansCount }}</div>
                <div class="stat-label">Organes en danger critique</div>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon" style="background: #ed8936;">
                <i class="fas fa-heartbeat"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ severeOrgansCount }}</div>
                <div class="stat-label">Organes sévèrement affectés</div>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon" style="background: #4299e1;">
                <i class="fas fa-clock"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ currentSubstance.recoveryTime }}</div>
                <div class="stat-label">Temps de récupération moyen</div>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon" style="background: #48bb78;">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="stat-info">
                <div class="stat-number">{{ protectionTipsCount }}</div>
                <div class="stat-label">Conseils de protection</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Informations détaillées sur la substance -->
        <section class="substance-info" v-if="selectedSubstance">
          <h2 class="section-title">
            <i class="fas fa-info-circle"></i>
            Informations sur {{ currentSubstance.name }}
          </h2>
          
          <div class="info-grid">
            <div class="info-card">
              <div class="info-header">
                <i class="fas fa-brain"></i>
                <h3>Effets Neurologiques</h3>
              </div>
              <div class="info-content">
                <p>{{ currentSubstance.neurologicalEffects }}</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-header">
                <i class="fas fa-heart"></i>
                <h3>Effets Cardiovasculaires</h3>
              </div>
              <div class="info-content">
                <p>{{ currentSubstance.cardiovascularEffects }}</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-header">
                <i class="fas fa-lungs"></i>
                <h3>Effets Respiratoires</h3>
              </div>
              <div class="info-content">
                <p>{{ currentSubstance.respiratoryEffects }}</p>
              </div>
            </div>
            
            <div class="info-card">
              <div class="info-header">
                <i class="fas fa-cogs"></i>
                <h3>Mécanisme d'Action</h3>
              </div>
              <div class="info-content">
                <p>{{ currentSubstance.mechanism }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Avertissement -->
        <section class="warning-section">
          <div class="warning-card">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="warning-content">
              <h3>Information Importante</h3>
              <p>
                Ces informations sont fournies à titre éducatif. Si vous ou un proche 
                êtes confronté à des problèmes d'addiction, consultez un professionnel 
                de santé. La prévention et le traitement précoce sont essentiels.
              </p>
              <button class="help-btn" @click="goToEmergency">
                <i class="fas fa-ambulance"></i>
                Besoin d'aide immédiate ?
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

const router = useRouter()

// États réactifs
const selectedSubstance = ref('alcohol')
const selectedOrgan = ref('brain')
const hoveredOrgan = ref(null)

// Données des substances
const substances = ref([
  {
    id: 'alcohol',
    name: 'Alcool',
    shortDesc: 'Impact généralisé sur tout le corps',
    icon: 'fas fa-wine-bottle',
    color: '#4299e1',
    recoveryTime: '3-12 mois',
    organs: [
      {
        id: 'brain',
        name: 'Cerveau',
        severity: 'high',
        description: "L'alcool affecte les neurotransmetteurs, réduit le volume cérébral et altère les fonctions cognitives.",
        symptoms: [
          'Perte de mémoire et blackouts',
          'Troubles de la coordination',
          'Altération du jugement',
          'Dépendance physique et psychique',
          'Syndrome de Korsakoff à long terme'
        ],
        protectionTips: [
          'Consommation modérée',
          'Jours sans alcool',
          'Activités cognitives régulières'
        ],
        recovery: 'La neurogénèse peut se produire après 6-12 mois d\'abstinence'
      },
      {
        id: 'heart',
        name: 'Cœur',
        severity: 'medium',
        description: "L'alcool peut causer des cardiomyopathies, de l'hypertension et des arythmies.",
        symptoms: [
          'Hypertension artérielle',
          'Cardiomyopathie alcoolique',
          'Arythmies cardiaques',
          'Augmentation du risque d\'AVC'
        ],
        protectionTips: [
          'Limiter la consommation',
          'Contrôle tensionnel régulier',
          'Activité physique modérée'
        ],
        recovery: 'Amélioration significative après 3-6 mois d\'abstinence'
      },
      {
        id: 'liver',
        name: 'Foie',
        severity: 'critical',
        description: "Organe le plus touché par l'alcool, pouvant mener à la cirrhose et au cancer.",
        symptoms: [
          'Stéatose hépatique (foie gras)',
          'Hépatite alcoolique',
          'Cirrhose',
          'Cancer du foie',
          'Insuffisance hépatique'
        ],
        protectionTips: [
          'Abstinence totale en cas de lésions',
          'Alimentation équilibrée',
          'Surveillance médicale régulière'
        ],
        recovery: 'Régénération possible si abstention avant cirrhose'
      },
      {
        id: 'stomach',
        name: 'Estomac',
        severity: 'medium',
        description: "L'alcool irrite la muqueuse gastrique et peut causer des ulcères.",
        symptoms: [
          'Gastrite',
          'Ulcères gastriques',
          'Reflux gastro-œsophagien',
          'Saignements digestifs'
        ],
        protectionTips: [
          'Ne pas boire à jeun',
          'Éviter les alcools forts',
          'Alimentation adaptée'
        ],
        recovery: 'Guérison rapide après arrêt de la consommation'
      },
      {
        id: 'pancreas',
        name: 'Pancréas',
        severity: 'high',
        description: "L'alcool peut causer des pancréatites aiguës et chroniques.",
        symptoms: [
          'Pancréatite aiguë',
          'Pancréatite chronique',
          'Douleurs abdominales sévères',
          'Diabète secondaire'
        ],
        protectionTips: [
          'Consommation très modérée',
          'Surveillance des symptômes',
          'Consultation gastro-entérologique'
        ],
        recovery: 'Arrêt définitif nécessaire en cas de pancréatite'
      }
    ],
    neurologicalEffects: "Altération des neurotransmetteurs GABA et glutamate, réduction du volume cérébral, troubles cognitifs et mémoire.",
    cardiovascularEffects: "Hypertension, cardiomyopathie, arythmies, augmentation du risque d'AVC et de crise cardiaque.",
    respiratoryEffects: "Augmentation du risque de pneumonie, dépression respiratoire en cas de surdose.",
    mechanism: "L'alcool potentialise les récepteurs GABA (inhibiteurs) et bloque les récepteurs NMDA (excitatoires), menant à une dépression du système nerveux central."
  },
  {
    id: 'tobacco',
    name: 'Tabac',
    shortDesc: 'Dégâts pulmonaires et cardiovasculaires',
    icon: 'fas fa-smoking',
    color: '#718096',
    recoveryTime: '1-15 ans',
    organs: [
      {
        id: 'lungs',
        name: 'Poumons',
        severity: 'critical',
        description: "La fumée de tabac détruit les alvéoles pulmonaires et cause le cancer.",
        symptoms: [
          'Bronchite chronique',
          'Emphysème pulmonaire',
          'Cancer du poumon',
          'BPCO (Broncho-Pneumopathie Chronique Obstructive)',
          'Insuffisance respiratoire'
        ],
        protectionTips: [
          'Arrêt total du tabac',
          'Exercices respiratoires',
          'Environnement sans fumée'
        ],
        recovery: 'Régénération partielle après 1-9 mois, risque réduit après 10-15 ans'
      },
      {
        id: 'heart',
        name: 'Cœur',
        severity: 'high',
        description: "Le tabac accélère l'athérosclérose et multiplie les risques cardiaques.",
        symptoms: [
          'Athérosclérose accélérée',
          'Infarctus du myocarde',
          'Angine de poitrine',
          'Artérite des membres inférieurs'
        ],
        protectionTips: [
          'Arrêt immédiat',
          'Activité physique régulière',
          'Alimentation cardioprotectrice'
        ],
        recovery: 'Risque cardiaque réduit de moitié après 1 an d\'arrêt'
      },
      {
        id: 'brain',
        name: 'Cerveau',
        severity: 'medium',
        description: "La nicotine crée une dépendance forte et augmente le risque d'AVC.",
        symptoms: [
          'Dépendance nicotinique',
          'Augmentation du risque d\'AVC',
          'Troubles de l\'humeur',
          'Anxiété et irritabilité au sevrage'
        ],
        protectionTips: [
          'Substituts nicotiniques',
          'Thérapies comportementales',
          'Activités de substitution'
        ],
        recovery: 'Dépendance psychologique peut persister, bénéfices immédiats'
      }
    ],
    neurologicalEffects: "Dépendance nicotinique par activation des récepteurs cholinergiques, augmentation du risque d'AVC.",
    cardiovascularEffects: "Athérosclérose accélérée, spasmes vasculaires, augmentation de la pression artérielle et du rythme cardiaque.",
    respiratoryEffects: "Destruction des alvéoles pulmonaires, bronchite chronique, emphysème, cancer bronchique.",
    mechanism: "La nicotine active les récepteurs nicotiniques à l'acétylcholine, libérant de la dopamine et créant une dépendance."
  },
  {
    id: 'cannabis',
    name: 'Cannabis',
    shortDesc: 'Effets neurologiques et pulmonaires',
    icon: 'fas fa-cannabis',
    color: '#48bb78',
    recoveryTime: '2-12 semaines',
    organs: [
      {
        id: 'brain',
        name: 'Cerveau',
        severity: 'high',
        description: "Le THC affecte le développement cérébral et les fonctions cognitives.",
        symptoms: [
          'Troubles de la mémoire',
          'Altération des fonctions exécutives',
          'Risque de psychose chez les prédisposés',
          'Dépendance psychologique',
          'Syndrome amotivationnel'
        ],
        protectionTips: [
          'Éviter la consommation jeune',
          'Usage récréatif très modéré',
          'Activités stimulantes cognitives'
        ],
        recovery: 'Amélioration cognitive après 4-12 semaines d\'abstinence'
      },
      {
        id: 'lungs',
        name: 'Poumons',
        severity: 'medium',
        description: "La fumée de cannabis irrite les voies respiratoires.",
        symptoms: [
          'Bronchite chronique',
          'Toux productive',
          'Irritation des voies respiratoires',
          'Risque de cancer pulmonaire (avec tabac)'
        ],
        protectionTips: [
          'Éviter la combustion',
          'Espace bien ventilé',
          'Consommation occasionnelle'
        ],
        recovery: 'Amélioration respiratoire rapide après arrêt'
      },
      {
        id: 'heart',
        name: 'Cœur',
        severity: 'medium',
        description: "Augmentation temporaire du rythme cardiaque et de la pression artérielle.",
        symptoms: [
          'Tachycardie',
          'Hypertension artérielle transitoire',
          'Risque accru chez les cardiaques'
        ],
        protectionTips: [
          'Surveillance cardiaque',
          'Éviter les doses élevées',
          'Consultation médicale en cas de troubles'
        ],
        recovery: 'Effets cardiovasculaires réversibles'
      }
    ],
    neurologicalEffects: "Activation des récepteurs CB1, altération de la mémoire, coordination, jugement et possible déclenchement de troubles psychotiques.",
    cardiovascularEffects: "Tachycardie, hypotension orthostatique, augmentation du risque cardiaque aigu lors de la consommation.",
    respiratoryEffects: "Irritation bronchique, bronchite chronique, possible augmentation du risque de cancer pulmonaire.",
    mechanism: "Le THC se lie aux récepteurs cannabinoïdes CB1 du système nerveux central, modulant la libération de neurotransmetteurs."
  },
  {
    id: 'cocaine',
    name: 'Cocaïne',
    shortDesc: 'Dégâts cardiovasculaires et neurologiques',
    icon: 'fas fa-pills',
    color: '#e53e3e',
    recoveryTime: '6-24 mois',
    organs: [
      {
        id: 'heart',
        name: 'Cœur',
        severity: 'critical',
        description: "La cocaïne cause des spasmes coronariens et des infarctus.",
        symptoms: [
          'Infarctus du myocarde',
          'Arythmies mortelles',
          'Cardiomyopathie',
          'Hypertension artérielle sévère',
          'Arrêt cardiaque'
        ],
        protectionTips: [
          'Arrêt immédiat et total',
          'Surveillance cardiaque étroite',
          'Consultation cardiologique'
        ],
        recovery: 'Risque cardiaque persistant même après arrêt'
      },
      {
        id: 'brain',
        name: 'Cerveau',
        severity: 'high',
        description: "La cocaïne endommage les vaisseaux cérébraux et cause des AVC.",
        symptoms: [
          'Accidents vasculaires cérébraux',
          'Convulsions',
          'Paranoïa et psychose',
          'Dépendance extrêmement forte',
          'Dépression sévère au sevrage'
        ],
        protectionTips: [
          'Prise en charge spécialisée',
          'Environnement sécurisé',
          'Support psychiatrique'
        ],
        recovery: 'Récupération neurologique partielle, dépendance longue'
      },
      {
        id: 'nose',
        name: 'Nez et sinus',
        severity: 'high',
        description: "La cocaïne sniffée détruit la cloison nasale.",
        symptoms: [
          'Perforation de la cloison nasale',
          'Nécrose des tissus',
          'Anosmie (perte d\'odorat)',
          'Saignements chroniques'
        ],
        protectionTips: [
          'Arrêt total',
          'Consultation ORL',
          'Soins locaux'
        ],
        recovery: 'Lésions souvent permanentes'
      }
    ],
    neurologicalEffects: "Bloque la recapture de la dopamine, noradrénaline et sérotonine, causant euphorie puis dépression sévère, risques d'AVC et de convulsions.",
    cardiovascularEffects: "Vasoconstriction sévère, hypertension artérielle, infarctus du myocarde, arythmies mortelles, cardiomyopathie.",
    respiratoryEffects: "Douleur thoracique, œdème pulmonaire, asthme, complications respiratoires diverses.",
    mechanism: "Inhibition de la recapture de la dopamine, noradrénaline et sérotonine, menant à une accumulation massive de ces neurotransmetteurs."
  }
])

// Données calculées
const currentSubstance = computed(() => {
  return substances.value.find(s => s.id === selectedSubstance.value) || substances.value[0]
})

const selectedOrganData = computed(() => {
  return currentSubstance.value.organs.find(o => o.id === selectedOrgan.value) || currentSubstance.value.organs[0]
})

const affectedOrgansCount = computed(() => {
  return currentSubstance.value.organs.length
})

const criticalOrgansCount = computed(() => {
  return currentSubstance.value.organs.filter(o => o.severity === 'critical').length
})

const severeOrgansCount = computed(() => {
  return currentSubstance.value.organs.filter(o => o.severity === 'high').length
})

const protectionTipsCount = computed(() => {
  return currentSubstance.value.organs.reduce((total, organ) => total + organ.protectionTips.length, 0)
})

// Méthodes pour les images
const getOrganImage = (organId) => {
  const imageMap = {
    brain: './src/assets/organe/body_brain_red.jpg',
    heart: './src/assets/organe/body_heart_red.jpg',
    lungs: './src/assets/organe/body_lungs_red.jpg',
    liver: './src/assets/organe/body_liver_red.jpg',
    stomach: './src/assets/organe/stomach.jpeg',
    pancreas: './src/assets/organe/pancreas.jpg',
    kidneys: './src/assets/organe/body_kidney_red.jpg',
    nervousSystem: './src/assets/organe/body_nerves_red.png',
    nose: './src/assets/organe/body_nose_red.jpg',
    humain_body: './src/assets/humain_body.jpeg'
  }
  return imageMap[organId] 
}

const getOrganPosition = (organId) => {
  const positions = {
    brain: { top: '8%', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '90px' },
    heart: { top: '25%', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '70px' },
    lungs: { top: '28%', left: '50%', transform: 'translateX(-50%)', width: '180px', height: '100px' },
    liver: { top: '42%', left: '45%', transform: 'translateX(-50%)', width: '100px', height: '80px' },
    stomach: { top: '45%', left: '50%', transform: 'translateX(-50%)', width: '70px', height: '50px' },
    pancreas: { top: '48%', left: '55%', transform: 'translateX(-50%)', width: '80px', height: '30px' },
    kidneys: { top: '50%', left: '50%', transform: 'translateX(-50%)', width: '140px', height: '60px' },
    nervousSystem: { top: '15%', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '200px' },
    nose: { top: '5%', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '50px' },
    humain_body: { top: '0%', left: '0%', width: '120%', height: '120%'}
  }
  return positions[organId] 
}

// Méthodes d'interaction
const selectSubstance = (substanceId) => {
  selectedSubstance.value = substanceId
  selectedOrgan.value = currentSubstance.value.organs[0]?.id || 'brain'
}

const selectOrgan = (organId) => {
  selectedOrgan.value = organId
}

const highlightOrgan = (organId) => {
  hoveredOrgan.value = organId
}

const unhighlightOrgan = () => {
  hoveredOrgan.value = null
}

const getSeverityText = (severity) => {
  const texts = {
    low: 'Impact Léger',
    medium: 'Impact Modéré',
    high: 'Impact Sévère',
    critical: 'Impact Critique'
  }
  return texts[severity] || 'Inconnu'
}

const goToEmergency = () => {
  router.push('/urgence')
}

// Au montage
onMounted(() => {
  // Initialisation
})
</script>

<style scoped>
.anatomy-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.anatomy-main {
  padding: 30px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.anatomy-header {
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
  color: #4299e1;
}

.header-content p {
  color: #718096;
  font-size: 1.1rem;
}

.header-stats {
  display: flex;
  gap: 20px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ebf8ff;
  padding: 10px 15px;
  border-radius: 10px;
  color: #4299e1;
  font-weight: 600;
}

.stat i {
  font-size: 1.2rem;
}

/* Sélecteur de substance */
.substance-selector {
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
  color: #4299e1;
}

.substances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.substance-card {
  background: white;
  border: 3px solid #e2e8f0;
  padding: 25px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.substance-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.5s;
}

.substance-card:hover::before {
  left: 100%;
}

.substance-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.substance-card.active {
  border-color: #4299e1;
  box-shadow: 0 4px 15px rgba(66, 153, 225, 0.3);
}

.substance-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  margin: 0 auto 15px;
}

.substance-card h3 {
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 1.3rem;
}

.substance-card p {
  color: #718096;
  margin: 0;
  font-size: 0.9rem;
}

/* Anatomie humaine */
.human-anatomy {
  margin-bottom: 50px;
}

.anatomy-container {
  display: grid;
  grid-template-columns: 250px 1fr 350px;
  gap: 30px;
  align-items: start;
}

.anatomy-legend {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.anatomy-legend h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
}

.severity-levels {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.severity-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.severity-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
}

.severity-dot.low {
  background: #48bb78;
}

.severity-dot.medium {
  background: #ed8936;
}

.severity-dot.high {
  background: #e53e3e;
}

.severity-dot.critical {
  background: #742a2a;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Corps humain avec images réelles */
.human-body-real {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
}

.body-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.base-human-body {
  position: relative;
  width: 100%;
  height: 700px;
}

.body-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.8;
}

.organ-image-container {
  position: absolute;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  border-radius: 10px;
  overflow: visible;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.organ-image-container:hover {
  transform: scale(1.1);
  z-index: 20;
}

.organ-image-container.active {
  transform: scale(1.15);
  z-index: 30;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4));
}

.organ-image-container.highlighted {
  filter: brightness(1.2) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.organ-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.organ-overlay {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.organ-image-container:hover .organ-overlay {
  opacity: 1;
  bottom: -45px;
}

.severity-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

/* Indicateurs de sévérité pour les organes */
.organ-image-container.low {
  border: 3px solid #48bb78;
}

.organ-image-container.medium {
  border: 3px solid #ed8936;
}

.organ-image-container.high {
  border: 3px solid #e53e3e;
}

.organ-image-container.critical {
  border: 3px solid #742a2a;
  animation: criticalPulse 2s infinite;
}

@keyframes criticalPulse {
  0% { border-color: #742a2a; box-shadow: 0 0 10px rgba(116, 42, 42, 0.5); }
  50% { border-color: #e53e3e; box-shadow: 0 0 20px rgba(229, 62, 62, 0.8); }
  100% { border-color: #742a2a; box-shadow: 0 0 10px rgba(116, 42, 42, 0.5); }
}

.severity-indicator.low { background: #48bb78; }
.severity-indicator.medium { background: #ed8936; }
.severity-indicator.high { background: #e53e3e; }
.severity-indicator.critical { 
  background: #742a2a;
  animation: pulse 1s infinite;
}

/* Détails de l'organe */
.organ-details {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.details-card {
  padding: 0;
}

.details-header {
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.severity-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.severity-badge.low {
  background: #48bb78;
}

.severity-badge.medium {
  background: #ed8936;
}

.severity-badge.high {
  background: #e53e3e;
}

.severity-badge.critical {
  background: #742a2a;
  animation: pulse 2s infinite;
}

.details-content {
  padding: 25px;
  max-height: 500px;
  overflow-y: auto;
}

.organ-visual {
  text-align: center;
  margin-bottom: 20px;
}

.organ-detail-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.organ-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 1rem;
}

.symptoms-list,
.protection-tips,
.recovery-info {
  margin-bottom: 25px;
}

.symptoms-list h4,
.protection-tips h4,
.recovery-info h4 {
  color: #2d3748;
  margin-bottom: 12px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.symptoms-list ul,
.protection-tips ul {
  color: #4a5568;
  padding-left: 20px;
  margin: 0;
}

.symptoms-list li,
.protection-tips li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.recovery-info p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
  padding: 12px;
  background: #f0fff4;
  border-radius: 8px;
  border-left: 4px solid #48bb78;
}

/* Statistiques d'impact */
.impact-stats {
  margin-bottom: 50px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

/* Informations sur la substance */
.substance-info {
  margin-bottom: 50px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.info-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.info-header {
  background: #f7fafc;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e2e8f0;
}

.info-header i {
  font-size: 1.3rem;
  color: #4299e1;
}

.info-header h3 {
  color: #2d3748;
  margin: 0;
  font-size: 1.2rem;
}

.info-content {
  padding: 20px;
}

.info-content p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

/* Avertissement */
.warning-section {
  margin-bottom: 40px;
}

.warning-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 20px;
  border-left: 6px solid #f6ad55;
}

.warning-card i {
  font-size: 2.5rem;
  color: #f6ad55;
  margin-top: 5px;
}

.warning-content {
  flex: 1;
}

.warning-content h3 {
  color: #2d3748;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.warning-content p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
}

.help-btn {
  background: linear-gradient(135deg, #e53e3e, #c53030);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.help-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(229, 62, 62, 0.3);
}

/* Styles responsifs */
@media (max-width: 1200px) {
  .anatomy-container {
    grid-template-columns: 200px 1fr;
  }
  
  .organ-details {
    grid-column: 1 / -1;
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .anatomy-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .anatomy-container {
    grid-template-columns: 1fr;
  }
  
  .substances-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .warning-card {
    flex-direction: column;
    text-align: center;
  }
  
  .human-body-real {
    padding: 20px;
  }
  
  .base-human-body {
    height: 500px;
  }
  
  .organ-overlay {
    font-size: 0.7rem;
    bottom: -35px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .substances-grid {
    grid-template-columns: 1fr;
  }
  
  .header-content h1 {
    font-size: 1.8rem;
  }
  
  .human-body-real {
    padding: 10px;
  }
  
  .base-human-body {
    height: 400px;
  }
  
  .organ-image-container {
    transform: scale(0.9);
  }
  
  .organ-image-container:hover {
    transform: scale(1);
  }
}
</style>