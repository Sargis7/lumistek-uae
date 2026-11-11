/* =============================================================================
   LUMISTEK (UAE) — ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА  /  LANGUAGE SWITCHER
   -----------------------------------------------------------------------------
   Что делает этот файл:
     • Подставляет тексты из словаря (assets/js/i18n.js) в разметку.
     • Переключает направление страницы: арабский -> справа налево (RTL),
       английский -> слева направо (LTR).
     • Запоминает выбор пользователя в браузере (localStorage),
       чтобы при следующем визите открылся тот же язык.

   Подключается в <head> index.html ПОСЛЕ i18n.js.

   Менять этот файл не нужно. Все тексты — в i18n.js.
   ============================================================================= */

(function () {
    "use strict";

    var STORAGE_KEY = "lumistek_ae_lang";
    var DEFAULT_LANG = "ar";
    var SUPPORTED = ["ar", "en"];

    /* ---------- вспомогательное ---------- */

    function dict() {
        return window.LUMISTEK_I18N || { ar: {}, en: {} };
    }

    // Достаёт строку по ключу. Если перевода нет — возвращает null,
    // чтобы мы не затирали существующий текст.
    function lookup(lang, key) {
        var d = dict();
        var table = d[lang];
        if (!table) return null;
        var v = table[key];
        return (v === undefined || v === null) ? null : v;
    }

    // Правильная форма множественного числа не нужна — все строки готовые.

    function normalize(lang) {
        lang = String(lang || "").toLowerCase().slice(0, 2);
        return SUPPORTED.indexOf(lang) >= 0 ? lang : DEFAULT_LANG;
    }

    function readStored() {
        try {
            return normalize(localStorage.getItem(STORAGE_KEY));
        } catch (e) {
            return DEFAULT_LANG;
        }
    }

    function writeStored(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* приватный режим — просто не сохраняем */
        }
    }

    /* ---------- применение переводов ---------- */

    function applyToElement(el, lang) {
        // data-i18n -> textContent
        var key = el.getAttribute("data-i18n");
        if (key) {
            var v = lookup(lang, key);
            if (v !== null) el.textContent = v;
        }
        // data-i18n-html -> innerHTML (для текстов с <br>, <strong> и т.п.)
        key = el.getAttribute("data-i18n-html");
        if (key) {
            var vh = lookup(lang, key);
            if (vh !== null) el.innerHTML = vh;
        }
        // data-i18n-placeholder
        key = el.getAttribute("data-i18n-placeholder");
        if (key) {
            var vp = lookup(lang, key);
            if (vp !== null) el.setAttribute("placeholder", vp);
        }
        // data-i18n-alt
        key = el.getAttribute("data-i18n-alt");
        if (key) {
            var va = lookup(lang, key);
            if (va !== null) el.setAttribute("alt", va);
        }
        // data-i18n-aria
        key = el.getAttribute("data-i18n-aria");
        if (key) {
            var vr = lookup(lang, key);
            if (vr !== null) el.setAttribute("aria-label", vr);
        }
        // data-i18n-content (meta description и подобное)
        key = el.getAttribute("data-i18n-content");
        if (key) {
            var vc = lookup(lang, key);
            if (vc !== null) el.setAttribute("content", vc);
        }
        // data-i18n-title (подсказка при наведении)
        key = el.getAttribute("data-i18n-title");
        if (key) {
            var vt = lookup(lang, key);
            if (vt !== null) el.setAttribute("title", vt);
        }
    }

    // Кнопки-переключатели: подсветить активную
    function updateSwitchers(lang) {
        var btns = document.querySelectorAll("[data-lang-btn]");
        for (var i = 0; i < btns.length; i++) {
            var b = btns[i];
            var isActive = b.getAttribute("data-lang-btn") === lang;
            b.classList.toggle("is-active", isActive);
            b.setAttribute("aria-pressed", isActive ? "true" : "false");
        }
    }

    // Галерея — горизонтальная прокрутка: направление тоже зеркалим
    function updateGalleryDirection(lang) {
        var track = document.getElementById("gallery-track");
        if (track) track.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    }

    var currentLang = DEFAULT_LANG;

    function applyLang(lang, opts) {
        lang = normalize(lang);
        opts = opts || {};

        var root = document.documentElement;

        // переключаем направление и языковые классы
        root.setAttribute("lang", lang);
        root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        root.classList.remove("lang-ar", "lang-en");
        root.classList.add("lang-" + lang);

        // переводим разметку
        var nodes = document.querySelectorAll(
            "[data-i18n],[data-i18n-html],[data-i18n-placeholder]," +
            "[data-i18n-alt],[data-i18n-aria],[data-i18n-content],[data-i18n-title]"
        );
        for (var i = 0; i < nodes.length; i++) {
            applyToElement(nodes[i], lang);
        }

        // title страницы
        var t = lookup(lang, "meta.title");
        if (t !== null) document.title = t;

        updateSwitchers(lang);
        updateGalleryDirection(lang);

        currentLang = lang;
        if (opts.persist !== false) writeStored(lang);

        // сообщаем остальным скриптам (слайдер, форма), что язык сменился
        if (opts.silent !== true && typeof CustomEvent === "function") {
            document.dispatchEvent(new CustomEvent("lumistek:langchange", {
                detail: { lang: lang, dir: lang === "ar" ? "rtl" : "ltr" }
            }));
        }
    }

    /* ---------- публичный API ---------- */
    window.LumistekLang = {
        get: function () { return currentLang; },
        set: function (lang) { applyLang(lang); },
        toggle: function () { applyLang(currentLang === "ar" ? "en" : "ar"); },
        // перевод строки из JS: LumistekLang.t('lead.success')
        t: function (key) {
            var v = lookup(currentLang, key);
            if (v !== null) return v;
            var fallback = lookup(DEFAULT_LANG, key);
            return fallback !== null ? fallback : key;
        }
    };

    /* ---------- обработчики кнопок ---------- */

    function bindSwitchers() {
        var btns = document.querySelectorAll("[data-lang-btn]");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function (e) {
                e.preventDefault();
                applyLang(this.getAttribute("data-lang-btn"));
            });
        }
    }

    /* ---------- запуск ---------- */

    function boot() {
        bindSwitchers();
        // silent: применяем сохранённый язык без события смены —
        // остальные скрипты ещё не успели подписаться
        applyLang(readStored(), { persist: false, silent: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
