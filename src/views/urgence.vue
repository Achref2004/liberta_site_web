<template>
  <div class="emergency-page">
    <Header />
    
    <main class="emergency-main">
      <div class="container">
        <!-- En-tête urgence -->
        <section class="emergency-header">
          <div class="header-content">
            <h1><i class="fas fa-ambulance"></i> Urgence & Premiers Secours</h1>
            <p>Réagissez rapidement face aux situations d'urgence liées aux addictions</p>
          </div>
          <div class="emergency-contact">
            <div class="emergency-number">
              <i class="fas fa-phone-alt"></i>
              <div>
                <strong>Urgence Médicale</strong>
                <span class="number">190</span>
              </div>
            </div>
            <div class="emergency-number">
              <i class="fas fa-headset"></i>
              <div>
                <strong>Écoute & Soutien</strong>
                <span class="number">80 10 10 10</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Bannière d'urgence -->
        <div class="urgent-banner critical" v-if="showUrgentBanner">
          <i class="fas fa-exclamation-triangle"></i>
          <div class="urgent-info">
            <strong>Situation critique détectée</strong>
            <span>Consultez immédiatement un médecin ou appelez le 190</span>
          </div>
          <button class="close-banner" @click="showUrgentBanner = false">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Navigation rapide -->
        <section class="quick-nav">
          <h2 class="section-title">
            <i class="fas fa-first-aid"></i>
            Navigation Rapide
          </h2>
          <div class="nav-grid">
            <button class="nav-card" @click="scrollTo('overdose')">
              <div class="nav-icon overdose">
                <i class="fas fa-syringe"></i>
              </div>
              <h3>Overdose</h3>
              <p>Réagir face à une surdose</p>
            </button>
            <button class="nav-card" @click="scrollTo('crisis')">
              <div class="nav-icon crisis">
                <i class="fas fa-heartbeat"></i>
              </div>
              <h3>Crise de manque</h3>
              <p>Gérer les symptômes de sevrage</p>
            </button>
            <button class="nav-card" @click="scrollTo('first-aid')">
              <div class="nav-icon first-aid">
                <i class="fas fa-hand-holding-medical"></i>
              </div>
              <h3>Premiers Secours</h3>
              <p>الأسعفات الأولية</p>
            </button>
            <button class="nav-card" @click="scrollTo('health-check')">
              <div class="nav-icon health">
                <i class="fas fa-stethoscope"></i>
              </div>
              <h3>Check-up Santé</h3>
              <p>Évaluez votre état de santé</p>
            </button>
          </div>
        </section>

        <!-- Section Overdose -->
        <section id="overdose" class="overdose-section">
          <h2 class="section-title">
            <i class="fas fa-syringe"></i>
            Overdose - Réagir Rapidement
          </h2>

          <div class="emergency-steps">
            <div class="step-card critical">
              <div class="step-header">
                <span class="step-number">1</span>
                <h3>Reconnaître les signes</h3>
              </div>
              <div class="step-content">
                <div class="symptoms-grid">
                  <div class="symptom-item">
                    <i class="fas fa-bed"></i>
                    <span>Perte de conscience</span>
                  </div>
                  <div class="symptom-item">
                    <i class="fas fa-lungs"></i>
                    <span>Respiration lente ou arrêtée</span>
                  </div>
                  <div class="symptom-item">
                    <i class="fas fa-heart"></i>
                    <span>Rythme cardiaque faible</span>
                  </div>
                  <div class="symptom-item">
                    <i class="fas fa-tint"></i>
                    <span>Peau pâle ou bleutée</span>
                  </div>
                  <div class="symptom-item">
                    <i class="fas fa-temperature-low"></i>
                    <span>Hypothermie</span>
                  </div>
                  <div class="symptom-item">
                    <i class="fas fa-vomit"></i>
                    <span>Vomissements</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="step-card urgent">
              <div class="step-header">
                <span class="step-number">2</span>
                <h3>Actions immédiates</h3>
              </div>
              <div class="step-content">
                <div class="action-list">
                  <div class="action-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                      <strong>Appelez le 190 immédiatement</strong>
                      <p>Donnez l'adresse exacte et décrivez l'état de la personne</p>
                    </div>
                  </div>
                  <div class="action-item">
                    <i class="fas fa-redo"></i>
                    <div>
                      <strong>Position latérale de sécurité</strong>
                      <p>Si la personne respire mais est inconsciente</p>
                    </div>
                  </div>
                  <div class="action-item">
                    <i class="fas fa-heart"></i>
                    <div>
                      <strong>Réanimation si nécessaire</strong>
                      <p>30 compressions thoraciques / 2 insufflations</p>
                    </div>
                  </div>
                  <div class="action-item">
                    <i class="fas fa-thermometer"></i>
                    <div>
                      <strong>Gardez la personne au chaud</strong>
                      <p>Couvrez-la avec une couverture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="step-card important">
              <div class="step-header">
                <span class="step-number">3</span>
                <h3>Ce qu'il ne faut PAS faire</h3>
              </div>
              <div class="step-content">
                <div class="dont-list">
                  <div class="dont-item">
                    <i class="fas fa-ban"></i>
                    <span>Ne pas donner à manger ou à boire</span>
                  </div>
                  <div class="dont-item">
                    <i class="fas fa-ban"></i>
                    <span>Ne pas faire prendre une douche froide</span>
                  </div>
                  <div class="dont-item">
                    <i class="fas fa-ban"></i>
                    <span>Ne pas laisser la personne seule</span>
                  </div>
                  <div class="dont-item">
                    <i class="fas fa-ban"></i>
                    <span>Ne pas cacher des informations aux secours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Crise de manque -->
        <section id="crisis" class="crisis-section">
          <h2 class="section-title">
            <i class="fas fa-heartbeat"></i>
            Gestion des Crises de Manque
          </h2>

          <div class="crisis-grid">
            <div class="crisis-card">
              <div class="crisis-type alcohol">
                <h3>🛑 Alcool</h3>
                <div class="symptoms">
                  <h4>Symptômes de sevrage sévère :</h4>
                  <ul>
                    <li>Tremblements importants</li>
                    <li>Transpiration excessive</li>
                    <li>Hallucinations</li>
                    <li>Convulsions</li>
                    <li>Délirium tremens</li>
                  </ul>
                </div>
                <div class="actions">
                  <h4>Actions :</h4>
                  <p><strong>Urgence médicale !</strong> Le sevrage alcoolique peut être mortel. Consultez immédiatement un médecin.</p>
                </div>
              </div>
            </div>

            <div class="crisis-card">
              <div class="crisis-type opiates">
                <h3>💊 Opiacés</h3>
                <div class="symptoms">
                  <h4>Symptômes de manque :</h4>
                  <ul>
                    <li>Douleurs musculaires</li>
                    <li>Insomnie et agitation</li>
                    <li>Nausées et diarrhée</li>
                    <li>Anxiété sévère</li>
                    <li>Bâillements fréquents</li>
                  </ul>
                </div>
                <div class="actions">
                  <h4>Actions :</h4>
                  <p>Contactez un centre de traitement. Ne jamais arrêter brutalement sans suivi médical.</p>
                </div>
              </div>
            </div>

            <div class="crisis-card">
              <div class="crisis-type stimulants">
                <h3>⚡ Stimulants</h3>
                <div class="symptoms">
                  <h4>Crash après consommation :</h4>
                  <ul>
                    <li>Dépression sévère</li>
                    <li>Fatigue extrême</li>
                    <li>Augmentation de l'appétit</li>
                    <li>Idées suicidaires</li>
                    <li>Paranoïa</li>
                  </ul>
                </div>
                <div class="actions">
                  <h4>Actions :</h4>
                  <p>Environnement calme. Surveillance des idées suicidaires. Consultation psychiatrique.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="crisis-tips">
            <h3>💡 Techniques de gestion immédiate :</h3>
            <div class="tips-grid">
              <div class="tip-card">
                <i class="fas fa-wind"></i>
                <h4>Respiration profonde</h4>
                <p>Inspirez 4 secondes, retenez 4 secondes, expirez 6 secondes</p>
              </div>
              <div class="tip-card">
                <i class="fas fa-tint"></i>
                <h4>Eau froide</h4>
                <p>Lavez votre visage à l'eau froide ou prenez une douche</p>
              </div>
              <div class="tip-card">
                <i class="fas fa-walking"></i>
                <h4>Marche rapide</h4>
                <p>15-20 minutes de marche pour évacuer la tension</p>
              </div>
              <div class="tip-card">
                <i class="fas fa-phone"></i>
                <h4>Appel de soutien</h4>
                <p>Appelez un proche ou une ligne d'écoute</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Premiers Secours -->
        <section id="first-aid" class="firstaid-section">
          <h2 class="section-title">
            <i class="fas fa-hand-holding-medical"></i>
            الأسعفات الأولية - Premiers Secours
          </h2>

          <div class="firstaid-content">
            <div class="firstaid-card">
              <div class="firstaid-header">
                <i class="fas fa-user-injured"></i>
                <h3>Position Latérale de Sécurité (PLS)</h3>
              </div>
              <div class="firstaid-steps">
                <div class="aid-step">
                  <span class="step-num">1</span>
                  <p>Vérifiez que la personne respire</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">2</span>
                  <p>Tournez-la doucement sur le côté</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">3</span>
                  <p>Pliez la jambe du dessus à angle droit</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">4</span>
                  <p>Placez la main sous la joue</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">5</span>
                  <p>Vérifiez régulièrement la respiration</p>
                </div>
              </div>
            </div>

            <div class="firstaid-card">
              <div class="firstaid-header">
                <i class="fas fa-heart"></i>
                <h3>Réanimation Cardio-Pulmonaire (RCP)</h3>
              </div>
              <div class="firstaid-steps">
                <div class="aid-step">
                  <span class="step-num">1</span>
                  <p>Vérifiez la respiration et le pouls</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">2</span>
                  <p>Appelez les secours (190)</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">3</span>
                  <p>30 compressions thoraciques rapides</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">4</span>
                  <p>2 insufflations bouche-à-bouche</p>
                </div>
                <div class="aid-step">
                  <span class="step-num">5</span>
                  <p>Répétez jusqu'à l'arrivée des secours</p>
                </div>
              </div>
            </div>
          </div>

          <div class="emergency-kit">
            <h3>🧰 Kit d'urgence recommandé :</h3>
            <div class="kit-items">
              <div class="kit-item">
                <i class="fas fa-phone"></i>
                <span>Numéros d'urgence sauvegardés</span>
              </div>
              <div class="kit-item">
                <i class="fas fa-user-md"></i>
                <span>Coordonnées de votre médecin</span>
              </div>
              <div class="kit-item">
                <i class="fas fa-pills"></i>
                <span>Liste de vos médicaments</span>
              </div>
              <div class="kit-item">
                <i class="fas fa-file-medical"></i>
                <span>Carte de groupe sanguin</span>
              </div>
              <div class="kit-item">
                <i class="fas fa-briefcase-medical"></i>
                <span>Trousse de premiers secours</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Check-up Santé -->
        <section id="health-check" class="health-section">
          <h2 class="section-title">
            <i class="fas fa-stethoscope"></i>
            Check-up Santé - Évaluation d'Urgence
          </h2>

          <!-- Quiz Tabac -->
          <div class="quiz-section" v-if="currentQuiz === 'tabac'">
            <div class="quiz-header">
              <h3>🚬 Évaluation des Risques - Tabac</h3>
              <p>Répondez à ces questions pour évaluer l'impact du tabac sur votre santé</p>
            </div>

            <div class="quiz-progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: quizProgress + '%' }"></div>
              </div>
              <span>Question {{ currentQuestion + 1 }}/{{ tobaccoQuestions.length }}</span>
            </div>

            <div class="quiz-content" v-if="!quizCompleted">
              <div class="question-card">
                <h4>{{ tobaccoQuestions[currentQuestion].question }}</h4>
                <div class="options-grid">
                  <button 
                    v-for="(option, index) in tobaccoQuestions[currentQuestion].options" 
                    :key="index"
                    class="option-btn"
                    :class="{ selected: selectedOption === index }"
                    @click="selectOption(index)"
                  >
                    {{ option.text }}
                    <span class="risk-level" :class="option.risk">{{ option.risk }}</span>
                  </button>
                </div>
              </div>

              <div class="quiz-actions">
                <button v-if="currentQuestion > 0" class="nav-btn prev" @click="prevQuestion">
                  <i class="fas fa-arrow-left"></i>
                  Précédent
                </button>
                <button class="nav-btn next" @click="nextQuestion" :disabled="selectedOption === null">
                  {{ currentQuestion === tobaccoQuestions.length - 1 ? 'Terminer' : 'Suivant' }}
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <!-- Résultats du quiz -->
            <div class="quiz-results" v-if="quizCompleted">
              <div class="results-card" :class="riskLevel">
                <div class="results-header">
                  <i :class="resultIcon"></i>
                  <h3>{{ resultTitle }}</h3>
                </div>
                <div class="results-content">
                  <p>{{ resultMessage }}</p>
                  
                  <div class="risk-factors">
                    <h4>Facteurs de risque identifiés :</h4>
                    <ul>
                      <li v-for="(factor, index) in riskFactors" :key="index">
                        <i class="fas fa-exclamation-circle"></i>
                        {{ factor }}
                      </li>
                    </ul>
                  </div>

                  <div class="recommendations">
                    <h4>Recommandations :</h4>
                    <div class="rec-grid">
                      <div class="rec-card" v-for="(rec, index) in recommendations" :key="index">
                        <i :class="rec.icon"></i>
                        <span>{{ rec.text }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="results-actions">
                    <button class="action-btn primary" @click="restartQuiz">
                      <i class="fas fa-redo"></i>
                      Refaire le test
                    </button>
                    <button class="action-btn secondary" @click="showUrgentBanner = true" v-if="riskLevel === 'high'">
                      <i class="fas fa-ambulance"></i>
                      Consulter en urgence
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Autres quiz -->
          <div class="other-quizzes">
            <h3>Autres évaluations disponibles :</h3>
            <div class="quiz-selector">
              <button 
                class="quiz-option"
                :class="{ active: currentQuiz === 'tabac' }"
                @click="currentQuiz = 'tabac'"
              >
                <i class="fas fa-smoking"></i>
                Tabac
              </button>
              <button class="quiz-option" disabled>
                <i class="fas fa-wine-bottle"></i>
                Alcool (Bientôt)
              </button>
              <button class="quiz-option" disabled>
                <i class="fas fa-cannabis"></i>
                Cannabis (Bientôt)
              </button>
              <button class="quiz-option" disabled>
                <i class="fas fa-pills"></i>
                Médicaments (Bientôt)
              </button>
            </div>
          </div>
        </section>

        <!-- Ressources d'urgence -->
        <section class="resources-section">
          <h2 class="section-title">
            <i class="fas fa-life-ring"></i>
            Ressources d'Urgence
          </h2>

          <div class="resources-grid">
            <div class="resource-card">
              <div class="resource-header">
                <i class="fas fa-ambulance"></i>
                <h3>Urgences Médicales</h3>
              </div>
              <div class="resource-content">
                <div class="contact-item">
                  <strong>SAMU</strong>
                  <span class="number">190</span>
                </div>
                <div class="contact-item">
                  <strong>Protection Civile</strong>
                  <span class="number">198</span>
                </div>
                <div class="contact-item">
                  <strong>Police Secours</strong>
                  <span class="number">197</span>
                </div>
              </div>
            </div>

            <div class="resource-card">
              <div class="resource-header">
                <i class="fas fa-headset"></i>
                <h3>Lignes d'Écoute</h3>
              </div>
              <div class="resource-content">
                <div class="contact-item">
                  <strong>SOS Écoute</strong>
                  <span class="number">80 10 10 10</span>
                </div>
                <div class="contact-item">
                  <strong>Drogues Info Service</strong>
                  <span class="number">80 23 13 13</span>
                </div>
                <div class="contact-item">
                  <strong>Prévention Suicide</strong>
                  <span class="number">80 21 22 23</span>
                </div>
              </div>
            </div>

            <div class="resource-card">
              <div class="resource-header">
                <i class="fas fa-hospital"></i>
                <h3>Centres Spécialisés</h3>
              </div>
              <div class="resource-content">
                <div class="contact-item">
                  <strong>Centre Anti-Poison</strong>
                  <span class="number">71 84 74 74</span>
                </div>
                <div class="contact-item">
                  <strong>Hôpital Razi</strong>
                  <span class="number">71 56 74 00</span>
                </div>
                <div class="contact-item">
                  <strong>Urgences Psychiatriques</strong>
                  <span class="number">71 57 47 47</span>
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
import { ref, computed, onMounted } from 'vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

// États réactifs
const showUrgentBanner = ref(false)
const currentQuiz = ref('tabac')
const currentQuestion = ref(0)
const selectedOption = ref(null)
const quizCompleted = ref(false)
const userAnswers = ref([])

// Questions du quiz tabac
const tobaccoQuestions = ref([
  {
    question: "Avez-vous des douleurs au niveau de la poitrine ou des poumons ?",
    options: [
      { text: "Non, jamais", risk: "low" },
      { text: "Parfois, après un effort", risk: "medium" },
      { text: "Oui, fréquemment", risk: "high" },
      { text: "Oui, même au repos", risk: "critical" }
    ]
  },
  {
    question: "Quelle est votre fréquence de toux ?",
    options: [
      { text: "Je ne tousse pas", risk: "low" },
      { text: "Toux occasionnelle le matin", risk: "medium" },
      { text: "Toux quotidienne", risk: "high" },
      { text: "Toux avec expectorations", risk: "critical" }
    ]
  },
  {
    question: "Combien de cigarettes fumez-vous par jour ?",
    options: [
      { text: "Moins de 5", risk: "low" },
      { text: "5 à 10", risk: "medium" },
      { text: "10 à 20", risk: "high" },
      { text: "Plus de 20", risk: "critical" }
    ]
  },
  {
    question: "Depuis combien d'années fumez-vous ?",
    options: [
      { text: "Moins de 2 ans", risk: "low" },
      { text: "2 à 5 ans", risk: "medium" },
      { text: "5 à 10 ans", risk: "high" },
      { text: "Plus de 10 ans", risk: "critical" }
    ]
  },
  {
    question: "Avez-vous des difficultés respiratoires ?",
    options: [
      { text: "Non", risk: "low" },
      { text: "À l'effort seulement", risk: "medium" },
      { text: "Oui, dans les escaliers", risk: "high" },
      { text: "Oui, même en marchant", risk: "critical" }
    ]
  },
  {
    question: "Avez-vous remarqué une baisse de votre capacité physique ?",
    options: [
      { text: "Non", risk: "low" },
      { text: "Légère baisse", risk: "medium" },
      { text: "Baisse significative", risk: "high" },
      { text: "Essoufflement au moindre effort", risk: "critical" }
    ]
  }
])

// Calculs
const quizProgress = computed(() => {
  return ((currentQuestion.value + 1) / tobaccoQuestions.value.length) * 100
})

const riskLevel = computed(() => {
  if (userAnswers.value.length === 0) return 'low'
  
  const scores = userAnswers.value.map(answer => {
    const risk = tobaccoQuestions.value[answer.questionIndex].options[answer.optionIndex].risk
    return risk === 'critical' ? 3 : risk === 'high' ? 2 : risk === 'medium' ? 1 : 0
  })
  
  const totalScore = scores.reduce((a, b) => a + b, 0)
  const average = totalScore / userAnswers.value.length
  
  if (average >= 2.5) return 'critical'
  if (average >= 1.5) return 'high'
  if (average >= 0.5) return 'medium'
  return 'low'
})

const resultIcon = computed(() => {
  const icons = {
    low: 'fas fa-smile text-green-500',
    medium: 'fas fa-meh text-yellow-500',
    high: 'fas fa-frown text-orange-500',
    critical: 'fas fa-exclamation-triangle text-red-500'
  }
  return icons[riskLevel.value]
})

const resultTitle = computed(() => {
  const titles = {
    low: 'Risque Faible',
    medium: 'Risque Modéré',
    high: 'Risque Élevé',
    critical: 'Risque Critique'
  }
  return titles[riskLevel.value]
})

const resultMessage = computed(() => {
  const messages = {
    low: 'Votre consommation semble avoir un impact limité sur votre santé, mais la vigilance reste de mise.',
    medium: 'Votre consommation présente certains risques pour votre santé. Une consultation médicale est recommandée.',
    high: 'Votre santé est significativement impactée. Une consultation médicale urgente est nécessaire.',
    critical: 'Votre état de santé nécessite une attention médicale immédiate. Consultez sans tarder.'
  }
  return messages[riskLevel.value]
})

const riskFactors = computed(() => {
  const factors = []
  userAnswers.value.forEach(answer => {
    const risk = tobaccoQuestions.value[answer.questionIndex].options[answer.optionIndex].risk
    if (risk === 'high' || risk === 'critical') {
      factors.push(tobaccoQuestions.value[answer.questionIndex].question)
    }
  })
  return factors.slice(0, 3) // Retourne les 3 principaux facteurs de risque
})

const recommendations = computed(() => {
  const baseRecs = [
    { icon: 'fas fa-user-md', text: 'Consultation médicale' },
    { icon: 'fas fa-smoking-ban', text: 'Arrêt du tabac' },
    { icon: 'fas fa-lungs', text: 'Examen pulmonaire' },
    { icon: 'fas fa-heart', text: 'Contrôle cardiaque' }
  ]
  
  if (riskLevel.value === 'critical') {
    baseRecs.unshift({ icon: 'fas fa-ambulance', text: 'Urgence médicale' })
  }
  
  if (riskLevel.value === 'high' || riskLevel.value === 'critical') {
    baseRecs.push({ icon: 'fas fa-x-ray', text: 'Radiographie pulmonaire' })
  }
  
  return baseRecs
})

// Méthodes
const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const selectOption = (index) => {
  selectedOption.value = index
}

const nextQuestion = () => {
  // Sauvegarder la réponse
  userAnswers.value.push({
    questionIndex: currentQuestion.value,
    optionIndex: selectedOption.value
  })
  
  // Passer à la question suivante ou terminer
  if (currentQuestion.value < tobaccoQuestions.value.length - 1) {
    currentQuestion.value++
    selectedOption.value = null
  } else {
    quizCompleted.value = true
  }
}

const prevQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
    // Restaurer la réponse précédente
    const prevAnswer = userAnswers.value.find(answer => answer.questionIndex === currentQuestion.value)
    selectedOption.value = prevAnswer ? prevAnswer.optionIndex : null
  }
}

const restartQuiz = () => {
  currentQuestion.value = 0
  selectedOption.value = null
  quizCompleted.value = false
  userAnswers.value = []
}

// Au montage
onMounted(() => {
  // Initialisation
})
</script>

<style scoped>
.emergency-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.emergency-main {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.emergency-header {
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
  color: #e53e3e;
  font-size: 2.2rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-content p {
  color: #718096;
  font-size: 1.1rem;
}

.emergency-contact {
  display: flex;
  gap: 20px;
}

.emergency-number {
  background: linear-gradient(135deg, #e53e3e, #c53030);
  color: white;
  padding: 15px 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.emergency-number i {
  font-size: 1.5rem;
}

.emergency-number .number {
  font-size: 1.3rem;
  font-weight: 800;
}

/* Bannière urgente */
.urgent-banner {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  font-weight: 600;
}

.urgent-banner.critical {
  background: linear-gradient(135deg, #e53e3e, #c53030);
  color: white;
}

.urgent-banner i {
  font-size: 1.8rem;
}

.urgent-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.close-banner {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-banner:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Navigation rapide */
.quick-nav {
  margin-bottom: 50px;
}

.section-title {
  color: #2d3748;
  font-size: 1.8rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-title i {
  color: #e53e3e;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.nav-card {
  background: white;
  border: none;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.nav-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin: 0 auto 15px;
}

.nav-icon.overdose {
  background: linear-gradient(135deg, #e53e3e, #c53030);
}

.nav-icon.crisis {
  background: linear-gradient(135deg, #ed8936, #dd6b20);
}

.nav-icon.first-aid {
  background: linear-gradient(135deg, #38a169, #2f855a);
}

.nav-icon.health {
  background: linear-gradient(135deg, #4299e1, #3182ce);
}

.nav-card h3 {
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 1.2rem;
}

.nav-card p {
  color: #718096;
  margin: 0;
}

/* Section Overdose */
.overdose-section {
  margin-bottom: 50px;
}

.emergency-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.step-card.critical {
  border-left: 5px solid #e53e3e;
}

.step-card.urgent {
  border-left: 5px solid #ed8936;
}

.step-card.important {
  border-left: 5px solid #4299e1;
}

.step-header {
  background: #f7fafc;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #e2e8f0;
}

.step-number {
  background: #e53e3e;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
}

.step-header h3 {
  color: #2d3748;
  margin: 0;
  font-size: 1.3rem;
}

.step-content {
  padding: 25px;
}

.symptoms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.symptom-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #fff5f5;
  border-radius: 10px;
  color: #e53e3e;
  font-weight: 500;
}

.symptom-item i {
  font-size: 1.2rem;
}

.action-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.action-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.action-item i {
  color: #ed8936;
  font-size: 1.5rem;
  margin-top: 2px;
}

.action-item strong {
  color: #2d3748;
  display: block;
  margin-bottom: 5px;
}

.action-item p {
  color: #718096;
  margin: 0;
}

.dont-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.dont-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #fed7d7;
  border-radius: 10px;
  color: #c53030;
  font-weight: 500;
}

.dont-item i {
  font-size: 1.2rem;
}

/* Section Crise */
.crisis-section {
  margin-bottom: 50px;
}

.crisis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.crisis-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.crisis-type {
  padding: 25px;
}

.crisis-type.alcohol {
  border-left: 5px solid #ed8936;
}

.crisis-type.opiates {
  border-left: 5px solid #9f7aea;
}

.crisis-type.stimulants {
  border-left: 5px solid #f56565;
}

.crisis-type h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.symptoms, .actions {
  margin-bottom: 20px;
}

.symptoms h4, .actions h4 {
  color: #2d3748;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.symptoms ul {
  color: #718096;
  padding-left: 20px;
  margin: 0;
}

.symptoms li {
  margin-bottom: 5px;
}

.actions p {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}

.crisis-tips h3 {
  color: #2d3748;
  margin-bottom: 25px;
  font-size: 1.4rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.tip-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.tip-card i {
  font-size: 2rem;
  color: #4299e1;
  margin-bottom: 15px;
}

.tip-card h4 {
  color: #2d3748;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.tip-card p {
  color: #718096;
  margin: 0;
  font-size: 0.9rem;
}

/* Premiers Secours */
.firstaid-section {
  margin-bottom: 50px;
}

.firstaid-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.firstaid-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.firstaid-header {
  background: linear-gradient(135deg, #38a169, #2f855a);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.firstaid-header i {
  font-size: 1.5rem;
}

.firstaid-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.firstaid-steps {
  padding: 25px;
}

.aid-step {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.aid-step:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.step-num {
  background: #38a169;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.aid-step p {
  color: #4a5568;
  margin: 0;
  line-height: 1.5;
}

.emergency-kit {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.emergency-kit h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.kit-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.kit-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #f0fff4;
  border-radius: 10px;
  color: #38a169;
  font-weight: 500;
}

.kit-item i {
  font-size: 1.2rem;
}

/* Section Santé */
.health-section {
  margin-bottom: 50px;
}

.quiz-section {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
  margin-bottom: 30px;
}

.quiz-header {
  text-align: center;
  margin-bottom: 30px;
}

.quiz-header h3 {
  color: #2d3748;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.quiz-header p {
  color: #718096;
  margin: 0;
}

.quiz-progress {
  margin-bottom: 30px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #4299e1, #3182ce);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.quiz-progress span {
  color: #718096;
  font-size: 0.9rem;
}

.question-card {
  margin-bottom: 30px;
}

.question-card h4 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1.3rem;
  line-height: 1.5;
}

.options-grid {
  display: grid;
  gap: 12px;
}

.option-btn {
  background: white;
  border: 2px solid #e2e8f0;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.option-btn:hover {
  border-color: #4299e1;
}

.option-btn.selected {
  border-color: #4299e1;
  background: #ebf8ff;
}

.risk-level {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.risk-level.low {
  background: #c6f6d5;
  color: #276749;
}

.risk-level.medium {
  background: #fefcbf;
  color: #744210;
}

.risk-level.high {
  background: #fed7d7;
  color: #c53030;
}

.risk-level.critical {
  background: #fed7d7;
  color: #c53030;
  font-weight: 800;
}

.quiz-actions {
  display: flex;
  justify-content: space-between;
}

.nav-btn {
  background: #4299e1;
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

.nav-btn:hover:not(:disabled) {
  background: #3182ce;
}

.nav-btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.nav-btn.prev {
  background: #718096;
}

.nav-btn.prev:hover {
  background: #4a5568;
}

/* Résultats */
.quiz-results {
  margin-top: 30px;
}

.results-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.results-card.low {
  border-left: 5px solid #48bb78;
}

.results-card.medium {
  border-left: 5px solid #ed8936;
}

.results-card.high {
  border-left: 5px solid #e53e3e;
}

.results-card.critical {
  border-left: 5px solid #c53030;
}

.results-header {
  background: #f7fafc;
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.results-header i {
  font-size: 3rem;
  margin-bottom: 15px;
}

.results-header h3 {
  color: #2d3748;
  margin: 0;
  font-size: 1.8rem;
}

.results-content {
  padding: 25px;
}

.results-content p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 1.1rem;
  text-align: center;
}

.risk-factors {
  margin-bottom: 25px;
}

.risk-factors h4 {
  color: #2d3748;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.risk-factors ul {
  color: #718096;
  padding-left: 20px;
  margin: 0;
}

.risk-factors li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.risk-factors i {
  color: #e53e3e;
}

.recommendations h4 {
  color: #2d3748;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.rec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.rec-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: #f0fff4;
  border-radius: 10px;
  color: #2d3748;
  font-weight: 500;
}

.rec-card i {
  color: #48bb78;
  font-size: 1.2rem;
}

.results-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.action-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.action-btn.primary {
  background: #4299e1;
  color: white;
}

.action-btn.primary:hover {
  background: #3182ce;
}

.action-btn.secondary {
  background: #e53e3e;
  color: white;
}

.action-btn.secondary:hover {
  background: #c53030;
}

/* Autres quiz */
.other-quizzes {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.other-quizzes h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.quiz-selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.quiz-option {
  background: white;
  border: 2px solid #e2e8f0;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #4a5568;
}

.quiz-option:hover:not(:disabled) {
  border-color: #4299e1;
  color: #4299e1;
}

.quiz-option.active {
  border-color: #4299e1;
  background: #ebf8ff;
  color: #4299e1;
}

.quiz-option:disabled {
  background: #f7fafc;
  color: #a0aec0;
  cursor: not-allowed;
}

.quiz-option i {
  font-size: 1.5rem;
}

/* Ressources */
.resources-section {
  margin-bottom: 40px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.resource-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.resource-header {
  background: linear-gradient(135deg, #2d3748, #4a5568);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.resource-header i {
  font-size: 1.5rem;
}

.resource-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.resource-content {
  padding: 20px;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item strong {
  color: #2d3748;
}

.contact-item .number {
  color: #e53e3e;
  font-weight: 700;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .emergency-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .emergency-contact {
    flex-direction: column;
    width: 100%;
  }
  
  .nav-grid,
  .crisis-grid,
  .firstaid-content,
  .resources-grid {
    grid-template-columns: 1fr;
  }
  
  .symptoms-grid,
  .tips-grid,
  .kit-items,
  .rec-grid,
  .quiz-selector {
    grid-template-columns: 1fr 1fr;
  }
  
  .quiz-actions {
    flex-direction: column;
    gap: 15px;
  }
  
  .results-actions {
    flex-direction: column;
  }
  
  .header-content h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .symptoms-grid,
  .tips-grid,
  .kit-items,
  .rec-grid,
  .quiz-selector {
    grid-template-columns: 1fr;
  }
  
  .urgent-banner {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .firstaid-content {
    grid-template-columns: 1fr;
  }
}
</style>