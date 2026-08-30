// MB Diş Protez ERP - Frontend & i18n & Portal Hub Controller

const translationsData = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetlerimiz",
      technology: "Laboratuvar Teknolojileri",
      export: "Global İhracat",
      contact: "İletişim",
      portal_login: "Sisteme Giriş"
    },
    hero: {
      badge: "ISO 13485 & CE Sertifikalı Dijital Laboratuvar",
      title: "Yeni Nesil Dijital Diş Protezinde <br><span class=\"gradient-text\">Uluslararası Güven & Hassasiyet</span>",
      description: "CAD/CAM frezeleme, 3D titanyum lazer sinterleme ve estetik zirkonya restorasyonlarında yurt içi ve yurt dışı 400+ klinik ve hekimin birinci tercihi.",
      cta_order: "Protez Siparişi Ver",
      cta_tech: "Teknolojilerimizi İnceleyin"
    },
    stats: {
      restorations: "Yıllık Üretilen Protez",
      countries: "İhracat Yapılan Ülke",
      precision: "Hassasiyet ve Uyum Oranı",
      speed: "Express Hızlı Üretim"
    },
    services: {
      title: "Laboratuvar Hizmetlerimiz & Protez Çeşitleri",
      subtitle: "Mikron düzeyinde hassasiyetle üretilen tam kapsamlı dental çözümler.",
      zirconia_title: "Zirkonyum & Tam Seramikler",
      zirconia_desc: "Çok katmanlı estetik zirkonya, E-max press ve monolitik kron & köprü sistemleri.",
      implant_title: "İmplant Üstü Çözümler",
      implant_desc: "Kişiye özel titanyum/zirkon abutmentlar, All-on-4/All-on-6 hibrit protezler.",
      cadcam_title: "CAD/CAM & 3D Dijital Tarama",
      cadcam_desc: "Ağız içi tarayıcılardan doğrudan STL/PLY aktarımı ve dijital modelleme.",
      smile_title: "Dijital Gülüş Tasarımı (DSD)",
      smile_desc: "Yapay zeka destekli mock-up ve estetik laminat veneer uygulamaları.",
      removable_title: "Hareketli & Hibrit Protezler",
      removable_desc: "Hassas tutuculu çıtçıtlı protezler, deflex/isosit esnek iskelet sistemleri.",
      logistics_title: "Express Uluslararası Kargo",
      logistics_desc: "DHL/FedEx gümrük onaylı özel dental kurye kutuları ile güvenli teslimat."
    },
    hub: {
      title: "MB ERP Portal Giriş Hub'ı",
      subtitle: "Lütfen yetki alanınıza uygun giriş kapısını seçiniz:",
      doctor_gate: "Doktor Girişi",
      doctor_tag: "Yurt İçi & Yurt Dışı Hekimler",
      clinic_gate: "Klinik Girişi",
      clinic_tag: "Dental Poliklinikler & Merkezler",
      agent_foreign_gate: "Yurt Dışı Aracı / Partner",
      agent_foreign_tag: "Global Temsilciler (EUR/USD)",
      agent_local_gate: "Yurt İçi Aracı / Temsilci",
      agent_local_tag: "Bölge Satış & İş Ortakları",
      staff_gate: "MB Personel Girişi",
      staff_tag: "Muhasebe, İK, Depo, Üretim",
      admin_gate: "MB Admin Girişi",
      admin_tag: "Şirket Sahibi / Genel Müdür",
      back: "Giriş Kapılarına Dön"
    },
    form: {
      email: "E-Posta Adresi / Sicil No",
      password: "Şifre",
      is_foreign: "Yurt Dışı Lokasyon / Uluslararası Hesap (EUR/USD)",
      btn_login: "Doğrula ve İlerle"
    },
    mfa: {
      title: "MFA / 2FA İki Aşamalı Doğrulama",
      subtitle: "Güvenliğiniz için kayıtlı telefonunuza/e-postanıza gönderilen 6 haneli kodu giriniz.",
      code_label: "6 Haneli Güvenlik Kodu",
      btn_verify: "Yetkilendir ve Panele Git"
    },
    success: {
      title: "Oturum Başarıyla Açıldı!"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      technology: "Lab Technology",
      export: "Global Export",
      contact: "Contact",
      portal_login: "Portal Login"
    },
    hero: {
      badge: "ISO 13485 & CE Certified Digital Laboratory",
      title: "Next-Gen Digital Dental Prosthetics <br><span class=\"gradient-text\">International Trust & Precision</span>",
      description: "First choice of 400+ dental clinics and doctors worldwide for CAD/CAM milling, 3D titanium laser sintering, and aesthetic zirconia.",
      cta_order: "Place Prosthetics Order",
      cta_tech: "Explore Technologies"
    },
    stats: {
      restorations: "Annual Restorations",
      countries: "Export Countries",
      precision: "Precision & Fit Rate",
      speed: "Express Turnaround"
    },
    services: {
      title: "Laboratory Services & Prosthetics",
      subtitle: "Comprehensive dental solutions crafted with micron-level precision.",
      zirconia_title: "Zirconia & All-Ceramics",
      zirconia_desc: "Multi-layered aesthetic zirconia, E-max press, and monolithic crowns.",
      implant_title: "Implant Restorations",
      implant_desc: "Custom titanium/zirconia abutments, All-on-4 & All-on-6 hybrid solutions.",
      cadcam_title: "CAD/CAM & 3D Scanning",
      cadcam_desc: "Direct STL/PLY integration from intraoral scanners and digital modeling.",
      smile_title: "Digital Smile Design (DSD)",
      smile_desc: "AI-assisted aesthetic mock-ups and laminate veneers.",
      removable_title: "Removable & Hybrid Dentures",
      removable_desc: "Precision attachment dentures and flexible partial frameworks.",
      logistics_title: "Express Global Shipping",
      logistics_desc: "Customs-cleared DHL/FedEx dental shipping boxes with real-time tracking."
    },
    hub: {
      title: "MB ERP Portal Login Hub",
      subtitle: "Please select your authorized portal gateway:",
      doctor_gate: "Doctor Portal",
      doctor_tag: "Domestic & International Dentists",
      clinic_gate: "Clinic Portal",
      clinic_tag: "Dental Clinics & Medical Centers",
      agent_foreign_gate: "Foreign Agent / Partner",
      agent_foreign_tag: "Global Representatives (EUR/USD)",
      agent_local_gate: "Domestic Agent / Partner",
      agent_local_tag: "Regional Sales & Partners",
      staff_gate: "MB Staff Portal",
      staff_tag: "Accounting, HR, Inventory, Lab",
      admin_gate: "MB Admin Portal",
      admin_tag: "Company Owner / Executive Board",
      back: "Back to Gateways"
    },
    form: {
      email: "Email Address / Employee ID",
      password: "Password",
      is_foreign: "International / Foreign Account (EUR/USD)",
      btn_login: "Verify & Proceed"
    },
    mfa: {
      title: "MFA / 2FA Security Verification",
      subtitle: "Please enter the 6-digit security code sent to your registered phone or email.",
      code_label: "6-Digit Security Code",
      btn_verify: "Authenticate & Open Dashboard"
    },
    success: {
      title: "Authentication Successful!"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Nos Services",
      technology: "Technologies",
      export: "Export Global",
      contact: "Contact",
      portal_login: "Connexion Portail"
    },
    hero: {
      badge: "Laboratoire Numérique Certifié ISO 13485 & CE",
      title: "Prothèse Dentaire Numérique de Pointe <br><span class=\"gradient-text\">Confiance & Précision Internationale</span>",
      description: "Le premier choix de plus de 400 cliniques et praticiens pour l'usinage CAD/CAM, le frittage laser 3D et le zircone esthétique.",
      cta_order: "Commander des Prothèses",
      cta_tech: "Découvrir les Technologies"
    },
    stats: {
      restorations: "Prothèses / An",
      countries: "Pays Desservis",
      precision: "Taux de Précision",
      speed: "Fabrication Express"
    },
    services: {
      title: "Services de Laboratoire & Prothèses",
      subtitle: "Solutions dentaires complètes réalisées avec une précision micrométrique.",
      zirconia_title: "Zircone & Céramiques Pures",
      zirconia_desc: "Zircone multicouche ultra-esthétique, E-max press et couronnes monolithiques.",
      implant_title: "Prothèses sur Implants",
      implant_desc: "Piliers sur mesure en titane/zircone et solutions All-on-4 / All-on-6.",
      cadcam_title: "CAD/CAM & Empreinte 3D",
      cadcam_desc: "Import direct des flux STL/PLY des scanners intra-oraux.",
      smile_title: "Design Numérique du Sourire (DSD)",
      smile_desc: "Simulation esthétique assistée par IA et facettes céramiques.",
      removable_title: "Prothèses Adjointes & Hybrides",
      removable_desc: "Attachements de précision et châssis métalliques flexibles.",
      logistics_title: "Livraison Express Internationale",
      logistics_desc: "Expédition sécurisée DHL/FedEx en boîtes dentaires hermétiques."
    },
    hub: {
      title: "Hub de Connexion MB ERP",
      subtitle: "Veuillez choisir votre portail d'accès :",
      doctor_gate: "Portail Chirurgien-Dentiste",
      doctor_tag: "Praticiens Nationaux & Internationaux",
      clinic_gate: "Portail Clinique Dentaire",
      clinic_tag: "Centres de Soins & Polycliniques",
      agent_foreign_gate: "Agent / Partenaire International",
      agent_foreign_tag: "Représentants Étrangers (EUR/USD)",
      agent_local_gate: "Agent / Partenaire National",
      agent_local_tag: "Délégués Régionaux",
      staff_gate: "Portail Personnel MB",
      staff_tag: "Comptabilité, RH, Stock, Production",
      admin_gate: "Portail Administrateur MB",
      admin_tag: "Direction Générale / Propriétaire",
      back: "Retour aux Portails"
    },
    form: {
      email: "Adresse E-mail / Identifiant",
      password: "Mot de Passe",
      is_foreign: "Compte International (EUR/USD)",
      btn_login: "Vérifier & Continuer"
    },
    mfa: {
      title: "Authentification à Deux Facteurs (2FA)",
      subtitle: "Entrez le code à 6 chiffres envoyé sur votre téléphone ou e-mail.",
      code_label: "Code de Sécurité à 6 Chiffres",
      btn_verify: "Valider et Accéder au Tableau de Bord"
    },
    success: {
      title: "Connexion Réussie !"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      technology: "Labortechnik",
      export: "Globaler Export",
      contact: "Kontakt",
      portal_login: "Portal-Login"
    },
    hero: {
      badge: "ISO 13485 & CE-zertifiziertes digitales Dentallabor",
      title: "Digitale Zahntechnik der nächsten Generation <br><span class=\"gradient-text\">Internationale Präzision & Vertrauen</span>",
      description: "Die erste Wahl für über 400 Zahnkliniken und Zahnärzte weltweit für CAD/CAM-Fräsen, 3D-Lasersintern und Ästhetik-Zirkon.",
      cta_order: "Zahnersatz Bestellen",
      cta_tech: "Technologien Entdecken"
    },
    stats: {
      restorations: "Restaurationen / Jahr",
      countries: "Exportländer",
      precision: "Passgenauigkeit",
      speed: "Express-Fertigung"
    },
    services: {
      title: "Labordienstleistungen & Zahnersatz",
      subtitle: "Vollständige Dentallösungen, gefertigt mit mikrometergenauer Präzision.",
      zirconia_title: "Zirkon & Vollkeramik",
      zirconia_desc: "Mehrschichtiges Ästhetik-Zirkon, E-max Press und monolithische Kronen.",
      implant_title: "Implantatprothetik",
      implant_desc: "Individuelle Titan/Zirkon-Abutments, All-on-4 & All-on-6 Lösungen.",
      cadcam_title: "CAD/CAM & 3D-Scan",
      cadcam_desc: "Direkte STL/PLY-Übertragung aus Intraoralscannern und 3D-Modellierung.",
      smile_title: "Digital Smile Design (DSD)",
      smile_desc: "KI-gestützte Ästhetik-Simulation und Veneers.",
      removable_title: "Herausnehmbarer Zahnersatz",
      removable_desc: "Präzisionsgeschiebe und flexible Modellgussprothesen.",
      logistics_title: "Internationaler Expressversand",
      logistics_desc: "Zollabgefertigte DHL/FedEx Dentalboxen mit lückenlosem Tracking."
    },
    hub: {
      title: "MB ERP Portal-Login Hub",
      subtitle: "Bitte wählen Sie Ihr autorisiertes Zugangsportal:",
      doctor_gate: "Zahnarzt-Portal",
      doctor_tag: "In- & Ausländische Zahnärzte",
      clinic_gate: "Klinik-Portal",
      clinic_tag: "Zahnkliniken & Zentren",
      agent_foreign_gate: "Ausländischer Partner / Agent",
      agent_foreign_tag: "Globale Vertreter (EUR/USD)",
      agent_local_gate: "Inländischer Partner / Agent",
      agent_local_tag: "Regionale Vertriebspartner",
      staff_gate: "MB Mitarbeiter-Portal",
      staff_tag: "Buchhaltung, HR, Lager, Labor",
      admin_gate: "MB Admin-Portal",
      admin_tag: "Geschäftsführung / Inhaber",
      back: "Zurück zu den Portalen"
    },
    form: {
      email: "E-Mail-Adresse / Mitarbeiter-ID",
      password: "Passwort",
      is_foreign: "Internationales Konto (EUR/USD)",
      btn_login: "Bestätigen & Weiter"
    },
    mfa: {
      title: "Zwei-Faktor-Authentifizierung (2FA)",
      subtitle: "Bitte geben Sie den 6-stelligen Code ein, der an Ihre E-Mail oder Ihr Telefon gesendet wurde.",
      code_label: "6-stelliger Sicherheitscode",
      btn_verify: "Authentifizieren & Dashboard Öffnen"
    },
    success: {
      title: "Erfolgreich Angemeldet!"
    }
  }
};

let currentLang = 'tr';
let selectedPortalType = null;
let currentAuthState = null;

const langFlags = {
  tr: { flag: '🇹🇷', text: 'TR' },
  en: { flag: '🇬🇧', text: 'EN' },
  fr: { flag: '🇫🇷', text: 'FR' },
  de: { flag: '🇩🇪', text: 'DE' }
};

function toggleLangDropdown() {
  const dropdown = document.getElementById('langDropdown');
  dropdown.classList.toggle('show');
}

// DİL DEĞİŞTİRME MOTORU
function changeLanguage(locale) {
  if (!translationsData[locale]) return;
  currentLang = locale;

  document.getElementById('currentLangFlag').textContent = langFlags[locale].flag;
  document.getElementById('currentLangText').textContent = langFlags[locale].text;
  document.getElementById('langDropdown').classList.remove('show');

  // DOM üzerindeki tüm data-i18n elementlerini güncelle
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = getNestedTranslation(translationsData[locale], key);
    if (translation) {
      if (translation.includes('<br>') || translation.includes('<span')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  localStorage.setItem('mb_erp_locale', locale);
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// PORTAL HUB MODAL KONTROLLERİ
function openPortalHub() {
  document.getElementById('portalModal').classList.add('show');
  backToHubSelection();
}

function closePortalHub() {
  document.getElementById('portalModal').classList.remove('show');
}

function backToHubSelection() {
  document.getElementById('hubStepSelection').classList.remove('hidden');
  document.getElementById('hubStepLoginForm').classList.add('hidden');
  document.getElementById('hubStepMfa').classList.add('hidden');
  document.getElementById('hubStepSuccess').classList.add('hidden');
}

function selectPortal(portalType, portalDisplayName) {
  selectedPortalType = portalType;
  document.getElementById('hubStepSelection').classList.add('hidden');
  document.getElementById('hubStepLoginForm').classList.remove('hidden');

  const titleEl = document.getElementById('selectedPortalTitle');
  const iconEl = document.getElementById('selectedPortalIcon');
  const foreignGroup = document.getElementById('foreignCheckboxGroup');
  const foreignCheckbox = document.getElementById('isForeignCheckbox');
  const emailInput = document.getElementById('loginEmail');

  titleEl.textContent = portalDisplayName;

  // Kapıya göre varsayılan ayarlar ve ikonlar
  switch (portalType) {
    case 'DOCTOR':
      iconEl.textContent = '🩺';
      foreignGroup.style.display = 'block';
      foreignCheckbox.checked = currentLang !== 'tr';
      emailInput.value = currentLang !== 'tr' ? 'dr.pierre@parisdent.fr' : 'dr.ahmet@istanbulklinik.com';
      break;
    case 'CLINIC':
      iconEl.textContent = '🏥';
      foreignGroup.style.display = 'block';
      foreignCheckbox.checked = currentLang !== 'tr';
      emailInput.value = 'yonetim@dentgroup.com';
      break;
    case 'AGENT_FOREIGN':
      iconEl.textContent = '🌍';
      foreignGroup.style.display = 'none';
      foreignCheckbox.checked = true;
      emailInput.value = 'partner.europe@dentallogistics.de';
      break;
    case 'AGENT_LOCAL':
      iconEl.textContent = '📍';
      foreignGroup.style.display = 'none';
      foreignCheckbox.checked = false;
      emailInput.value = 'marmara.araci@mbprotez.com';
      break;
    case 'STAFF':
      iconEl.textContent = '👔';
      foreignGroup.style.display = 'none';
      foreignCheckbox.checked = false;
      emailInput.value = 'uretim.seramist@mbprotez.com';
      break;
    case 'ADMIN':
      iconEl.textContent = '🛡️';
      foreignGroup.style.display = 'none';
      foreignCheckbox.checked = false;
      emailInput.value = 'admin@mbprotez.com';
      break;
  }
}

// ADIM 2: LOGIN SUBMIT
async function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const isForeign = document.getElementById('isForeignCheckbox').checked;

  const btn = document.getElementById('loginSubmitBtn');
  btn.textContent = 'Doğrulanıyor...';
  btn.disabled = true;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        portalType: selectedPortalType,
        isForeign,
      }),
    });

    const data = await res.json();
    if (data.success && data.requiresMfa) {
      currentAuthState = data;
      document.getElementById('hubStepLoginForm').classList.add('hidden');
      document.getElementById('hubStepMfa').classList.remove('hidden');
      document.getElementById('mfaCodePreview').textContent = data.demoMfaCode;
      document.getElementById('mfaInput').value = data.demoMfaCode;
    } else {
      alert(data.message || 'Giriş başarısız');
    }
  } catch (err) {
    console.error(err);
    alert('Sunucu bağlantı hatası');
  } finally {
    btn.textContent = 'Doğrula ve İlerle →';
    btn.disabled = false;
  }
}

// ADIM 3: MFA / 2FA DOĞRULAMA
async function handleMfaSubmit(event) {
  event.preventDefault();
  const mfaCode = document.getElementById('mfaInput').value;

  const btn = document.getElementById('mfaSubmitBtn');
  btn.textContent = 'Yetkilendiriliyor...';
  btn.disabled = true;

  try {
    const res = await fetch('/api/auth/verify-mfa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: mfaCode,
        tempToken: currentAuthState.tempToken,
        assignedRole: currentAuthState.assignedRole,
        isForeign: currentAuthState.currency !== 'TRY',
      }),
    });

    const data = await res.json();
    if (data.success) {
      document.getElementById('hubStepMfa').classList.add('hidden');
      document.getElementById('hubStepSuccess').classList.remove('hidden');
      
      const msgEl = document.getElementById('successRedirectMsg');
      msgEl.innerHTML = `Rol: <strong>${data.user.role}</strong><br>Yetkilendirme başarılı! <strong>${data.user.redirectUrl}</strong> alanına bağlanılıyor...`;

      setTimeout(() => {
        alert(`🎉 Tebrikler! [${data.user.role}] paneline başarıyla giriş yapıldı.\n\nYönlendirilen URL: ${data.user.redirectUrl}\nAktif Para Birimi: ${currentAuthState.currency}\nDil: ${currentLang.toUpperCase()}`);
        closePortalHub();
      }, 1500);
    } else {
      alert(data.message || 'MFA Doğrulama başarısız!');
    }
  } catch (err) {
    console.error(err);
    alert('Doğrulama sırasında hata oluştu');
  } finally {
    btn.textContent = 'Yetkilendir ve Panele Git ✓';
    btn.disabled = false;
  }
}

// Dışarı tıklanınca dropdown kapatma
window.onclick = function (event) {
  if (!event.target.closest('.language-switcher')) {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
};

// Başlangıçta kayıtlı dili yükle
const savedLang = localStorage.getItem('mb_erp_locale') || 'tr';
if (savedLang !== 'tr') {
  changeLanguage(savedLang);
}
