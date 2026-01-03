<template>
  <div class="stories-page">
    <Header />
    
    <main class="stories-main">
      <div class="container">
        <!-- En-tête -->
        <section class="stories-header">
          <div class="header-content">
            <h1><i class="fas fa-book-heart"></i> Histoires Inspirantes</h1>
            <p>Des parcours de courage, de résilience et de transformation</p>
          </div>
          <div class="inspiration-quote">
            <i class="fas fa-quote-left"></i>
            <span>Chaque histoire de recovery est une lumière d'espoir</span>
          </div>
        </section>

        <!-- Filtres -->
        <section class="filters-section">
          <div class="filter-tabs">
            <button 
              v-for="category in categories" 
              :key="category.id"
              class="filter-tab"
              :class="{ active: activeFilter === category.id }"
              @click="activeFilter = category.id"
            >
              <i :class="category.icon"></i>
              {{ category.name }}
            </button>
          </div>
        </section>

        <!-- Liste des histoires -->
        <section class="stories-section">
          <div class="stories-grid">
            <div 
              v-for="story in filteredStories" 
              :key="story.id"
              class="story-card"
              :class="story.category"
            >
              <div class="story-header">
                <div class="story-avatar">
                  <i :class="story.avatar"></i>
                </div>
                <div class="story-meta">
                  <h3 class="story-title">{{ story.title }}</h3>
                  <div class="story-author">{{ story.author }}, {{ story.age }} ans</div>
                  <div class="story-duration">{{ story.duration }}</div>
                </div>
              </div>

              <div class="story-content">
                <p class="story-excerpt">{{ story.excerpt }}</p>
                
                <div class="story-stats">
                  <div class="stat">
                    <i class="fas fa-calendar-check"></i>
                    <span>{{ story.cleanTime }}</span>
                  </div>
                  <div class="stat">
                    <i class="fas fa-heart"></i>
                    <span>{{ story.recoveryRate }}% de mieux-être</span>
                  </div>
                </div>

                <div class="story-tags">
                  <span 
                    v-for="tag in story.tags" 
                    :key="tag"
                    class="story-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <button class="read-more-btn" @click="openStory(story)">
                <i class="fas fa-book-open"></i>
                Lire son histoire
              </button>
            </div>
          </div>
        </section>

        <!-- Section motivation -->
        <section class="motivation-section">
          <div class="motivation-card">
            <h2>Vous n'êtes pas seul</h2>
            <p>Chaque personne dans ces histoires a connu des moments difficiles, 
               mais elles ont trouvé la force de se reconstruire. Vous le pouvez aussi.</p>
            <div class="support-actions">
              <button class="support-btn" @click="goToCommunity">
                <i class="fas fa-users"></i>
                Rejoindre la communauté
              </button>
              <button class="support-btn" @click="goToResources">
                <i class="fas fa-hands-helping"></i>
                Obtenir de l'aide
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Modal de lecture d'histoire -->
    <div v-if="selectedStory" class="story-modal-overlay" @click="closeStory">
      <div class="story-modal-content" @click.stop>
        <div class="modal-header">
          <button class="close-btn" @click="closeStory">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <div class="full-story">
            <div class="story-hero">
              <div class="hero-avatar">
                <i :class="selectedStory.avatar"></i>
              </div>
              <div class="hero-content">
                <h1>{{ selectedStory.title }}</h1>
                <div class="hero-meta">
                  <span class="author">{{ selectedStory.author }}, {{ selectedStory.age }} ans</span>
                  <span class="location">{{ selectedStory.location }}</span>
                </div>
              </div>
            </div>

            <div class="story-timeline">
              <div class="timeline-item" v-for="(chapter, index) in selectedStory.chapters" :key="index">
                <div class="timeline-marker">
                  <i :class="chapter.icon"></i>
                </div>
                <div class="timeline-content">
                  <h3>{{ chapter.title }}</h3>
                  <p>{{ chapter.content }}</p>
                </div>
              </div>
            </div>

            <div class="story-conclusion">
              <h3>Ce que j'ai appris</h3>
              <p>{{ selectedStory.lesson }}</p>
            </div>

            <div class="story-inspiration">
              <i class="fas fa-quote-left"></i>
              <blockquote>{{ selectedStory.inspiration }}</blockquote>
              <cite>– {{ selectedStory.author }}</cite>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

const router = useRouter()
const activeFilter = ref('all')
const selectedStory = ref(null)

// Catégories de filtres
const categories = ref([
  { id: 'all', name: 'Toutes', icon: 'fas fa-star' },
  { id: 'alcohol', name: 'Alcool', icon: 'fas fa-wine-bottle' },
  { id: 'drugs', name: 'Drogues', icon: 'fas fa-pills' },
  { id: 'gambling', name: 'Jeu', icon: 'fas fa-dice' },
  { id: 'recovery', name: 'Rétablissement', icon: 'fas fa-heart' }
])

// Histoires inspirantes
const stories = ref([
  {
    id: 1,
    title: "De la rue à la renaissance",
    author: "Mohamed",
    age: 32,
    category: "drugs",
    duration: "8 ans de combat",
    avatar: "fas fa-user-tie",
    excerpt: "À 24 ans, je vivais dans la rue, perdu dans les drogues dures. Aujourd'hui, je suis éducateur spécialisé et j'aide les jeunes en difficulté.",
    tags: ["Héroïne", "Rue", "Rédemption", "Espoir"],
    chapters: [
      {
        title: "La descente aux enfers",
        icon: "fas fa-quote-left",
        content:"Tout a commencé quand Mohamed était adolescent. Il a essayé le cannabis par curiosité, en pensant que ce n’était rien de grave. Mais avec le temps, il s’est dirigé vers des substances plus dures. Sa vie a commencé à changer sans qu’il s’en rende compte. À 22 ans, il perd son travail. Son comportement, son absence, ses erreurs… tout s’est accumulé. Sa famille, malgré l’amour qu’elle lui portait, ne savait plus comment l’aider. Les disputes sont devenues fréquentes, la confiance s’est brisée, et petit à petit, ils se sont éloignés de lui. N’ayant plus de soutien, plus de repères, Mohamed s’est retrouvé dans la rue. C’était une chute qu’il n’avait jamais imaginée. La rue était froide, dure, et chaque jour était un combat : chercher à manger, trouver un coin pour dormir, éviter les dangers de la nuit. Mohamed passait des heures à réfléchir à sa vie, se demandant comment il avait pu tout perdre. Il se sentait seul, abandonné, invisible aux yeux du monde. Mais au fond de lui, une petite voix lui répétait qu’il n’était pas né pour finir comme ça. C’est cette voix qui allait bientôt le pousser vers la renaissance. "     },
    ]
  },
  {
    id: 2,
    title: "L'alcool qui a failli me voler ma famille",
    author: "Sophie",
    age: 45,
    category: "alcohol",
    avatar: "fas fa-user-graduate",
    excerpt: "Cadre supérieure le jour, alcoolique la nuit. J'ai failli tout perdre : mon mari, mes enfants, ma carrière. Aujourd'hui, je revis pleinement.",
    tags: ["Alcool", "Famille", "Carrière", "Rétablissement"],
    lesson: "La réussite professionnelle ne remplit pas le vide intérieur. Le vrai bonheur se trouve dans les relations authentiques.",
    inspiration: "Le plus beau cadeau de ma sobriété : voir mes enfants grandir avec une mère présente et aimante.",
    chapters: [
      {
        title: "La double vie",
        icon: "fas fa-mask",
        content: "Le jour, j'étais une cadre respectée. La nuit, je noyais mon stress dans l'alcool. Personne ne se doutait de rien, jusqu'à ce que mon corps dise stop."
      },
    ]
  },
  {
    id: 3,
    title: "Le jeu qui a englouti mon héritage",
    author: "Thomas",
    age: 38,
    location: "Paris",
    category: "gambling",
    duration: "12 ans d'addiction",
    cleanTime: "2 ans sans jeu",
    recoveryRate: 75,
    avatar: "fas fa-user",
    excerpt: "Héritier d'une fortune familiale, j'ai tout perdu aux casinos en moins de 5 ans. La honte m'a poussé au bord du suicide.",
    tags: ["Jeu", "Argent", "Dépression", "Renaissance"],
    lesson: "L'argent ne fait pas le bonheur, et le perdre ne signifie pas perdre sa valeur en tant qu'être humain.",
    inspiration: "La vraie richesse est dans les relations qu'on construit, pas dans l'argent qu'on accumule ou qu'on perd.",
    chapters: [
      {
        title: "L'héritage maudit",
        icon: "fas fa-money-bill-wave",
        content: "À 25 ans, j'ai hérité de plusieurs millions. Ce qui devait être une bénédiction est devenu une malédiction. Les casinos sont devenus mon refuge."
      },
      
    ]
  },
  {
    id: 4,
    title: "La médication devenue poison",
    author: "Isabelle",
    age: 52,
    location: "Toulouse",
    category: "drugs",
    duration: "20 ans de dépendance",
    cleanTime: "4 ans clean",
    recoveryRate: 80,
    avatar: "fas fa-user-nurse",
    excerpt: "Prescrits pour des douleurs chroniques, les médicaments sont devenus ma prison. J'ai perdu 20 ans dans un brouillard chimique.",
    tags: ["Médicaments", "Douleur", "Rétablissement", "Conscience"],
    lesson: "Les solutions rapides créent souvent des problèmes à long terme. La vraie guérison prend du temps et de la patience.",
    inspiration: "À 50 ans, j'ai enfin découvert qui j'étais vraiment, sans le voile des médicaments.",
    chapters: [
      {
        title: "Le début innocent",
        icon: "fas fa-prescription",
        content: "Tout a commencé avec des antidouleurs légitimes pour des problèmes de dos. Puis les doses ont augmenté, les médicaments se sont multipliés."
      },

    ]
  },
  {
    id: 5,
    title: "Le fils que j'ai failli perdre",
    author: "Karim",
    age: 28,
    location: "Lille",
    category: "recovery",
    duration: "10 ans de combat",
    cleanTime: "6 mois sobres",
    recoveryRate: 70,
    avatar: "fas fa-user-astronaut",
    excerpt: "À 18 ans, j'ai failli mourir d'une overdose. Aujourd'hui, chaque jour est un cadeau et une nouvelle chance de vivre.",
    tags: ["Overdose", "Jeunesse", "Deuxième chance", "Espoir"],
    lesson: "Il n'est jamais trop tard pour changer de direction. La vie nous donne toujours une deuxième chance, il faut juste la saisir.",
    inspiration: "Chaque matin où je me réveille, je remercie d'être en vie. La sobriété m'a offert une deuxième vie.",
    chapters: [
      {
        title: "La spirale",
        icon: "fas fa-cannabis",
        content: "Lycéen populaire, j'ai commencé par fumer des joints entre amis. Puis ce fut la cocaïne, les ecstasies... La descente fut rapide."
      },
    ]
  }
,  {
    id: 6,
    title: "الحشيش ",
    author: "ياسين بينومي",
    age: 28,
    location: "المرسى",
  
    avatar: "fas fa-user-astronaut",
    excerpt: "À 18 ans, j'ai failli mourir d'une overdose. Aujourd'hui, chaque jour est un cadeau et une nouvelle chance de vivre.",
    tags: ["Overdose", "Jeunesse", "Deuxième chance", "Espoir"],
    lesson: "Il n'est jamais trop tard pour changer de direction. La vie nous donne toujours une deuxième chance, il faut juste la saisir.",
    inspiration: "Chaque matin où je me réveille, je remercie d'être en vie. La sobriété m'a offert une deuxième vie.",
    chapters: [
      {
        title: "La spirale",
        icon: "fas fa-cannabis",
        content: "بدا كل شيء في مرحلة الثانوية، كنت شابًا محبوبًا نخرج مع أصحابي برشااا، وجرّبت الحشيش لأول مرة فيبالي أنه مجرد مرح، لكن الأمور تطوّرت بسرعة نحو الكوكايين والحبوب، ووجدت نفسي أنزلق في طريق مظلم دون أن أشعر، وفي ليلة من الليالي تناولت جرعة كبيرة كادت تقتلني، أغمى عليّ ونُقلت إلى المستشفى حيث استيقظت لأرى دموع أمي ونظرة الألم في عيني أبي، وهناك أدركت أنني كنت على وشك أن أضيع حياتي، ومنذ تلك اللحظة بدأت رحلة طويلة من العلاج والصراع استمرت عشر سنوات بين السقوط والقيام، واليوم وبعد كل هذا أنا نظيف منذ ستة أشهر وأقول كل صباح: الحمد لله أنني ما زلت على قيد الحياة، فقد منحتني الحياة فرصة جديدة ولن أضيّعها مرة أخرى."
      },
    ]
  }
])

// Histoires filtrées
const filteredStories = computed(() => {
  if (activeFilter.value === 'all') {
    return stories.value
  }
  return stories.value.filter(story => story.category === activeFilter.value)
})

// Méthodes
const openStory = (story) => {
  selectedStory.value = story
}

const closeStory = () => {
  selectedStory.value = null
}

const goToCommunity = () => {
  router.push('/community')
}

const goToResources = () => {
  router.push('/resources')
}
</script>

<style scoped>
.stories-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.stories-main {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.stories-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-content h1 {
  color: #2d3748;
  font-size: 2.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.header-content h1 i {
  color: #ff6b6b;
}

.header-content p {
  color: #718096;
  font-size: 1.2rem;
}

.inspiration-quote {
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  color: white;
  padding: 15px 25px;
  border-radius: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Filtres */
.filters-section {
  margin-bottom: 30px;
}

.filter-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-tab {
  background: white;
  border: 2px solid #e2e8f0;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: #4a5568;
}

.filter-tab:hover {
  border-color: #ff6b6b;
  transform: translateY(-2px);
}

.filter-tab.active {
  background: #ff6b6b;
  border-color: #ff6b6b;
  color: white;
}

/* Grille des histoires */
.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.story-card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 5px solid #ff6b6b;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.story-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.story-card.alcohol {
  border-left-color: #4299e1;
}

.story-card.drugs {
  border-left-color: #ed8936;
}

.story-card.gambling {
  border-left-color: #9f7aea;
}

.story-card.recovery {
  border-left-color: #48bb78;
}

/* En-tête de carte */
.story-header {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.story-avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.story-meta {
  flex: 1;
}

.story-title {
  color: #2d3748;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 5px;
  line-height: 1.3;
}

.story-author {
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 3px;
}

.story-duration {
  color: #718096;
  font-size: 0.9rem;
}

/* Contenu de la carte */
.story-content {
  flex: 1;
  margin-bottom: 20px;
}

.story-excerpt {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;
}

.story-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #718096;
  font-size: 0.9rem;
}

.stat i {
  color: #ff6b6b;
}

.story-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.story-tag {
  background: #f7fafc;
  color: #4a5568;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid #e2e8f0;
}

/* Bouton lire plus */
.read-more-btn {
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
  justify-content: center;
  width: 100%;
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

/* Section motivation */
.motivation-section {
  margin-bottom: 40px;
}

.motivation-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.motivation-card h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.motivation-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  opacity: 0.9;
}

.support-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.support-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 12px 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.support-btn:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

/* Modal d'histoire */
.story-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.story-modal-content {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
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
  padding: 0;
}

/* Histoire complète */
.full-story {
  padding: 0;
}

.story-hero {
  background: linear-gradient(135deg, #ff6b6b, #6b8cbc);
  color: white;
  padding: 40px;
  text-align: center;
}

.hero-avatar {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 20px;
  backdrop-filter: blur(10px);
}

.hero-content h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.hero-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  opacity: 0.9;
}

.story-timeline {
  padding: 40px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.timeline-marker {
  width: 50px;
  height: 50px;
  background: #ff6b6b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-content h3 {
  color: #2d3748;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.timeline-content p {
  color: #4a5568;
  line-height: 1.6;
}

.story-conclusion {
  background: #f7fafc;
  padding: 30px 40px;
  margin: 20px 40px;
  border-radius: 15px;
  border-left: 4px solid #48bb78;
}

.story-conclusion h3 {
  color: #2d3748;
  margin-bottom: 15px;
}

.story-conclusion p {
  color: #4a5568;
  line-height: 1.6;
  font-style: italic;
}

.story-inspiration {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  text-align: center;
  margin: 40px;
  border-radius: 15px;
}

.story-inspiration i {
  font-size: 2rem;
  margin-bottom: 20px;
  opacity: 0.7;
}

.story-inspiration blockquote {
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 20px;
}

.story-inspiration cite {
  font-style: normal;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .stories-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .stories-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-tabs {
    justify-content: center;
  }
  
  .support-actions {
    flex-direction: column;
  }
  
  .story-hero {
    padding: 30px 20px;
  }
  
  .story-timeline {
    padding: 20px;
  }
  
  .timeline-item {
    flex-direction: column;
    text-align: center;
  }
  
  .story-conclusion,
  .story-inspiration {
    margin: 20px;
  }
}
</style>