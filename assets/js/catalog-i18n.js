/**
 * ============================================================================
 *  LUMISTEK (UAE) — ЛОКАЛИЗАЦИЯ КАТАЛОГА
 * ============================================================================
 *
 *  Что делает этот файл:
 *
 *  В каталоге рядом с каждым русским текстом лежит английский и арабский:
 *      name / nameEn / nameAr
 *      subtitle / subtitleEn / subtitleAr
 *      description / descriptionEn / descriptionAr
 *      units[].label / labelEn / labelAr
 *      units[].note  / noteEn  / noteAr
 *      spec[] / specEn[] / specAr[]
 *
 *  Функция lp(товар) возвращает те же поля, но уже на текущем языке сайта.
 *  Если перевода нет — возвращается русский текст, чтобы карточка
 *  никогда не была пустой.
 *
 *  Подключается ПОСЛЕ catalog.js и lang.js, ПЕРЕД остальными скриптами.
 * ============================================================================= */

(function () {
    'use strict';

    /* Какой язык считается текущим. Если переключателя нет — русский
     * (это случай, когда файл положили на сайт России). */
    function currentLang() {
        if (window.LumistekLang && typeof window.LumistekLang.get === 'function') {
            return window.LumistekLang.get();
        }
        var root = document.documentElement;
        var attr = root.getAttribute('lang');
        return (attr === 'en' || attr === 'ar') ? attr : 'ru';
    }

    /* Достаёт перевод поля. Английский/арабский с заглавной буквы. */
    function pick(obj, base, lang, fallback) {
        if (!obj) return fallback || '';
        var suffix = lang === 'en' ? 'En' : (lang === 'ar' ? 'Ar' : '');
        if (suffix) {
            var v = obj[base + suffix];
            if (v !== undefined && v !== null && String(v).trim() !== '') return v;
        }
        var ru = obj[base];
        if (ru !== undefined && ru !== null && String(ru).trim() !== '') return ru;
        return fallback !== undefined ? fallback : '';
    }

    /* Перевод массива строк выравниванием по индексу (spec, specEn, specAr). */
    function pickList(obj, base, lang) {
        var ru = Array.isArray(obj[base]) ? obj[base] : [];
        var suffix = lang === 'en' ? 'En' : (lang === 'ar' ? 'Ar' : '');
        var tr = suffix && Array.isArray(obj[base + suffix]) ? obj[base + suffix] : [];
        var max = Math.max(ru.length, tr.length);
        var out = [];
        for (var i = 0; i < max; i++) {
            var v = tr[i];
            if (v === undefined || v === null || String(v).trim() === '') v = ru[i];
            if (v !== undefined && v !== null && String(v).trim() !== '') out.push(v);
        }
        return out;
    }

    /**
     * Переводит товар на текущий язык.
     * Возвращает НОВЫЙ объект — исходный каталог не меняется, чтобы
     * переключение языка работало многократно без накопления ошибок.
     */
    function localizeProduct(p, lang) {
        if (!p) return p;
        language = lang || currentLang();
        var units = (Array.isArray(p.units) ? p.units : []).map(function (u) {
            var copy = {};
            for (var k in u) {
                if (Object.prototype.hasOwnProperty.call(u, k)) copy[k] = u[k];
            }
            copy.label = pick(u, 'label', language);
            copy.note = pick(u, 'note', language, '');
            return copy;
        });

        var out = {};
        for (var key in p) {
            if (Object.prototype.hasOwnProperty.call(p, key)) out[key] = p[key];
        }
        out.name = pick(p, 'name', language);
        out.subtitle = pick(p, 'subtitle', language, '');
        out.description = pick(p, 'description', language, '');
        out.units = units;
        out.spec = pickList(p, 'spec', language);
        return out;
    }

    /* Перевод категории. */
    function localizeCategory(c, lang) {
        if (!c) return c;
        var l = lang || currentLang();
        return {
            key: c.key,
            title: pick(c, 'title', l),
            titleRu: c.title || ''
        };
    }

    var language = 'ru';

    /**
     * Возвращает весь каталог, переведённый на нужный язык.
     * Скрытые товары здесь не отсеиваются — это забота вызывающего кода.
     */
    function localizeCatalog(catalog, lang) {
        var cat = catalog || window.LUMISTEK_CATALOG || { categories: [], products: [] };
        var l = lang || currentLang();
        return {
            updated: cat.updated,
            categories: (cat.categories || []).map(function (c) { return localizeCategory(c, l); }),
            products: (cat.products || []).map(function (p) { return localizeProduct(p, l); })
        };
    }

    /**
     * Текст «Цена по запросу» и подобные служебные подписи.
     * Словарь небольшой, но он нужен в трёх местах (каталог, корзина,
     * оформление заказа), поэтому живёт здесь, а не в каждой странице.
     */
    var UI = {
        ru: {
            onRequest: 'Цена по запросу',
            addToCart: 'В корзину',
            inCart: 'В корзине',
            details: 'Подробнее',
            collapse: 'Свернуть',
            askPrice: 'Уточнить цену',
            price: 'Цена',
            all: 'Все',
            unit: 'Вариант покупки',
            from: 'от'
        },
        en: {
            onRequest: 'Price on request',
            addToCart: 'Add to cart',
            inCart: 'In cart',
            details: 'Details',
            collapse: 'Collapse',
            askPrice: 'Request price',
            price: 'Price',
            all: 'All',
            unit: 'Purchase option',
            from: 'from'
        },
        ar: {
            onRequest: 'السعر عند الطلب',
            addToCart: 'أضف إلى السلة',
            inCart: 'في السلة',
            details: 'التفاصيل',
            collapse: 'إخفاء',
            askPrice: 'اطلب السعر',
            price: 'السعر',
            all: 'الكل',
            unit: 'خيار الشراء',
            from: 'ابتداءً من'
        }
    };

    function t(key, lang) {
        var l = lang || currentLang();

        // 1. Сначала — короткие подписи этой страницы (таблица UI выше).
        var table = UI[l] || UI.ru;
        if (table[key] !== undefined) return table[key];
        if (UI.ru[key] !== undefined) return UI.ru[key];

        // 2. Затем — общий словарь сайта (assets/js/i18n.js). Нужен потому,
        //    что в каталоге часть текста печатается из JS, а не разметкой:
        //    без этого шага такие вызовы возвращали бы сам ключ.
        var dict = window.LUMISTEK_I18N;
        if (dict) {
            var full = dict[l];
            if (full && full[key] !== undefined) return full[key];
            var fallback = dict.en || dict.ru;
            if (fallback && fallback[key] !== undefined) return fallback[key];
        }

        return key;
    }

    /* Валюта: в России рубли, в ОАЭ дирхамы. */
    function currency(lang) {
        return (lang || currentLang()) === 'ru' ? '₽' : 'AED';
    }

    window.LumistekI18n = {
        lang: currentLang,
        pick: pick,
        pickList: pickList,
        product: localizeProduct,
        category: localizeCategory,
        catalog: localizeCatalog,
        t: t,
        currency: currency
    };
})();
