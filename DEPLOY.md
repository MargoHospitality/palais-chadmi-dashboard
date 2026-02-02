# Déploiement Railway - Palais Chadmi Dashboard

## Étapes de déploiement

### 1. Créer le projet Railway
- Aller sur [railway.app](https://railway.app)
- "New Project" → "Deploy from GitHub repo"
- Sélectionner `MargoHospitality/palais-chadmi-dashboard`

### 2. Configurer les variables d'environnement

Dans Railway, onglet **Variables** :

```
AUTH_USERNAME=palais
AUTH_PASSWORD=votremotdepasse
```

**Sécurité:**
- ⚠️ **Changer AUTH_PASSWORD** (ne pas laisser la valeur par défaut)
- Recommandation: 12+ caractères, minuscules/majuscules/chiffres
- Exemple: `PalaisChadmi2026!`

### 3. Déployer
- Railway build automatiquement après push GitHub
- Attendre fin du build (~2 min)
- Cliquer sur l'URL générée

### 4. Tester l'accès
- Ouvrir l'URL Railway dans navigateur
- Popup d'authentification HTTP Basic Auth apparaît
- **Username:** `palais` (ou ce que tu as défini)
- **Password:** Le mot de passe que tu as configuré

## Notes

- **Pas de DB nécessaire** pour ce dashboard (données statiques en JSON)
- **HTTP Basic Auth natif Express** (zéro config Railway spécifique)
- **Un seul mot de passe partagé** pour tous les accès
- **Variables d'env modifiables** sans redéploiement (Railway redémarre automatiquement)

## Partage d'accès

Pour donner accès à l'acheteur:
```
URL: https://votre-dashboard.railway.app
Username: palais
Password: votremotdepasse
```

## Troubleshooting

**Si la popup n'apparaît pas:**
- Vérifier que AUTH_PASSWORD est bien défini dans Railway env vars
- Redémarrer le service Railway (Settings > Restart)

**Si "401 Unauthorized":**
- Vérifier username/password (case-sensitive)
- Essayer en navigation privée (clear cookies)
