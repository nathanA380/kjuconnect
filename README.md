# ⚠️Cette app est encore en cours de développement !! Si vous souhaitez collaborer avec moi, n'hésitez pas à visiter mon profil !

# 🎒 KJU Connect

![Licence](https://img.shields.io/badge/Licence-CC%20BY--NC%204.0-green)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-blue)
![HTML](https://img.shields.io/badge/Tech-HTML%2C%20CSS%2C%20JS-orange)

**KJU Connect** est une application web progressive (**PWA**) qui permet aux lycéens d’avoir **toutes les informations essentielles de leur établissement** directement sur leur téléphone ou leur ordinateur.
Carte de lycéen, carte de cantine, horaires du portail, infos pratiques… tout est regroupé dans une seule app simple et rapide d’accès.

---

## 🌐 À propos

KJU Connect a été conçue pour offrir **une expérience fluide, rapide et accessible même hors connexion**, grâce à un **service worker** et un **manifest PWA**.
L’objectif est de remplacer les applications lourdes ou peu pratiques par une interface claire et personnalisée pour chaque lycée.

---

## 🧭 Fonctionnalités principales

* 🪪 **Carte de lycéen numérique**
  → Accès rapide à ton identité scolaire (nom, photo, établissement)

* 🍽️ **Carte de cantine virtuelle**
  → Affiche ton identifiant ou QR code de restauration

* 🕒 **Horaires du portail et du self**
  → Consulte les heures d’ouverture et de fermeture de ton lycée

* 🧠 **Mémo intégré**
  → Notes rapides ou rappels personnels directement depuis l’app

* 📱 **PWA installable**
  → Ajoute l’application sur ton écran d’accueil et utilise-la sans connexion internet

---

## ⚙️ Structure du projet

```
/
├── index.html                   # Page d’accueil
├── cl.html                      # Carte de lycéen
├── cc.html                      # Carte de cantine
├── memo.html                    # Mémo personnel
├── sw.js                        # Service Worker (cache et offline)
├── manifest.json                # Manifest PWA
├── icon-192.png / icon-512.png  # Icônes de l’app
├── Agrandir-Regular.otf         # Police utilisée
└── assets/                      # Images et ressources diverses
```

---

## 🚀 Installation & Lancement local

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/nlagardere/kjuconnect.git
   cd kjuconnect
   ```

2. **Lancer un serveur local** (par exemple avec VS Code Live Server ou http-server) :

   ```bash
   npx http-server . -p 8080
   ```

3. **Ouvrir l’application :**

   ```
   http://localhost:8080
   ```

4. **(Optionnel)** : Ajouter l’app sur ton téléphone
   → Ouvre-la dans ton navigateur mobile et sélectionne **“Ajouter à l’écran d’accueil”**

---

## 🧩 Technologies utilisées

* **HTML / CSS / JavaScript**
* **PWA (Progressive Web App)**
* **Service Worker** pour le cache et le mode hors-ligne
* **Manifest Web App** pour l’installation
* **Design responsive** pour une compatibilité totale avec mobile, tablette et PC

---

## 🎯 Objectif

Créer une application simple, utile et esthétique, accessible à tous les lycéens, pour leur permettre d’avoir **toutes leurs infos scolaires au même endroit**, même sans connexion internet.

---

## 🛠️ Améliorations prévues

* 🔐 Connexion personnalisée selon le lycée
* 🔄 Synchronisation automatique des horaires et infos
* 🎨 Thèmes personnalisables (mode sombre, couleurs du lycée)
* 🪙 Gestion du QR code de cantine / accès

---

## 📸 Captures d’écran

*(à venir — images de l’interface principale, du mémo et des cartes)*

---

## 🧑‍💻 Développeur

Développé par **Nathan Lagardère**
📍 Projet personnel — Application scolaire intuitive pour les lycéens

---

## 📜 Licence

### Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

Tu es libre de :

* **Partager** — copier et redistribuer le matériel sur tout support ou format
* **Adapter** — remixer, transformer et créer à partir du matériel

À condition de :

* **Citer l’auteur** — mentionner le nom de l’auteur original (Nathan Lagardère)
* **Ne pas utiliser à des fins commerciales** — aucune utilisation commerciale de ce projet n’est autorisée

> 🔗 [Lire la licence complète](https://creativecommons.org/licenses/by-nc/4.0/)

---

> 💬 *KJU Connect — ton lycée, toujours dans ta poche.*
