# Horizon Theme — Features & Capabilities

> Fichier de référence pour la landing page commerciale du thème Shopify Horizon.
> Liste exhaustive des sections, blocks et fonctionnalités techniques.

---

## 🎯 Vue d'ensemble

**Horizon** est un thème Shopify SaaS moderne et modulaire, vendu par abonnement. Conçu pour permettre aux marques de créer des boutiques riches et performantes **sans code**, avec un système de blocks universels qui s'adaptent à tous les cas d'usage e-commerce.

### Points forts

- **38 sections** + **75+ blocks** publics modulaires
- **Système de layout universel** : grille ou flex, responsive natif
- **Wishlist intégrée** (drawer + compteur + notifications)
- **Polices personnalisées** : upload de `.woff2` directement via Customizer
- **Accessibilité WCAG 2.1 AA** : focus visible, aria-labels, reduced-motion, keyboard nav
- **Performance** : CSS scoped, JS en modules avec `defer`, IntersectionObserver partagé
- **Animations scroll-reveal** avec courbes `cubic-bezier` smooth
- **Dark mode** via color schemes multiples
- **Mode Simple / Expert** pour ne pas submerger les éditeurs débutants
- **Labels 100% français** (pas de jargon technique type "padding", "gap", "flex")
- **Mobile-first** : layout mobile distinct de desktop sur tous les blocks clés

---

## 📦 Fonctionnalités phares

### Système de wishlist complet

- Bouton cœur sur chaque produit (image ou inline)
- Icône dans le header avec **compteur animé** (style bubble panier)
- **Drawer** qui liste les produits wishlistés avec image, titre, prix (fetch Shopify AJAX)
- **Notification toast** à l'ajout/retrait (position adaptative mobile/desktop)
- **Sync multi-onglets** via `localStorage` + `storage` event
- Layout mobile symétrique : `burger | wishlist | LOGO | search | cart`

### Polices personnalisées (uploadables)

Pour chaque famille typographique (**Corps**, **Sous-titre**, **Titre**, **Accent**) :
- Checkbox "Utiliser une police personnalisée"
- Upload direct du `.woff2` via Shopify Files
- Override automatique des CSS variables `--font-*--family`
- Fallback intelligent vers la police native Shopify si le fichier ne charge pas

### Mode Simple / Expert

Chaque block important propose deux modes :
- **Simple** : settings essentiels (un border-radius uniforme)
- **Expert** : contrôle fin (4 coins séparés, animations, etc.)

Pattern appliqué sur : `section`, `group`, `image-content`, `slider`, etc.

### Animations scroll-reveal

- 6 types : fade, slide-left, slide-right, slide-up, slide-down, zoom
- Durée et délai configurables par block (pour staggered animations)
- **IntersectionObserver partagé** (performant sur pages avec 20+ blocks animés)
- Respect automatique de `prefers-reduced-motion`
- Web Component `<scroll-animate>` + classe `.scroll-animate` standalone

### Sticky Add-to-Cart

Sur la page produit :
- Barre fixe au scroll avec image produit, titre, prix, bouton
- Position configurable (gauche / centre / droite)
- Personnalisation complète (couleur bouton, dégradé, etc.)
- Masquable sur mobile

### Quick Add (ajout au panier depuis collection)

- Bouton "Ajouter" au survol des cartes produits
- Typographie personnalisable (preset + police + taille + graisse + casse)
- Icône optionnel
- Mode "Choisir" pour produits avec variantes

### Breadcrumb configurable

- Séparateurs : `/` · `›` · `→` · `—`
- Typographie custom complète
- Color scheme, bordure, espacement
- Option "Afficher Collections" sur les pages collection

---

## 🏗️ SECTIONS (38)

### Layout & contenus libres

| Section | Description |
|---------|-------------|
| **Section** | Conteneur universel flex/grid pour blocks custom |
| **Carousel** | Carousel horizontal de contenu |
| **Hero** | Hero banner avec image/vidéo + contenu |
| **Media with content** | Image ou vidéo + texte côté |
| **Marquee** | Bandeau défilant (texte, logos, images) |
| **Divider** | Séparateur visuel |
| **Logo** | Logo seul en section |
| **Rounded collection** | Collections en cercles stylisés |
| **Custom Liquid** | Code Liquid libre |

### Header & Footer

| Section | Description |
|---------|-------------|
| **Header** | Header principal avec logo, menu, actions |
| **Header announcements** | Barre d'annonces (marquee ou statique) |
| **Footer** | Footer complet modulaire |
| **Footer utilities** | Liens policies + social |
| **Password footer** | Footer de page mot-de-passe |

### Panier & Wishlist

| Section | Description |
|---------|-------------|
| **Cart drawer** | Drawer panier (latéral) |
| **Wishlist drawer** ✨ | Drawer wishlist avec produits |
| **Main cart** | Page panier complète |

### Pages Produit

| Section | Description |
|---------|-------------|
| **Product information** | Page produit principale (galerie + détails) |
| **Product list** | Liste de produits (collection, recommandations) |
| **Product hotspots** | Image interactive avec points produits |
| **Featured product information** | Produit en vedette |
| **Product recommendations** | Produits similaires |
| **Section rendering product card** | Rendu async d'une card produit |

### Collection, Blog, Search

| Section | Description |
|---------|-------------|
| **Collection list**, **Main collection list** | Liste des collections |
| **Main collection** | Page collection avec filtres |
| **Featured blog posts** | Articles blog mis en avant |
| **Main blog**, **Main blog post** | Pages blog |
| **Predictive search**, **Search header**, **Search results** | Système de recherche |

### Pages techniques

| Section | Description |
|---------|-------------|
| **Main 404**, **Main page**, **Quick order list** | Pages système |
| **Password** | Page de mise en maintenance |

---

## 🧩 BLOCKS publics (75+)

### Contenu de base (9)

| Block | Description |
|-------|-------------|
| **Text** | Bloc texte RTE avec preset typographique |
| **Image** | Image avec settings complet (ratio, fit, bordure) |
| **Video** | Vidéo native Shopify + YouTube/Vimeo |
| **Icon** | Icône (bibliothèque ou custom) |
| **Logo** | Logo de la boutique |
| **Button** | Bouton avec style et lien |
| **Spacer** | Espacement vertical |
| **Divider** | Trait de séparation |
| **Badge** | Badge coloré (promo, nouveau, etc.) |

### Layout & conteneurs (5)

| Block | Description |
|-------|-------------|
| **Group** | Conteneur flex/grid universel (le plus utilisé) |
| **Slider** | Slider universel (images, cartes, témoignages...) |
| **Image avec contenu** | Image de fond + blocks superposés |
| **Tabs** | Système d'onglets |
| **Accordion** | FAQ / accordéons |

### Animations & interactions (5)

| Block | Description |
|-------|-------------|
| **Counter** | Compteur animé (ex: +1000 clients) |
| **Countdown** | Compte à rebours |
| **Comparison** | Avant/Après image compare |
| **Comparison slider** | Tableau comparatif |
| **Story** | Stories type Instagram |

### Produit — Page (15)

| Block | Description |
|-------|-------------|
| **Product card** | Carte produit complète |
| **Product title** | Titre |
| **Product description** | Description RTE |
| **Price** | Prix (avec compare_at, % remise) |
| **Review** | Étoiles d'avis (Shopify reviews) |
| **SKU** | Référence |
| **Product inventory** | Indicateur de stock |
| **Product custom property** | Metafield produit custom |
| **Variant picker** | Sélecteur de variante (dropdown/boutons/swatches) |
| **Swatches** | Pastilles de couleurs |
| **Quantity** | Quantité |
| **Quantity break** | Paliers de prix quantitatif |
| **Buy buttons** | Boutons d'achat (panier + achat direct) |
| **Add to cart** | Bouton ajouter |
| **Accelerated checkout** | Shop Pay, Apple Pay, Google Pay |

### Produit — Promotion (2)

| Block | Description |
|-------|-------------|
| **Upsell** | Bloc upsell avec produits |
| **Product recommendations** | Recommandations auto |

### Collection & navigation (6)

| Block | Description |
|-------|-------------|
| **Collection card** | Carte collection |
| **Collection title** | Titre de collection |
| **Featured collection** | Bloc collection mise en avant (grid ou slider) |
| **Menu**, **Mega menu** | Systèmes de menu |
| **Filters** | Facettes de collection |
| **Breadcrumb** | Fil d'ariane configurable |

### Marketing & confiance (6)

| Block | Description |
|-------|-------------|
| **Email signup** | Newsletter |
| **Follow on Shop** | Bouton Shop app |
| **Trust Pilot** | Note Trustpilot |
| **Social links** | Icônes réseaux sociaux |
| **Payment icons** | Logos moyens de paiement |
| **Icon text row** | Rangée avec icônes + texte (USP bar) |

### Spécifiques (8)

| Block | Description |
|-------|-------------|
| **Wishlist** ✨ | Cœur wishlist avec toggle localStorage |
| **Contact form** | Formulaire de contact |
| **Page content** | Contenu de page `{{ page.content }}` |
| **Custom Liquid** | Code Liquid libre |
| **Popup link** | Lien ouvrant une popup |
| **Rounded item** | Item circulaire (catégories rondes) |
| **Footer copyright** | Copyright dynamique |
| **Footer policy list** | Liens CGV / Confidentialité |

---

## 🛠️ Points techniques différenciants

### Architecture

- **Web Components natifs** (custom elements) — pas de framework lourd
- **CSS scoped par section/block** — pas de fuite de style
- **JS en modules ES6 avec `defer`** — pas de blocage de rendu
- **`fetchpriority="low"`** sur les assets non-critiques
- **Cache request-level** dans les fetchs AJAX
- **Section Rendering API awareness** dans les templates

### Performance

- **IntersectionObserver partagé** pour tous les scroll-reveal
- **`content-visibility: auto`** sur slides non visibles
- **`contain: layout style`** sur le header
- **`--menu-anim-*`** variables globales pour cohérence
- **Lazy loading systématique** des images below-fold
- **Pas de jQuery ni de lib externe** (zéro dépendance runtime)

### Accessibilité (WCAG 2.1 AA)

- **Focus visible** sur tous les éléments interactifs (outline custom via variables theme)
- **ARIA complet** : `role`, `aria-expanded`, `aria-haspopup`, `aria-live`, `aria-label`, `aria-pressed`
- **Keyboard navigation** : Tab, Shift+Tab, Escape, Arrow keys, Home/End
- **`prefers-reduced-motion`** respecté sur toutes les animations
- **`alt=""` sur images décoratives** (pas lu par les SR)
- **`rel="noopener noreferrer"`** sur tous les liens `target="_blank"`
- **Landmarks sémantiques** : `<header>`, `<main>`, `<nav>`, `<footer>`, `role="region"`

### UX / Design

- **Mode Simple/Expert** pour progressive disclosure
- **`same_as_desktop`** pour dupliquer facilement les settings mobile
- **Labels français** sans jargon technique
- **Option "dashed"** disponible sur toutes les bordures
- **Color schemes héritables** du parent (cohérence visuelle)
- **Typography presets** (`rte`, `h1-h6`, `custom`) avec surcharge par block

### Mobile-first

- **Breakpoints cohérents** : 749px (mobile) / 750px (tablet+) / 990px (desktop+)
- **Layout mobile distinct** sur blocks complexes (slider, group, image-content)
- **Drawer responsive** (panier + wishlist)
- **Touch targets WCAG** : minimum 44×44px
- **Safe-area-inset** respectée sur iPhone avec notch/home indicator
- **Header symétrique mobile** avec logo parfaitement centré

---

## 🎨 Exemples d'utilisation

### E-commerce mode / cosmétique
- Hero plein écran avec vidéo
- Collections vedettes en grille ou slider
- Cards produit avec wishlist + quick add
- Rangées USP (livraison, retours, paiement sécurisé)
- Carousel de témoignages
- Newsletter

### Marque premium / luxe
- Hero minimaliste avec polices custom
- Hotspots produit interactifs
- Stories de marque
- Comparaisons avant/après
- Blog éditorial

### Produit unique / lancement
- Page produit custom avec vidéo intégrée
- Quantity breaks visibles
- Sticky ATC au scroll
- Compte à rebours pour précommande
- Upsell et recommendations

### Marque B2B / multi-produits
- Quick order list
- Filtres avancés
- Mega menu structuré
- Page catalogue avec hiérarchie claire

---

## 📊 En chiffres

- **38 sections** natives
- **75+ blocks publics** modulaires
- **8 color schemes** configurables
- **4 polices** custom uploadables (corps + titre + sous-titre + accent)
- **6 types d'animations** scroll-reveal
- **100% français** dans l'interface Customizer
- **WCAG 2.1 AA** compliant
- **0 dépendance runtime** (pas de jQuery, pas de lib externe)
