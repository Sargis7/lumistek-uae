/* =============================================================================
   LUMISTEK (UAE) — СЛОВАРЬ ПЕРЕВОДОВ  /  TRANSLATION DICTIONARY
   =============================================================================

   КАК МЕНЯТЬ ТЕКСТЫ (без программиста):

   1. Найдите нужный ключ, например   "nav.about"
   2. Меняйте только текст в кавычках СПРАВА от двоеточия.

   ВАЖНО:
   • Ключи в блоке ar и в блоке en должны совпадать. Если добавили ключ
     в одном языке — добавьте такой же во второй.
   • Текст всегда в двойных кавычках. Если нужны кавычки внутри текста,
     поставьте перед ними обратный слеш: \"так\"
   • <br> внутри текста = перенос строки. Такие тексты помечены в разметке
     атрибутом data-i18n-html, и теги в них разрешены.
   • Не удаляйте запятую в конце строки.
   • Не меняйте названия ключей — сайт перестанет их находить.

   Где какой текст находится в index.html, можно понять по ключу:
   nav.* — меню, hero.* — первый экран, about.* — блок «О компании»,
   p1.*…p10.* — карточки товаров, footer.* — подвал,
   privacy.* — модалка политики конфиденциальности.

   Этот файл подключается в <head> index.html ПЕРЕД lang.js.
   ============================================================================= */

window.LUMISTEK_I18N = {

    /* ======================= АРАБСКИЙ / ARABIC ======================= */
    ar: {

        /* --- Служебное / Document --- */
        "meta.description": "لوميستيك — أفلام حماية طلاء السيارات (PPF) من كوريا الجنوبية. مكاتب في دبي وأبوظبي والشارقة وعجمان.",
        "meta.title": "Lumistek - أفلام حماية طلاء السيارات الفاخرة (PPF)",
        "meta.title.home": "Lumistek - أفلام حماية طلاء السيارات الفاخرة (PPF)",
        "meta.title.cart": "سلة الطلبات - Lumistek UAE",

        /* --- Переключатель языка / Language switcher --- */
        "lang.ar": "AR",
        "lang.arAria": "العربية",
        "lang.en": "EN",
        "lang.enAria": "English",
        "lang.groupAria": "اختيار اللغة",

        /* --- Навигация / Navigation --- */
        "nav.about": "عن الشركة",
        "nav.contacts": "اتصل بنا",
        "nav.gallery": "أعمال شركائنا",
        "nav.home": "الرئيسية",
        "nav.menuAria": "القائمة",
        "nav.catalog": "الكتالوج",
        "nav.news": "الأخبار",
        "nav.products": "المنتجات",

        /* --- Главный экран / Hero --- */
        "hero.ctaBook": "احجز الآن",
        "hero.ctaProducts": "تصفح المنتجات",
        "hero.subtitle": "حماية موثوقة لهيكل السيارة من الخدوش، الحصى، والمواد الكيميائية. صُنع في كوريا الجنوبية باستخدام أحدث التقنيات العالمية.",

        /* --- О компании / About --- */
        "about.c1.text": "نضمن مطابقة المنتجات لأعلى المعايير العالمية. يتم إجراء فحص متعدد المراحل في مصانعنا في كوريا لضمان خلو كل لفة من العيوب وتوفير شفافية وسماكة مثالية.",
        "about.c1.title": "مراقبة الجودة",
        "about.c2.text": "نهج مخصص لكل شريك. نقدم شروط تعاون مربحة لكل من استوديوهات العناية بالسيارات الصغيرة (Detailing) والموزعين الكبار في المنطقة.",
        "about.c2.title": "شروط مرنة",
        "about.c3.text": "إمدادات مستمرة وبرنامج مستودعات موثوق. شحن سريع للمنتجات عبر فروعنا في دبي، أبوظبي، والشارقة لتلبية احتياجات السوق بشكل فوري.",
        "about.c3.title": "الخدمات اللوجستية",
        "about.c4.text": "نزود شركاءنا بالمواد الإعلانية، الكتالوجات، والعينات. نساعد في الترويج للمنتج وجذب عملاء جدد في منطقتك بكل احترافية.",
        "about.c4.title": "الدعم التسويقي والإعلاني",
        "about.c5.text": "نحن دائماً على اتصال لحل أي مشاكل فنية أو تجارية بسرعة. نقوم بتنظيم ورش عمل وفعاليات تدريبية لإبقائك على اطلاع بأحدث التطورات.",
        "about.c5.title": "تطوير ودعم على مدار الساعة",
        "about.subtitle": "تقنيات مبتكرة وشراكات موثوقة لأعمالك وحماية سيارتك.",
        "about.title": "عن الشركة",

        /* --- Каталог / Catalogue (headings) --- */
        "products.cta": "احصل على السعر",
        "products.nextAria": "التالي",
        "products.prevAria": "السابق",
        "products.subtitle": "اختر الحماية المثلى لسيارتك. <br class=\"hidden md:block\"/>اسحب للجانب لتصفح مجموعة منتجاتنا.",
        "products.title": "كتالوج Lumistek",

        /* --- Подписи к ценам / Price labels --- */
        "price.meterLabel": "سعر المتر",
        "price.rollLabel": "سعر اللفة (1.52x15م)",

        /* --- Товар 1 / Product 1 --- */
        "p1.alt": "Lumistek Clear PPF",
        "p1.desc": "فيلم بولي يوريثان كلاسيكي شفاف بسماكة 190 ميكرون. يوفر أقصى درجات اللمعان، خاصية طرد الماء (الهيدروفوبيك)، وحماية غير مرئية لهيكل السيارة.",
        "p1.meterPrice": "حسب الطلب",
        "p1.name": "Lumistek Clear PPF",
        "p1.rollPrice": "حسب الطلب",
        "p1.type": "طبقة حماية لامعة",

        /* --- Товар 2 / Product 2 --- */
        "p2.alt": "Lumistek WINDSHIELD PROTECTION",
        "p2.desc": "فيلم بولي يوريثان شفاف مصمم خصيصاً للزجاج الأمامي. يُعد أحدث الحلول المبتكرة لحماية الزجاج من الحصى المتطاير، الخدوش، والتشققات بكفاءة عالية.",
        "p2.meterPrice": "280 د.إ",
        "p2.name": "Lumistek WINDSHIELD",
        "p2.rollPrice": "4,200 د.إ",
        "p2.type": "حماية الزجاج الأمامي",

        /* --- Товар 3 / Product 3 --- */
        "p3.alt": "Lumistek CLEAR PRO",
        "p3.desc": "يتميز Clear Pro بوجود طبقة سيراميك علوية (Top Coat) تجعله مقاوماً لأقسى العوامل الخارجية. مثالي للسيارات ذات الألوان الفاتحة وللبلدان ذات المناخ الحار والقاسي مثل الخليج.",
        "p3.meterPrice": "180 د.إ",
        "p3.name": "Lumistek CLEAR PRO",
        "p3.rollPrice": "2,550 د.إ",
        "p3.type": "طبقة TOP COAT صلبة",

        /* --- Товар 4 / Product 4 --- */
        "p4.alt": "Lumistek MATE PROTECTION",
        "p4.desc": "فيلم حماية لامع ومطفي في نفس الوقت. يحافظ على لون السيارة الأصلي مع منحه مظهراً ساتانياً أنيقاً وجذاباً. خيار مثالي لعشاق التميز والسيارات الفاخرة.",
        "p4.meterPrice": "210 د.إ",
        "p4.name": "Lumistek MATTE",
        "p4.rollPrice": "3,000 د.إ",
        "p4.type": "حماية مطفية (مات ساتان)",

        /* --- Товар 5 / Product 5 --- */
        "p5.alt": "Lumistek CLEAR ULTRA PRO",
        "p5.desc": "عندما لا تكفي سماكة 190 ميكرون، نقدم لك \"الدرع المعزز\". فيلم بسماكة 215 ميكرون (بدون بطانة) مصمم لتوفير حماية قصوى ضد الصدمات القوية والحصى على الطرق السريعة.",
        "p5.meterPrice": "210 د.إ",
        "p5.name": "Lumistek ULTRA PRO",
        "p5.rollPrice": "3,150 د.إ",
        "p5.type": "طبقة TOP COAT لينة 215 ميكرون",

        /* --- Товар 6 / Product 6 --- */
        "p6.alt": "Lumistek ULTRA PRO ONE",
        "p6.desc": "السماكة (215 ميكرون) مدمجة مع طبقة علوية صلبة (Top Coat). توفر حماية غير قابلة للاختراق ضد المواد الكيميائية والأمطار الحمضية، ولن تصفر بمرور الوقت في مناخ دبي القاسي.",
        "p6.meterPrice": "240 د.إ",
        "p6.name": "Lumistek ULTRA ONE",
        "p6.rollPrice": "3,550 د.إ",
        "p6.type": "طبقة صلبة 215 ميكرون",

        /* --- Товар 7 / Product 7 --- */
        "p7.alt": "Lumistek MHP PLUS 5",
        "p7.desc": "فيلم معدني يتميز بقدرة عالية على حجب الأشعة تحت الحمراء وفوق البنفسجية، مما يحمي المقصورة من البهتان والحرارة الزائدة. نسبة نفاذية الضوء 5% (داكن جداً) لخصوصية تامة.",
        "p7.meterPrice": "25 د.إ",
        "p7.name": "Lumistek MHP PLUS 5",
        "p7.rollPrice": "650 د.إ",
        "p7.type": "فيلم تظليل وعزل حراري (5%)",

        /* --- Товар 8 / Product 8 --- */
        "p8.alt": "Lumistek MHP PLUS 15",
        "p8.desc": "فيلم معدني يتميز بقدرة عالية على حجب الأشعة تحت الحمراء وفوق البنفسجية، مما يحمي المقصورة من البهتان والحرارة الزائدة. نسبة نفاذية الضوء 15% لمظهر أنيق ورؤية واضحة.",
        "p8.meterPrice": "25 د.إ",
        "p8.name": "Lumistek MHP PLUS 15",
        "p8.rollPrice": "650 د.إ",
        "p8.type": "فيلم تظليل وعزل حراري (15%)",

        /* --- Товар 9 / Product 9 --- */
        "p9.alt": "Lumistek MHP PLUS 35",
        "p9.desc": "فيلم معدني يتميز بقدرة عالية على حجب الأشعة تحت الحمراء وفوق البنفسجية، مما يحمي المقصورة من البهتان والحرارة الزائدة. نسبة نفاذية الضوء 35% مثالية للزجاج الأمامي والجانبي وفقاً لقوانين المرور.",
        "p9.meterPrice": "25 د.إ",
        "p9.name": "Lumistek MHP PLUS 35",
        "p9.rollPrice": "650 د.إ",
        "p9.type": "فيلم تظليل وعزل حراري (35%)",

        /* --- Товар 10 / Product 10 --- */
        "p10.alt": "Lumistek HEAD LIGHTS PROTECT",
        "p10.desc": "فيلم بولي يوريثان بلون بني فاتح (سموكي) مخصص لحماية وتغيير مظهر المصابيح الأمامية والخلفية. يحمي من الاصفرار والخدوش مع إضافة لمسة رياضية لسيارتك.",
        "p10.meterPrice": "حسب الطلب",
        "p10.name": "Lumistek HEADLIGHTS",
        "p10.rollPrice": "حسب الطلب",
        "p10.type": "حماية وتصميم المصابيح",

        /* --- Галерея / Gallery --- */
        "gallery.alt": "أعمال شركائنا",
        "gallery.arrow": "👈",
        "gallery.subtitle": "قيم جودة ولمعان منتجاتنا على أرض الواقع.",
        "gallery.swipeHint": "اسحب لرؤية المزيد",
        "gallery.title": "أعمال شركائنا",

        /* --- Партнёры / Partners (скрытая секция) --- */
        "partners.placeholder": "سيتم إضافة شعارات شركائنا هنا",
        "partners.title": "شركاؤنا في النجاح",

        /* --- Подвал / Footer --- */
        "footer.about": "لوميستيك (Lumistek) هي الحل الأمثل في مجال أفلام الحماية من البولي يوريثان. نقدم منتجاً فائق الجودة صُنع في كوريا الجنوبية، ليضمن لسيارتك حماية تدوم طويلاً.",
        "footer.abudhabi": "أبوظبي",
        "footer.abudhabiAddr": "جزيرة الريم<br>برج الأعمال",
        "footer.ajman": "عجمان",
        "footer.ajmanAddr": "شارع الشيخ عمار<br>&nbsp;",
        "footer.copyright": "© 2024 Lumistek. جميع الحقوق محفوظة.",
        "footer.creditBefore": "الموقع: ",
        "footer.dubai": "دبي",
        "footer.dubaiAddr": "شارع الشيخ زايد<br>مركز التجارة",
        "footer.offices": "مكاتبنا التمثيلية",
        "footer.privacy": "سياسة الخصوصية",
        "footer.sharjah": "الشارقة",
        "footer.sharjahAddr": "المنطقة الصناعية<br>مجمع الشركات",

        /* --- Cookie-баннер / Cookie banner --- */
        "cookie.accept": "حسناً",
        "cookie.after": "، وبالتزامٍ بقوانين دولة الإمارات العربية المتحدة.",
        "cookie.before": "نحن نستخدم ملفات تعريف الارتباط (Cookies) لتحسين عمل الموقع. باستمرارك في استخدام الموقع، فإنك توافق على",
        "cookie.link": "سياسة الخصوصية",

        /* --- Модалка заявки / Lead form --- */
        "lead.cityLabel": "المدينة / الإمارة",
        "lead.cityPlaceholder": "دبي",
        "lead.closeAria": "إغلاق",
        "lead.consentAfter": "وفقاً لقوانين دولة الإمارات.",
        "lead.consentBefore": "بالنقر على \"إرسال\"، فإنك توافق على",
        "lead.consentLink": "سياسة معالجة البيانات الشخصية",
        "lead.error": "❌ حدث خطأ. يرجى المحاولة مرة أخرى.",
        "lead.nameLabel": "الاسم الكامل",
        "lead.namePlaceholder": "أحمد محمد",
        "lead.phoneLabel": "رقم الهاتف",
        "lead.phonePlaceholder": "+971 50 000 0000",
        "lead.sending": "جاري الإرسال...",
        "lead.submit": "إرسال الطلب",
        "lead.subtitle": "اترك بياناتك وسيقوم خبراؤنا بالتواصل معك في أقرب وقت ممكن.",
        "lead.success": "✅ تم إرسال الطلب بنجاح!",
        "lead.title": "احجز الآن",

        /* --- Политика конфиденциальности / Privacy policy --- */
        "privacy.close": "إغلاق",
        "privacy.closeAria": "إغلاق",
        "privacy.p1": "توضح سياسة الخصوصية هذه كيفية قيام موقع Lumistek بجمع بياناتك الشخصية واستخدامها وحمايتها، وذلك بالتوافق التام مع المرسوم بقانون اتحادي رقم (45) لسنة 2021 بشأن حماية البيانات الشخصية (PDPL) المعمول به في دولة الإمارات العربية المتحدة.",
        "privacy.s1.text": "نحن نجمع البيانات الشخصية التي تقدمها طواعية عند ملء النماذج على موقعنا (مثل الاسم، رقم الهاتف، والمدينة). يُعد تقديمك لهذه البيانات بمثابة موافقة صريحة منك على معالجتها للغرض الذي جُمعت من أجله.",
        "privacy.s1.title": "1. جمع البيانات الشخصية",
        "privacy.s2.text": "تُستخدم بياناتك حصرياً للأغراض التالية:<br>\n                — التواصل معك للرد على استفساراتك وتلبية طلباتك.<br>\n                — تحسين جودة خدماتنا وتقديم عروض تناسب احتياجاتك.",
        "privacy.s2.title": "2. الغرض من معالجة البيانات",
        "privacy.s3.text": "وفقاً لقانون حماية البيانات الشخصية في الإمارات، يحق لك:<br>\n                — <strong>حق الوصول:</strong> طلب نسخة من بياناتك الشخصية التي نحتفظ بها.<br>\n                — <strong>حق التصحيح:</strong> طلب تعديل أو تحديث بياناتك إذا كانت غير دقيقة.<br>\n                — <strong>حق المحو (الحق في النسيان):</strong> طلب حذف بياناتك من سجلاتنا.<br>\n                — <strong>سحب الموافقة:</strong> يحق لك سحب موافقتك على معالجة البيانات في أي وقت.",
        "privacy.s3.title": "3. حقوقك كصاحب بيانات (بموجب قانون الإمارات)",
        "privacy.s4.text": "نحن نتخذ كافة التدابير التقنية والتنظيمية اللازمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو الفقدان أو التعديل، بما يتوافق مع المعايير الأمنية المعتمدة.",
        "privacy.s4.title": "4. أمن البيانات",
        "privacy.s5.text": "يستخدم الموقع ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة المرور. يمكنك إدارة تفضيلاتك من خلال إعدادات المتصفح الخاص بك.",
        "privacy.s5.title": "5. ملفات تعريف الارتباط (Cookies)",
        "privacy.title": "سياسة الخصوصية وحماية البيانات الشخصية (وفقاً لقانون دولة الإمارات)",

        /* --- Корзина / Cart page (cart.html) --- */
        "cart.aria": "سلة التسوق",
        "cart.breadcrumbsAria": "مسار التنقل",
        "cart.claim.madeIn": "صناعة كورية جنوبية",
        "cart.claim.shipping": "شحن من مستودعاتنا الإقليمية",
        "cart.clear": "إفراغ السلة",
        "cart.clearConfirm": "هل تريد إزالة جميع المنتجات من السلة؟ لا يمكن التراجع عن هذا الإجراء.",
        "cart.col.product": "المنتج",
        "cart.col.qty": "الكمية",
        "cart.col.sum": "المجموع",
        "cart.consent.after": ".",
        "cart.consent.before": "أوافق على معالجة بياناتي الشخصية وأقرّ بـ",
        "cart.consent.link": "سياسة الخصوصية",
        "cart.delivery.carrier": "توصيل إلى إمارة أخرى",
        "cart.delivery.courier": "توصيل داخل دبي",
        "cart.delivery.pickup": "استلام شخصي",
        "cart.empty.cta": "تصفح الكتالوج",
        "cart.empty.text": "أضف منتجات من الكتالوج وستظهر هنا. وإذا احتجت مساعدة في اختيار الفيلم المناسب، فاتصل بنا.",
        "cart.empty.title": "سلتك فارغة حالياً",
        "cart.error.generic": "لم نتمكن من إرسال طلبك. يرجى المحاولة مرة أخرى أو الاتصال بنا.",
        "cart.error.phoneLabel": "الهاتف:",
        "cart.form.addressLabel": "عنوان التوصيل",
        "cart.form.addressPlaceholder": "الشارع، المبنى، المكتب",
        "cart.form.cityLabel": "المدينة",
        "cart.form.cityPlaceholder": "دبي",
        "cart.form.commentLabel": "ملاحظات على الطلب",
        "cart.form.commentPlaceholder": "مثال: أحتاج إلى فاتورة ضريبية للشركة، أو الوقت المناسب للاتصال",
        "cart.form.deliveryLabel": "طريقة الاستلام",
        "cart.form.footnote": "بالنقر على الزر، فإنك تؤكد صحة البيانات المدخلة.",
        "cart.form.nameLabel": "الاسم الكامل",
        "cart.form.namePlaceholder": "أحمد محمد",
        "cart.form.phoneLabel": "الهاتف",
        "cart.form.phonePlaceholder": "+971 50 000 0000",
        "cart.form.submit": "تأكيد الطلب",
        "cart.form.subtitle": "الحقول المُعلّمة بنجمة إلزامية. سيتواصل معك فريقنا لتأكيد الطلب.",
        "cart.form.title": "بيانات الطلب",
        "cart.meta.description": "سلة Lumistek: راجع طلبك، أدخل بيانات التواصل، وأكمل شراء أفلام حماية الطلاء والتظليل وحماية الزجاج الأمامي.",
        "cart.onRequestNote": "يتضمن طلبك أصنافاً بسعر عند الطلب. سنحدد سعرها ونُبلغك به عند تأكيد الطلب.",
        "cart.order.title": "طلبك",
        "cart.row.decAria": "تقليل الكمية",
        "cart.row.incAria": "زيادة الكمية",
        "cart.row.onRequestShort": "عند الطلب",
        "cart.row.priceOnRequest": "السعر عند الطلب",
        "cart.row.qtyAria": "الكمية للمنتج {name}",
        "cart.row.removeAria": "إزالة {name} من السلة",
        "cart.subtitle": "راجع محتويات طلبك وأدخل بيانات التواصل. يتم الاتفاق على الدفع وشروط التوصيل مع فريقنا.",
        "cart.success.backCatalog": "العودة إلى الكتالوج",
        "cart.success.backHome": "العودة إلى الرئيسية",
        "cart.success.demoNote": "(وضع تجريبي — لم يتم إرسال الطلب)",
        "cart.success.numberLabel": "رقم الطلب",
        "cart.success.questions": "لديك أسئلة؟ اتصل بنا:",
        "cart.success.text": "لقد استلمنا طلبك. سيتواصل معك فريقنا في أقرب وقت لتأكيد تفاصيل الدفع والتوصيل.",
        "cart.success.title": "شكراً لطلبك!",
        "cart.summary.cta": "الانتقال إلى إتمام الطلب",
        "cart.summary.delivery": "التوصيل",
        "cart.summary.deliveryValue": "حسب الاتفاق",
        "cart.summary.lines": "عدد الأصناف",
        "cart.summary.payNote": "يتم الدفع بعد تأكيد الطلب من فريقنا.",
        "cart.summary.subtotal": "المنتجات",
        "cart.summary.title": "الإجمالي",
        "cart.summary.total": "الإجمالي",
        "cart.summary.units": "إجمالي الوحدات",
        "cart.title": "سلة التسوق",
        "cart.unavailable.text": "تعذّر تحميل وحدة السلة. اتصل بنا وسنُكمل طلبك يدوياً.",
        "cart.unavailable.title": "السلة غير متاحة مؤقتاً",
        "nav.cart": "السلة",
        "nav.cartAria": "سلة الشراء",
        "social.telegram": "تيليجرام",
        "social.instagram": "إنستاجرام",
        "social.youtube": "يوتيوب",
        "news.title": "أخبار Lumistek",
        "news.subtitle": "أحدث الفيديوهات من قناتنا على يوتيوب: منتجات جديدة، اختبارات، ومراحل العمل. <br class=\"hidden md:block\"/>اضغط على البطاقة لمشاهدة الفيديو.",
        "news.prevAria": "الفيديوهات السابقة",
        "news.nextAria": "الفيديوهات التالية",
        "news.trackAria": "أحدث فيديوهات Lumistek على يوتيوب",
        "news.watchAll": "شاهد جميع الفيديوهات على يوتيوب",
        "news.closeVideoAria": "إغلاق الفيديو",
        "news.videoModalTitle": "فيديو Lumistek",
        "news.videoIframeTitle": "فيديو Lumistek من يوتيوب",
        "gallery.alt2": "من أعمال شركاء Lumistek",
        "gallery.alt3": "فيلم بولي يوريثان Lumistek",
        "partners.logoAlt": "شعار شريك",
        "footer.admin": "لوحة التحكم",
        "footer.adminTitle": "لوحة التحكم بالموقع",

        /* --- Каталог: страница каталога / Catalogue page (catalog.html) --- */
        "footer.credit": "الموقع",
        "meta.title.catalog": "كتالوج Lumistek - أفلام الحماية والتظليل في الإمارات",
        "meta.description.catalog": "كتالوج Lumistek: أفلام الحماية من البولي يوريثان (PPF)، أفلام التظليل، وحماية الزجاج الأمامي والمصابيح. أسعار اللفة والمتر.",
        "catalog.breadcrumbsAria": "مسار التنقل",
        "catalog.breadcrumbHome": "الرئيسية",
        "catalog.breadcrumbCatalog": "الكتالوج",
        "catalog.title": "كتالوج لوميستيك",
        "catalog.subtitle": "أفلام بولي يوريثان للحماية من الحصى، ومواد التظليل، وحماية الزجاج الأمامي والمصابيح. اختر القسم أو ابحث عن المنتج بالاسم.",
        "catalog.search": "ابحث في الكتالوج",
        "catalog.filtersAria": "أقسام الكتالوج",
        "catalog.unitGroupAria": "خيار الشراء",
        "catalog.emptyTitle": "لا توجد نتائج",
        "catalog.emptyText": "لا توجد منتجات تطابق بحثك. جرّب تغيير عبارة البحث أو اختيار قسم آخر.",
        "catalog.resetFilters": "إعادة ضبط الفلاتر",
        "catalog.reset": "إعادة ضبط الفلاتر",
        "catalog.added": "تمت الإضافة ✓",
        "catalog.wholesaleTitle": "هل تحتاج كمية كبيرة أو استشارة حول الفيلم؟",
        "catalog.wholesaleText": "اترك طلبك — وسنختار لك الفيلم الأنسب لمناخك وكميتك وميزانيتك.",
        "catalog.wholesaleCta": "اطلب عرضاً",
        "catalog.leadTitle": "اطلب عرضاً",
        "catalog.leadSubtitle": "اترك بياناتك وسيتواصل معك فريقنا في أقرب وقت ممكن.",
        "catalog.leadContext": "مهتم بـ: ",
        "catalog.leadSubmit": "إرسال الطلب",
        "catalog.leadSuccess": "✅ تم إرسال طلبك بنجاح!",
    },

    /* ======================= АНГЛИЙСКИЙ / ENGLISH ======================= */
    en: {

        /* --- Служебное / Document --- */
        "meta.description": "Lumistek - premium paint protection film (PPF) from South Korea. Offices in Dubai, Abu Dhabi, Sharjah and Ajman.",
        "meta.title": "Lumistek - Premium Automotive Paint Protection Film (PPF)",
        "meta.title.home": "Lumistek - Premium Automotive Paint Protection Film (PPF)",
        "meta.title.cart": "Cart - Lumistek UAE",

        /* --- Переключатель языка / Language switcher --- */
        "lang.ar": "AR",
        "lang.arAria": "Arabic",
        "lang.en": "EN",
        "lang.enAria": "English",
        "lang.groupAria": "Language selection",

        /* --- Навигация / Navigation --- */
        "nav.about": "About Us",
        "nav.contacts": "Contact Us",
        "nav.gallery": "Partner Work",
        "nav.home": "Home",
        "nav.menuAria": "Menu",
        "nav.catalog": "Catalog",
        "nav.news": "News",
        "nav.products": "Products",

        /* --- Главный экран / Hero --- */
        "hero.ctaBook": "Book Now",
        "hero.ctaProducts": "Browse Products",
        "hero.subtitle": "Reliable protection for your vehicle's body against scratches, stone chips and chemicals. Made in South Korea using the latest global technology.",

        /* --- О компании / About --- */
        "about.c1.text": "We guarantee that every product meets the highest international standards. Multi-stage inspection at our factories in Korea ensures each roll is free of defects, with ideal clarity and thickness.",
        "about.c1.title": "Quality Control",
        "about.c2.text": "A tailored approach for every partner. We offer profitable cooperation terms for both small car detailing studios and large regional distributors.",
        "about.c2.title": "Flexible Terms",
        "about.c3.text": "Continuous supply and a reliable warehousing programme. Fast shipping through our branches in Dubai, Abu Dhabi and Sharjah to meet market demand instantly.",
        "about.c3.title": "Logistics",
        "about.c4.text": "We equip our partners with promotional materials, catalogues and samples. We help you promote the product and attract new customers in your area with full professionalism.",
        "about.c4.title": "Marketing & Advertising Support",
        "about.c5.text": "We are always in touch to resolve any technical or commercial issue quickly. We organise workshops and training events to keep you up to date with the latest developments.",
        "about.c5.title": "Development & 24/7 Support",
        "about.subtitle": "Innovative technology and reliable partnerships for your business and your car's protection.",
        "about.title": "About Us",

        /* --- Каталог / Catalogue (headings) --- */
        "products.cta": "Get a Price",
        "products.nextAria": "Next",
        "products.prevAria": "Previous",
        "products.subtitle": "Choose the optimal protection for your car. <br class=\"hidden md:block\"/>Swipe sideways to browse our product range.",
        "products.title": "Lumistek Catalogue",

        /* --- Подписи к ценам / Price labels --- */
        "price.meterLabel": "Price per meter",
        "price.rollLabel": "Roll price (1.52x15 m)",

        /* --- Товар 1 / Product 1 --- */
        "p1.alt": "Lumistek Clear PPF",
        "p1.desc": "A classic clear polyurethane film, 190 microns thick. It delivers maximum gloss, hydrophobic (water-repellent) performance and invisible protection for your vehicle's body.",
        "p1.meterPrice": "On request",
        "p1.name": "Lumistek Clear PPF",
        "p1.rollPrice": "On request",
        "p1.type": "Glossy protection layer",

        /* --- Товар 2 / Product 2 --- */
        "p2.alt": "Lumistek WINDSHIELD PROTECTION",
        "p2.desc": "A transparent polyurethane film designed specifically for the windshield. It is the latest innovative solution for protecting glass from flying stones, scratches and cracks with high efficiency.",
        "p2.meterPrice": "AED 280",
        "p2.name": "Lumistek WINDSHIELD",
        "p2.rollPrice": "AED 4,200",
        "p2.type": "Windshield protection",

        /* --- Товар 3 / Product 3 --- */
        "p3.alt": "Lumistek CLEAR PRO",
        "p3.desc": "Clear Pro features a ceramic top coat that makes it resistant to the harshest external factors. Ideal for light-coloured cars and for countries with a hot, severe climate such as the Gulf.",
        "p3.meterPrice": "AED 180",
        "p3.name": "Lumistek CLEAR PRO",
        "p3.rollPrice": "AED 2,550",
        "p3.type": "Hard TOP COAT layer",

        /* --- Товар 4 / Product 4 --- */
        "p4.alt": "Lumistek MATE PROTECTION",
        "p4.desc": "A film that is glossy and matte at the same time. It preserves the car's original colour while giving it an elegant, attractive satin look. An ideal choice for those who value distinction and luxury cars.",
        "p4.meterPrice": "AED 210",
        "p4.name": "Lumistek MATTE",
        "p4.rollPrice": "AED 3,000",
        "p4.type": "Matte protection (satin matte)",

        /* --- Товар 5 / Product 5 --- */
        "p5.alt": "Lumistek CLEAR ULTRA PRO",
        "p5.desc": "When 190 microns is not enough, we offer you the \"reinforced shield\". A 215-micron film (without liner) designed to provide maximum protection against heavy impacts and stone chips on motorways.",
        "p5.meterPrice": "AED 210",
        "p5.name": "Lumistek ULTRA PRO",
        "p5.rollPrice": "AED 3,150",
        "p5.type": "Soft TOP COAT layer, 215 microns",

        /* --- Товар 6 / Product 6 --- */
        "p6.alt": "Lumistek ULTRA PRO ONE",
        "p6.desc": "215-micron thickness combined with a hard top coat. It provides impenetrable protection against chemicals and acid rain, and will not yellow over time in Dubai's harsh climate.",
        "p6.meterPrice": "AED 240",
        "p6.name": "Lumistek ULTRA ONE",
        "p6.rollPrice": "AED 3,550",
        "p6.type": "Hard layer, 215 microns",

        /* --- Товар 7 / Product 7 --- */
        "p7.alt": "Lumistek MHP PLUS 5",
        "p7.desc": "A metallic film with a high capability of blocking infrared and ultraviolet rays, protecting the cabin from fading and excess heat. Light transmission of 5% (very dark) for complete privacy.",
        "p7.meterPrice": "AED 25",
        "p7.name": "Lumistek MHP PLUS 5",
        "p7.rollPrice": "AED 650",
        "p7.type": "Tint & heat insulation film (5%)",

        /* --- Товар 8 / Product 8 --- */
        "p8.alt": "Lumistek MHP PLUS 15",
        "p8.desc": "A metallic film with a high capability of blocking infrared and ultraviolet rays, protecting the cabin from fading and excess heat. Light transmission of 15% for an elegant look and clear visibility.",
        "p8.meterPrice": "AED 25",
        "p8.name": "Lumistek MHP PLUS 15",
        "p8.rollPrice": "AED 650",
        "p8.type": "Tint & heat insulation film (15%)",

        /* --- Товар 9 / Product 9 --- */
        "p9.alt": "Lumistek MHP PLUS 35",
        "p9.desc": "A metallic film with a high capability of blocking infrared and ultraviolet rays, protecting the cabin from fading and excess heat. Light transmission of 35% - ideal for windshields and side windows in line with traffic regulations.",
        "p9.meterPrice": "AED 25",
        "p9.name": "Lumistek MHP PLUS 35",
        "p9.rollPrice": "AED 650",
        "p9.type": "Tint & heat insulation film (35%)",

        /* --- Товар 10 / Product 10 --- */
        "p10.alt": "Lumistek HEAD LIGHTS PROTECT",
        "p10.desc": "A light-brown (smoked) polyurethane film designed to protect and change the appearance of front and rear headlights. It protects against yellowing and scratches while adding a sporty touch to your car.",
        "p10.meterPrice": "On request",
        "p10.name": "Lumistek HEADLIGHTS",
        "p10.rollPrice": "On request",
        "p10.type": "Headlight protection & styling",

        /* --- Галерея / Gallery --- */
        "gallery.alt": "Partner work",
        "gallery.arrow": "👉",
        "gallery.subtitle": "See the quality and gloss of our products in real life.",
        "gallery.swipeHint": "Swipe to see more",
        "gallery.title": "Partner Work",

        /* --- Партнёры / Partners (скрытая секция) --- */
        "partners.placeholder": "Partner logos will be added here",
        "partners.title": "Our Partners in Success",

        /* --- Подвал / Footer --- */
        "footer.about": "Lumistek is the ideal solution in the field of polyurethane paint protection films. We offer a premium-quality product made in South Korea to ensure long-lasting protection for your car.",
        "footer.abudhabi": "Abu Dhabi",
        "footer.abudhabiAddr": "Al Reem Island<br>Business Tower",
        "footer.ajman": "Ajman",
        "footer.ajmanAddr": "Sheikh Ammar Street<br>&nbsp;",
        "footer.copyright": "© 2024 Lumistek. All rights reserved.",
        "footer.creditBefore": "Website by ",
        "footer.dubai": "Dubai",
        "footer.dubaiAddr": "Sheikh Zayed Road<br>Trade Centre",
        "footer.offices": "Our Representative Offices",
        "footer.privacy": "Privacy Policy",
        "footer.sharjah": "Sharjah",
        "footer.sharjahAddr": "Industrial Area<br>Business Complex",

        /* --- Cookie-баннер / Cookie banner --- */
        "cookie.accept": "Got it",
        "cookie.after": ", and to compliance with the laws of the United Arab Emirates.",
        "cookie.before": "We use cookies to improve your experience on this website. By continuing to use the site, you agree to our ",
        "cookie.link": "Privacy Policy",

        /* --- Модалка заявки / Lead form --- */
        "lead.cityLabel": "City / Emirate",
        "lead.cityPlaceholder": "Dubai",
        "lead.closeAria": "Close",
        "lead.consentAfter": " in accordance with the laws of the United Arab Emirates.",
        "lead.consentBefore": "By clicking \"Send\", you agree to the ",
        "lead.consentLink": "Personal Data Processing Policy",
        "lead.error": "❌ Something went wrong. Please try again.",
        "lead.nameLabel": "Full name",
        "lead.namePlaceholder": "Ahmed Mohammed",
        "lead.phoneLabel": "Phone number",
        "lead.phonePlaceholder": "+971 50 000 0000",
        "lead.sending": "Sending...",
        "lead.submit": "Send Request",
        "lead.subtitle": "Leave your details and our experts will contact you as soon as possible.",
        "lead.success": "✅ Your request has been sent successfully!",
        "lead.title": "Book Now",

        /* --- Политика конфиденциальности / Privacy policy --- */
        "privacy.close": "Close",
        "privacy.closeAria": "Close",
        "privacy.p1": "This Privacy Policy explains how the Lumistek website collects, uses and protects your personal data, in full compliance with Federal Decree-Law No. (45) of 2021 on the Protection of Personal Data (PDPL) in force in the United Arab Emirates.",
        "privacy.s1.text": "We collect the personal data you provide voluntarily when filling in the forms on our website (such as your name, phone number and city). Providing this data constitutes your explicit consent to its processing for the purpose for which it was collected.",
        "privacy.s1.title": "1. Collection of Personal Data",
        "privacy.s2.text": "Your data is used exclusively for the following purposes:<br>\n                — Contacting you to answer your enquiries and fulfil your requests.<br>\n                — Improving the quality of our services and offering deals that suit your needs.",
        "privacy.s2.title": "2. Purpose of Data Processing",
        "privacy.s3.text": "Under the UAE Personal Data Protection Law, you have the right to:<br>\n                — <strong>Right of access:</strong> request a copy of the personal data we hold about you.<br>\n                — <strong>Right to rectification:</strong> request correction or updating of your data if it is inaccurate.<br>\n                — <strong>Right to erasure (right to be forgotten):</strong> request deletion of your data from our records.<br>\n                — <strong>Withdrawal of consent:</strong> you have the right to withdraw your consent to data processing at any time.",
        "privacy.s3.title": "3. Your Rights as a Data Subject (under UAE Law)",
        "privacy.s4.text": "We take all necessary technical and organisational measures to protect your personal data from unauthorised access, loss or alteration, in line with approved security standards.",
        "privacy.s4.title": "4. Data Security",
        "privacy.s5.text": "The website uses cookies to improve the user experience and analyse traffic. You can manage your preferences through your browser settings.",
        "privacy.s5.title": "5. Cookies",
        "privacy.title": "Privacy and Personal Data Protection Policy (under the Laws of the UAE)",

        /* --- Корзина / Cart page (cart.html) --- */
        "cart.aria": "Shopping cart",
        "cart.breadcrumbsAria": "Breadcrumbs",
        "cart.claim.madeIn": "Made in South Korea",
        "cart.claim.shipping": "Shipped from our regional warehouses",
        "cart.clear": "Clear cart",
        "cart.clearConfirm": "Remove all items from your cart? This action cannot be undone.",
        "cart.col.product": "Product",
        "cart.col.qty": "Quantity",
        "cart.col.sum": "Amount",
        "cart.consent.after": ".",
        "cart.consent.before": "I agree to the processing of my personal data and accept the",
        "cart.consent.link": "Privacy Policy",
        "cart.delivery.carrier": "Delivery to another emirate",
        "cart.delivery.courier": "Delivery in Dubai",
        "cart.delivery.pickup": "Pickup",
        "cart.empty.cta": "Browse the catalogue",
        "cart.empty.text": "Add products from the catalogue and they will appear here. If you need help choosing a film, give us a call.",
        "cart.empty.title": "Your cart is empty",
        "cart.error.generic": "We could not send your order. Please try again or call us.",
        "cart.error.phoneLabel": "Phone:",
        "cart.form.addressLabel": "Delivery address",
        "cart.form.addressPlaceholder": "Street, building, office",
        "cart.form.cityLabel": "City",
        "cart.form.cityPlaceholder": "Dubai",
        "cart.form.commentLabel": "Order notes",
        "cart.form.commentPlaceholder": "For example: I need a VAT invoice for my company, or the best time to call",
        "cart.form.deliveryLabel": "Delivery method",
        "cart.form.footnote": "By clicking the button you confirm that the details provided are correct.",
        "cart.form.nameLabel": "Full name",
        "cart.form.namePlaceholder": "Ahmed Mohammed",
        "cart.form.phoneLabel": "Phone",
        "cart.form.phonePlaceholder": "+971 50 000 0000",
        "cart.form.submit": "Place order",
        "cart.form.subtitle": "Fields marked with an asterisk are required. Our manager will contact you to confirm the order.",
        "cart.form.title": "Checkout details",
        "cart.meta.description": "Lumistek cart: review your order, enter your contact details and place your purchase of paint protection, window tint and windshield films.",
        "cart.onRequestNote": "Some items in your order are priced on request. We will calculate their price and confirm it with you when we confirm the order.",
        "cart.order.title": "Your order",
        "cart.row.decAria": "Decrease quantity",
        "cart.row.incAria": "Increase quantity",
        "cart.row.onRequestShort": "On request",
        "cart.row.priceOnRequest": "Price on request",
        "cart.row.qtyAria": "Quantity for {name}",
        "cart.row.removeAria": "Remove {name} from cart",
        "cart.subtitle": "Review your order and fill in your contact details. Payment and delivery terms are agreed with our manager.",
        "cart.success.backCatalog": "Back to the catalogue",
        "cart.success.backHome": "Back to home",
        "cart.success.demoNote": "(demo mode — the order was not sent)",
        "cart.success.numberLabel": "Order number",
        "cart.success.questions": "Any questions? Call us:",
        "cart.success.text": "We have received your order. Our manager will contact you shortly to confirm the payment and delivery details.",
        "cart.success.title": "Thank you for your order!",
        "cart.summary.cta": "Proceed to checkout",
        "cart.summary.delivery": "Delivery",
        "cart.summary.deliveryValue": "to be agreed",
        "cart.summary.lines": "Items in order",
        "cart.summary.payNote": "Payment is made once the order has been confirmed by our manager.",
        "cart.summary.subtotal": "Goods",
        "cart.summary.title": "Total",
        "cart.summary.total": "Total",
        "cart.summary.units": "Total units",
        "cart.title": "Cart",
        "cart.unavailable.text": "We could not load the cart module. Call us and we will place your order manually.",
        "cart.unavailable.title": "The cart is temporarily unavailable",
        "nav.cart": "Cart",
        "nav.cartAria": "Cart",
        "social.telegram": "Telegram",
        "social.instagram": "Instagram",
        "social.youtube": "YouTube",
        "news.title": "Lumistek News",
        "news.subtitle": "Fresh videos from our YouTube channel: new products, tests and behind-the-scenes work. <br class=\"hidden md:block\"/>Tap a card to watch.",
        "news.prevAria": "Previous videos",
        "news.nextAria": "Next videos",
        "news.trackAria": "Latest Lumistek videos on YouTube",
        "news.watchAll": "Watch all videos on YouTube",
        "news.closeVideoAria": "Close video",
        "news.videoModalTitle": "Lumistek video",
        "news.videoIframeTitle": "Lumistek video from YouTube",
        "gallery.alt2": "Work by a Lumistek partner",
        "gallery.alt3": "Lumistek polyurethane film",
        "partners.logoAlt": "Partner logo",
        "footer.admin": "Admin",
        "footer.adminTitle": "Website control panel",

        /* --- Каталог: страница каталога / Catalogue page (catalog.html) --- */
        "footer.credit": "Site",
        "meta.title.catalog": "Lumistek Catalog - Film Protection & Tinting in the UAE",
        "meta.description.catalog": "Lumistek catalog: polyurethane paint protection film (PPF), window tinting, windshield and headlight protection. Prices per roll and per meter.",
        "catalog.breadcrumbsAria": "Breadcrumbs",
        "catalog.breadcrumbHome": "Home",
        "catalog.breadcrumbCatalog": "Catalog",
        "catalog.title": "Lumistek Catalog",
        "catalog.subtitle": "Polyurethane anti-stone films, tinting materials, windshield and headlight protection. Choose a category or search for a product by name.",
        "catalog.search": "Search the catalog",
        "catalog.filtersAria": "Catalog categories",
        "catalog.unitGroupAria": "Purchase option",
        "catalog.emptyTitle": "Nothing found",
        "catalog.emptyText": "No products match your search. Try a different keyword or choose another category.",
        "catalog.resetFilters": "Reset filters",
        "catalog.reset": "Reset filters",
        "catalog.added": "Added ✓",
        "catalog.wholesaleTitle": "Need bulk quantities or film advice?",
        "catalog.wholesaleText": "Send us a request and we will match a film to your climate, volume and budget.",
        "catalog.wholesaleCta": "Request a Quote",
        "catalog.leadTitle": "Request a Quote",
        "catalog.leadSubtitle": "Leave your details and our team will get back to you as soon as possible.",
        "catalog.leadContext": "Interested in: ",
        "catalog.leadSubmit": "Send Request",
        "catalog.leadSuccess": "✅ Your request has been sent successfully!",
    }

};
