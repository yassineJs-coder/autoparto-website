const STORE_URLS = {
  ios: 'https://apps.apple.com/app/autoparto',
  android: 'https://play.google.com/store/apps/details?id=com.autoparto.app',
};

const COPY = {
  en: {
    'nav.how': 'How it works',
    'nav.roles': 'Buyers & sellers',
    'nav.features': 'Features',
    'nav.faq': 'FAQ',
    'nav.cta': 'Get the app',
    'hero.kicker': 'Now in Morocco',
    'hero.title': 'Find the part. Nearby stores. Real offers.',
    'hero.t1': 'Find the part.',
    'hero.t2': 'Nearby stores.',
    'hero.t3': 'Real offers.',
    'hero.lead':
      'Post a request with photos. Sellers nearby answer in MAD. You chat, agree, and both confirm when the part is in your hands.',
    'hero.cta': 'Download App',
    'hero.secondary': 'How it works →',
    'hero.note': 'Available on iPhone and Android.',
    'stats.s1v': 'Morocco',
    'stats.s1l': 'Marketplace',
    'stats.s2v': 'MAD',
    'stats.s2l': 'Every price',
    'stats.s3v': 'EN · FR · AR',
    'stats.s3l': 'Languages',
    'ticker.c1': 'Photos on every request',
    'ticker.c2': 'Chat on the deal',
    'ticker.c3': 'Dual confirmation',
    'ticker.c4': 'Car · Truck · Moto · E-scooter',
    'ticker.c5': 'Pickup or delivery',
    'ticker.c6': 'No in-app payment',
    'store.iosTop': 'Download on the',
    'store.iosName': 'App Store',
    'store.androidTop': 'Get it on',
    'store.androidName': 'Google Play',
    'mock.search': 'Search requests...',
    'mock.part1': 'Brake pads',
    'mock.part2': 'Side mirror',
    'mock.awaiting': 'Awaiting sellers',
    'mock.offers': 'Sellers following',
    'mock.create': 'New request',
    'mock.continue': 'Continue',
    'how.eyebrow': 'The flow',
    'how.title': 'From request to handshake',
    'how.lead': 'No in-app payment. AutoParTo helps you agree, then both sides confirm the deal.',
    'how.s1t': 'Post a request',
    'how.s1d': 'Choose the vehicle, describe the part, add photos.',
    'how.s2t': 'Get offers',
    'how.s2d': 'Stores nearby send a price, condition, and delivery option.',
    'how.s3t': 'Chat on the deal',
    'how.s3d': 'Every conversation stays tied to that offer.',
    'how.s4t': 'Both confirm',
    'how.s4d': 'Buyer confirms receipt. Seller confirms payment. Then it is done.',
    'vehicles.eyebrow': 'Coverage',
    'vehicles.title': 'Built for these vehicles',
    'vehicles.lead': 'Same four categories as in the app.',
    'vehicles.car': 'Car',
    'vehicles.truck': 'Truck',
    'vehicles.moto': 'Motorcycle',
    'vehicles.escooter': 'E-scooter',
    'roles.eyebrow': 'Two sides',
    'roles.title': 'Buyers ask. Stores answer.',
    'roles.lead': 'You pick buyer or seller once, then the app stays in that mode.',
    'roles.buyerTag': 'For buyers',
    'roles.buyerTitle': 'Skip the shop-hopping',
    'roles.buyerLead': 'You need a part. You do not hunt shop by shop.',
    'roles.b1': 'Create a request in a few steps',
    'roles.b2': 'Compare offers, then accept one',
    'roles.b3': 'Track the request until both confirm',
    'roles.sellerTag': 'For sellers',
    'roles.sellerTitle': 'Win the request',
    'roles.sellerLead': 'Your store answers requests that match what you stock.',
    'roles.s1': 'Set store name, address, and availability',
    'roles.s2': 'Send an offer with photos and MAD price',
    'roles.s3': 'Chat, deliver or pickup, confirm payment',
    'features.eyebrow': 'The product',
    'features.title': 'Everything you need. Nothing extra.',
    'features.lead': 'Built for how parts actually move in Morocco — photos, chat, and a clear handshake.',
    'features.f1t': 'Photos on every request',
    'features.f1d': 'Sellers see the part before they quote.',
    'features.f2t': 'Prices in MAD',
    'features.f2d': 'No mixed currencies. What you see is what you offer.',
    'features.f3t': 'Deal chat',
    'features.f3d': 'Messages live on the offer, not in a random inbox.',
    'features.f4t': 'Notifications',
    'features.f4d': 'New offer, accept, receipt, and payment updates.',
    'features.f5t': 'English, French, Arabic',
    'features.f5d': 'The app follows the language you pick.',
    'features.f6t': 'History, not clutter',
    'features.f6d': 'Open deals stay in My Deals. Completed ones go to History.',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions',
    'faq.q1': 'How do I create a request?',
    'faq.a1': 'Open Create, pick car / truck / moto / e-scooter, then add the part, photos, and send.',
    'faq.q2': 'How do deals work?',
    'faq.a2': 'A seller sends an offer. You accept or reject it. After accept, buyer confirms receipt and seller confirms payment.',
    'faq.q3': 'Do I pay inside the app?',
    'faq.a3': 'No. AutoParTo is not a payment app. You agree outside, then both confirm in the app.',
    'faq.q4': 'Can I message a store from my profile?',
    'faq.a4': 'Chat opens from a deal, so every conversation stays attached to that offer.',
    'cta.title': 'Get the app and start finding parts',
    'cta.lead': 'Download the app on the App Store or Google Play.',
    'cta.button': 'Email AutoParTo',
  },
  fr: {
    'nav.how': 'Comment ca marche',
    'nav.roles': 'Acheteurs & vendeurs',
    'nav.features': 'Fonctions',
    'nav.faq': 'FAQ',
    'nav.cta': "L'app",
    'hero.kicker': 'Maintenant au Maroc',
    'hero.title': 'Trouve la piece. Magasins proches. Vraies offres.',
    'hero.t1': 'Trouve la piece.',
    'hero.t2': 'Magasins proches.',
    'hero.t3': 'Vraies offres.',
    'hero.lead':
      'Publie une demande avec des photos. Les magasins proches repondent en MAD. Vous discutez, vous tombez d accord, puis vous confirmez tous les deux.',
    'hero.cta': "Telecharger l'app",
    'hero.secondary': 'Comment ca marche →',
    'hero.note': 'Dispo sur iPhone et Android.',
    'stats.s1v': 'Maroc',
    'stats.s1l': 'Marketplace',
    'stats.s2v': 'MAD',
    'stats.s2l': 'Chaque prix',
    'stats.s3v': 'EN · FR · AR',
    'stats.s3l': 'Langues',
    'ticker.c1': 'Photos sur chaque demande',
    'ticker.c2': 'Chat sur l offre',
    'ticker.c3': 'Double confirmation',
    'ticker.c4': 'Voiture · Camion · Moto · Trottinette',
    'ticker.c5': 'Retrait ou livraison',
    'ticker.c6': 'Pas de paiement in-app',
    'store.iosTop': 'Telecharger sur',
    'store.iosName': 'App Store',
    'store.androidTop': 'Disponible sur',
    'store.androidName': 'Google Play',
    'mock.search': 'Chercher une demande...',
    'mock.part1': 'Plaquettes de frein',
    'mock.part2': 'Retroviseur',
    'mock.awaiting': 'En attente',
    'mock.offers': 'Suivi par des vendeurs',
    'mock.create': 'Nouvelle demande',
    'mock.continue': 'Continuer',
    'how.eyebrow': 'Le parcours',
    'how.title': 'De la demande a la confirmation',
    'how.lead': "Pas de paiement dans l'app. AutoParTo vous aide a tomber d accord, puis les deux confirment.",
    'how.s1t': 'Publie une demande',
    'how.s1d': 'Choisis le vehicule, decris la piece, ajoute des photos.',
    'how.s2t': 'Recois des offres',
    'how.s2d': 'Les magasins envoient prix, etat et livraison.',
    'how.s3t': 'Discute sur l offre',
    'how.s3d': 'Chaque conversation reste liee a cette offre.',
    'how.s4t': 'Les deux confirment',
    'how.s4d': "L acheteur confirme la reception. Le vendeur confirme l argent. C est termine.",
    'vehicles.eyebrow': 'Couverture',
    'vehicles.title': 'Pour ces vehicules',
    'vehicles.lead': "Les quatre categories de l'app.",
    'vehicles.car': 'Voiture',
    'vehicles.truck': 'Camion',
    'vehicles.moto': 'Moto',
    'vehicles.escooter': 'Trottinette',
    'roles.eyebrow': 'Deux cotes',
    'roles.title': 'L acheteur demande. Le magasin repond.',
    'roles.lead': "Tu choisis acheteur ou vendeur une fois, puis l'app reste dans ce mode.",
    'roles.buyerTag': 'Pour les acheteurs',
    'roles.buyerTitle': 'Fini le magasin par magasin',
    'roles.buyerLead': 'Tu as besoin d une piece. Tu ne fais plus magasin par magasin.',
    'roles.b1': 'Cree une demande en quelques etapes',
    'roles.b2': 'Compare les offres, puis accepte-en une',
    'roles.b3': 'Suis la demande jusqu a la double confirmation',
    'roles.sellerTag': 'Pour les vendeurs',
    'roles.sellerTitle': 'Gagne la demande',
    'roles.sellerLead': 'Ton magasin repond aux demandes qui collent a ton stock.',
    'roles.s1': 'Nom, adresse et disponibilite du magasin',
    'roles.s2': 'Envoie une offre avec photos et prix MAD',
    'roles.s3': 'Discute, livre ou retrait, confirme le paiement',
    'features.eyebrow': 'Le produit',
    'features.title': 'Le necessaire. Rien de trop.',
    'features.lead': 'Pense pour le Maroc : photos, chat, et une confirmation claire des deux cotes.',
    'features.f1t': 'Photos sur chaque demande',
    'features.f1d': 'Le vendeur voit la piece avant de coter.',
    'features.f2t': 'Prix en MAD',
    'features.f2d': 'Pas de devise mixte. Le prix affiche est le prix propose.',
    'features.f3t': 'Chat de l offre',
    'features.f3d': "Les messages restent sur l'offre, pas dans une boite separee.",
    'features.f4t': 'Notifications',
    'features.f4d': 'Nouvelle offre, acceptation, reception, paiement.',
    'features.f5t': 'Anglais, francais, arabe',
    'features.f5d': "L'app suit la langue que tu choisis.",
    'features.f6t': 'Historique propre',
    'features.f6d': 'Les offres ouvertes restent dans Mes offres. Les terminees vont dans l historique.',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions',
    'faq.q1': 'Comment creer une demande ?',
    'faq.a1': "Ouvre Creer, choisis voiture / camion / moto / trottinette, ajoute la piece et les photos.",
    'faq.q2': 'Comment marchent les offres ?',
    'faq.a2': "Un vendeur envoie une offre. Tu acceptes ou tu refuses. Ensuite l acheteur confirme la reception et le vendeur confirme l argent.",
    'faq.q3': "Est-ce que je paie dans l'app ?",
    'faq.a3': "Non. AutoParTo n est pas une app de paiement. Vous vous mettez d accord dehors, puis vous confirmez dans l'app.",
    'faq.q4': 'Puis-je ecrire a un magasin depuis mon profil ?',
    'faq.a4': "Le chat s ouvre depuis une offre, pour que chaque conversation reste attachee a cette piece.",
    'cta.title': "Telecharge l'app et commence a trouver des pieces",
    'cta.lead': 'Sur l App Store et Google Play.',
    'cta.button': 'Ecrire a AutoParTo',
  },
  ar: {
    'nav.how': 'كيف يعمل',
    'nav.roles': 'مشترٍ وبائع',
    'nav.features': 'المزايا',
    'nav.faq': 'أسئلة',
    'nav.cta': 'حمّل التطبيق',
    'hero.kicker': 'الآن في المغرب',
    'hero.title': 'اعثر على القطعة. متاجر قريبة. عروض حقيقية.',
    'hero.t1': 'اعثر على القطعة.',
    'hero.t2': 'متاجر قريبة.',
    'hero.t3': 'عروض حقيقية.',
    'hero.lead':
      'أنشئ طلباً مع الصور. المتاجر القريبة ترد بالدرهم. تتحدثان، تتفقان، ثم تؤكدان معاً عند استلام القطعة.',
    'hero.cta': 'حمّل التطبيق',
    'hero.secondary': 'كيف يعمل',
    'hero.note': 'متوفر على آيفون وأندرويد.',
    'stats.s1v': 'المغرب',
    'stats.s1l': 'سوق القطع',
    'stats.s2v': 'درهم',
    'stats.s2l': 'كل الأسعار',
    'stats.s3v': 'EN · FR · AR',
    'stats.s3l': 'اللغات',
    'ticker.c1': 'صور مع كل طلب',
    'ticker.c2': 'محادثة على العرض',
    'ticker.c3': 'تأكيد من الطرفين',
    'ticker.c4': 'سيارة · شاحنة · دراجة · سكوتر',
    'ticker.c5': 'استلام أو توصيل',
    'ticker.c6': 'بلا دفع داخل التطبيق',
    'store.iosTop': 'حمّل من',
    'store.iosName': 'App Store',
    'store.androidTop': 'حمّل من',
    'store.androidName': 'Google Play',
    'mock.search': 'ابحث في الطلبات...',
    'mock.part1': 'فحمات فرامل',
    'mock.part2': 'مرآة جانبية',
    'mock.awaiting': 'بانتظار البائعين',
    'mock.offers': 'يتابعها بائعون',
    'mock.create': 'طلب جديد',
    'mock.continue': 'متابعة',
    'how.eyebrow': 'المسار',
    'how.title': 'من الطلب إلى التأكيد',
    'how.lead': 'لا يوجد دفع داخل التطبيق. يساعدكم AutoParTo على الاتفاق، ثم يؤكد الطرفان الصفقة.',
    'how.s1t': 'أنشئ طلباً',
    'how.s1d': 'اختر المركبة، صف القطعة، وأضف الصور.',
    'how.s2t': 'استلم العروض',
    'how.s2d': 'المتاجر القريبة ترسل السعر والحالة وخيار التوصيل.',
    'how.s3t': 'تحدث على العرض',
    'how.s3d': 'كل محادثة مرتبطة بذلك العرض.',
    'how.s4t': 'يؤكد الطرفان',
    'how.s4d': 'المشتري يؤكد الاستلام. البائع يؤكد الدفع. وتنتهي الصفقة.',
    'vehicles.eyebrow': 'التغطية',
    'vehicles.title': 'لهذه المركبات',
    'vehicles.lead': 'نفس الفئات الأربع الموجودة في التطبيق.',
    'vehicles.car': 'سيارة',
    'vehicles.truck': 'شاحنة',
    'vehicles.moto': 'دراجة نارية',
    'vehicles.escooter': 'سكوتر كهربائي',
    'roles.eyebrow': 'طرفان',
    'roles.title': 'المشتري يطلب. المتجر يرد.',
    'roles.lead': 'تختار مشترٍ أو بائع مرة واحدة، ويبقى التطبيق على هذا الوضع.',
    'roles.buyerTag': 'للمشترين',
    'roles.buyerTitle': 'بلا تنقل بين المتاجر',
    'roles.buyerLead': 'تحتاج قطعة. لا تبحث متجراً بعد متجر.',
    'roles.b1': 'أنشئ طلباً في خطوات قليلة',
    'roles.b2': 'قارن العروض ثم اقبل واحداً',
    'roles.b3': 'تابع الطلب حتى يؤكد الطرفان',
    'roles.sellerTag': 'للبائعين',
    'roles.sellerTitle': 'اربح الطلب',
    'roles.sellerLead': 'متجرك يرد على الطلبات التي تناسب مخزونك.',
    'roles.s1': 'اسم المتجر والعنوان وأوقات العمل',
    'roles.s2': 'أرسل عرضاً بالصور وسعر بالدرهم',
    'roles.s3': 'تحدث، سلّم أو استلم، ثم أكد الدفع',
    'features.eyebrow': 'المنتج',
    'features.title': 'ما تحتاجه. بلا زيادة.',
    'features.lead': 'مصمم لحركة القطع في المغرب: صور، محادثة، وتأكيد واضح.',
    'features.f1t': 'صور مع كل طلب',
    'features.f1d': 'يرى البائع القطعة قبل أن يضع السعر.',
    'features.f2t': 'الأسعار بالدرهم',
    'features.f2d': 'بلا عملات مختلطة. ما تراه هو العرض.',
    'features.f3t': 'محادثة العرض',
    'features.f3d': 'الرسائل تبقى على العرض، لا في صندوق عام.',
    'features.f4t': 'إشعارات',
    'features.f4d': 'عرض جديد، قبول، استلام، ودفع.',
    'features.f5t': 'الإنجليزية، الفرنسية، العربية',
    'features.f5d': 'التطبيق يتبع اللغة التي تختارها.',
    'features.f6t': 'سجل مرتب',
    'features.f6d': 'الصفقات المفتوحة في صفقاتي. المنتهية في السجل.',
    'faq.eyebrow': 'أسئلة',
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'كيف أنشئ طلباً؟',
    'faq.a1': 'افتح «إنشاء»، اختر سيارة / شاحنة / دراجة / سكوتر، ثم أضف القطعة والصور.',
    'faq.q2': 'كيف تعمل العروض؟',
    'faq.a2': 'يرسل البائع عرضاً. تقبله أو ترفضه. بعد القبول يؤكد المشتري الاستلام ويؤكد البائع الدفع.',
    'faq.q3': 'هل أدفع داخل التطبيق؟',
    'faq.a3': 'لا. AutoParTo ليس تطبيق دفع. تتفقان خارجاً ثم تؤكدان داخل التطبيق.',
    'faq.q4': 'هل أراسل متجراً من ملفي؟',
    'faq.a4': 'المحادثة تُفتح من العرض، لتبقى كل رسالة مرتبطة بتلك القطعة.',
    'cta.title': 'حمّل التطبيق وابدأ البحث عن القطع',
    'cta.lead': 'على App Store وGoogle Play.',
    'cta.button': 'راسل AutoParTo',
  },
};

const LANG_LABEL = { en: 'EN', fr: 'FR', ar: 'AR' };

function detectLang() {
  const saved = localStorage.getItem('autoparto_lang');
  if (saved && COPY[saved]) return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('ar')) return 'ar';
  if (nav.startsWith('fr')) return 'fr';
  return 'en';
}

function applyLang(lang) {
  const dict = COPY[lang] || COPY.en;
  document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.title =
    lang === 'ar'
      ? 'AutoParTo — اعثر على القطعة. متاجر قريبة. عروض حقيقية.'
      : lang === 'fr'
        ? 'AutoParTo — Trouve la piece. Magasins proches. Vraies offres.'
        : 'AutoParTo — Find the part. Nearby stores. Real offers.';
  document.getElementById('langToggle').textContent = LANG_LABEL[lang];
  document.querySelectorAll('#langMenu button').forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.setAttribute('aria-current', 'true');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
  localStorage.setItem('autoparto_lang', lang);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('autoparto_theme', theme);
}

const startLang = detectLang();
const startTheme = localStorage.getItem('autoparto_theme') || 'dark';

function applyStoreLinks() {
  document.querySelectorAll('.js-store-ios').forEach((link) => {
    link.href = STORE_URLS.ios;
  });
  document.querySelectorAll('.js-store-android').forEach((link) => {
    link.href = STORE_URLS.android;
  });
}

applyStoreLinks();
applyLang(startLang);
applyTheme(startTheme);

const langBox = document.querySelector('.lang');
document.getElementById('langToggle').addEventListener('click', (event) => {
  event.stopPropagation();
  langBox.classList.toggle('open');
});
document.getElementById('langMenu').addEventListener('click', (event) => {
  const btn = event.target.closest('button[data-lang]');
  if (!btn) return;
  applyLang(btn.dataset.lang);
  langBox.classList.remove('open');
});
document.addEventListener('click', () => langBox.classList.remove('open'));

document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('open');
});
document.getElementById('mobileNav').addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    document.getElementById('mobileNav').classList.remove('open');
  }
});

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});
