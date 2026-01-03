<template>
  <div class="podcasts-page">
    <Header />
    
    <main class="podcasts-main">
      <div class="container">
        <!-- En-tête -->
        <section class="podcasts-header">
          <div class="header-content">
            <h1><i class="fas fa-podcast"></i> Podcasts & Ressources Audio</h1>
            <p>Découvrez des contenus audio inspirants sur la prévention et le rétablissement</p>
          </div>
        </section>

        <!-- Podcasts en vedette -->
        <section class="featured-section">
          <h2 class="section-title">
            <i class="fas fa-star"></i>
            Podcasts en Vedette
          </h2>

          <div class="featured-grid">
            <a 
              v-for="podcast in featuredPodcasts" 
              :key="podcast.id"
              :href="podcast.link"
              target="_blank"
              class="featured-card"
            >
              <div class="featured-image">
                <img :src="podcast.image" :alt="podcast.title" class="podcast-thumb">
                <div class="play-overlay">
                  <i class="fas fa-external-link-alt"></i>
                </div>
                <div class="duration-badge">
                  <i class="fas fa-clock"></i>
                  {{ podcast.duration }}
                </div>
              </div>
              
              <div class="featured-content">
                <div class="podcast-meta">
                  <span class="platform" :style="{ backgroundColor: podcast.color }">
                    <i :class="podcast.icon"></i>
                    {{ podcast.platform }}
                  </span>
                  <span class="category">{{ podcast.category }}</span>
                </div>
                
                <h3 class="podcast-title">{{ podcast.title }}</h3>
                <p class="podcast-description">{{ podcast.description }}</p>
                
                <div class="podcast-host">
                  <i class="fas fa-user"></i>
                  {{ podcast.host }}
                </div>
              </div>
            </a>
          </div>
        </section>

        <!-- Tous les podcasts -->
        <section class="all-podcasts-section">
          <h2 class="section-title">
            <i class="fas fa-list"></i>
            Tous les Podcasts
          </h2>

          <div class="podcasts-grid">
            <a 
              v-for="podcast in allPodcasts" 
              :key="podcast.id"
              :href="podcast.link"
              target="_blank"
              class="podcast-card"
            >
              <div class="card-header">
                <div class="podcast-image">
                  <img :src="podcast.image" :alt="podcast.title" class="podcast-thumb">
                </div>
                <div class="podcast-info">
                  <h3 class="podcast-title">{{ podcast.title }}</h3>
                  <div class="podcast-meta">
                    <span class="host">{{ podcast.host }}</span>
                    <span class="duration">{{ podcast.duration }}</span>
                  </div>
                </div>
              </div>
              
              <p class="podcast-excerpt">{{ podcast.description }}</p>
              
              <div class="card-footer">
                <div class="platform-tag" :style="{ backgroundColor: podcast.color }">
                  <i :class="podcast.icon"></i>
                  {{ podcast.platform }}
                </div>
                <div class="external-link">
                  <i class="fas fa-external-link-alt"></i>
                </div>
              </div>
            </a>
          </div>
        </section>

        <!-- Chaînes YouTube -->
        <section class="youtube-section">
          <h2 class="section-title">
            <i class="fab fa-youtube"></i>
            Chaînes YouTube
          </h2>

          <div class="youtube-grid">
            <a 
              v-for="channel in youtubeChannels" 
              :key="channel.id"
              :href="channel.link"
              target="_blank"
              class="youtube-card"
            >
              <div class="channel-header">
                <div class="channel-avatar">
                  <img :src="channel.image" :alt="channel.name" class="avatar">
                </div>
                <div class="channel-info">
                  <h3 class="channel-name">{{ channel.name }}</h3>
                  <p class="channel-subscribers">{{ channel.subscribers }}</p>
                </div>
              </div>
              
              <p class="channel-description">{{ channel.description }}</p>
              
              <div class="youtube-btn">
                <i class="fab fa-youtube"></i>
                Visiter la chaîne
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

// Données mta kol podcaste 
const featuredPodcasts = [
  {
    id: 1,
    title: "Comprendre les mécanismes de l'addiction",
    description: "Une exploration des processus neurologiques de la dépendance.",
    host: "Zen & en bonne santé",
    platform: "Spotify",
    icon: "fab fa-spotify",
    color: "#1DB954",
    image: "/src/assets/podcaste/podcaste1.jpg",
    link: "https://open.spotify.com/episode/2jsozVyhey8pVxVmbH5n9F"
  },
  {
    id: 2,
    title: "Contre-addictions par Rose",
    description: "Le parcours inspirant d'un ancien dépendant.",
    host: "Keren Rose",
    platform: "Apple Podcasts",
    icon: "fas fa-podcast",
    color: "#9933CC",
    image: "/src/assets/podcaste/podcaste2.jpg",
    link: "https://podcasts.apple.com/fr/podcast/contre-addictions-par-rose/id1642778077"
  },
 
  {
    id: 1,
    title:" حل مشكلة الادمان من جذورها",
    description: "في هذه الحلقة سنناقش مشكلة الادمان, مشكلة الادمان منتشرة ولها اشكال عديدة مثل ادمان الهاتف و مواقعالتواصل الاجتماعي, ادمان المواد المخدرة بأنواعها",
    host: "jarrib podcast جرب بودكاست",
    platform: "Spotify",
    icon: "fab fa-spotify",
    color: "#1DB954",
    image: "/src/assets/podcaste/podcaste3.jpg",
    link: "https://open.spotify.com/episode/4z4IDhEW6HJi1E2MKf01r6"
  },
  {
    id: 2,
    title: "لإدمان: الخطر الداهم. المخدرات • الألعاب الإلكترونية ",
    description: "إن الإدمان -بأشكاله وأنواعه- أصبح من أخطر مشاكل العالم الإسلامي، فنسبة المبتلين بالمخدرات فقط لا تقل عن 10%، فما الذي دفع الإنسان إلى الإدمان؟ وماذا عن من ابتلي بإدمان العادة السرية وإدمان الألعاب الالكترونية؟ هل هناك خطوات للعلاج من الإدمان؟ ",
    host: "د.يسام البطحي",
    platform: "Apple Podcasts",
    icon: "fas fa-podcast",
    color: "#9933CC",
    image: "/src/assets/podcaste/podcaste4.jpeg",
    link: "https://podcasts.apple.com/fr/podcast/%D8%A7%D9%84%D8%A5%D8%AF%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%AE%D8%B7%D8%B1-%D8%A7%D9%84%D8%AF%D8%A7%D9%87%D9%85-%D8%A7%D9%84%D9%85%D8%AE%D8%AF%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D8%AF%D8%A9/id1554766478?i=1000598910401"
  },
]

const allPodcasts = [
  {
    id: 4,
    title: "La prévention chez les jeunes",
    description: "Stratégies pour prévenir l'addiction chez les adolescents.",
    host: "Dr. Leila Trabelsi",
    duration: "29:45",
    platform: "Spotify",
    icon: "fab fa-spotify",
    color: "#1DB954",
    image: "/src/assets/podcaste/podcaste1.jpeg",
    link: "https://spotify.com"
  },
  {
    id: 5,
    title: "Addiction aux écrans",
    description: "Comprendre la dépendance aux technologies numériques.",
    host: "Prof. Ahmed Cherif",
    duration: "41:20",
    platform: "Google Podcasts",
    icon: "fas fa-podcast",
    color: "#4285F4",
    image: "/src/assets/podcaste/podcaste1.jpeg",
    link: "https://podcasts.google.com"
  },
  {
    id: 6,
    title: "L'accompagnement familial",
    description: "Soutenir un proche en difficulté avec l'addiction.",
    host: "Mona Sfaxi",
    duration: "36:55",
    platform: "Apple Podcasts",
    icon: "fas fa-podcast",
    color: "#9933CC",
    image: "/src/assets/podcaste/podcaste1.jpeg",
    link: "https://apple.com/podcasts"
  }
]

const youtubeChannels = [
  {
    id: 1,
    name: "𝐇𝐲𝐩𝐧𝐨𝐬𝐞 𝐩𝐨𝐮𝐫 𝐦𝐞𝐭𝐭𝐫𝐞 𝐟𝐢𝐧 𝐚̀ 𝐮𝐧𝐞 𝐚𝐝𝐝𝐢𝐜𝐭𝐢𝐨𝐧 𝐞𝐧 𝐬'𝐞𝐧𝐝𝐨𝐫𝐦𝐚𝐧𝐭",
    description: "𝐔𝐧𝐞 𝐡𝐲𝐩𝐧𝐨𝐬𝐞 𝐩𝐨𝐮𝐫 𝐚𝐫𝐫𝐞̂𝐭𝐞𝐫 𝐮𝐧𝐞 𝐚𝐝𝐝𝐢𝐜𝐭𝐢𝐨𝐧 (𝐜𝐨𝐦𝐩𝐨𝐫𝐭𝐞𝐦𝐞𝐧𝐭𝐚𝐥𝐞 𝐨𝐮 𝐚̀ 𝐮𝐧𝐞 𝐬𝐮𝐛𝐬𝐭𝐚𝐧𝐜𝐞)",
    image: "/src/assets/podcaste/hypnos.png",
    link: "https://youtu.be/n2kUbm490fc?si=WuJjcmS33dr8wG73"
  },
  {
    id: 2,
    name: "Mohamed elkhamessi اللأدمان",
    description: "Conseils psychologiques sur la gestion des dépendances.",
    image: "/src/assets/podcaste/mhmd.png",
    link: "https://youtu.be/uWpoPa6CMDE?si=L2cYpSOLMDGjJucy"
  },
  {
    id: 3,
    name: "حقيقة عالم المخدرات ! | بودكاست روايتهم 048 | د. عادل الزايد",
    description: "حقيقة عالم المخدرات",
    image: "/src/assets/podcaste/podcaste1.jpeg",
    link: "https://youtu.be/qqzvat-uh28?si=O5kOv9BXM9RZNLks"
  }
]
</script>

<style scoped>
.podcasts-page {
  min-height: 100vh;
background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.podcasts-main {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.podcasts-header {
  text-align: center;
  margin-bottom: 40px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.header-content h1 {
  color: #2d3748;
  font-size: 2.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.header-content h1 i {
  color: #e53e3e;
}

.header-content p {
  color: #718096;
  font-size: 1.1rem;
}

/* Sections */
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

/* Podcasts en vedette */
.featured-section {
  margin-bottom: 50px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.featured-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  text-decoration: none;
  display: block;
  color: inherit;
}

.featured-card:hover {
  transform: translateY(-5px);
}

.featured-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.podcast-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-card:hover .podcast-thumb {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .play-overlay {
  opacity: 1;
}

.play-overlay i {
  color: white;
  font-size: 3rem;
}

.duration-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.featured-content {
  padding: 25px;
}

.podcast-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.platform {
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.category {
  background: #e2e8f0;
  color: #4a5568;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.podcast-title {
  color: #2d3748;
  font-size: 1.4rem;
  margin-bottom: 12px;
  line-height: 1.3;
}

.podcast-description {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 15px;
}

.podcast-host {
  color: #4a5568;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Tous les podcasts */
.all-podcasts-section {
  margin-bottom: 50px;
}

.podcasts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
}

.podcast-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
  transition: transform 0.3s ease;
  text-decoration: none;
  display: block;
  color: inherit;
}

.podcast-card:hover {
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.podcast-image {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.podcast-image .podcast-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.podcast-info {
  flex: 1;
}

.podcast-title {
  color: #2d3748;
  font-size: 1.1rem;
  margin-bottom: 8px;
  line-height: 1.3;
}

.podcast-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.host {
  color: #718096;
  font-size: 0.9rem;
}

.duration {
  color: #4299e1;
  font-size: 0.8rem;
  font-weight: 600;
}

.podcast-excerpt {
  color: #718096;
  line-height: 1.5;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.platform-tag {
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.external-link {
  color: #e53e3e;
  font-size: 1.2rem;
}

/* YouTube */
.youtube-section {
  margin-bottom: 50px;
}

.youtube-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.youtube-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 25px;
  transition: transform 0.3s ease;
  text-decoration: none;
  display: block;
  color: inherit;
}

.youtube-card:hover {
  transform: translateY(-3px);
}

.channel-header {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.channel-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.channel-name {
  color: #2d3748;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.channel-subscribers {
  color: #718096;
  font-size: 0.9rem;
}

.channel-description {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.youtube-btn {
  background: #e53e3e;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  justify-content: center;
}

.youtube-card:hover .youtube-btn {
  background: #c53030;
}

/* Responsive */
@media (max-width: 768px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .podcasts-grid {
    grid-template-columns: 1fr;
  }
  
  .youtube-grid {
    grid-template-columns: 1fr;
  }
  
  .header-content h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
  
  .podcast-image {
    align-self: center;
  }
}
</style>