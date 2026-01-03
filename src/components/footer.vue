<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>À Propos</h3>
                <p>Mon Application Vue est une solution innovante développée pour répondre à vos besoins avec élégance et efficacité.</p>
               
            </div>
            
            <div class="footer-section">
                <h3>Navigation</h3>
                <ul class="footer-links">
                    <li><a href="#"> Accueil</a></li>
                    <li><a href="#"> Fonctionnalités</a></li>
                    <li><a href="#"> À Propos</a></li>
                    <li><a href="#"> Contact</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Contact</h3>
                <div class="contact-info">
                    <div> Eljem rue 20 mars 5160</div>
                    <div> +216 23 115 216 </div>
                    <div> jnayehachref2004@gmail.com</div>
                </div>
            </div>
            
            
        </div>
        
    </footer>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
.footer {
    background: linear-gradient(135deg, #6e93f2, #fc8282);
    color: #fff;
    padding: 3rem 0 1rem;
    margin-top: auto;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.footer-section {
    margin-bottom: 1.5rem;
}

.footer-section h3 {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    position: relative;
    padding-bottom: 0.5rem;
}

.footer-section h3::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #3498db;
}

.footer-section p {
    margin-bottom: 1rem;
    color: #013456;
    line-height: 1.6;
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.7rem;
}

.footer-links a {
    color: #012e4c;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
}

.footer-links a:hover {
    color: #0a671b;
    padding-left: 5px;
}

.social-links a:hover {
    background-color: #006700;
    transform: translateY(-3px);
}



.footer-bottom p {
    margin-bottom: 0.5rem;
}

.footer-bottom-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 0.5rem;
}

.footer-bottom-links a {
    color: #041724;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
    color: #3498db;
}

.newsletter-form {
    display: flex;
    margin-top: 1rem;
}



.contact-info {
    margin-top: 1rem;
}

.contact-info div {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    color: #012740;
}

.contact-info i {
    margin-right: 10px;
    color: #117400;
    width: 20px;
    text-align: center;
}
</style>