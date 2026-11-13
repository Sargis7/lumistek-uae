/**
 * ============================================================================
 *  LUMISTEK — КАТАЛОГ ТОВАРОВ
 * ============================================================================
 *
 *  ЭТО ФАЙЛ С ТОВАРАМИ. Его читают: каталог, корзина и главная страница.
 *
 *  Обычно править его руками НЕ нужно — для этого есть админка:
 *      https://lumistek.ru/adminpanel/
 *
 *  Но если админка недоступна, можно править и здесь, прямо на GitHub:
 *  нажмите на файл → карандаш (Edit) → правьте → Commit changes.
 *
 *  ПРАВИЛА:
 *   1. Не удаляйте скобки { } [ ] , :  — сайт сломается.
 *   2. Текст — в кавычках: 'вот так'.
 *   3. После каждого значения запятая, КРОМЕ последнего в списке.
 *   4. id у товара должен быть уникальным (любая латиница/цифры).
 *
 *  ЧТО ЗНАЧИТ КАЖДОЕ ПОЛЕ:
 *   id          — уникальный код товара. Не меняйте у существующих!
 *   category    — раздел каталога: 'ppf' | 'tint' | 'windshield' | 'headlight'
 *   name        — название на карточке
 *   subtitle    — подпись под названием (мелким шрифтом)
 *   description — описание. Можно вставлять <br><br> для абзацев.
 *   image       — путь к фото. Положите файл в папку img/products/
 *   badge       — цветная плашка: 'brand-cyan' | 'brand-pink' | 'brand-blue'
 *   units       — варианты покупки:
 *                   key   — код варианта (не меняйте у существующих)
 *                   label — что видит покупатель
 *                   price — цена в рублях (число, без пробелов и знака ₽)
 *                   note  — подпись мелким шрифтом (можно убрать строкой note: '')
 *   spec        — короткие характеристики внизу карточки (список строк)
 *   popular     — true, чтобы показать товар в блоке «Хиты» на главной
 *
 * ============================================================================
 */

window.LUMISTEK_CATALOG = {

    /* Дата последнего изменения — обновляется админкой автоматически. */
    updated: '2026-11-12',

    /* ------------------------------------------------------------------
     *  РАЗДЕЛЫ КАТАЛОГА
     *  Порядок здесь = порядок кнопок-фильтров в каталоге.
     * ------------------------------------------------------------------ */
    categories: [
        { key: 'ppf',        title: 'Антигравийные (PPF)', titleEn: 'Paint protection film (PPF)', titleAr: 'واقيات من الحصى (PPF)' },
        { key: 'tint',       title: 'Тонировочные', titleEn: 'Tinting', titleAr: 'أفلام تظليل' },
        { key: 'windshield', title: 'Защита лобового стекла', titleEn: 'Windshield protection', titleAr: 'حماية الزجاج الأمامي' },
        { key: 'headlight',  title: 'Защита и стайлинг оптики', titleEn: 'Protection and styling of lights', titleAr: 'حماية المصابيح الأمامية وتنسيقها' }
    ],


    /* ------------------------------------------------------------------
     *  ТОВАРЫ
     * ------------------------------------------------------------------ */
    products: [

        /* ============================ PPF ============================ */
        {
            id: 'clear-ppf',
            category: 'ppf',
            name: 'Lumistek Clear PPF',
            nameEn: 'Lumistek Clear PPF',
            nameAr: 'Lumistek Clear PPF',
            subtitle: 'Глянцевая · 190 микрон',
            subtitleEn: 'Glossy · 190 microns',
            subtitleAr: 'لامع · 190 ميكرون',
            image: 'img/products/clear-ppf.jpg',
            badge: 'brand-cyan',
            popular: true,
            hidden: false,
            description: 'Классическая прозрачная полиуретановая пленка толщиной 190 микрон. Обеспечивает максимальный блеск, мощный гидрофоб и невидимую защиту кузова.',
            descriptionEn: 'Classic transparent polyurethane film with a thickness of 190 microns. Provides maximum gloss, powerful hydrophobicity, and invisible body protection.',
            descriptionAr: 'طبقة بولي يوريثان شفافة كلاسيكية بسماكة 190 ميكرون. توفر أقصى قدر من اللمعان، وخصائص طاردة للماء قوية، وحماية غير مرئية لهيكل السيارة.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 0, note: 'Цена по запросу', noteEn: 'Price On Call', noteAr: 'السعر عند الطلب' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 0, note: 'Цена по запросу', noteEn: 'Price On Call', noteAr: 'السعر عند الطلب' }
            ],
            spec: ['Толщина 190 мкм', 'Глянцевая', 'Гидрофобный слой'],
            specEn: ['Thickness 190 µm', 'Glossy', 'Hydrophobic layer'],
            specAr: ['السماكة 190 ميكرومتر', 'لامعة', 'طبقة غير ماصة للماء']
        },

        {
            id: 'clear-pro',
            category: 'ppf',
            name: 'Lumistek Clear Pro',
            nameEn: 'Lumistek Clear Pro',
            nameAr: 'Lumistek Clear Pro',
            subtitle: 'Твёрдый TOP COAT',
            subtitleEn: 'Hard TOP COAT',
            subtitleAr: 'طبقة علوية صلبة',
            image: 'img/products/clear-pro.jpg',
            badge: 'brand-cyan',
            popular: true,
            hidden: false,
            description: 'CLEAR PRO относится к числу премиальных материалов, отличается наличием керамического слоя Top Coat, который делает её устойчивой в отношении самых агрессивных внешних факторов. Идеально подойдёт для белых и светлых цветов и для стран с жарким и агрессивным климатом.',
            descriptionEn: 'CLEAR PRO is one of the premium materials, distinguished by its ceramic Top Coat layer, which makes it resistant to the most aggressive external factors. It is ideal for white and light colors and for countries with hot and harsh climates.',
            descriptionAr: 'تُعد CLEAR PRO من بين المواد الممتازة، وتتميز بوجود طبقة سيراميك Top Coat، مما يجعلها مقاومة لأشد العوامل الخارجية قسوة. وهي مثالية للألوان البيضاء والفاتحة وللبلدان ذات المناخ الحار والقاسي.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 2890, note: 'AED 189 за метр', noteEn: 'AED 189 per meter', noteAr: '189 درهم للمتر' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 199, note: '', noteEn: '', noteAr: '' }
            ],
            spec: ['Керамический Top Coat', 'Не желтеет', 'Для жаркого климата'],
            specEn: ['Ceramic Top Coat', 'Non-yellowing.', 'For hot climates'],
            specAr: ['طبقة علوية من السيراميك', 'لا يتحول إلى اللون الأصفر', 'للمناخ الحار']
        },

        {
            id: 'mate-protection',
            category: 'ppf',
            name: 'Lumistek Mate Protection',
            nameEn: 'Lumistek Mate Protection',
            nameAr: 'حماية لومستيك مات (Lumistek Mate Protection)',
            subtitle: 'Матовый сатин',
            subtitleEn: 'Matte satin',
            subtitleAr: 'ساتان غير لامع',
            image: 'img/products/mate-protection.jpg',
            badge: 'brand-pink',
            popular: true,
            hidden: false,
            description: 'Есть и матовые антигравийные плёнки. Они предназначены как для авто, окрашенных матовой краской, так и автомобилей любого цвета кузова, чтобы сохранить родной цвет, но сделать его матовым. Одной из таких плёнок является премиальная антигравийная матовая плёнка LUMISTEK MATTE PROTECTION.',
            descriptionEn: 'There are also matte anti-gravel films. They are designed for both cars painted with matte paint and cars of any body color to preserve the original color but make it matte. One such film is the premium matte stone chip protection film LUMISTEK MATTE PROTECTION.',
            descriptionAr: 'توجد أيضًا أشرطة حماية من الحصى غير لامعة. وهي مصممة لكل من السيارات المطلية بطلاء غير لامع والسيارات ذات أي لون هيكل، وذلك للحفاظ على اللون الأصلي ولكن بجعله غير لامع. أحد هذه الأغشية هو الغشاء غير اللامع الممتاز للحماية من الحصى LUMISTEK MATTE PROTECTION.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 3390, note: 'AED 229 за метр', noteEn: 'AED 229 per meter', noteAr: '229 درهم للمتر' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 239, note: '', noteEn: '', noteAr: '' }
            ],
            spec: ['Матовый сатин', 'Антигравийная', 'Сохраняет цвет кузова'],
            specEn: ['Matte satin', 'Anti-gravel', 'Preserves the color of the body'],
            specAr: ['ساتان غير لامع', 'مقاومة للحصى', 'يحافظ على لون هيكل السيارة']
        },

        {
            id: 'clear-ultra-pro',
            category: 'ppf',
            name: 'Lumistek Clear Ultra Pro',
            nameEn: 'Lumistek Clear Ultra Pro',
            nameAr: 'لوميستيك كلير ألترا برو',
            subtitle: 'Мягкий TOP COAT · 215 микрон',
            subtitleEn: 'Soft TOP COAT · 215 microns',
            subtitleAr: 'طبقة علوية ناعمة · 215 ميكرون',
            image: 'img/products/clear-ultra-pro.jpg',
            badge: 'brand-cyan',
            popular: false,
            hidden: false,
            description: 'Идеальный продукт, когда 190 мкм недостаточно для обеспечения высокого уровня защиты. Именно поэтому специалисты компании Lumistek взялись за разработку усиленной «брони» для автомобилей. Результатом долгой и кропотливой работы стало появление уникального материала, получившего название Lumistek Clear Ultra Pro. Отличительная черта этой антигравийной плёнки заключается в повышенной толщине — 215 мкм, без лайнера.',
            descriptionEn: 'The ideal product when 190 microns is not enough to provide a high level of protection. That\'s why Lumistek experts set out to develop reinforced "armor" for cars. The result of long and painstaking work was the emergence of a unique material called Lumistek Clear Ultra Pro. The distinctive feature of this anti-gravel film is its increased thickness of 215 microns, without a liner.',
            descriptionAr: 'المنتج المثالي عندما لا يكون 190 ميكرومتر كافيًا لتوفير مستوى عالٍ من الحماية. لهذا السبب شرع خبراء شركة Lumistek في تطوير "درع" معزز للسيارات. وكانت نتيجة العمل الطويل والشاق ظهور مادة فريدة من نوعها أُطلق عليها اسم Lumistek Clear Ultra Pro. تتمثل السمة المميزة لطبقة الحماية من الحصى هذه في سُمكها الزائد — 215 ميكرومتر، بدون طبقة حماية.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 3590, note: 'AED 239 за метр', noteEn: 'AED 239 per meter', noteAr: '239 درهم للمتر' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 239, note: '', noteEn: '', noteAr: '' }
            ],
            spec: ['Толщина 215 мкм', 'Мягкий Top Coat', 'Без лайнера'],
            specEn: ['Thickness 215 µm', 'Soft Top Coat', 'Without a liner'],
            specAr: ['السماكة 215 ميكرومتر', 'طبقة طلاء علوية ناعمة', 'بدون بطانة']
        },

        {
            id: 'ultra-pro-one',
            category: 'ppf',
            name: 'Lumistek Ultra Pro One',
            nameEn: 'Lumistek Ultra Pro One',
            nameAr: 'لوميستيك ألترا برو ون',
            subtitle: 'Твёрдый TOP COAT · 215 микрон',
            subtitleEn: 'Hard TOP COAT · 215 microns',
            subtitleAr: 'طبقة علوية صلبة · 215 ميكرون',
            image: 'img/products/ultra-pro-one.jpg',
            badge: 'brand-cyan',
            popular: false,
            hidden: false,
            description: 'Отличительная черта LUMISTEK ULTRA PRO ONE — твёрдый TOP COAT и толщина 215 мкм. Защита от химического воздействия реагентов, поэтому плёнка не пожелтеет со временем. Идеально подходит для стран с агрессивно жарким климатом.',
            descriptionEn: 'The distinctive feature of LUMISTEK ULTRA PRO ONE is its hard TOP COAT and a thickness of 215 microns. Protection against the chemical effects of reagents, so the film will not yellow over time. Ideal for countries with an aggressively hot climate.',
            descriptionAr: 'السمة المميزة لـ LUMISTEK ULTRA PRO ONE هي طبقة التشطيب الصلبة وسُمكها البالغ 215 ميكرومتر. حماية من التأثيرات الكيميائية للمواد الكاشفة، وبالتالي لن يصفر اللون مع مرور الوقت. مثالية للبلدان ذات المناخ الحار القاسي.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 3990, note: 'AED 269 за метр', noteEn: 'AED 269 per meter', noteAr: '269 درهم للمتر' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 269, note: '', noteEn: '', noteAr: '' }
            ],
            spec: ['Толщина 215 мкм', 'Твёрдый Top Coat', 'Стойкость к реагентам'],
            specEn: ['Thickness 215 microns', 'Hard Top Coat', 'Durability to Chemical Agents'],
            specAr: ['السماكة 215 ميكرومتر', 'طبقة علوية صلبة', 'مقاومة المواد الكيميائية']
        },

        /* ========================= ТОНИРОВКА ========================= */
        {
            id: 'mhp-plus',
            category: 'tint',
            name: 'Lumistek MHP Plus',
            nameEn: 'Lumistek MHP Plus',
            nameAr: 'لوميستيك إم إتش بي بلس (Lumistek MHP Plus)',
            subtitle: 'Тонировочная · 5% / 15% / 35%',
            subtitleEn: 'Tinting · 5% / 15% / 35%',
            subtitleAr: 'تظليل · 5% / 15% / 35%',
            image: 'img/products/mhp-plus.jpg',
            badge: 'brand-blue',
            popular: true,
            hidden: false,
            description: '',
            descriptionEn: '',
            descriptionAr: '',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 749, note: 'AED 49 per meter', noteEn: 'AED 49 per meter', noteAr: '49 درهم للمتر' },
                { key: 'm5', label: 'Отрез · светопропускание 5%', labelEn: 'Cut · light transmittance 5%', labelAr: 'قطعة قماش · نفاذية الضوء 5%', price: 49, note: 'цена за метр', noteEn: 'Price per meter', noteAr: 'سعر المتر' },
                { key: 'm15', label: 'Отрез · светопропускание 15%', labelEn: 'Cut · light transmittance 15%', labelAr: 'قطعة قماش · نفاذية الضوء 15%', price: 49, note: 'цена за метр', noteEn: 'Price per meter', noteAr: 'سعر المتر' },
                { key: 'm35', label: 'Отрез · светопропускание 35%', labelEn: 'Cut · light transmittance 35%', labelAr: 'قطعة قماش · نسبة نفاذية الضوء 35%', price: 49, note: 'цена за метр', noteEn: 'Price per meter', noteAr: 'السعر للمتر' }
            ],
            spec: ['Металлизированная', 'Задерживает ИК и УФ', '5% / 15% / 35%'],
            specEn: ['Metallized', 'Blocks IR and UV radiation', '5% / 15% / 35%'],
            specAr: ['معدني', 'يحجب الأشعة تحت الحمراء والأشعة فوق البنفسجية', '5% / 15% / 35%']
        },

        /* =================== ЗАЩИТА ЛОБОВОГО СТЕКЛА =================== */
        {
            id: 'windshield-protection',
            category: 'windshield',
            name: 'Lumistek Windshield Protection',
            nameEn: 'Lumistek Windshield Protection',
            nameAr: 'حماية الزجاج الأمامي من Lumistek',
            subtitle: 'Защита лобового стекла',
            subtitleEn: 'Windshield protection',
            subtitleAr: 'حماية الزجاج الأمامي',
            image: 'img/products/windshield-protection.jpg',
            badge: 'brand-cyan',
            popular: true,
            hidden: false,
            description: 'Прозрачная полиуретановая плёнка для стёкол LUMISTEK WINDSHIELD PROTECTION — одно из новейших инновационных решений в области защитных материалов для защиты лобовых стёкол транспортного средства. Это один из лучших способов защитить лобовое стекло от сколов, царапин, трещин и прочих дефектов.',
            descriptionEn: 'LUMISTEK WINDSHIELD PROTECTION transparent polyurethane film for windshields is one of the latest innovative solutions in the field of protective materials for safeguarding vehicle windshields. This is one of the best ways to protect the windshield from chips, scratches, cracks, and other defects.',
            descriptionAr: 'يُعدّ غشاء البولي يوريثين الشفاف للزجاج LUMISTEK WINDSHIELD PROTECTION أحد أحدث الحلول المبتكرة في مجال المواد الواقية لحماية الزجاج الأمامي للمركبات. وهي إحدى أفضل الطرق لحماية الزجاج الأمامي من التشققات والخدوش والشقوق وغيرها من العيوب.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 4690, note: 'AED 319 за метр', noteEn: 'AED 319 per meter', noteAr: '319 درهم للمتر' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 319, note: '', noteEn: '', noteAr: '' }
            ],
            spec: ['Прозрачная', 'Защита от сколов', 'Made in Korea'],
            specEn: ['Clear', 'Protection against chipping', 'Made in Korea'],
            specAr: ['شفافة', 'الحماية من التشققات', 'صنع في كوريا']
        },

        /* =========================== ОПТИКА =========================== */
        {
            id: 'headlight-protect',
            category: 'headlight',
            name: 'Lumistek Head Lights Protect',
            nameEn: 'Lumistek Headlights Protect',
            nameAr: 'واقي المصابيح الأمامية من لوميستيك',
            subtitle: 'Для стайлинга оптики',
            subtitleEn: 'For styling headlights and taillights',
            subtitleAr: 'لتصميم المصابيح الأمامية',
            image: 'img/products/headlight-protect.jpg',
            badge: 'brand-pink',
            popular: false,
            hidden: false,
            description: 'Светло-коричневая полиуретановая плёнка для оптики. Придаёт фарам глубокий затемнённый оттенок и одновременно защищает их от мелких сколов и пескоструя.',
            descriptionEn: 'Light brown polyurethane film for optics. It gives the headlights a deep, darkened tint while protecting them from small chips and sandblasting.',
            descriptionAr: 'طبقة بولي يوريثان بلون بني فاتح للأجزاء البصرية. تمنح المصابيح الأمامية لونًا داكنًا عميقًا وفي الوقت نفسه تحميها من الخدوش الصغيرة والتآكل الناجم عن الرمال.',
            units: [
                { key: 'roll', label: 'Рулон 1,52 × 15 м', labelEn: 'Roll 1.52 × 15 m', labelAr: 'لفة 1.52 × 15 م', price: 0, note: 'Цена по запросу', noteEn: 'Price On Call', noteAr: 'السعر عند الطلب' },
                { key: 'meter', label: 'За метр (1,52 м шириной)', labelEn: 'Per meter (1.52 m wide)', labelAr: 'للمتر (عرض 1.52 متر)', price: 0, note: 'Цена по запросу', noteEn: 'Price On Call', noteAr: 'السعر عند الطلب' }
            ],
            spec: ['Светло-коричневая', 'Для фар', '4 mil'],
            specEn: ['Light Brown', 'For headlights', '4 mil'],
            specAr: ['بني فاتح', 'للمصابيح الأمامية', '4 مل']
        }

    ]
};
