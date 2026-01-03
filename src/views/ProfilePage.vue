<template>
  <div class="profile-page">
    <h1>Page Profil</h1>

    <!-- composant enfant -->
    <ProfileForm
      :profile="profile"
      @update-profile="updateProfile"
    />

    <!-- affichage -->
    <div class="result">
      <h3>Données :</h3>
      <p>Nom : {{ profile.nom }}</p>
      <p>Prénom : {{ profile.prenom }}</p>
      <p>Pseudo : {{ profile.pseudo }}</p>
      <p>Addiction : {{ profile.addiction }}</p>
    </div>
  </div>
</template>

<script>
import ProfileForm from "../components/ProfileForm.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileForm
  },
  data() {
    return {
      profile: {
        nom: "",
        prenom: "",
        pseudo: "",
        addiction: ""
      }
    };
  },
  methods: {
    updateProfile(data) {
      this.profile = data;
    }
  }
};
</script>
<style scoped>
.profile-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #2d3748;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: #1a202c;
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #42b983 0%, #2c7a5c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  padding-bottom: 1rem;
}

h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #42b983, transparent);
  border-radius: 2px;
}

.result {
  max-width: 500px;
  margin: 3rem auto 0;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 8px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  animation: slideUp 0.6s ease-out;
}

.result h3 {
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #e2e8f0;
  position: relative;
}

.result h3::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: #42b983;
  border-radius: 1px;
}

.result p {
  padding: 1rem 0;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  border-bottom: 1px solid #edf2f7;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.result p:last-child {
  border-bottom: none;
}

.result p:hover {
  background: #f7fafc;
  padding-left: 1rem;
  border-radius: 8px;
  color: #2d3748;
  transform: translateX(4px);
}

.result p::before {
  content: '•';
  color: #42b983;
  font-size: 1.5rem;
  margin-right: 12px;
  font-weight: bold;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.profile-page::before {
  content: '';
  position: fixed;
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(66, 185, 131, 0.1) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
}

.profile-page::after {
  content: '';
  position: fixed;
  bottom: 10%;
  left: 5%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(66, 185, 131, 0.08) 0%, transparent 70%);
  animation: float 4s ease-in-out infinite reverse;
  z-index: 0;
  pointer-events: none;
}

.profile-page > * {
  position: relative;
  z-index: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .profile-page {
    padding: 1rem;
  }
  
  h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  
  .result {
    margin: 2rem 1rem 0;
    padding: 1.5rem;
  }
  
  .result p {
    font-size: 1rem;
    padding: 0.8rem 0;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }
  
  .result {
    padding: 1.2rem;
  }
  
  .result h3 {
    font-size: 1.3rem;
  }
  
  .result p {
    font-size: 0.95rem;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .result p::before {
    margin-right: 0;
    margin-bottom: 4px;
  }
}
</style>