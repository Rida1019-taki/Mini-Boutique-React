# Mini Boutique React

## 1. Nom du projet

**Nom du projet :** Mini Boutique React

---

# 2. Présentation du projet

Mini Boutique React est une application web développée avec React.js permettant d'afficher un catalogue de produits et de gérer un panier d'achat. Elle s'adresse aux utilisateurs souhaitant consulter des produits et les ajouter à leur panier. Son objectif principal est de mettre en pratique les concepts fondamentaux de React tels que les composants, les Props, le Hook useState, React Router ainsi que la gestion des formulaires avec React Hook Form et Yup.

---

# 3. Problématique

Le problème identifié est qu'une petite boutique ne dispose pas d'une interface moderne permettant de présenter facilement ses produits et de gérer un panier d'achat.

La solution proposée permet d'afficher un catalogue interactif, de filtrer les produits, de gérer un panier et d'ajouter de nouveaux produits grâce à une interface simple et intuitive.

---

# 4. Fonctionnalités principales

- Afficher le catalogue des produits.
- Filtrer les produits par catégorie.
- Ajouter un produit au panier.
- Supprimer un produit du panier.
- Supprimer un produit du catalogue.
- Ajouter un nouveau produit via un formulaire.
- Valider les formulaires avec React Hook Form et Yup.
- Naviguer entre plusieurs pages avec React Router.
- Afficher une page 404 pour les routes inexistantes.

---

# 5. Technologies utilisées

| Technologie | Utilisation dans le projet |
|-------------|----------------------------|
| React.js | Développement de l'interface utilisateur |
| React Router | Navigation entre les pages |
| React Hook Form | Gestion des formulaires |
| Yup | Validation des données |
| JavaScript | Logique de l'application |
| JSON | Stockage local des produits |
| CSS | Mise en forme de l'application |
| Git & GitHub | Gestion des versions |

Nous avons utilisé **React.js** pour développer une interface dynamique basée sur des composants.

Nous avons utilisé **React Router** pour créer une navigation entre les différentes pages.

Nous avons utilisé **React Hook Form** et **Yup** afin de créer des formulaires avec validation.

Le fichier **JSON** est utilisé comme source de données locale des produits.

---

# 6. Installation et lancement

## 6.1 Prérequis

Pour utiliser ce projet, vous devez disposer de :

- Node.js
- npm
- Git
- Visual Studio Code

---

## 6.2 Cloner le dépôt

```bash
git clone https://github.com/VOTRE_COMPTE/mini-boutique-react.git
```

---

## 6.3 Ouvrir le dossier

```bash
cd mini-boutique-react
```

---

## 6.4 Installer les dépendances

```bash
npm install
```

---

## 6.5 Variables d'environnement

Aucune variable d'environnement n'est nécessaire.

---

## 6.6 Lancer le projet

```bash
npm run dev
```

---

## 6.7 Ouvrir le projet

```
http://localhost:5173
```

### Point de vigilance

- Vérifier que toutes les dépendances sont installées.
- Les données sont stockées uniquement dans un fichier JSON local.
- Les modifications sont temporaires et disparaissent après le rafraîchissement de la page.

---

# 7. Captures d'écran

## Capture 1

### Titre

Catalogue des produits

```md
![Catalogue](images/catalogue.png)
```

### Explication

Cette capture montre le catalogue des produits disponibles avec leur image, leur prix et leur catégorie.

---

## Capture 2

### Titre

Panier

```md
![Panier](images/cart.png)
```

### Explication

Cette capture montre le panier contenant les produits sélectionnés ainsi que le nombre total d'articles et le montant total.

---

# 8. Contribution personnelle

Ma contribution principale a porté sur le développement complet de l'application React.

J'ai également développé les composants réutilisables, le système de panier, le filtrage des produits, la navigation avec React Router ainsi que les formulaires avec React Hook Form et Yup.

J'ai été responsable de l'organisation des composants, de la gestion des états avec useState, de la validation des formulaires et de la mise en page de l'application.

---

# 9. Difficultés rencontrées

## Difficulté 1

### Problème rencontré

La mise à jour automatique du panier et du total après chaque ajout ou suppression de produit.

### Recherches / Tests

J'ai testé différentes méthodes de mise à jour du state avec le Hook useState.

### Solution

J'ai utilisé useState pour stocker le panier et recalculer automatiquement les informations après chaque modification.

### Ce que j'ai appris

J'ai appris à manipuler efficacement les états React et les tableaux avec les méthodes map() et filter().

### Texte final

J'ai rencontré une difficulté lors de la gestion du panier. Après plusieurs tests, j'ai utilisé useState pour mettre à jour automatiquement les produits et recalculer le total. Cette difficulté m'a permis de mieux comprendre la gestion des états en React.

---

## Difficulté 2

### Problème rencontré

La validation du formulaire d'ajout de produit.

### Recherches / Tests

J'ai étudié React Hook Form et Yup afin de comprendre leur fonctionnement.

### Solution

J'ai créé un schéma de validation Yup et intégré React Hook Form pour afficher les erreurs sous chaque champ.

### Ce que j'ai appris

J'ai appris à créer des formulaires modernes avec validation et messages d'erreur personnalisés.

---

# 10. Améliorations possibles

Dans une prochaine version, je pourrais :

- sauvegarder le panier avec Local Storage ;
- ajouter une recherche par nom de produit ;
- intégrer un mode sombre ;
- permettre la modification des produits du catalogue.

### Conclusion

Ces améliorations permettraient d'offrir une meilleure expérience utilisateur et de rendre l'application plus complète.

---

# ✅ Checklist finale

## Présentation

- [x] Le nom du projet est clair.
- [x] Le projet est présenté en 3 à 5 lignes.
- [x] Le public cible est identifié.
- [x] Le besoin est expliqué.
- [x] L'objectif est précisé.

## Fonctionnalités

- [x] Les fonctionnalités principales sont présentes.
- [x] Chaque fonctionnalité commence par un verbe.
- [x] Elles correspondent à des actions réelles.

## Technologies

- [x] Les technologies sont indiquées.
- [x] Leur rôle est expliqué.

## Installation

- [x] Les prérequis sont présents.
- [x] Les commandes fonctionnent.
- [x] L'adresse locale est indiquée.
- [x] Aucune donnée sensible n'est publiée.

## Captures

- [ ] Ajouter les captures d'écran du projet.

## Contribution

- [x] La contribution est clairement expliquée.

## Difficultés

- [x] Les difficultés sont décrites.
- [x] Les solutions sont expliquées.
- [x] Les apprentissages sont précisés.

## Améliorations

- [x] Les améliorations sont réalistes.

---

# Validation finale

Une personne qui découvre ce projet peut comprendre :

- son objectif ;
- ses fonctionnalités ;
- les technologies utilisées ;
- la manière de l'installer ;
- les concepts React mis en œuvre ;
- les améliorations envisagées.