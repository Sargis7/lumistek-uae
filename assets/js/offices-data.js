/**
 * ============================================================================
 *  LUMISTEK UAE — ФИЛИАЛЫ И КОНТАКТЫ
 * ============================================================================
 *
 *  ЭТОТ ФАЙЛ ОБНОВЛЯЕТСЯ АВТОМАТИЧЕСКИ ИЗ АДМИН-ПАНЕЛИ.
 *  Руками править можно, но проще через /adminpanel/ → вкладка «Филиалы»:
 *  там есть добавить, изменить, скрыть и удалить.
 *
 *  ГЛАВНЫЙ НОМЕР (телефон в шапке и подвале) — поле mainPhone.
 *  Он же подставляется в форму заказа как номер для звонка,
 *  если у филиала не задан свой телефон.
 *
 *  СТРУКТУРА:
 *    mainPhone  — номер компании, показывается в шапке и подвале
 *    show       — true/false: показывать ли блок филиалов вообще
 *    offices[]  — список филиалов, порядок как на сайте
 *      id       — латиницей, без пробелов, не менять после создания
 *      city     — название города по-русски (для админки)
 *      cityEn   — название по-английски
 *      cityAr   — название по-арабски
 *      address  — адрес по-русски (для админки)
 *      addressEn/addressAr — адрес на двух языках сайта
 *      phone    — телефон в формате +971...
 *      phoneNote — подпись под телефоном (необязательно)
 *      visible  — false: филиал скрыт на сайте, но не удалён
 *
 *  ТЕЛЕФОН В ФОРМАТЕ ОАЭ: +971 4 XXX XXXX (город) или +971 5X XXX XXXX.
 *  Пока стоит шаблон +971 4 000 0000 — замените на настоящий.
 * ============================================================================
 */

window.LUMISTEK_OFFICES = {
    mainPhone: '+971 4 000 0000',
    show: true,
    offices: [
        {
            id: 'dubai',
            city: 'Дубай',
            cityEn: 'Dubai',
            cityAr: 'دبي',
            address: 'Шейх Заед Роуд<br>Trade Centre',
            addressEn: 'Sheikh Zayed Road<br>Trade Centre',
            addressAr: 'شارع الشيخ زايد<br>مركز التجارة',
            phone: '+971 4 000 0000',
            phoneNote: '',
            visible: true
        },
        {
            id: 'abudhabi',
            city: 'Абу-Даби',
            cityEn: 'Abu Dhabi',
            cityAr: 'أبوظبي',
            address: 'Остров Аль-Рим<br>Business Tower',
            addressEn: 'Al Reem Island<br>Business Tower',
            addressAr: 'جزيرة الريم<br>برج الأعمال',
            phone: '+971 2 000 0000',
            phoneNote: '',
            visible: true
        },
        {
            id: 'sharjah',
            city: 'Шарджа',
            cityEn: 'Sharjah',
            cityAr: 'الشارقة',
            address: 'Индастриал Эрия<br>Business Complex',
            addressEn: 'Industrial Area<br>Business Complex',
            addressAr: 'المنطقة الصناعية<br>مجمع الأعمال',
            phone: '+971 6 000 0000',
            phoneNote: '',
            visible: true
        },
        {
            id: 'ajman',
            city: 'Аджман',
            cityEn: 'Ajman',
            cityAr: 'عجمان',
            address: 'Улица Шейха Аммара<br>&nbsp;',
            addressEn: 'Sheikh Ammar Street<br>&nbsp;',
            addressAr: 'شارع الشيخ عمار<br>&nbsp;',
            phone: '+971 6 700 0000',
            phoneNote: '',
            visible: true
        }
    ]
};
