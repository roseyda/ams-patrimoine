# Documentation d'Intégration Technique - AMS Patrimoine (V7)

## 1. Stack Technique

- **Framework** : Nuxt 3
- **UI Library** : Nuxt UI (basé sur Tailwind CSS et Headless UI)
- **Typographies** :
  - `Noto Serif` (Headlines)
  - `Inter` (Body)
- **Icônes** : Iconify (via Nuxt UI)

## 2. Configuration du Design System (Tailwind / Nuxt UI)

### Couleurs

- **Primary** : `#021338` (Bleu profond - Logo)
- **Secondary** : `#A68E5E` (Or/Beige subtil - Accent)
- **Background** : `#FFFFFF` (Main), `#F4F4EF` (Surface Container Low)
- **Text** : `#021338` (Titles), `#45464E` (Body)

### Composants Nuxt UI utilisés

- `UContainer` : Pour le centrage et le max-width global.
- `UCard` : Pour les sections Expertise et Services.
- `UNavbar` : Structure du Header (Desktop & Mobile).
- `UButton` : Boutons institutionnels (Ghost/Solid).
- `UForm` & `UInput` : Formulaire de contact.
- `UIcon` : Iconographie premium.

## 3. Architecture des Pages

### Layouts

- `default.vue` : Contient le `TopNavBar` synchronisé et le `Footer`.

### Pages

- `index.vue` : Accueil (Hero, ADN, Domaines).
- `expertise/index.vue` : Vue d'ensemble des expertises.
- `expertise/dirigeants.vue` : Accompagnement spécifique Dirigeants.
- `expertise/particuliers.vue` : Accompagnement spécifique Particuliers.
- `expertise/patrimoine.vue` : Stratégie Patrimoniale.
- `expertise/finance.vue` : Stratégie Financière.
- `approche.vue` : Méthodologie avec la Timeline verticale.
- `cabinet.vue` : Histoire et Vision.
- `contact.vue` : Formulaire et coordonnées.

## 4. Points d'attention pour l'intégration

- **Responsive** : Utiliser les classes Tailwind `hidden md:flex` pour le header et l'adaptation des grilles.
- **Animations** : Suggestions de `framer-motion` (via `v-motion`) pour les apparitions au scroll, notamment sur la timeline de la page Approche.
- **Images** : Optimisation via `NuxtImg` pour les portraits et visuels d'architecture.
