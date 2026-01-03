<template>
  <form class="form" @submit.prevent="submitForm">
    <input v-model="localProfile.nom" placeholder="Nom" />
    <input v-model="localProfile.prenom" placeholder="Prénom" />
    <input v-model="localProfile.pseudo" placeholder="Pseudo" />

    <select v-model="localProfile.addiction">
      <option disabled value="">Type d'addiction</option>
      <option>Tabac</option>
      <option>Alcool</option>
      <option>Drogue</option>
      <option>Jeux</option>
    </select>

    <button type="submit">Valider</button>
  </form>
</template>

<script>
export default {
  name: "ProfileForm",
  props: {
    profile: Object
  },
  data() {
    return {
      localProfile: { ...this.profile }
    };
  },
  methods: {
    submitForm() {
      this.$emit("update-profile", this.localProfile);
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', system-ui, sans-serif;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

input, select {
  margin: 12px 0;
  padding: 14px 16px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.05);
}

input:focus, select:focus {
  outline: none;
  background: white;
  box-shadow: 
    inset 0 2px 6px rgba(0, 0, 0, 0.1),
    0 4px 12px rgba(66, 185, 131, 0.2),
    0 0 0 3px rgba(66, 185, 131, 0.15);
  transform: translateY(-1px);
}

input::placeholder {
  color: #888;
  font-weight: 300;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2342b983' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;
  cursor: pointer;
  padding-right: 40px;
}

select option {
  padding: 12px;
  background: white;
  color: #333;
}

button {
  margin: 20px 0 8px 0;
  padding: 16px;
  background: linear-gradient(135deg, #42b983 0%, #33a06f 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 12px rgba(66, 185, 131, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 6px 16px rgba(66, 185, 131, 0.4),
    0 3px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #4bc68b 0%, #3ab078 100%);
}

button:active {
  transform: translateY(0);
  box-shadow: 
    0 2px 6px rgba(66, 185, 131, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

button::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

button:hover::after {
  left: 100%;
}
</style>
