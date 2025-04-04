// NAVIGATION
export const NAV_LINKS = [
    { href: '/', slug: 'home', label: 'Accueil' },
    { href: '/', slug: 'how_hilink_work', label: 'Activités' },
    { href: '/', slug: 'services', label: 'Services' },
    { href: '/', slug: 'pricing ', label: 'Nos tarifs' },
    { href: '/', slug: 'contact_us', label: 'Contact' },
  ];
  
  // CAMP SECTION (LES URLS RESTENT IDENTIQUES)
  export const PEOPLE_URL = [
    { id: 1, imag: '/person-1.png' },
    { id: 2, imag: '/person-2.png' },
    { id: 3, imag: '/person-3.png' },
    { id: 4, imag: '/person-4.png' },
  ];
  
  // SECTION CARACTÉRISTIQUES
  export const FEATURES = [
    {
      title: 'Cartes réelles hors ligne',
      icon: '/map.svg',
      variant: 'green',
      description: 'Nous fournissons une solution pour utiliser notre application en randonnée sans réseau - les cartes hors ligne sont disponibles en permanence',
    },
    {
      title: 'Planifiez votre aventure',
      icon: '/calendar.svg',
      variant: 'green',
      description: "Organisez des aventures entre amis. Hilink propose de nombreuses offres spéciales pour les vacances - plus besoin de débats interminables",
    },
    {
      title: 'Technologie de réalité augmentée',
      icon: '/tech.svg',
      variant: 'green',
      description: 'Notre technologie utilise la réalité augmentée pour guider votre parcours en forêt jusqu\'au sommet - fonctionne sans connexion internet',
    },
    {
      title: 'Nouvelles destinations mensuelles',
      icon: '/location.svg',
      variant: 'green',
      description: 'Des dizaines de nouveaux lieux ajoutés chaque mois grâce à notre communauté mondiale de randonneurs qui partagent leurs meilleures expériences',
    },
  ];
  
  // PIED DE PAGE
  export const FOOTER_LINKS = [
    {
      title: 'En savoir plus',
      links: [

       { id: 1, menu:'À propos de Hilink'},
       { id: 2, menu:'Communiqués de presse'},
       { id: 3, menu:'Environnement'},
       { id: 4, menu:'Emplois'},
       { id: 5, menu:'Politique de confidentialité'},
       { id: 6, menu:'Nous contacter'},
       
      ],
    },
    {
      title: 'Notre communauté',
      links: [
        { id: 7, menu:  'Randonnée'},
        { id: 8, menu:  'Escalade Hilink'},
        { id: 9, menu:  'Hilink kinthill'},
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contactez-Nous',
    links: [
      { label: 'Administrateur', value: '123-456-7890' },
      { label: 'Email Officiel', value: 'hilink@inf0.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Suivez-nous',
    links: [
      {id:1, social_link:'/facebook.svg' },
      {id:2, social_link:'/instagram.svg' },
      {id:3, social_link:'/twitter.svg', },
      {id:4, social_link:'/youtube.svg', },
    ],
  };