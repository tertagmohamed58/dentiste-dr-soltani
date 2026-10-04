/**
 * Dentiste Dr Soltani.W — Script interactif & multilingue (FR / AR)
 * Gère le bilinguisme, le RTL, le menu mobile, la lightbox de la galerie,
 * l'accordéon FAQ et le formulaire WhatsApp.
 */

// Données bilingues complètes
const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Soins",
    nav_why: "Pourquoi nous choisir",
    nav_results: "Résultats",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_btn_appointment: "Prendre rendez-vous",

    // Hero
    hero_badge_loc: "45 Bd Mohamed Boudiaf, Blida",
    hero_title_pre: "Dentiste",
    hero_title_name: "Dr Soltani.W",
    hero_subtitle: "Des soins dentaires d'excellence, une approche personnalisée et un accompagnement professionnel bienveillant au cœur de Blida.",
    hero_cta_wa: "Prendre rendez-vous via WhatsApp",
    hero_cta_call: "Appeler le cabinet",
    hero_trust_hygiene: "Normes d'hygiène rigoureuses",
    hero_trust_approach: "Écoute & soins sur-mesure",
    hero_trust_modern: "Plateau technique moderne",
    hero_floating_rating: "Avis vérifiés",
    hero_floating_count: "132 avis Google",

    // À propos du médecin
    about_badge: "À propos de votre praticienne",
    about_role: "Chirurgienne-Dentiste à Blida",
    about_heading: "Dre Wissem Soltani",
    about_bio_1: "Au sein de notre cabinet à Blida, la Dre Soltani.W et son équipe vous accueillent avec bienveillance pour vous offrir des soins dentaires modernes, attentifs et personnalisés.",
    about_bio_2: "Chaque prise en charge repose sur une écoute attentive, des explications claires et un respect rigoureux des protocoles d'hygiène et de sécurité, afin de restaurer la santé et l'harmonie de votre sourire en toute sérénité.",
    about_point_1_title: "Approche Personnalisée",
    about_point_1_desc: "Chaque patient bénéficie d'une attention sur-mesure et d'un plan adapté.",
    about_point_2_title: "Explications Claires",
    about_point_2_desc: "Comprenez chaque étape de votre traitement en toute transparence.",
    about_img_caption: "SOLTANI DENTAL CLINIC",

    // Soins
    services_badge: "Nos Prestations",
    services_title: "Des soins complets pour toute la famille",
    services_subtitle: "Une gamme complète d'actes dentaires réalisés avec rigueur, douceur et précision.",
    srv_1_title: "Consultation dentaire",
    srv_1_desc: "Bilan complet de votre santé bucco-dentaire, écoute attentive et conseils personnalisés.",
    srv_2_title: "Détartrage",
    srv_2_desc: "Nettoyage prophylactique professionnel pour préserver la santé de vos gencives et vos dents.",
    srv_3_title: "Soins des caries",
    srv_3_desc: "Traitement conservateur des lésions carieuses avec des matériaux composites esthétiques.",
    srv_4_title: "Traitement de canal",
    srv_4_desc: "Endodontie minutieuse pour traiter les infections et conserver votre dent naturelle.",
    srv_5_title: "Extraction dentaire",
    srv_5_desc: "Avulsion dentaire douce et sécurisée, réalisée avec le plus grand confort possible.",
    srv_6_title: "Prothèses dentaires",
    srv_6_desc: "Solutions fixes ou amovibles de réhabilitation prothétique pour retrouver confort et mastication.",
    srv_7_title: "Orthodontie",
    srv_7_desc: "Correction de l'alignement dentaire pour les enfants et adultes, fonctionnelle et esthétique.",
    srv_8_title: "Implantologie",
    srv_8_desc: "Remplacement durable des dents manquantes pour préserver l'os maxillaire et l'esthétique.",
    srv_9_title: "Blanchiment dentaire",
    srv_9_desc: "Éclaircissement sécurisé pour redonner éclat et luminosité à votre sourire.",
    srv_10_title: "Esthétique du sourire",
    srv_10_desc: "Harmonisation globale du sourire : facettes, alignement et finitions esthétiques précises.",
    srv_cta_learn: "En savoir plus",

    // Services d'excellence
    featured_badge: "Expertises Clés",
    featured_title: "Nos pôles d'excellence",
    featured_subtitle: "Des disciplines de pointe pour des résultats durables et naturels.",
    feat_1_tag: "Réhabilitation",
    feat_1_title: "Implantologie dentaire",
    feat_1_desc: "Une solution pérenne et biocompatible pour remplacer une ou plusieurs dents absentes en conservant les dents adjacentes.",
    feat_2_tag: "Alignement",
    feat_2_title: "Orthodontie",
    feat_2_desc: "Alignement précis des dents et correction des articulés pour un sourire harmonieux et une fonction masticatoire idéale.",
    feat_3_tag: "Harmonie",
    feat_3_title: "Esthétique du sourire",
    feat_3_desc: "Conception personnalisée du sourire combinant facettes dentaires, éclaircissement et morphologie naturelle.",
    feat_btn_book: "Prendre RDV pour ce soin",

    // Pourquoi nous choisir
    why_badge: "Notre Engagement",
    why_title: "Pourquoi choisir le cabinet Dr Soltani.W ?",
    why_subtitle: "Des valeurs médicales authentiques centrées sur le bien-être et le respect de chaque patient.",
    why_1_title: "Approche personnalisée",
    why_1_desc: "Un diagnostic individualisé prenant en compte vos besoins spécifiques, vos attentes et votre sensibilité.",
    why_2_title: "Environnement professionnel",
    why_2_desc: "Un cadre clinique soigné, moderne, calme et conçu pour apaiser toute appréhension.",
    why_3_title: "Explications claires",
    why_3_desc: "Nous prenons le temps de détailler chaque option thérapeutique avant le début des soins.",
    why_4_title: "Hygiène et attention",
    why_4_desc: "Protocoles de stérilisation et d'asepsie stricts conformes aux normes médicales les plus exigeantes.",
    why_5_title: "Accompagnement rassurant",
    why_5_desc: "Une prise en charge humaine et progressive pour vivre chaque séance en toute confiance.",
    why_6_title: "Soins adaptés aux besoins du patient",
    why_6_desc: "Pas de surmédicalisation : des solutions réfléchies, durables et scientifiquement éprouvées.",

    // Parcours patient
    journey_badge: "Votre Visite",
    journey_title: "Le parcours patient étape par étape",
    journey_subtitle: "Une expérience fluide et organisée dès votre première prise de contact.",
    step_1_title: "Prise de rendez-vous",
    step_1_desc: "Contact rapide par WhatsApp ou téléphone pour convenir d'un créneau adapté.",
    step_2_title: "Accueil & Consultation",
    step_2_desc: "Échange approfondi, examen clinique et écoute de vos antécédents et attentes.",
    step_3_title: "Diagnostic & Explication",
    step_3_desc: "Analyse détaillée de votre situation dentaire avec explications visuelles claires.",
    step_4_title: "Plan de soins",
    step_4_desc: "Validation conjointe du calendrier des soins et des priorités thérapeutiques.",
    step_5_title: "Suivi attentif",
    step_5_desc: "Contrôles post-traitement et conseils personnalisés pour pérenniser vos résultats.",

    // Avis Google
    reviews_badge: "Témoignages Réels",
    reviews_title: "Avis de nos patients",
    reviews_subtitle: "La satisfaction et le confort de nos patients sont au cœur de notre pratique quotidienne.",
    reviews_google_verified: "Avis vérifiés publiés sur Google",
    reviews_see_all: "Voir tous les avis sur Google",
    review_source_tag: "Avis publié sur Google",
    rev_1_text: "« Je tiens à remercier chaleureusement la Dr. sultani pour son professionnalisme et sa gentillesse. Dès ma première visite, elle a su me mettre à l’aise et expliquer chaque étape avec patience et clarté... »",
    rev_2_text: "« Dr Soltani W Très bonne expérience chez ce dentiste. Le cabinet est trés propre, Dentiste est très professionnel. Il prend le temps d’expliquer les soins et de rassurer ses patients... »",
    rev_3_text: "« Dr soltani A highly qualified and professional dentist, with excellent expertise in her specialty, attentive and honest with patients... »",

    // Résultats
    results_badge: "Cas Cliniques",
    results_title: "Résultats avant et après",
    results_subtitle: "Des transformations réelles témoignant de la précision de nos soins.",
    badge_before: "Avant",
    badge_after: "Après",
    results_disclaimer: "Cas réel réalisé au cabinet — publié avec l'accord du patient",

    // Découverte du cabinet & Galerie
    cabinet_badge: "Notre Espace",
    cabinet_title: "Découvrez notre cabinet",
    cabinet_subtitle: "Un espace pensé pour vous accueillir dans un environnement professionnel, moderne et rassurant.",
    cabinet_address_title: "Dentiste Dr Soltani.W",
    cabinet_address_desc: "45 Bd Mohamed Boudiaf, Blida 09000, Algérie",
    btn_get_directions: "Obtenir l'itinéraire",
    btn_call_cabinet: "Appeler le cabinet",
    btn_view_photos: "Voir les photos",
    gal_1_title: "Extérieur du cabinet",
    gal_1_desc: "Façade & mur en marbre Soltani & Co",
    gal_2_title: "Salle de soins",
    gal_2_desc: "Fauteuil & plateau technique",
    gal_3_title: "Détails intérieurs",
    gal_3_desc: "Guide de teintes dentaires VITA",
    gal_4_title: "Réception",
    gal_4_desc: "Espace d'accueil & claustra bois",
    gal_5_title: "Entrée",
    gal_5_desc: "Accueil floral & élégance",

    // FAQ
    faq_badge: "Questions & Réponses",
    faq_title: "Questions fréquemment posées",
    faq_subtitle: "Toutes les réponses pour préparer votre visite au cabinet en toute tranquillité.",
    faq_q1: "Comment puis-je prendre rendez-vous ?",
    faq_a1: "Vous pouvez réserver directement via notre bouton WhatsApp dédié ou en composant le 0559 55 80 41. Notre équipe vous répondra rapidement pour convenir d'un créneau adapté à vos disponibilités.",
    faq_q2: "Où se situe exactement le cabinet dentaire ?",
    faq_a2: "Le cabinet est idéalement situé au 45 Boulevard Mohamed Boudiaf à Blida, un emplacement central et facilement accessible, avec des possibilités de stationnement à proximité.",
    faq_q3: "Est-il possible de communiquer via WhatsApp ?",
    faq_a3: "Oui, tout à fait. WhatsApp est notre canal privilégié pour la prise de rendez-vous, la confirmation de vos horaires ou pour toute demande d'information pratique.",
    faq_q4: "Que dois-je apporter lors de ma première visite ?",
    faq_a4: "Il est conseillé d'apporter vos éventuelles radiographies récentes (panoramique ou rétro-alvéolaire) et votre liste de traitements médicaux en cours ou allergies connues.",
    faq_q5: "Le plan de soins est-il expliqué avant de commencer ?",
    faq_a5: "Absolument. La Dre Soltani accorde une priorité absolue à la clarté : un diagnostic complet est établi et chaque étape du plan de traitement vous est expliquée en détail avant toute intervention.",
    faq_q6: "Comment obtenir l'itinéraire vers le cabinet ?",
    faq_a6: "Vous pouvez cliquer directement sur le bouton « Obtenir l'itinéraire » dans la section localisation ci-dessus pour ouvrir Google Maps sur votre téléphone ou GPS.",

    // Contact & Formulaire
    contact_badge: "Prendre Rendez-vous",
    contact_title: "Prêt(e) à prendre soin de votre sourire ?",
    contact_subtitle: "Contactez-nous directement pour convenir d'une consultation ou poser vos questions.",
    contact_phone_title: "Téléphone direct",
    contact_address_title: "Adresse du cabinet",
    contact_hours_title: "Disponibilité",
    contact_hours_desc: "Sur rendez-vous préalable",
    contact_form_title: "Envoyer un message rapide",
    contact_form_subtitle: "Remplissez ce formulaire court pour démarrer directement une discussion WhatsApp.",
    label_name: "Nom complet",
    ph_name: "Ex: Amina Benali",
    label_phone: "Numéro de téléphone",
    ph_phone: "Ex: 0550 12 34 56",
    label_message: "Votre message ou motif de consultation",
    ph_message: "Ex: Bonjour, je souhaite prendre rendez-vous pour un contrôle dentaire...",
    btn_send_wa: "Envoyer via WhatsApp",
    form_privacy_note: "Vos données ne sont pas enregistrées en ligne : elles ouvrent directement votre application WhatsApp sécurisée.",

    // Footer
    footer_desc: "Cabinet dentaire Dr Soltani.W au cœur de Blida : une prise en charge moderne, humaine et attentive à la santé et à la beauté de votre sourire.",
    footer_nav_title: "Navigation rapide",
    footer_contact_title: "Coordonnées",
    footer_social_title: "Nous suivre",
    footer_rights: "Tous droits réservés. Cabinet dentaire Dr Soltani.W.",
    footer_dev: "Landing Page Médicale Professionnelle",

    // Mobile bar
    mobile_btn_wa: "Rendez-vous WhatsApp",

    // Placeholders
    placeholder_text: "Photo à venir",
    placeholder_sub: "Photo réelle du cabinet en cours de chargement",
    lightbox_close: "Fermer (Échap)",
    lightbox_prev: "Précédente",
    lightbox_next: "Suivante"
  },

  ar: {
    // Navigation
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "العلاجات",
    nav_why: "لماذا تختارنا",
    nav_results: "النتائج",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "التواصل",
    nav_btn_appointment: "احجز موعدًا",

    // Hero
    hero_badge_loc: "45 شارع محمد بوضياف، البليدة",
    hero_title_pre: "طبيبة الأسنان",
    hero_title_name: "Dr Soltani.W",
    hero_subtitle: "رعاية سنية متكاملة وحديثة، تعامل شخصي دقيق ومرافقة طبية مطمئنة في قلب مدينة البليدة.",
    hero_cta_wa: "احجز موعدك عبر واتساب",
    hero_cta_call: "الاتصال بالعيادة",
    hero_trust_hygiene: "معايير تعقيم ونظافة صارمة",
    hero_trust_approach: "إصغاء وعناية مخصصة",
    hero_trust_modern: "تجهيزات طبية حديثة",
    hero_floating_rating: "آراء موثقة",
    hero_floating_count: "132 تقييمًا على Google",

    // À propos du médecin
    about_badge: "عن الطبيبة المعالجة",
    about_role: "جراحة وطبيبة أسنان بالبليدة",
    about_heading: "الدكتورة وسام سلطاني",
    about_bio_1: "في عيادتنا بالبليدة، تستقبلكم الدكتورة سلطاني وفريقها بكل عناية لتقديم رعاية سنية حديثة، واعية وشخصية تناسب تطلعاتكم.",
    about_bio_2: "يرتكز نهجنا الطبي على الاستماع للمريض، وتقديم شروحات واضحة ومطمئنة، مع الالتزام التام بأعلى بروتوكولات النظافة والتعقيم لاستعادة صحة وجمال ابتسامتكم بأمان وهدوء.",
    about_point_1_title: "عناية مخصصة",
    about_point_1_desc: "يحظى كل مريض بخطة علاجية تراعي حالته وراحته.",
    about_point_2_title: "شروحات واضحة",
    about_point_2_desc: "توضيح شامل لكل مراحل العلاج بكل شفافية.",
    about_img_caption: "SOLTANI DENTAL CLINIC",

    // Soins
    services_badge: "خدماتنا الطبية",
    services_title: "رعاية شاملة لصحة وجمال أسنانكم",
    services_subtitle: "مجموعة متكاملة من العلاجات السنية المنفذة بدقة وإتقان وراحة تامة.",
    srv_1_title: "فحص واستشارة الأسنان",
    srv_1_desc: "فحص شامل لصحة الفم والأسنان، واستماع دقيق لشكواكم مع تقديم النصائح المناسبة.",
    srv_2_title: "تنظيف وتلميع الأسنان",
    srv_2_desc: "إزالة الرواسب الجيرية والتكلسات للحفاظ على صحة اللثة وحماية الأسنان من الالتهابات.",
    srv_3_title: "علاج تسوس الأسنان",
    srv_3_desc: "ترميم الأسنان المصابة بحشوات تجميلية حديثة مطابقة للون وشكل الأسنان الطبيعية.",
    srv_4_title: "علاج جذور وأعصاب الأسنان",
    srv_4_desc: "معالجة دقيقة للب الأسنان وإزالة الالتهاب للمحافظة على السن الطبيعي وتفادي قلعه.",
    srv_5_title: "خلع وقلع الأسنان",
    srv_5_desc: "إجراءات خلع دقيقة وسلسة بأعلى درجات الراحة والتخدير الفعال عند الضرورة القصوى.",
    srv_6_title: "تركيبات واستعاضة الأسنان",
    srv_6_desc: "تعويضات سنية ثابتة ومتحركة لاسترجاع القدرة على المضغ والتناسق الطبيعي للابتسامة.",
    srv_7_title: "تقويم الأسنان",
    srv_7_desc: "تصحيح تموضع الأسنان واصطفافها للأطفال والبالغين لتحسين المظهر والأداء الوظيفي.",
    srv_8_title: "زراعة الأسنان",
    srv_8_desc: "حل مستدام ومتطور لتعويض الأسنان المفقودة والحفاظ على عظام الفك والابتسامة.",
    srv_9_title: "تبييض الأسنان",
    srv_9_desc: "تفتيح آمن ومدروس لإزالة التصبغات وإعادة الإشراق والنضارة إلى أسنانكم.",
    srv_10_title: "تجميل الابتسامة",
    srv_10_desc: "تناغم شامل للأسنان بالعدسات التجميلية وتنسيق اللثة لمظهر طبيعي وجذاب.",
    srv_cta_learn: "المزيد من التفاصيل",

    // Services d'excellence
    featured_badge: "تخصصات مميزة",
    featured_title: "خدماتنا المميزة",
    featured_subtitle: "تخصصات متقدمة تمنحكم نتائج ثابتة ومظهرًا طبيعيًا جذابًا.",
    feat_1_tag: "استعاضة دائمة",
    feat_1_title: "زراعة الأسنان",
    feat_1_desc: "الحل الأمثل والآمن لتعويض سن أو أكثر بشكل دائم دون المساس بالأسنان المجاورة وبنتائج طبيعية ومريحة.",
    feat_2_tag: "محاذاة وتنسيق",
    feat_2_title: "تقويم الأسنان",
    feat_2_desc: "إعادة ترتيب وتعديل اصطفاف الأسنان بدقة لمنحكم إطباقًا وظيفيًا سليمًا وابتسامة متناسقة.",
    feat_3_tag: "تناغم وإشراق",
    feat_3_title: "تجميل الابتسامة",
    feat_3_desc: "تصميم متقن للابتسامة يجمع بين العدسات التجميلية وتبييض الأسنان بما يناسب ملامح الوجه.",
    feat_btn_book: "حجز موعد لهذه الخدمة",

    // Pourquoi nous choisir
    why_badge: "التزامنا المهني",
    why_title: "لماذا تختارون عيادة Dr Soltani.W؟",
    why_subtitle: "قيم طبية حقيقية محورها راحة المريض وثقته وسلامته.",
    why_1_title: "نهج مخصص لكل مريض",
    why_1_desc: "تشخيص فردي دقيق يراعي احتياجاتكم الصحية وحساسيتكم الخاصة وتطلعاتكم الشخصية.",
    why_2_title: "بيئة مهنية وحديثة",
    why_2_desc: "أجواء مريحة ونظيفة مصممة لتبديد التوتر ومنحكم تجربة علاجية هادئة ومريحة.",
    why_3_title: "شروحات واضحة ومفصلة",
    why_3_desc: "نمنحكم الوقت الكافي لشرح كل خيار علاجي ومراحله قبل الشروع في أي إجراء.",
    why_4_title: "نظافة وتعقيم فائق",
    why_4_desc: "التزام صارم بأعلى معايير التعقيم الطبي ومكافحة العدوى لضمان سلامتكم التامة.",
    why_5_title: "مرافقة مطمئنة وهادئة",
    why_5_desc: "معاملة إنسانية لطيفة تضمن لكم حضور جلسات العلاج بكل أمان واطمئنان.",
    why_6_title: "علاجات ملائمة لاحتياجاتكم",
    why_6_desc: "نعتمد الحلول الطبية الضرورية والمثبتة علميًا فقط دون أي إجراءات غير لازمة.",

    // Parcours patient
    journey_badge: "خطوات الزيارة",
    journey_title: "رحلة المريض داخل العيادة",
    journey_subtitle: "تنظيم متقن وسلس منذ تواصلكم الأول وحتى المتابعة بعد العلاج.",
    step_1_title: "حجز الموعد",
    step_1_desc: "تواصل سريع عبر واتساب أو الهاتف لتحديد وقت الزيارة المناسب لكم.",
    step_2_title: "الفحص والاستقبال",
    step_2_desc: "استقبال هادئ وجلسة استماع دقيقة للشكوى والتاريخ الطبي وتطلعاتكم.",
    step_3_title: "التشخيص والشرح",
    step_3_desc: "معاينة سنية دقيقة وتوضيح تفصيلي لحالة الأسنان والخيارات المتاحة.",
    step_4_title: "خطة العلاج",
    step_4_desc: "الاتفاق المشترك على جدول العلاجات المبرمجة والخطوات المتبعة.",
    step_5_title: "المتابعة والعناية",
    step_5_desc: "إرشادات ما بعد العلاج وزيارات متابعة دورية للحفاظ على استدامة النتائج.",

    // Avis Google
    reviews_badge: "تجارب حقيقية",
    reviews_title: "آراء مرضانا",
    reviews_subtitle: "رضا مرضانا وثقتهم هي أسمى ما نسعى لتحقيقه يوميًا.",
    reviews_google_verified: "تقييمات موثقة منشورة على Google",
    reviews_see_all: "عرض كل الآراء على Google",
    review_source_tag: "رأي منشور على Google",
    rev_1_text: "« Je tiens à remercier chaleureusement la Dr. sultani pour son professionnalisme et sa gentillesse. Dès ma première visite, elle a su me mettre à l’aise et expliquer chaque étape avec patience et clarté... »",
    rev_2_text: "« Dr Soltani W Très bonne expérience chez ce dentiste. Le cabinet est trés propre, Dentiste est très professionnel. Il prend le temps d’expliquer les soins et de rassurer ses patients... »",
    rev_3_text: "« Dr soltani A highly qualified and professional dentist, with excellent expertise in her specialty, attentive and honest with patients... »",

    // Résultats
    results_badge: "حالات واقعية",
    results_title: "النتائج قبل وبعد العلاج",
    results_subtitle: "تغيرات حقيقية تعكس مستوى الدقة والعناية في عيادتنا.",
    badge_before: "قبل",
    badge_after: "بعد",
    results_disclaimer: "حالة حقيقية أُجريت في العيادة — نُشرت بموافقة المريضة",

    // Découverte du cabinet & Galerie
    cabinet_badge: "الموقع والمعرض",
    cabinet_title: "اكتشفوا عيادتنا",
    cabinet_subtitle: "مساحة مصممة لاستقبالكم في بيئة مهنية، حديثة ومطمئنة.",
    cabinet_address_title: "عيادة الأسنان Dr Soltani.W",
    cabinet_address_desc: "45 شارع محمد بوضياف، البليدة 09000، الجزائر",
    btn_get_directions: "الحصول على الاتجاهات",
    btn_call_cabinet: "الاتصال بالعيادة",
    btn_view_photos: "عرض الصور",
    gal_1_title: "الواجهة الخارجية",
    gal_1_desc: "جدار الرخام بشعار Soltani & Co",
    gal_2_title: "قاعة العلاج",
    gal_2_desc: "كرسي الأسنان والتجهيزات الطبية",
    gal_3_title: "تفاصيل داخلية",
    gal_3_desc: "دليل تدرج ألوان الأسنان VITA",
    gal_4_title: "الاستقبال",
    gal_4_desc: "قاعة الانتظار والفاصل الخشبي",
    gal_5_title: "المدخل",
    gal_5_desc: "مدخل العيادة والأزهار الترحيبية",

    // FAQ
    faq_badge: "إجابات مفيدة",
    faq_title: "الأسئلة الشائعة",
    faq_subtitle: "إجابات واضحة تساعدكم في التحضير لزيارتكم بكل يسر وطمأنينة.",
    faq_q1: "كيف يمكنني حجز موعد؟",
    faq_a1: "يمكنكم حجز موعدكم بسهولة عبر زر واتساب المباشر في الصفحة أو بالاتصال على الرقم 0559 55 80 41، وسيتولى فريقنا التنسيق معكم لاختيار الوقت الأنسب لكم.",
    faq_q2: "أين تقع العيادة بالتحديد؟",
    faq_a2: "تقع العيادة في 45 شارع محمد بوضياف، البليدة، بموقع حيوي يسهل الوصول إليه وتتوفر حوله أماكن لركن السيارات.",
    faq_q3: "هل يمكن التواصل عبر واتساب؟",
    faq_a3: "نعم بالتأكيد، واتساب هو الوسيلة الأساسية والمباشرة لحجز المواعيد وتأكيدها وتلقي الاستفسارات التنظيمية.",
    faq_q4: "ماذا يجب أن أحضر في أول زيارة؟",
    faq_a4: "يُفضل إحضار أي صور أشعة سنية حديثة (بانورامية أو غيرها) وقائمة بأي أدوية تتناولونها أو حالات تحسسية طبية إن وجدت.",
    faq_q5: "هل يتم شرح خطة العلاج قبل البدء؟",
    faq_a5: "نعم بكل تأكيد. تحرص الدكتورة سلطاني على الشرح الكامل والمفصل للتشخيص وخطة العلاج قبل البدء بأي تدخل طبي.",
    faq_q6: "كيف أحصل على الاتجاهات إلى العيادة؟",
    faq_a6: "يمكنكم الضغط على زر «الحصول على الاتجاهات» في قسم الموقع لفتح مسار الوصول مباشرة على خرائط Google Maps.",

    // Contact & Formulaire
    contact_badge: "حجز موعد واستفسار",
    contact_title: "هل ترغبون في العناية بابتسامتكم؟",
    contact_subtitle: "تواصلوا معنا مباشرة لحجز موعد استشارة أو طرح أي استفسار ترغبون به.",
    contact_phone_title: "الهاتف المباشر",
    contact_address_title: "عنوان العيادة",
    contact_hours_title: "نظام الاستقبال",
    contact_hours_desc: "بمواعيد مسبقة",
    contact_form_title: "إرسال رسالة سريعة",
    contact_form_subtitle: "املأ البيانات البسيطة لبدء محادثة واتساب فورية مع العيادة.",
    label_name: "الاسم الكامل",
    ph_name: "مثال: أمينة بن علي",
    label_phone: "رقم الهاتف",
    ph_phone: "مثال: 0550 12 34 56",
    label_message: "الرسالة أو سبب الاستشارة",
    ph_message: "مثال: مرحبًا، أود حجز موعد لفحص عام للأسنان...",
    btn_send_wa: "إرسال عبر واتساب",
    form_privacy_note: "لا يتم تخزين بياناتكم في الموقع، بل تفتح محادثة واتساب الآمنة مباشرة.",

    // Footer
    footer_desc: "عيادة الأسنان Dr Soltani.W في قلب البليدة: رعاية طبية متطورة، تعامل إنساني وعناية فائقة بصحة وجمال ابتسامتكم.",
    footer_nav_title: "روابط سريعة",
    footer_contact_title: "معلومات الاتصال",
    footer_social_title: "تابعونا",
    footer_rights: "جميع الحقوق محفوظة. عيادة الأسنان Dr Soltani.W.",
    footer_dev: "صفحة هبوط طبية احترافية",

    // Mobile bar
    mobile_btn_wa: "حجز عبر واتساب",

    // Placeholders
    placeholder_text: "الصورة قريبًا",
    placeholder_sub: "صورة حقيقية من العيادة قيد الإدراج",
    lightbox_close: "إغلاق (Escape)",
    lightbox_prev: "السابق",
    lightbox_next: "التالي"
  }
};

// État de la page
let currentLang = "fr";

// Données de la galerie (les 5 photos réelles dans l'ordre spécifié)
const galleryItems = [
  {
    src: "assets/images/gallery-exterieur.jpg",
    frTitle: "Extérieur du cabinet",
    frDesc: "Mur en marbre avec enseigne Soltani & Co et canapé noir",
    arTitle: "الواجهة الخارجية",
    arDesc: "الجدار الرخامي الذي يحمل شعار Soltani & Co مع الأريكة السوداء"
  },
  {
    src: "assets/images/gallery-salle-soins.jpg",
    frTitle: "Salle de soins",
    frDesc: "Fauteuil dentaire, scialytique, écran et instruments de haute technologie",
    arTitle: "قاعة العلاج",
    arDesc: "كرسي الأسنان، مصباح العلاج، شاشة وأدوات العيادة المتطورة"
  },
  {
    src: "assets/images/gallery-details.jpg",
    frTitle: "Détails intérieurs",
    frDesc: "Nuancier dentaire de précision VITA classical A1–D4",
    arTitle: "تفاصيل داخلية",
    arDesc: "دليل ألوان الأسنان VITA classical A1–D4"
  },
  {
    src: "assets/images/gallery-reception.jpg",
    frTitle: "Réception",
    frDesc: "Espace d'accueil avec claustra bois chaleureux et canapé courbé",
    arTitle: "الاستقبال",
    arDesc: "المساحة التي تحتوي على الفاصل الخشبي والأريكة المنحنية"
  },
  {
    src: "assets/images/gallery-entree.jpg",
    frTitle: "Entrée",
    frDesc: "Accueil élégant et composition florale soignée",
    arTitle: "المدخل",
    arDesc: "باقة الزهور والترحيب الأنيق بالمرضى"
  }
];

let activeLightboxIndex = 0;

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initNavbar();
  initMobileMenu();
  initFAQ();
  initGalleryLightbox();
  initWhatsAppForm();
  initMobileStickyBar();
  initImagePlaceholders();
});

/* ----------------- Gestion du Bilinguisme & RTL ----------------- */
function initLanguage() {
  const toggleBtn = document.getElementById("langToggleBtn");
  
  // Langue par défaut : Français (tel que demandé)
  applyLanguage(currentLang);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "fr" ? "ar" : "fr";
      applyLanguage(nextLang);
    });
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  const isRtl = lang === "ar";
  const html = document.documentElement;

  // Mise à jour attributs racine
  html.setAttribute("lang", lang);
  html.setAttribute("dir", isRtl ? "rtl" : "ltr");

  // Mise à jour du texte du bouton de changement de langue
  const toggleBtn = document.getElementById("langToggleBtn");
  if (toggleBtn) {
    const langLabel = toggleBtn.querySelector(".lang-label");
    if (langLabel) {
      langLabel.textContent = lang === "fr" ? "العربية" : "FR";
    }
  }

  // Remplacement de tous les textes balisés par [data-i18n]
  const i18nElements = document.querySelectorAll("[data-i18n]");
  i18nElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Remplacement des attributs placeholder [data-i18n-ph]
  const phElements = document.querySelectorAll("[data-i18n-ph]");
  phElements.forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Remplacement des liens WhatsApp avec le texte par défaut selon la langue
  updateWhatsAppLinks(lang);

  // Mettre à jour les légendes de la galerie si la lightbox est ouverte
  updateLightboxContent();
}

function updateWhatsAppLinks(lang) {
  const phone = "213559558041";
  const frMsg = "Bonjour, je souhaite prendre rendez-vous au cabinet dentaire Dr Soltani.W à Blida.";
  const arMsg = "مرحبًا، أرغب في حجز موعد في عيادة الأسنان Dr Soltani.W في البليدة.";
  
  const selectedMsg = lang === "ar" ? arMsg : frMsg;
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(selectedMsg)}`;

  // Sélectionner tous les boutons directs WhatsApp (sauf formulaire qui a sa propre logique)
  const waDirectButtons = document.querySelectorAll(".wa-direct-link");
  waDirectButtons.forEach(btn => {
    btn.setAttribute("href", waUrl);
  });
}

/* ----------------- Barre de Navigation Sticky & Scroll ----------------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Vérification initiale
}

/* ----------------- Menu Mobile Responsive ----------------- */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    if (isOpen) {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    } else {
      menu.classList.add("open");
      toggle.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }
  });

  // Fermeture automatique lors du clic sur un lien
  const navLinks = menu.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Fermer le menu si clic en dehors
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ----------------- Accordéon FAQ ----------------- */
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fermer tous les autres pour un effet propre et soigné
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      // Basculer l'élément cliqué
      if (isActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ----------------- Galerie Photos & Lightbox Plein Écran ----------------- */
function initGalleryLightbox() {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) return;

  const galleryItemsDOM = document.querySelectorAll(".gallery-item");
  const openAllBtn = document.getElementById("openGalleryBtn");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  // Clic sur une photo de la grille
  galleryItemsDOM.forEach((el, index) => {
    el.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  // Clic sur bouton "Voir les photos"
  if (openAllBtn) {
    openAllBtn.addEventListener("click", () => {
      openLightbox(0);
    });
  }

  // Fermeture
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  // Fond cliquable pour fermer
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Précédente / Suivante
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  // Raccourcis clavier (Escape, Flèche Gauche, Flèche Droite)
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      // Si RTL, flèche gauche avance, sinon recule
      navigateLightbox(currentLang === "ar" ? 1 : -1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(currentLang === "ar" ? -1 : 1);
    }
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) return;

  activeLightboxIndex = (index + galleryItems.length) % galleryItems.length;
  updateLightboxContent();

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Empêcher le défilement arrière-plan
}

function closeLightbox() {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox) return;

  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  activeLightboxIndex = (activeLightboxIndex + direction + galleryItems.length) % galleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const lightbox = document.getElementById("galleryLightbox");
  if (!lightbox || !lightbox.classList.contains("active")) return;

  const item = galleryItems[activeLightboxIndex];
  if (!item) return;

  const img = lightbox.querySelector(".lightbox-image");
  const title = lightbox.querySelector(".lightbox-caption-title");
  const desc = lightbox.querySelector(".lightbox-caption-desc");
  const counter = lightbox.querySelector(".lightbox-counter");

  if (img) {
    img.src = item.src;
    img.alt = currentLang === "ar" ? item.arTitle : item.frTitle;
  }

  if (title) {
    title.textContent = currentLang === "ar" ? item.arTitle : item.frTitle;
  }

  if (desc) {
    desc.textContent = currentLang === "ar" ? item.arDesc : item.frDesc;
  }

  if (counter) {
    counter.textContent = `${activeLightboxIndex + 1} / ${galleryItems.length}`;
  }
}

/* ----------------- Formulaire de Rendez-vous WhatsApp ----------------- */
function initWhatsAppForm() {
  const form = document.getElementById("appointmentForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("formName");
    const phoneInput = document.getElementById("formPhone");
    const messageInput = document.getElementById("formMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !phone) {
      alert(currentLang === "ar" ? "يرجى إدخال الاسم ورقم الهاتف للمتابعة." : "Veuillez renseigner votre nom et votre numéro de téléphone.");
      return;
    }

    // Composition du message personnalisé selon la langue courante
    let composedMessage = "";
    if (currentLang === "ar") {
      composedMessage = `مرحبًا دكتورة سلطاني،\nأنا: ${name}\nرقم الهاتف: ${phone}\n${message ? `الرسالة: ${message}` : "أرغب في حجز موعد في العيادة."}`;
    } else {
      composedMessage = `Bonjour Dre Soltani.W,\nJe m'appelle: ${name}\nTéléphone: ${phone}\n${message ? `Message: ${message}` : "Je souhaite prendre rendez-vous au cabinet."}`;
    }

    const waTargetNumber = "213559558041";
    const waUrl = `https://wa.me/${waTargetNumber}?text=${encodeURIComponent(composedMessage)}`;

    // Ouvrir directement WhatsApp dans un nouvel onglet
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}

/* ----------------- Barre Sticky Mobile (Flottante au bas) ----------------- */
function initMobileStickyBar() {
  const stickyBar = document.getElementById("mobileStickyBar");
  if (!stickyBar) return;

  const checkScroll = () => {
    // Apparaît après le défilement de 350px (dépassement du hero)
    if (window.scrollY > 350) {
      stickyBar.classList.add("visible");
    } else {
      stickyBar.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", checkScroll, { passive: true });
  checkScroll();
}

/* ----------------- Gestion Élégante des Photos Réelles & Fallbacks ----------------- */
function initImagePlaceholders() {
  // Détecte si les images locales existent ou déclenchent une erreur 404
  const images = document.querySelectorAll("img[data-fallback-category]");

  images.forEach(img => {
    img.addEventListener("error", () => {
      const category = img.getAttribute("data-fallback-category") || "";
      const parent = img.parentElement;
      if (!parent) return;

      // Création d'un placeholder textuel et stylé conforme au cahier des charges
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder-photo";
      placeholder.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
        <span class="badge-text" data-i18n="placeholder_text">${currentLang === "ar" ? "الصورة قريبًا" : "Photo à venir"}</span>
        <span class="sub-text">${category}</span>
      `;

      img.style.display = "none";
      parent.appendChild(placeholder);
    });
  });
}
