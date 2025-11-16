# Guide couleurs – Site Maxence Garandel

Palette principale du site.  
Ces couleurs doivent être utilisées de manière cohérente sur l’ensemble des pages.

---

## 🎨 Palette

- **Couleur 1 – Vert très foncé**
  - Hex : `#041E18`
  - Rôle : Fond principal, blocs importants, header/footer, sections « sérieuses ».
- **Couleur 2 – Vert fluo / accent**
  - Hex : `#36F4A4`
  - Rôle : Couleur d’accent et d’action (CTA, liens importants, éléments interactifs).
- **Couleur 3 – Vert moyen**
  - Hex : `#284F46`
  - Rôle : Fonds secondaires, cards, bordures, hover states.

---

## 🧱 Variables CSS recommandées

À placer dans le `:root` de la feuille de style principale :

```css
@theme {
  --font-title: 'Poppins', sans-serif;
  --font-serif: 'Instrument Serif', serif;
  --color-green-max: #36f4a4;
  --color-green-max-dark: #041E18;
  --color-green-secondaire: #284F46;
}