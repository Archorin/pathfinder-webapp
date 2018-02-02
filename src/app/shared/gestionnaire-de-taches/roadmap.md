# CDC composant: Gestionnaire de tâches

Ce composant absorbera la complexité des séquences d'actions à résoudre, et proposera
une interface simple et ergonomique aux utilisateurs pour résoudre leurs tâches.

Il s'agira d'une sidebar à gauche rétractable
Dans tous les cas le composant proposera:
- [ ] un bouton de toggle pour réduire/étendre le composant, idéalement situé au centre vertical de la sidebar, sur la droite du composant
- [ ] un résumé chiffré des tâches / actions en attente
- [ ] un bouton de résolution de l'action suivante la plus urgente

### En mode étendu le composant propose en plus une liste des taches plannifiées, contenants chacune une ou plusieurs actions plus élémentaires.
Une tâche contiendra donc:

- [ ] une liste d'actions à résoudre pour accomplir cette tache
- [ ] un code couleur définissant l'urgence de chaque action
- [ ] pour chaque action un compteur du nombre d'actions en attente de la résolution de celle-ci
- [ ] chaque tâche peut être dépliée ou réduire pour dévoiler ou cacher ses actions filles
- [ ] un bouton de suppression de la tâche