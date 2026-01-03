<template>
  <div class="laws-page">
    <Header />
    
    <main class="laws-main">
      <div class="container">
        <!-- En-tête -->
        <section class="laws-header">
          <div class="header-content">
            <h1><i class="fas fa-gavel"></i> Consommation et Sanctions</h1>
            <p>Les sanctions légales en Tunisie pour la consommation et le trafic de drogues</p>
          </div>
          <div class="warning-banner">
            <i class="fas fa-exclamation-triangle"></i>
            <div class="warning-info">
              <strong>Information légale importante</strong>
              <span>Ces informations sont fournies à titre informatif et ne constituent pas un conseil juridique</span>
            </div>
          </div>
        </section>

        <!-- Introduction -->
        <section class="intro-section">
          <div class="intro-card">
            <h2><i class="fas fa-balance-scale"></i> Cadre Légal Tunisien</h2>
            <p>
              La Tunisie dispose d'une législation stricte concernant les stupéfiants. 
              Le Code Pénal et la Loi n°92-52 du 3 juin 1992 régissent les infractions liées 
              aux drogues avec des sanctions sévères pour les consommateurs et les trafiquants.
            </p>
          </div>
        </section>

        <!-- Tableau des sanctions -->
        <section class="sanctions-section">
          <h2 class="section-title">
            <i class="fas fa-list-alt"></i>
            Tableau des Sanctions
          </h2>

          <div class="substances-grid">
            <!-- Alcool -->
            <div class="substance-card">
              <div class="substance-header alcohol">
                <div class="substance-icon">
                  <i class="fas fa-wine-bottle"></i>
                </div>
                <h3>Alcool</h3>
              </div>
              <div class="sanctions-list">
                <div class="sanction-item">
                  <h4>Conduite sous influence</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 500 à 1000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 1 mois à 1 an</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-id-card"></i>
                      <span>Retrait permis : 1 an</span>
                    </div>
                  </div>
                </div>
                <div class="sanction-item">
                  <h4>Ivresse publique</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 100 à 300 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 6 jours à 3 mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cannabis -->
            <div class="substance-card">
              <div class="substance-header cannabis">
                <div class="substance-icon">
                  <i class="fas fa-cannabis"></i>
                </div>
                <h3>Cannabis (Zatla)</h3>
              </div>
              <div class="sanctions-list">
                <div class="sanction-item">
                  <h4>Consommation simple</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 1000 à 3000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 1 à 5 ans</span>
                    </div>
                  </div>
                </div>
                <div class="sanction-item">
                  <h4>Détention pour usage</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 3000 à 5000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 5 à 10 ans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cocaïne -->
            <div class="substance-card">
              <div class="substance-header cocaine">
                <div class="substance-icon">
                  <i class="fas fa-pills"></i>
                </div>
                <h3>Cocaïne</h3>
              </div>
              <div class="sanctions-list">
                <div class="sanction-item">
                  <h4>Consommation</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 5000 à 10000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 5 à 20 ans</span>
                    </div>
                  </div>
                </div>
                <div class="sanction-item">
                  <h4>Détention</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 10000 à 50000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 10 ans à perpétuité</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Héroïne -->
            <div class="substance-card">
              <div class="substance-header heroin">
                <div class="substance-icon">
                  <i class="fas fa-syringe"></i>
                </div>
                <h3>Héroïne</h3>
              </div>
              <div class="sanctions-list">
                <div class="sanction-item">
                  <h4>Consommation</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 5000 à 15000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 10 à 30 ans</span>
                    </div>
                  </div>
                </div>
                <div class="sanction-item">
                  <h4>Détention</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 20000 à 100000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 20 ans à perpétuité</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Médicaments -->
            <div class="substance-card">
              <div class="substance-header meds">
                <div class="substance-icon">
                  <i class="fas fa-capsules"></i>
                </div>
                <h3>Médicaments détournés</h3>
              </div>
              <div class="sanctions-list">
                <div class="sanction-item">
                  <h4>Usage détourné</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 500 à 2000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 6 mois à 2 ans</span>
                    </div>
                  </div>
                </div>
                <div class="sanction-item">
                  <h4>Trafic de médicaments</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 5000 à 20000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 5 à 10 ans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Drogues synthétiques -->
            <div class="substance-card">
              <div class="substance-header synthetic">
                <div class="substance-icon">
                  <i class="fas fa-flask"></i>
                </div>
                <h3>Drogues synthétiques</h3>
              </div>
              <div class="sanctions-list">
                <div class="sanction-item">
                  <h4>Ecstasy, Méthamphétamine</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 3000 à 10000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 5 à 15 ans</span>
                    </div>
                  </div>
                </div>
                <div class="sanction-item">
                  <h4>Fabrication</h4>
                  <div class="sanction-details">
                    <div class="sanction-penalty">
                      <i class="fas fa-money-bill-wave"></i>
                      <span>Amende : 50000 à 200000 DT</span>
                    </div>
                    <div class="sanction-penalty">
                      <i class="fas fa-lock"></i>
                      <span>Prison : 20 ans à perpétuité</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Sanctions pour vente/trafic -->
        <section class="trafficking-section">
          <h2 class="section-title">
            <i class="fas fa-handcuffs"></i>
            Sanctions pour Vente et Trafic
          </h2>

          <div class="trafficking-grid">
            <div class="trafficking-card">
              <div class="trafficking-header">
                <i class="fas fa-store"></i>
                <h3>Vente au détail</h3>
              </div>
              <div class="trafficking-content">
                <div class="penalty-scale">
                  <div class="scale-item">
                    <span class="substance-type">Cannabis</span>
                    <span class="penalty">10 à 20 ans + 10 000 à 50 000 DT</span>
                  </div>
                  <div class="scale-item">
                    <span class="substance-type">Cocaïne/Héroïne</span>
                    <span class="penalty">20 ans à perpétuité + 50 000 à 200 000 DT</span>
                  </div>
                  <div class="scale-item">
                    <span class="substance-type">Près des écoles</span>
                    <span class="penalty">Peine maximale + majoration 50%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="trafficking-card">
              <div class="trafficking-header">
                <i class="fas fa-shipping-fast"></i>
                <h3>Trafic international</h3>
              </div>
              <div class="trafficking-content">
                <div class="penalty-scale">
                  <div class="scale-item">
                    <span class="substance-type">Quantité importante</span>
                    <span class="penalty">Perpétuité + 100 000 à 1 000 000 DT</span>
                  </div>
                  <div class="scale-item">
                    <span class="substance-type">Réseau organisé</span>
                    <span class="penalty">Perpétuité + confiscation des biens</span>
                  </div>
                  <div class="scale-item">
                    <span class="substance-type">Fonctionnaire impliqué</span>
                    <span class="penalty">Peine maximale + interdiction professionnelle</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="trafficking-card">
              <div class="trafficking-header">
                <i class="fas fa-industry"></i>
                <h3>Production/Fabrication</h3>
              </div>
              <div class="trafficking-content">
                <div class="penalty-scale">
                  <div class="scale-item">
                    <span class="substance-type">Culture cannabis</span>
                    <span class="penalty">10 à 20 ans + 20 000 à 100 000 DT</span>
                  </div>
                  <div class="scale-item">
                    <span class="substance-type">Laboratoire synthétique</span>
                    <span class="penalty">Perpétuité + 500 000 DT minimum</span>
                  </div>
                  <div class="scale-item">
                    <span class="substance-type">Fourniture précurseurs</span>
                    <span class="penalty">5 à 15 ans + 10 000 à 50 000 DT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Circonstances aggravantes -->
        <section class="aggravating-section">
          <h2 class="section-title">
            <i class="fas fa-exclamation-circle"></i>
            Circonstances Aggravantes
          </h2>

          <div class="aggravating-grid">
            <div class="aggravating-card">
              <i class="fas fa-school"></i>
              <h4>Près des établissements scolaires</h4>
              <p>Majoration de 50% de la peine et doublement de l'amende</p>
            </div>
            <div class="aggravating-card">
              <i class="fas fa-user-shield"></i>
              <h4>Implication de mineurs</h4>
              <p>Peine maximale prévue pour l'infraction + 5 ans supplémentaires</p>
            </div>
            <div class="aggravating-card">
              <i class="fas fa-users"></i>
              <h4>En bande organisée</h4>
              <p>Qualification de crime organisé - peines maximales applicables</p>
            </div>
            <div class="aggravating-card">
              <i class="fas fa-user-tie"></i>
              <h4>Fonctionnaire public</h4>
              <p>Destitution + interdiction d'exercer + peine maximale + 50%</p>
            </div>
            <div class="aggravating-card">
              <i class="fas fa-syringe"></i>
              <h4>Cause de décès</h4>
              <p>Homicide involontaire - 5 à 20 ans selon les circonstances</p>
            </div>
            <div class="aggravating-card">
              <i class="fas fa-redo"></i>
              <h4>Récidive</h4>
              <p>Doublement de la peine et triplement de l'amende</p>
            </div>
          </div>
        </section>

        <!-- Alternatives et soins -->
        <section class="alternatives-section">
          <h2 class="section-title">
            <i class="fas fa-heartbeat"></i>
            Alternatives et Prise en Charge
          </h2>

          <div class="alternatives-content">
            <div class="alternative-card">
              <div class="alternative-header">
                <i class="fas fa-hand-holding-medical"></i>
                <h3>Traitement volontaire</h3>
              </div>
              <div class="alternative-body">
                <p>
                  Le juge peut ordonner une injonction thérapeutique à la place 
                  ou en complément des sanctions pénales pour les consommateurs.
                </p>
                <ul class="benefits-list">
                  <li><i class="fas fa-check"></i> Suspension possible des poursuites</li>
                  <li><i class="fas fa-check"></i> Réduction de peine en cas de traitement</li>
                  <li><i class="fas fa-check"></i> Accompagnement médical et psychologique</li>
                </ul>
              </div>
            </div>

            <div class="alternative-card">
              <div class="alternative-header">
                <i class="fas fa-shield-alt"></i>
                <h3>Protection des repentis</h3>
              </div>
              <div class="alternative-body">
                <p>
                  La loi prévoit des dispositions pour les personnes qui collaborent 
                  avec la justice ou qui suivent un traitement de désintoxication.
                </p>
                <ul class="benefits-list">
                  <li><i class="fas fa-check"></i> Réduction de peine pour collaboration</li>
                  <li><i class="fas fa-check"></i> Protection des témoins</li>
                  <li><i class="fas fa-check"></i> Mesures de réinsertion</li>
                </ul>
              </div>
            </div>

            <div class="alternative-card">
              <div class="alternative-header">
                <i class="fas fa-balance-scale-left"></i>
                <h3>Mesures éducatives</h3>
              </div>
              <div class="alternative-body">
                <p>
                  Pour les primo-délinquants et les jeunes, des mesures éducatives 
                  peuvent être privilégiées sur les sanctions pénales.
                </p>
                <ul class="benefits-list">
                  <li><i class="fas fa-check"></i> Stages de sensibilisation</li>
                  <li><i class="fas fa-check"></i> Travail d'intérêt général</li>
                  <li><i class="fas fa-check"></i> Suivi socio-éducatif</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Avertissement légal -->
        <section class="disclaimer-section">
          <div class="disclaimer-card">
            <i class="fas fa-gavel"></i>
            <h3>Important à savoir</h3>
            <div class="disclaimer-content">
              <p>
                <strong>Ces informations sont fournies à titre indicatif.</strong> 
                Les sanctions peuvent varier selon les circonstances, 
                l'historique du contrevenant et l'appréciation du juge.
              </p>
              <p>
                En cas de problème juridique, consultez impérativement un avocat 
                spécialisé en droit pénal tunisien.
              </p>
              <div class="legal-references">
                <h4>Références légales :</h4>
                <ul>
                  <li>Code Pénal Tunisien</li>
                  <li>Loi n°92-52 du 3 juin 1992 sur les stupéfiants</li>
                  <li>Loi n°2009-49 du 3 août 2009 modifiant le Code Pénal</li>
                </ul>
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
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

// Les données pourraient être réactives si nécessaire
// Pour l'instant, le contenu est statique dans le template
</script>

<style scoped>
.laws-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
}

.laws-main {
  padding: 30px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* En-tête */
.laws-header {
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
  color: #e53e3e;
}

.header-content p {
  color: #718096;
  font-size: 1.1rem;
}

.warning-banner {
  background: linear-gradient(135deg, #f6ad55, #ed8936);
  color: white;
  padding: 15px 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  max-width: 400px;
}

.warning-banner i {
  font-size: 1.5rem;
}

.warning-info {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

/* Introduction */
.intro-section {
  margin-bottom: 40px;
}

.intro-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.intro-card h2 {
  color: #2d3748;
  font-size: 1.8rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.intro-card h2 i {
  color: #4299e1;
}

.intro-card p {
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Sections générales */
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

/* Grille des substances */
.substances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.substance-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.substance-card:hover {
  transform: translateY(-5px);
}

.substance-header {
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 15px;
}

.substance-header.alcohol {
  background: linear-gradient(135deg, #4299e1, #3182ce);
}

.substance-header.cannabis {
  background: linear-gradient(135deg, #48bb78, #38a169);
}

.substance-header.cocaine {
  background: linear-gradient(135deg, #ed8936, #dd6b20);
}

.substance-header.heroin {
  background: linear-gradient(135deg, #9f7aea, #805ad5);
}

.substance-header.meds {
  background: linear-gradient(135deg, #f6ad55, #ed8936);
}

.substance-header.synthetic {
  background: linear-gradient(135deg, #f56565, #e53e3e);
}

.substance-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.substance-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.sanctions-list {
  padding: 20px;
}

.sanction-item {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e8f0;
}

.sanction-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.sanction-item h4 {
  color: #2d3748;
  margin-bottom: 12px;
  font-size: 1.1rem;
}

.sanction-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sanction-penalty {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
  font-size: 0.9rem;
}

.sanction-penalty i {
  color: #e53e3e;
  width: 16px;
}

/* Section trafic */
.trafficking-section {
  margin-bottom: 50px;
}

.trafficking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
}

.trafficking-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.trafficking-card:hover {
  transform: translateY(-5px);
}

.trafficking-header {
  background: linear-gradient(135deg, #2d3748, #4a5568);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.trafficking-header i {
  font-size: 1.5rem;
}

.trafficking-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.trafficking-content {
  padding: 20px;
}

.penalty-scale {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.scale-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
}

.scale-item:last-child {
  border-bottom: none;
}

.substance-type {
  color: #2d3748;
  font-weight: 600;
  font-size: 0.9rem;
}

.penalty {
  color: #e53e3e;
  font-weight: 600;
  font-size: 0.85rem;
  text-align: right;
  flex: 1;
  margin-left: 15px;
}

/* Circonstances aggravantes */
.aggravating-section {
  margin-bottom: 50px;
}

.aggravating-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.aggravating-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease;
  border-left: 4px solid #e53e3e;
}

.aggravating-card:hover {
  transform: translateY(-3px);
}

.aggravating-card i {
  font-size: 2rem;
  color: #e53e3e;
  margin-bottom: 15px;
}

.aggravating-card h4 {
  color: #2d3748;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.aggravating-card p {
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

/* Alternatives */
.alternatives-section {
  margin-bottom: 50px;
}

.alternatives-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
}

.alternative-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.alternative-card:hover {
  transform: translateY(-5px);
}

.alternative-header {
  background: linear-gradient(135deg, #48bb78, #38a169);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.alternative-header i {
  font-size: 1.5rem;
}

.alternative-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.alternative-body {
  padding: 20px;
}

.alternative-body p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 15px;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: #4a5568;
  font-size: 0.9rem;
}

.benefits-list i {
  color: #48bb78;
}

/* Avertissement */
.disclaimer-section {
  margin-bottom: 40px;
}

.disclaimer-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  border: 2px solid #f6ad55;
}

.disclaimer-card i {
  font-size: 3rem;
  color: #f6ad55;
  margin-bottom: 20px;
}

.disclaimer-card h3 {
  color: #2d3748;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.disclaimer-content {
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

.disclaimer-content p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 15px;
}

.legal-references {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.legal-references h4 {
  color: #2d3748;
  margin-bottom: 10px;
}

.legal-references ul {
  color: #718096;
  padding-left: 20px;
}

.legal-references li {
  margin-bottom: 5px;
}

/* Responsive */
@media (max-width: 768px) {
  .laws-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .substances-grid,
  .trafficking-grid,
  .aggravating-grid,
  .alternatives-content {
    grid-template-columns: 1fr;
  }
  
  .scale-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .penalty {
    margin-left: 0;
    text-align: left;
  }
  
  .header-content h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .substance-card,
  .trafficking-card,
  .alternative-card {
    margin: 0 10px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>