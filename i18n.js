/* Trilingual i18n: EN, RU, GE (Georgian) */
(function() {
  const STORAGE_KEY = 'dimkava-lang';
  const translations = {
    en: {
      'nav.services': 'Services',
      'nav.about': 'About',
      'hero.title': 'Service collection',
      'hero.desc': 'A catalogue of tools and applications. Pick a service and follow the link.',
      'section.services': 'Services',
      'section.about': 'About',
      'about.text': 'A central hub for DimKava tools and applications. Education, price monitoring, sales analytics, order sync — all in one place. Additional services (Telegram bots for B2B tracking, employee bonuses) run in the background without direct links.',
      'btn.open': 'Open',
      'service.edu.title': 'Education Portal',
      'service.edu.desc': 'Training programs, job instructions, coffee knowledge, business values. For employees and candidates in four languages (RU, UA, EN, GE).',
      'service.price-comp.title': 'Competitor Price Monitor',
      'service.price-comp.desc': 'Price comparison table: our site vs competitors. Products matched by name, prices side by side for quick analysis.',
      'service.price-scrap.title': 'Price Monitoring (Scrapers)',
      'service.price-scrap.desc': 'Our and competitors\' prices in one place. Data from our WordPress API and competitor sites via scraping. New design, updated features.',
      'service.granite.title': 'Granite Sales Dashboard',
      'service.granite.desc': 'Sales and inventory from DB. Loads data from Granite: sales by point of sale (coffee kg, cups, amounts), stock levels.',
      'service.online-stats.title': 'Online Sales Statistics',
      'service.online-stats.desc': 'Online sales analytics and event calendar. Data from Google Sheets visualised in charts and comparisons.',
      'service.woo.title': 'WooCommerce → LILU Sync',
      'service.woo.desc': 'Orders from DimKava.ge in one place. View, filter, analyse. Sync orders to LILU with one click.',
      'service.sheet.title': 'Online Sales Spreadsheet',
      'service.sheet.desc': 'Primary log of online sales. Raw data source for analytics and reporting.',
      'doc.title': 'DimKava — Service collection'
    },
    ru: {
      'nav.services': 'Сервисы',
      'nav.about': 'О проекте',
      'hero.title': 'Коллекция сервисов',
      'hero.desc': 'Каталог инструментов и приложений. Выберите сервис и перейдите по ссылке.',
      'section.services': 'Сервисы',
      'section.about': 'О проекте',
      'about.text': 'Центральный портал инструментов DimKava. Обучение, мониторинг цен, аналитика продаж, синхронизация заказов — всё в одном месте. Дополнительные сервисы (Telegram-боты для B2B и бонусов сотрудникам) работают в фоне без прямых ссылок.',
      'btn.open': 'Открыть',
      'service.edu.title': 'Образовательный портал',
      'service.edu.desc': 'Программы обучения, должностные инструкции, знания о кофе, бизнес-ценности. Для сотрудников и кандидатов на четырёх языках (RU, UA, EN, GE).',
      'service.price-comp.title': 'Мониторинг цен конкурентов',
      'service.price-comp.desc': 'Таблица сравнения цен: наш сайт и конкуренты. Товары сопоставлены по названию, цены рядом для быстрого анализа.',
      'service.price-scrap.title': 'Мониторинг цен (скраперы)',
      'service.price-scrap.desc': 'Наши и конкурентные цены в одном месте. Данные с нашего WordPress по API и с сайтов конкурентов через скрапинг. Новый дизайн, обновлённый функционал.',
      'service.granite.title': 'Дашборд продаж Granite',
      'service.granite.desc': 'Продажи и остатки из БД. Загрузка данных из Granite: продажи по точкам (кг кофе, чашки, суммы), остатки.',
      'service.online-stats.title': 'Статистика онлайн-продаж',
      'service.online-stats.desc': 'Аналитика онлайн-продаж и календарь событий. Данные из Google Sheets в графиках и сравнениях.',
      'service.woo.title': 'WooCommerce → LILU Sync',
      'service.woo.desc': 'Заказы с DimKava.ge в одном месте. Просмотр, фильтрация, анализ. Синхронизация заказов с LILU в один клик.',
      'service.sheet.title': 'Таблица онлайн-продаж',
      'service.sheet.desc': 'Основной учёт онлайн-продаж. Исходный источник данных для аналитики и отчётов.',
      'doc.title': 'DimKava — Коллекция сервисов'
    },
    ka: {
      'nav.services': 'სერვისები',
      'nav.about': 'პროექტის შესახებ',
      'hero.title': 'სერვისების კოლექცია',
      'hero.desc': 'ინსტრუმენტებისა და აპლიკაციების კატალოგი. აირჩიეთ სერვისი და გადახვიდეთ ბმულზე.',
      'section.services': 'სერვისები',
      'section.about': 'პროექტის შესახებ',
      'about.text': 'DimKava-ს ინსტრუმენტების ცენტრალური პორტალი. ტრენინგები, ფასების მონიტორინგი, გაყიდვების ანალიტიკა, შეკვეთების სინქრონიზაცია — ყველაფერი ერთ ადგილას. დამატებითი სერვისები (Telegram-ბოტები B2B და თანამშრომელთა ბონუსებისთვის) მუშაობს ფონზე უშუალო ბმულების გარეშე.',
      'btn.open': 'გახსნა',
      'service.edu.title': 'საგანმანათლებლო პორტალი',
      'service.edu.desc': 'სასწავლო პროგრამები, სამუშაო ინსტრუქციები, ყავის შესახებ ცოდნა, ბიზნეს ღირებულებები. თანამშრომლებისთვის და კანდიდატებისთვის ოთხ ენაზე (RU, UA, EN, GE).',
      'service.price-comp.title': 'კონკურენტების ფასების მონიტორინგი',
      'service.price-comp.desc': 'ფასების შედარების ცხრილი: ჩვენი საიტი და კონკურენტები. პროდუქტები შედარებული სახელით, ფასები გვერდიგვერდ სწრაფი ანალიზისთვის.',
      'service.price-scrap.title': 'ფასების მონიტორინგი (სკრაპერები)',
      'service.price-scrap.desc': 'ჩვენი და კონკურენტების ფასები ერთ ადგილას. მონაცემები WordPress API-დან და კონკურენტების საიტებიდან სკრაპინგით. ახალი დიზაინი, განახლებული ფუნქციონალი.',
      'service.granite.title': 'Granite გაყიდვების დაშბორდი',
      'service.granite.desc': 'გაყიდვები და ნაშთები ბაზიდან. მონაცემები Granite-დან: გაყიდვები გაყიდვის პუნქტების მიხედვით (ყავის კგ, ფინჯანი, თანხები), ნაშთები.',
      'service.online-stats.title': 'ონლაინ გაყიდვების სტატისტიკა',
      'service.online-stats.desc': 'ონლაინ გაყიდვების ანალიტიკა და მოვლენების კალენდარი. მონაცემები Google Sheets-დან გრაფიკებში და შედარებებში.',
      'service.woo.title': 'WooCommerce → LILU Sync',
      'service.woo.desc': 'DimKava.ge-დან შეკვეთები ერთ ადგილას. ნახვა, ფილტრაცია, ანალიზი. შეკვეთების სინქრონიზაცია LILU-ში ერთი დაწკაპუნებით.',
      'service.sheet.title': 'ონლაინ გაყიდვების ცხრილი',
      'service.sheet.desc': 'ონლაინ გაყიდვების ძირითადი აღრიცხვა. მონაცემთა წყარო ანალიტიკისა და ანგარიშებისთვის.',
      'doc.title': 'DimKava — სერვისების კოლექცია'
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    return 'en';
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'ka' ? 'ka' : lang;
    applyLang(lang);
    document.title = translations[lang]['doc.title'];
  }

  function applyLang(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
      const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
      if (t[key] !== undefined) el.setAttribute(attr, t[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-current', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function init() {
    const lang = getLang();
    document.documentElement.lang = lang === 'ka' ? 'ka' : lang;
    document.title = translations[lang]['doc.title'];
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        setLang(this.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.dimkavaI18n = { setLang, getLang };
})();
