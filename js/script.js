(function () {
  'use strict';

  var translations = {
    uz: {
      'meta.title': "Analitika biznes uchun",
      'meta.description': "Ma'lumotlarga asoslangan qarorlar qabul qilish uchun biznes analitikasi",
      'a11y.skip': "Kontentga o'tish",
      'brand.name': "Analitika",
      'nav.offers': "Takliflar",
      'nav.steps': "Qanday ishlaydi",
      'nav.contacts': "Aloqa",
      'nav.cta': "Bog'lanish",

      'hero.eyebrow': "Siz ko'rmayotgan yechimlar",
      'hero.title': "Qarorlarni ma'lumotlarga asoslanib qabul qiling",
      'hero.subtitle': "Biznesingizning xom ma'lumotlarini aniq, vizual va harakatga undovchi insaytlarga aylantiramiz — tezroq va ishonchli qarorlar uchun.",
      'hero.ctaPrimary': "Bepul konsultatsiya",
      'hero.ctaSecondary': "Xizmatlarni ko'rish",
      'hero.stat1': "loyihalar",
      'hero.stat2': "mijozlar mamnunligi",
      'hero.stat3': "o'rtacha o'sish",
      'hero.vizTitle': "Real vaqt paneli",
      'hero.card1Title': "Konversiya",
      'hero.card1Sub': "+18% shu oyda",
      'hero.card2Title': "Yangi insayt",
      'hero.card2Sub': "Mijozlar segmenti aniqlandi",

      'trust.text': "Turli sohalardagi kompaniyalar bilan ishlaymiz",

      'offers.tag': "Xizmatlar",
      'offers.title': "Biznesingiz uchun aniq takliflar",
      'offers.subtitle': "Ma'lumotlarni foydali biznes natijalariga aylantiruvchi to'liq xizmatlar to'plami.",
      'offers.card1.title': "Dashboard va hisobotlar",
      'offers.card1.text': "Kompaniyangiz ko'rsatkichlarini real vaqtda kuzatuvchi interaktiv panellar yaratamiz.",
      'offers.card2.title': "Prognozlash va tahlil",
      'offers.card2.text': "Kelajakdagi savdo va talabni aniqlik bilan bashorat qiluvchi modellarni joriy etamiz.",
      'offers.card3.title': "Jarayonlarni avtomatlashtirish",
      'offers.card3.text': "Qo'lda bajariladigan hisobot va tahlillarni avtomatik tizimlarga o'tkazamiz.",
      'offers.card4.title': "Individual BI-yechimlar",
      'offers.card4.text': "Kompaniyangiz ehtiyojlariga moslashtirilgan analitik platformalarni ishlab chiqamiz.",
      'offers.card5.title': "Ma'lumotlarni integratsiya qilish",
      'offers.card5.text': "Turli manbalardagi ma'lumotlarni yagona, ishonchli tizimga birlashtiramiz.",
      'offers.card6.title': "Konsalting va o'qitish",
      'offers.card6.text': "Jamoangizni ma'lumotlar bilan ishlashga o'rgatamiz va strategik maslahat beramiz.",

      'steps.tag': "Jarayon",
      'steps.title': "Bor-yo'g'i 4 ta oddiy qadam",
      'steps.subtitle': "Boshlang'ich so'rovdan aniq natijalargacha — shaffof va tezkor jarayon.",
      'steps.s1.title': "So'rov",
      'steps.s1.text': "Biz bilan bog'laning va vazifangizni qisqacha tasvirlab bering.",
      'steps.s2.title': "Tahlil",
      'steps.s2.text': "Mavjud ma'lumotlaringizni chuqur o'rganamiz va imkoniyatlarni aniqlaymiz.",
      'steps.s3.title': "Yechim",
      'steps.s3.text': "Sizning biznesingizga moslashtirilgan analitik yechim ishlab chiqamiz.",
      'steps.s4.title': "Natija",
      'steps.s4.text': "Aniq, tushunarli va harakatga undovchi insaytlarga ega bo'lasiz.",

      'ctaBanner.title': "Ma'lumotlaringiz sizga ko'p narsani aytmoqchi",
      'ctaBanner.text': "Keling, ularni tinglaymiz. Bugun bepul konsultatsiyaga yoziling.",
      'ctaBanner.cta': "Bog'lanish",

      'contacts.tag': "Aloqa",
      'contacts.title': "Biznesingizni raqamlar bilan kuchaytiring",
      'contacts.subtitle': "Savolingiz bormi? Loyihangizni muhokama qilish uchun bog'laning.",
      'contacts.phoneLabel': "Telefon",
      'contacts.emailLabel': "Email",
      'contacts.addressLabel': "Manzil",
      'contacts.addressValue': "Buxoro sh., 5-mavze",

      'form.nameLabel': "Ismingiz",
      'form.namePlaceholder': "Ismingizni kiriting",
      'form.phoneLabel': "Telefon raqam",
      'form.phonePlaceholder': "+998 __ ___ __ __",
      'form.messageLabel': "Xabar",
      'form.messagePlaceholder': "Loyihangiz haqida qisqacha yozing",
      'form.submit': "Yuborish",
      'form.sending': "Yuborilmoqda...",
      'form.success': "Rahmat! Tez orada siz bilan bog'lanamiz.",
      'form.error': "Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring yoki bevosita bog'laning.",

      'footer.copy': "© 2026 Analitika. Barcha huquqlar himoyalangan."
    },
    ru: {
      'meta.title': "Аналитика для бизнеса",
      'meta.description': "Бизнес-аналитика для принятия решений на основе данных",
      'a11y.skip': "Перейти к содержимому",
      'brand.name': "Аналитика",
      'nav.offers': "Офферы",
      'nav.steps': "Как это работает",
      'nav.contacts': "Контакты",
      'nav.cta': "Связаться",

      'hero.eyebrow': "Решения, которые вы не видите",
      'hero.title': "Принимайте решения основываясь на данные",
      'hero.subtitle': "Превращаем сырые данные вашего бизнеса в точные, наглядные и действенные инсайты — для более быстрых и уверенных решений.",
      'hero.ctaPrimary': "Бесплатная консультация",
      'hero.ctaSecondary': "Смотреть услуги",
      'hero.stat1': "проектов",
      'hero.stat2': "довольных клиентов",
      'hero.stat3': "средний рост",
      'hero.vizTitle': "Панель в реальном времени",
      'hero.card1Title': "Конверсия",
      'hero.card1Sub': "+18% за этот месяц",
      'hero.card2Title': "Новый инсайт",
      'hero.card2Sub': "Обнаружен сегмент клиентов",

      'trust.text': "Работаем с компаниями из разных отраслей",

      'offers.tag': "Услуги",
      'offers.title': "Чёткие предложения для вашего бизнеса",
      'offers.subtitle': "Полный набор услуг, превращающих данные в полезные бизнес-результаты.",
      'offers.card1.title': "Дашборды и отчёты",
      'offers.card1.text': "Создаём интерактивные панели, отслеживающие показатели компании в реальном времени.",
      'offers.card2.title': "Прогнозирование и аналитика",
      'offers.card2.text': "Внедряем модели, точно прогнозирующие будущие продажи и спрос.",
      'offers.card3.title': "Автоматизация процессов",
      'offers.card3.text': "Переводим ручные отчёты и анализ на автоматизированные системы.",
      'offers.card4.title': "Индивидуальные BI-решения",
      'offers.card4.text': "Разрабатываем аналитические платформы, адаптированные под нужды вашей компании.",
      'offers.card5.title': "Интеграция данных",
      'offers.card5.text': "Объединяем данные из разных источников в единую надёжную систему.",
      'offers.card6.title': "Консалтинг и обучение",
      'offers.card6.text': "Обучаем вашу команду работе с данными и даём стратегические рекомендации.",

      'steps.tag': "Процесс",
      'steps.title': "Всего 4 простых шага",
      'steps.subtitle': "От первой заявки до конкретных результатов — прозрачный и быстрый процесс.",
      'steps.s1.title': "Заявка",
      'steps.s1.text': "Свяжитесь с нами и кратко опишите свою задачу.",
      'steps.s2.title': "Анализ",
      'steps.s2.text': "Глубоко изучаем имеющиеся у вас данные и выявляем возможности.",
      'steps.s3.title': "Решение",
      'steps.s3.text': "Разрабатываем аналитическое решение, адаптированное под ваш бизнес.",
      'steps.s4.title': "Результат",
      'steps.s4.text': "Вы получаете точные, понятные и действенные инсайты.",

      'ctaBanner.title': "Ваши данные хотят рассказать вам о многом",
      'ctaBanner.text': "Давайте их услышим. Запишитесь на бесплатную консультацию уже сегодня.",
      'ctaBanner.cta': "Связаться",

      'contacts.tag': "Контакты",
      'contacts.title': "Усильте ваш бизнес с помощью цифр",
      'contacts.subtitle': "Остались вопросы? Свяжитесь, чтобы обсудить ваш проект.",
      'contacts.phoneLabel': "Телефон",
      'contacts.emailLabel': "Email",
      'contacts.addressLabel': "Адрес",
      'contacts.addressValue': "г. Бухара, 5-й микрорайон",

      'form.nameLabel': "Ваше имя",
      'form.namePlaceholder': "Введите ваше имя",
      'form.phoneLabel': "Номер телефона",
      'form.phonePlaceholder': "+998 __ ___ __ __",
      'form.messageLabel': "Сообщение",
      'form.messagePlaceholder': "Кратко опишите ваш проект",
      'form.submit': "Отправить",
      'form.sending': "Отправка...",
      'form.success': "Спасибо! Мы свяжемся с вами в ближайшее время.",
      'form.error': "Произошла ошибка. Попробуйте позже или свяжитесь с нами напрямую.",

      'footer.copy': "© 2026 Аналитика. Все права защищены."
    }
  };

  translations.uz["nav.about"] = "Men haqimda";
  translations.uz["about.metaTitle"] = "Muhammad Malikov — men haqimda | Analitika";
  translations.uz["about.metaDescription"] = "Muhammad Malikov: BI va ma’lumotlar tahlili, Python, SQL, Power BI. Ish tajribasi, loyihalar va ko‘nikmalar.";
  translations.uz["about.name"] = "Muhammad Malikov";
  translations.uz["about.role"] = "BI-analitik / Data Analyst";
  translations.uz["about.intro"] = "Yirik sanoat korxonasida savdo va marketing tahlili bo‘yicha 2 yildan ortiq tajribaga egaman. Ma’lumotlarni yig‘ishdan tortib, boshqaruv uchun dashboardlar va avtomatik hisobotlargacha bo‘lgan to‘liq jarayonni tashkil qilaman.";
  translations.uz["about.location"] = "Buxoro, O‘zbekiston";
  translations.uz["about.contact"] = "Loyihani muhokama qilish";
  translations.uz["about.focus"] = "Ma’lumotlardan qarorlargacha";
  translations.uz["about.focusText"] = "Savdo, jo‘natmalar, tushum, debitorlik qarzlari va tijorat KPI ko‘rsatkichlari. Reja-fakt, trendlar va bozor tahlili.";
  translations.uz["about.experience"] = "Ish tajribasi";
  translations.uz["about.current"] = "08.2024 — hozirgacha";
  translations.uz["about.job1"] = "Savdo va marketing bo‘limi analitigi";
  translations.uz["about.company1"] = "«Qizilqumsement» AJ · Navoiy";
  translations.uz["about.job1Text"] = "Savdo va moliyaviy ko‘rsatkichlar bo‘yicha boshqaruv tahlili. PostgreSQL omborining raw/staging/mart qatlamlari hamda TXT/TSV, MySQL va API manbalaridan Python/SQL orqali ma’lumotlarni qayta ishlash jarayonlarini rivojlantiraman. Ma’lumotlar sifati va takrorlanishini nazorat qilaman.";
  translations.uz["about.job2"] = "Kichik backend-dasturchi";
  translations.uz["about.company2"] = "SOFTUM · Kiyev, masofadan";
  translations.uz["about.job2Text"] = "Mobil o‘yinlar loyihasida backend funksiyalarini ishlab chiqish va avtomatlashtirishda qatnashganman. Python/Django, ma’lumotlar bazalari va jamoaviy dasturlash bilan ishlaganman.";
  translations.uz["about.job3"] = "IT-texnik";
  translations.uz["about.company3"] = "ENTER ENGINEERING PTE LTD · Navoiy";
  translations.uz["about.job4"] = "Texnik";
  translations.uz["about.company4"] = "«Buxoro Telekom» AJ · Buxoro";
  translations.uz["about.projects"] = "Amalga oshirilgan vazifalar";
  translations.uz["about.project1"] = "Avtomatik hisobotlar";
  translations.uz["about.project1Text"] = "Jo‘natmalar bo‘yicha muntazam hisobotlarni yig‘ish, umumlashtirish va Telegram orqali yuborishni qo‘lda tayyorlashsiz avtomatlashtirdim.";
  translations.uz["about.project2"] = "Sement bozorini kuzatish";
  translations.uz["about.project2Text"] = "Birja savdolarini yuklash, nomenklaturani bir xil shaklga keltirish hamda sotuvchilar, narxlar va hajmlarni solishtirishni avtomatlashtirdim.";
  translations.uz["about.project3"] = "Ko‘rsatkichlar uchun Telegram-bot";
  translations.uz["about.project3Text"] = "Savdo va jo‘natmalar ko‘rsatkichlarini tezkor olish uchun Telegram-bot yaratdim.";
  translations.uz["about.skills"] = "Texnik ko‘nikmalar";
  translations.uz["about.bi"] = "BI va hisobotlar";
  translations.uz["about.dev"] = "Dasturlash";
  translations.uz["about.education"] = "Ta’lim va tillar";
  translations.uz["about.degree"] = "Bakalavr · Informatika va axborot texnologiyalari";
  translations.uz["about.school"] = "Buxoro muhandislik-texnologiya instituti · 2012–2016";
  translations.uz["about.languages"] = "O‘zbek va rus tillari — erkin. Ingliz tili — texnik hujjatlarni o‘qish.";
  translations.ru["nav.about"] = "Обо мне";
  translations.ru["about.metaTitle"] = "Мухаммад Маликов — обо мне | Аналитика";
  translations.ru["about.metaDescription"] = "Мухаммад Маликов: BI-аналитика, Python, SQL, Power BI. Опыт работы, проекты и профессиональные навыки.";
  translations.ru["about.name"] = "Мухаммад Маликов";
  translations.ru["about.role"] = "BI-аналитик / Data Analyst";
  translations.ru["about.intro"] = "Более 2 лет занимаюсь аналитикой продаж и маркетинга на крупном промышленном предприятии. Выстраиваю полный цикл работы с данными: от сбора и очистки до управленческих дашбордов и автоматической доставки отчётов.";
  translations.ru["about.location"] = "Бухара, Узбекистан";
  translations.ru["about.contact"] = "Обсудить проект";
  translations.ru["about.focus"] = "От данных к решениям";
  translations.ru["about.focusText"] = "Продажи, отгрузки, выручка, дебиторская задолженность и коммерческие KPI. План-факт, тренды и рыночная аналитика.";
  translations.ru["about.experience"] = "Опыт работы";
  translations.ru["about.current"] = "08.2024 — настоящее время";
  translations.ru["about.job1"] = "Аналитик отдела продаж и маркетинга";
  translations.ru["about.company1"] = "АО «Кызылкумцемент» · Навои";
  translations.ru["about.job1Text"] = "Создаю управленческую аналитику по продажам и финансовым показателям. Развиваю PostgreSQL-хранилище raw/staging/mart и Python/SQL-пайплайны из TXT/TSV, MySQL и API. Контролирую качество данных и дубликаты.";
  translations.ru["about.job2"] = "Младший backend-разработчик";
  translations.ru["about.company2"] = "SOFTUM · Киев, удалённо";
  translations.ru["about.job2Text"] = "Участвовал в разработке и автоматизации backend-функций проекта в сфере мобильных игр. Работал с Python/Django, базами данных и командной разработкой.";
  translations.ru["about.job3"] = "IT-техник";
  translations.ru["about.company3"] = "ENTER ENGINEERING PTE LTD · Навои";
  translations.ru["about.job4"] = "Техник";
  translations.ru["about.company4"] = "АО «Бухоро Телеком» · Бухара";
  translations.ru["about.projects"] = "Реализованные задачи";
  translations.ru["about.project1"] = "Автоматическая отчётность";
  translations.ru["about.project1Text"] = "Автоматизировал сбор, агрегацию и доставку регулярных отчётов по отгрузкам в Telegram без ручной подготовки.";
  translations.ru["about.project2"] = "Мониторинг рынка цемента";
  translations.ru["about.project2Text"] = "Автоматизировал загрузку биржевых сделок, нормализацию номенклатуры и сравнение продавцов, цен и объёмов.";
  translations.ru["about.project3"] = "Telegram-бот с показателями";
  translations.ru["about.project3Text"] = "Создал Telegram-бота для оперативного получения показателей продаж и отгрузок.";
  translations.ru["about.skills"] = "Технические навыки";
  translations.ru["about.bi"] = "BI и отчётность";
  translations.ru["about.dev"] = "Разработка";
  translations.ru["about.education"] = "Образование и языки";
  translations.ru["about.degree"] = "Бакалавр · Информатика и информационные технологии";
  translations.ru["about.school"] = "Бухарский инженерно-технологический институт · 2012–2016";
  translations.ru["about.languages"] = "Узбекский и русский — свободно. Английский — чтение технической документации.";

  var STORAGE_KEY = 'site-lang';
  var root = document.documentElement;

  function getDictValue(dict, key) {
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations.uz;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = getDictValue(dict, key);
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.split(':');
        var attr = parts[0].trim();
        var key = parts[1] ? parts[1].trim() : '';
        var value = getDictValue(dict, key);
        if (value !== null) el.setAttribute(attr, value);
      });
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    var lang = (saved === 'ru' || saved === 'uz') ? saved : 'uz';
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var header = document.querySelector('.site-header');
    if (!toggle || !header) return;

    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    header.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('menu-open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('.stat-num');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCount);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function initContactForm() {
    var form = document.getElementById('contactForm');
    var success = document.getElementById('formSuccess');
    var error = document.getElementById('formError');
    var submitBtn = document.getElementById('formSubmit');
    if (!form || !success || !error || !submitBtn) return;

    var endpoint = form.getAttribute('data-endpoint');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      success.classList.remove('show');
      error.classList.remove('show');

      if (!endpoint || endpoint.indexOf('YOUR-WORKER-SUBDOMAIN') !== -1) {
        console.warn('Contact form endpoint is not configured (data-endpoint on #contactForm).');
        error.classList.add('show');
        return;
      }

      var lang = root.getAttribute('lang') || 'uz';
      var dict = translations[lang] || translations.uz;
      var originalLabel = submitBtn.textContent;

      submitBtn.setAttribute('disabled', 'disabled');
      submitBtn.textContent = getDictValue(dict, 'form.sending') || originalLabel;

      var payload = {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim()
      };

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Request failed: ' + res.status);
          return res.json();
        })
        .then(function (data) {
          if (!data || data.ok !== true) throw new Error('Server reported failure');
          success.classList.add('show');
          form.reset();
          setTimeout(function () { success.classList.remove('show'); }, 5000);
        })
        .catch(function (err) {
          console.error('Contact form submit failed:', err);
          error.classList.add('show');
        })
        .finally(function () {
          submitBtn.removeAttribute('disabled');
          submitBtn.textContent = originalLabel;
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initMobileNav();
    initCounters();
    initContactForm();
  });
})();
