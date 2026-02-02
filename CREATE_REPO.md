# Créer le repo GitHub

## Option 1: Via interface GitHub (2 minutes)

1. Va sur https://github.com/organizations/MargoHospitality/repositories/new
2. Nom du repo: `palais-chadmi-dashboard`
3. Description: "Performance dashboard for Palais Chadmi (2024-2026)"
4. Public
5. Ne pas initialiser avec README/gitignore (le repo local est déjà prêt)
6. Créer le repo

Puis reviens me dire "c'est créé" et je push.

## Option 2: Via ligne de commande (si gh CLI configuré)

```bash
cd /tmp/palais-chadmi-dashboard
gh repo create MargoHospitality/palais-chadmi-dashboard --public --source=. --remote=origin --push
```

## Option 3: Je le crée sous ton compte perso

Si tu préfères que je le crée sous ton compte GitHub perso (pas l'org), donne-moi ton username GitHub.
