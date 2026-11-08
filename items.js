// La liste — seul fichier à modifier. Les deux versions (animée + imprimable) le lisent.
// Champs d'une envie :
//   nom (obligatoire), note, prix, coeur (true = coup de cœur)
//   liens : [{ url, label }] — où l'acheter, le moins cher d'abord
//   modele : ce qui sort du cadeau — "jeu" (boîtier), "livre", "photo" (photo détourée), "duo" (deux photos côte à côte)
//   photo / photos : les images, dans items/ ; couleurs : variantes affichées tour à tour (photo ou filtre)
//   musique : { fichier, titre, artiste, licence, lien } — joue dès que le cadeau s'ouvre
//             officielle : chemin sans extension d'un fichier perso (.mp3 ou .m4a) joué à la place,
//             seulement sur la copie locale de ton ordinateur (jamais dans le lien partagé)
//   credit : { texte, lien } — crédit d'une photo d'exemple
// ambiance : la musique de Noël qui tourne quand aucun cadeau n'est ouvert (gain = volume, plus bas que les cadeaux)
const ALEX = (titre, fichier, slug) => ({ fichier, titre, artiste: "Alex Morgan", licence: "CC BY 4.0",
  lien: `https://freemusicarchive.org/music/alex-morgan/lofi-study-beats/${slug}/` });
// morceaux libres « dans l'esprit » des jeux (les musiques officielles ne sont pas réutilisables)
const KEVIN = (titre, fichier, officielle) => ({ fichier, titre, artiste: "Kevin MacLeod (incompetech.com)", licence: "CC BY 4.0",
  lien: "https://incompetech.com/", officielle });

window.LISTE = {
  annee: 2026,
  intro: "Quelques idées pour Noël, au cas où vous seriez en panne d’inspiration. Merci d’avance !",
  signature: "",
  exemple: false,
  ambiance: [
    { fichier: "items/music/noel_1.mp3", titre: "Christmas Slow Jazz", gain: .43, lien: "https://freemusicarchive.org/music/pulsebox/christmas-jazz/christmas-slow-jazz/" },
    { fichier: "items/music/noel_2.mp3", titre: "Jazz Christmas Music", gain: .37, lien: "https://freemusicarchive.org/music/pulsebox/christmas-jazz/jazz-christmas-music/" }
  ],
  envies: [
    { nom: "Zelda : Ocarina of Time", note: "Sur Nintendo Switch 2.", liens: [
      { url: "https://www.e.leclerc/fp/the-legend-of-zelda-ocarina-of-time-nintendo-switch-2-0045496315481", label: "E.Leclerc" },
      { url: "https://www.amazon.fr/dp/B0HJ85QJX3", label: "Amazon" }
    ], modele: "jeu", photo: "items/zelda.webp",
      musique: KEVIN("Achaidh Cheide", "items/music/zelda_jeu.mp3", "items/music/officiel/zelda") },
    { nom: "The Witcher : Time of Contempt", note: "L’édition collector reliée (en anglais).", liens: [
      { url: "https://www.amazon.fr/dp/1399611097", label: "Amazon" }
    ], modele: "livre", photo: "items/witcher.webp",
      musique: KEVIN("Thatched Villagers", "items/music/witcher_jeu.mp3", "items/music/officiel/witcher") },
    { nom: "Un casque JBL Live, au choix", note: "En noir, l’un ou l’autre : le Live 775NC ou le Live 680NC.", liens: [
      { url: "https://www.boulanger.com/ref/1224869", label: "775NC · Boulanger" },
      { url: "https://www.amazon.fr/dp/B0GLP7M2TJ", label: "680NC · Amazon" }
    ], modele: "duo", photos: [{ src: "items/casque775.webp", label: "Live 775NC" }, { src: "items/casque.webp", label: "Live 680NC" }],
      musique: ALEX("Lofi Jazz Coffee Shop With Dynamic Swells", "items/music/casque.mp3", "lofi-jazz-coffee-shop-with-dynamic-swells") },
    { nom: "Légendes Pokémon : Z-A", note: "Nintendo Switch 2 Edition.", liens: [
      { url: "https://www.cdiscount.com/jeux-pc-video-console/nintendo-switch/legendes-pokemon-z-a-nintendo-switch-2-edition/f-10328-ninns2legendesza.html", label: "Cdiscount" },
      { url: "https://www.e.leclerc/fp/legendes-pokemon-z-a-nintendo-switch-2-edition-nintendo-switch-2-0045496313050", label: "E.Leclerc" }
    ], modele: "jeu", photo: "items/pokemon.webp",
      musique: KEVIN("Pixelland", "items/music/pokemon_jeu.mp3", "items/music/officiel/pokemon") },
    { nom: "Des gants d’hiver", note: "En cuir, ou une autre jolie matière bien chaude. La couleur n’a pas d’importance.",
      modele: "photo", photo: "items/gants.webp",
      couleurs: [
        { nom: "cognac", filtre: "none", pastille: "#a8683a" },
        { nom: "noir", filtre: "grayscale(1) brightness(.5) contrast(1.4)", pastille: "#1c1b1d" },
        { nom: "chocolat", filtre: "saturate(.75) brightness(.5)", pastille: "#4a2d1d" }
      ],
      musique: ALEX("Vibraphone Jazz Study Session Without a Beat", "items/music/gants.mp3", "vibraphone-jazz-study-session-without-a-beat"),
      credit: { texte: "Photo d’exemple recolorée : Fingerkleid.de, CC BY-SA 4.0", lien: "https://commons.wikimedia.org/wiki/File:Ladies_leather_gloves_(cognac).jpg" } },
    { nom: "Un gros sweat tout doux", note: "Bien ample et confortable, pour les soirées d’hiver. La couleur n’a pas d’importance.",
      modele: "photo", photo: "items/sweat_beige.webp",
      couleurs: [
        { nom: "beige", photo: "items/sweat_beige.webp", pastille: "#d8ccb4" },
        { nom: "marine", photo: "items/sweat_marine.webp", pastille: "#232a45" },
        { nom: "rouge", photo: "items/sweat_rouge.webp", pastille: "#e2403f" },
        { nom: "rose", photo: "items/sweat_rose.webp", pastille: "#f2b9b0" }
      ],
      musique: ALEX("Lofi Jazz Rainy Night Mood", "items/music/sweat.mp3", "lofi-jazz-rainy-night-mood"),
      credit: { texte: "Photos d’exemple : Uniqlo" } },
    { nom: "Des chaussettes blanches et noires", note: "Des paires blanches et des paires noires, toutes simples.",
      modele: "duo", photos: [{ src: "items/chaussettes_blanches.webp", label: "Blanches" }, { src: "items/chaussettes_noires.webp", label: "Noires" }],
      musique: ALEX("Lofi Jazz Sunny Cafe Daytime Beat", "items/music/chaussettes.mp3", "lofi-jazz-sunny-cafe-daytime-beat"),
      credit: { texte: "Photos d’exemple : Uniqlo" } },
    { nom: "Des boxers Calvin Klein", note: "Le lot de 3 en coton stretch.", liens: [
      { url: "https://www.amazon.fr/dp/B00FOI4JUU", label: "Amazon" }
    ], modele: "photo", photo: "items/boxers_ck.webp",
      musique: ALEX("Lofi Jazz Midnight Club After Hours", "items/music/boxers.mp3", "lofi-jazz-midnight-club-after-hours") }
  ]
};
