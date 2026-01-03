<template>
  <Header/>
  <div class="daily-activity-page">

    
    <main class="daily-main">
      <div class="container">
        <!-- En-tête -->
        <section class="activity-header">
          <div class="header-content">
            <h1><i class="fas fa-calendar-check"></i> Activités Quotidiennes</h1>
            <p>Remplacez vos habitudes par des activités positives et enrichissantes</p>
          </div>
          <div class="motivation-badge">
            <i class="fas fa-seedling"></i>
            <span>Chaque activité compte !</span>
          </div>
        </section>

        <!-- Statistiques rapides -->
        <section class="quick-stats">
          <div class="stat-item">
            <div class="stat-number">{{ completedActivities }}/{{ totalActivities }}</div>
            <div class="stat-label">Activités terminées</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ currentStreak }}</div>
            <div class="stat-label">Jours consécutifs</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ successRate }}%</div>
            <div class="stat-label">Taux de réussite</div>
          </div>
        </section>

        <!-- Liste des activités -->
        <section class="activities-section">
          <div class="section-header">
            <h2>Mes Activités d'Aujourd'hui</h2>
            <button class="add-activity-btn" @click="showAddActivity = true">
              <i class="fas fa-plus"></i>
              Ajouter une activité
            </button>
          </div>

          <div class="activities-list">
            <div 
              v-for="activity in todayActivities" 
              :key="activity.id"
              class="activity-card"
              :class="{ 'completed': activity.completed }"
            >
              <div class="activity-main">
                <div class="activity-icon">
                  <i :class="activity.icon"></i>
                </div>
                <div class="activity-content">
                  <h3 class="activity-title">{{ activity.title }}</h3>
                  <p class="activity-description">{{ activity.description }}</p>
                  <div class="activity-time">
                    <i class="fas fa-clock"></i>
                    {{ activity.time }}
                  </div>
                </div>
                <div class="activity-actions">
                  <button 
                    class="complete-btn"
                    @click="toggleActivity(activity.id)"
                    :class="{ 'completed': activity.completed }"
                  >
                    <i class="fas" :class="activity.completed ? 'fa-check-circle' : 'fa-circle'"></i>
                  </button>
                  <button class="delete-btn" @click="deleteActivity(activity.id)">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              <div class="activity-progress" v-if="activity.recurring">
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    :style="{ width: activity.progress + '%' }"
                  ></div>
                </div>
                <span class="progress-text">{{ activity.progress }}% complété</span>
              </div>
            </div>
          </div>

          <!-- Message si aucune activité -->
          <div v-if="todayActivities.length === 0" class="empty-state">
            <i class="fas fa-tasks"></i>
            <h3>Aucune activité planifiée</h3>
            <p>Commencez par ajouter votre première activité positive</p>
            <button class="cta-btn" @click="showAddActivity = true">
              Ajouter une activité
            </button>
          </div>
        </section>

        <!-- Suggestions d'activités -->
        <section class="suggestions-section">
          <h2>Suggestions d'Activités</h2>
          <div class="suggestions-grid">
            <div 
              v-for="suggestion in activitySuggestions" 
              :key="suggestion.id"
              class="suggestion-card"
              @click="addSuggestedActivity(suggestion)"
            >
              <div class="suggestion-icon">
                <i :class="suggestion.icon"></i>
              </div>
              <h4>{{ suggestion.title }}</h4>
              <p>{{ suggestion.description }}</p>
              <button class="add-btn">
                <i class="fas fa-plus"></i>
                Ajouter
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Modal Ajouter une activité -->
    <div v-if="showAddActivity" class="modal-overlay" @click="showAddActivity = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Nouvelle Activité</h3>
          <button class="close-btn" @click="showAddActivity = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <form @submit.prevent="addNewActivity">
            <div class="form-group">
              <label>Titre de l'activité</label>
              <input 
                v-model="newActivity.title" 
                type="text" 
                placeholder="Ex: Méditation, Sport, Lecture..."
                required
              >
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea 
                v-model="newActivity.description" 
                placeholder="Décrivez votre activité..."
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label>Icône</label>
              <div class="icon-selector">
                <div 
                  v-for="icon in availableIcons" 
                  :key="icon"
                  class="icon-option"
                  :class="{ 'selected': newActivity.icon === icon }"
                  @click="newActivity.icon = icon"
                >
                  <i :class="icon"></i>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Heure</label>
              <input 
                v-model="newActivity.time" 
                type="time" 
                required
              >
            </div>

            <div class="form-group">
              <label class="checkbox-label">
                <input 
                  v-model="newActivity.recurring" 
                  type="checkbox" 
                >
                Activité récurrente (chaque jour)
              </label>
            </div>

            <div class="form-actions">
              <button type="button" class="cancel-btn" @click="showAddActivity = false">
                Annuler
              </button>
              <button type="submit" class="save-btn">
                <i class="fas fa-save"></i>
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  </div>
  <Footer/>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import { ref, computed, onMounted } from 'vue'

const showAddActivity = ref(false)
const activities = ref([])

const newActivity = ref({
  title: '',
  description: '',
  icon: 'fas fa-heart',
  time: '09:00',
  recurring: false
})

// Données calculées
const todayActivities = computed(() => {
  return activities.value.filter(activity => !activity.completed || activity.recurring)
})

const completedActivities = computed(() => {
  return activities.value.filter(activity => activity.completed).length
})

const totalActivities = computed(() => activities.value.length)

const currentStreak = computed(() => {
  // Logique simplifiée pour la démo
  return Math.min(completedActivities.value, 7)
})

const successRate = computed(() => {
  if (totalActivities.value === 0) return 0
  return Math.round((completedActivities.value / totalActivities.value) * 100)
})

// Suggestions d'activités
const activitySuggestions = ref([
  {
    id: 1,
    title: 'Méditation',
    description: '5 minutes de méditation pour calmer l esprit',
    icon: 'fas fa-spa'
  },
  {
    id: 2,
    title: 'Sport',
    description: '30 minutes d exercice physique',
    icon: 'fas fa-running'
  },
  {
    id: 3,
    title: 'Lecture',
    description: 'Lire un livre inspirant',
    icon: 'fas fa-book'
  },
  {
    id: 4,
    title: 'الصلاة',
    description: 'Prière pour les musulmans',
    icon: 'fas fa-pray'
  },
  {
    id: 5,
    title: 'Eau',
    description: 'Boire un verre d eau',
    icon: 'fas fa-tint'
  },
  {
    id: 6,
    title: 'Médicament',
    description: 'Prendre le traitement',
    icon: 'fas fa-capsules'
  },
  {
    id: 7,
    title: 'Marche',
    description: '15 minutes de marche',
    icon: 'fas fa-walking'
  },
  {
    id: 8,
    title: 'Journal',
    description: 'Écrire dans son journal',
    icon: 'fas fa-pen'
  }
])

const availableIcons = ref([
  'fas fa-heart',
  'fas fa-spa',
  'fas fa-running',
  'fas fa-book',
  'fas fa-pray',
  'fas fa-tint',
  'fas fa-capsules',
  'fas fa-walking',
  'fas fa-pen',
  'fas fa-music',
  'fas fa-utensils',
  'fas fa-coffee'
])

// Méthodes
const addNewActivity = () => {
  const activity = {
    id: Date.now(),
    ...newActivity.value,
    completed: false,
    progress: 0,
    createdAt: new Date()
  }
  
  activities.value.push(activity)
  resetNewActivity()
  showAddActivity.value = false
}

const addSuggestedActivity = (suggestion) => {
  const activity = {
    id: Date.now(),
    title: suggestion.title,
    description: suggestion.description,
    icon: suggestion.icon,
    time: '09:00',
    recurring: false,
    completed: false,
    progress: 0,
    createdAt: new Date()
  }
  
  activities.value.push(activity)
}

const toggleActivity = (id) => {
  const activity = activities.value.find(a => a.id === id)
  if (activity) {
    activity.completed = !activity.completed
    activity.progress = activity.completed ? 100 : 0
  }
}

const deleteActivity = (id) => {
  activities.value = activities.value.filter(a => a.id !== id)
}

const resetNewActivity = () => {
  newActivity.value = {
    title: '',
    description: '',
    icon: 'fas fa-heart',
    time: '09:00',
    recurring: false
  }
}

// Charger les activités au montage
onMounted(() => {
  // Charger depuis le localStorage si nécessaire
  const saved = localStorage.getItem('dailyActivities')
  if (saved) {
    activities.value = JSON.parse(saved)
  }
})
</script>

<style scoped>
.daily-activity-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.daily-main {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.activity-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 30px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.header-content h1 {
  color: #2d3748;
  margin-bottom: 8px;
  font-size: 2rem;
}

.header-content h1 i {
  color: #ff6b6b;
  margin-right: 10px;
}

.header-content p {
  color: #718096;
  font-size: 1.1rem;
}

.motivation-badge {
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

/* Statistiques rapides */
.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-item {
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ff6b6b;
  margin-bottom: 8px;
}

.stat-label {
  color: #718096;
  font-weight: 500;
}

/* Section activités */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.section-header h2 {
  color: #2d3748;
  font-size: 1.5rem;
}

.add-activity-btn {
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-activity-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

/* Liste des activités */
.activities-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
}

.activity-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid #ff6b6b;
}

.activity-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.activity-card.completed {
  opacity: 0.7;
  border-left-color: #51cf66;
}

.activity-main {
  display: flex;
  align-items: center;
  gap: 20px;
}

.activity-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.activity-content {
  flex: 1;
}

.activity-title {
  color: #2d3748;
  margin-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 600;
}

.activity-description {
  color: #718096;
  margin-bottom: 8px;
}

.activity-time {
  color: #a0aec0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.activity-actions {
  display: flex;
  gap: 10px;
}

.complete-btn, .delete-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.complete-btn {
  background: #e8f5e8;
  color: #51cf66;
}

.complete-btn.completed {
  background: #51cf66;
  color: white;
}

.complete-btn:hover {
  transform: scale(1.1);
}

.delete-btn {
  background: #ffe6e6;
  color: #ff6b6b;
}

.delete-btn:hover {
  background: #ff6b6b;
  color: white;
  transform: scale(1.1);
}

.activity-progress {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e2e8f0;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  color: #718096;
  font-size: 0.8rem;
}

/* État vide */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.empty-state i {
  font-size: 4rem;
  color: #cbd5e0;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: #2d3748;
  margin-bottom: 10px;
}

.empty-state p {
  color: #718096;
  margin-bottom: 25px;
}

.cta-btn {
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

/* Suggestions */
.suggestions-section {
  margin-bottom: 40px;
}

.suggestions-section h2 {
  color: #2d3748;
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.suggestions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.suggestion-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.suggestion-card:hover {
  transform: translateY(-5px);
  border-color: #ff6b6b;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.suggestion-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin: 0 auto 15px;
}

.suggestion-card h4 {
  color: #2d3748;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.suggestion-card p {
  color: #718096;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.add-btn {
  background: #e8f5e8;
  color: #51cf66;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
}

.add-btn:hover {
  background: #51cf66;
  color: white;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header h3 {
  color: #2d3748;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #718096;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #f7fafc;
  color: #2d3748;
}

.modal-body {
  padding: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #2d3748;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.icon-selector {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.icon-option {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #718096;
}

.icon-option.selected {
  background: #ff6b6b;
  border-color: #ff6b6b;
  color: white;
}

.icon-option:hover {
  border-color: #ff6b6b;
  transform: scale(1.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: normal;
}

.checkbox-label input {
  width: auto;
}

.form-actions {
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 30px;
}

.cancel-btn, .save-btn {
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn {
  background: #f7fafc;
  color: #718096;
}

.cancel-btn:hover {
  background: #e2e8f0;
}

.save-btn {
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .activity-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .activity-main {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .activity-actions {
    align-self: stretch;
    justify-content: center;
  }
  
  .section-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
  
  .icon-selector {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .form-actions {
    flex-direction: column;
  }
}
</style>