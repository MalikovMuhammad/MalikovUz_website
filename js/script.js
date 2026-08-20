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
