/**
 * ============================================================================
 *  LUMISTEK — РЕНДЕР ФИЛИАЛОВ
 * ============================================================================
 *
 *  Берет данные из assets/js/offices-data.js (window.LUMISTEK_OFFICES)
 *  и рисует их в подвале сайта. Заодно подставляет главный телефон
 *  во все места с атрибутом data-office-phone.
 *
 *  Почему через JS, а не готовой разметкой: филиалы добавляются
 *  из админ-панели, и переписывать ради этого index.html каждый раз
 *  не нужно. Плюс переводы (ru/en/ar) переключаются без перезагрузки.
 *
 *  ЕСЛИ ФАЙЛА ДАННЫХ НЕТ или список пуст — ничего не рисуем,
 *  разметка в подвале остаётся как есть. Сайт не ломается.
 * ============================================================================
 */

(function (window, document) {
    'use strict';

    var DATA = window.LUMISTEK_OFFICES || null;

    /* Иконка булавки — та же, что была в разметке подвала. */
    var PIN = '<svg class="w-5 h-5 text-brand-cyan me-2" fill="none" stroke="currentColor" ' +
        'viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" ' +
        'stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 ' +
        '0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" ' +
        'stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>';

    function lang() {
        if (window.LumistekLang && window.LumistekLang.get) return window.LumistekLang.get();
        return 'en';
    }

    /* Выбирает поле на нужном языке с откатом на английский, затем русский. */
    function pick(obj, base) {
        var l = lang();
        var suffix = l === 'ar' ? 'Ar' : (l === 'ru' ? '' : 'En');
        var v = obj[base + suffix];
        if (v) return v;
        v = obj[base + 'En'];
        if (v) return v;
        return obj[base] || '';
    }

    /* Телефон для tel: — только цифры и плюс. */
    function telHref(phone) {
        return 'tel:' + String(phone || '').replace(/[^\d+]/g, '');
    }

    function escapeHtml(s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /*
     * Разметка одного филиала. Структура и классы совпадают с прежней
     * статичной разметкой, поэтому стили Tailwind применяются как раньше.
     * Адрес разрешено писать с <br>, поэтому он не экранируется целиком —
     * исключение делаем только для подписи и телефона.
     */
    function officeHtml(o) {
        var city = escapeHtml(pick(o, 'city'));
        var addr = pick(o, 'address');
        var phone = escapeHtml(o.phone || '');
        var note = o.phoneNote ? '<div class="text-[11px] text-gray-500 mt-1">' +
            escapeHtml(o.phoneNote) + '</div>' : '';

        return '<div class="office-card" data-office-id="' + escapeHtml(o.id) + '">' +
            '<div class="flex items-center justify-center sm:justify-start mb-2">' +
            PIN + '<h5 class="text-white font-bold text-lg">' + city + '</h5></div>' +
            '<p class="text-gray-400 text-sm mb-3">' + addr + '</p>' +
            (phone
                ? '<a href="' + telHref(o.phone) + '" dir="ltr" ' +
                  'class="text-brand-cyan hover:text-white transition-colors font-medium text-sm">' +
                  phone + '</a>'
                : '') +
            note +
            '</div>';
    }

    function render() {
        if (!DATA || DATA.show === false) return false;

        var list = (DATA.offices || []).filter(function (o) {
            return o && o.visible !== false;
        });
        if (!list.length) return false;

        var grid = document.getElementById('offices-grid');
        if (!grid) return false;

        grid.innerHTML = list.map(officeHtml).join('');
        return true;
    }

    /* Главный телефон — во все места с data-office-phone. */
    function paintMainPhone() {
        var phone = DATA && DATA.mainPhone;
        if (!phone) return;

        var els = document.querySelectorAll('[data-office-phone]');
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            if (el.tagName === 'A') el.setAttribute('href', telHref(phone));
            el.textContent = phone;
        }
    }

    /*
     * Блок «Офисы» целиком можно скрыть из админки (show: false).
     * Тогда прячем и заголовок, и сетку.
     */
    function toggleSection() {
        var wrap = document.getElementById('offices-section');
        if (!wrap) return;
        var shouldShow = !!(DATA && DATA.show !== false);
        wrap.classList.toggle('hidden', !shouldShow);
    }

    function boot() {
        paintMainPhone();
        render();
        toggleSection();

        /* При смене языка перерисовываем — города и адреса двуязычные. */
        document.addEventListener('lumistek:langchange', function () {
            render();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }

    /* Доступно для проверки из консоли и из тестов. */
    window.LumistekOffices = {
        render: render,
        pick: pick
    };

})(window, document);
