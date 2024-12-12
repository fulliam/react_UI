export const phoneRegexes = {
  US: /^(\+1|1)?\d{10}$/, // США
  RU: /^(\+7|7)?\d{10}$/, // Россия
  GB: /^(\+44|44)?\d{10}$/, // Великобритания
  CA: /^(\+1|1)?\d{10}$/, // Канада
  AU: /^(\+61|61)?\d{9}$/, // Австралия
  FR: /^(\+33|33)?\d{9}$/, // Франция
  DE: /^(\+49|49)?\d{11}$/, // Германия
  IT: /^(\+39|39)?\d{10}$/, // Италия
  ES: /^(\+34|34)?\d{9}$/, // Испания
  CN: /^(\+86|86)?\d{11}$/, // Китай
  JP: /^(\+81|81)?\d{10}$/, // Япония
  IN: /^(\+91|91)?\d{10}$/, // Индия
  BR: /^(\+55|55)?\d{11}$/, // Бразилия
  ZA: /^(\+27|27)?\d{9}$/, // Южноафриканская Республика
  MX: /^(\+52|52)?\d{10}$/, // Мексика
  KR: /^(\+82|82)?\d{10}$/, // Южная Корея
  AR: /^(\+54|54)?\d{10}$/, // Аргентина
  NZ: /^(\+64|64)?\d{9}$/, // Новая Зеландия
  PH: /^(\+63|63)?\d{10}$/, // Филиппины
  EG: /^(\+20|20)?\d{10}$/, // Египет
  SA: /^(\+966|966)?\d{9}$/, // Саудовская Аравия
  NG: /^(\+234|234)?\d{10}$/, // Нигерия
  KE: /^(\+254|254)?\d{9}$/, // Кения
  CO: /^(\+57|57)?\d{10}$/, // Колумбия
  CL: /^(\+56|56)?\d{9}$/, // Чили
  SE: /^(\+46|46)?\d{9}$/, // Швеция
  NO: /^(\+47|47)?\d{8}$/, // Норвегия
  FI: /^(\+358|358)?\d{9}$/, // Финляндия
  PL: /^(\+48|48)?\d{9}$/, // Польша
  BE: /^(\+32|32)?\d{8}$/, // Бельгия
  NL: /^(\+31|31)?\d{9}$/, // Нидерланды
  CH: /^(\+41|41)?\d{9}$/, // Швейцария
  AT: /^(\+43|43)?\d{10}$/, // Австрия
  HU: /^(\+36|36)?\d{9}$/, // Венгрия
  DK: /^(\+45|45)?\d{8}$/, // Дания
  IE: /^(\+353|353)?\d{9}$/, // Ирландия
  PT: /^(\+351|351)?\d{9}$/, // Португалия
  RO: /^(\+40|40)?\d{10}$/, // Румыния
  BG: /^(\+359|359)?\d{8}$/, // Болгария
  SK: /^(\+421|421)?\d{9}$/, // Словакия
  HR: /^(\+385|385)?\d{9}$/, // Хорватия
  SI: /^(\+386|386)?\d{8}$/, // Словения
  LT: /^(\+370|370)?\d{8}$/, // Литва
  LV: /^(\+371|371)?\d{8}$/, // Латвия
  EE: /^(\+372|372)?\d{7}$/, // Эстония
  MD: /^(\+373|373)?\d{8}$/, // Молдова
  UA: /^(\+380|380)?\d{9}$/, // Украина
  BY: /^(\+375|375)?\d{9}$/, // Беларусь
  KZ: /^(\+7|7)?\d{10}$/, // Казахстан
  UZ: /^(\+998|998)?\d{9}$/, // Узбекистан
  AZ: /^(\+994|994)?\d{9}$/, // Азербайджан
  GE: /^(\+995|995)?\d{9}$/, // Грузия
  AM: /^(\+374|374)?\d{8}$/, // Армения
  IL: /^(\+972|972)?\d{9}$/, // Израиль
  LB: /^(\+961|961)?\d{8}$/, // Ливан
  JO: /^(\+962|962)?\d{9}$/, // Иордания
  SY: /^(\+963|963)?\d{9}$/, // Сирия
  IQ: /^(\+964|964)?\d{8}$/, // Ирак
  KW: /^(\+965|965)?\d{8}$/, // Кувейт
  OM: /^(\+968|968)?\d{8}$/, // Оман
  YE: /^(\+967|967)?\d{7}$/, // Йемен
  QA: /^(\+974|974)?\d{8}$/, // Катар
  BH: /^(\+973|973)?\d{8}$/, // Бахрейн
  AE: /^(\+971|971)?\d{9}$/, // Объединенные Арабские Эмираты
  MN: /^(\+976|976)?\d{8}$/, // Монголия
  LK: /^(\+94|94)?\d{10}$/, // Шри-Ланка
  NP: /^(\+977|977)?\d{10}$/, // Непал
  BD: /^(\+880|880)?\d{10}$/, // Бангладеш
  PA: /^(\+507|507)?\d{8}$/, // Панама
  CR: /^(\+506|506)?\d{8}$/, // Коста-Рика
  NI: /^(\+505|505)?\d{8}$/, // Никарагуа
  SV: /^(\+503|503)?\d{8}$/, // Сальвадор
  GT: /^(\+502|502)?\d{8}$/, // Гватемала
  Honduras: /^(\+504|504)?\d{8}$/, // Гондурас
  BZ: /^(\+501|501)?\d{7}$/, // Белиз
  TT: /^(\+1|1)?\d{10}$/, // Тринидад и Тобаго
  JM: /^(\+1|1)?\d{10}$/, // Ямайка
  LC: /^(\+1|1)?\d{10}$/, // Сент-Люсия
  VC: /^(\+1|1)?\d{10}$/, // Сент-Винсент и Гренадины
  GD: /^(\+1|1)?\d{10}$/, // Гренада
  DM: /^(\+1|1)?\d{10}$/, // Доминика
  KY: /^(\+1|1)?\d{10}$/, // Каймановы острова
  BB: /^(\+1|1)?\d{10}$/, // Барбадос
  BL: /^(\+590|590)?\d{10}$/, // Сен-Бартельми
  MF: /^(\+590|590)?\d{10}$/, // Сен-Мартен
  GP: /^(\+590|590)?\d{10}$/, // Гваделупа
  RE: /^(\+262|262)?\d{10}$/, // Реюньон
  YT: /^(\+262|262)?\d{10}$/, // Майотта
  PF: /^(\+689|689)?\d{6}$/, // Французская Полинезия
  NC: /^(\+687|687)?\d{6}$/, // Новая Каледония
  WF: /^(\+681|681)?\d{5}$/, // Уоллис и Футуна
  TV: /^(\+688|688)?\d{4}$/, // Тувалу
  AS: /^(\+1|1)?\d{10}$/, // Американское Самоа
  GU: /^(\+1|1)?\d{10}$/, // Гуам
  MP: /^(\+1|1)?\d{10}$/, // Содружество Северных Марианских Островов
  PR: /^(\+1|1)?\d{10}$/, // Пуэрто-Рико
  UM: /^(\+1|1)?\d{10}$/ // Внешние малые острова США
};

export const countryOptions = [
  { id: 'RU', code: '+7', name: 'Россия', image: 'country-flags/ru.svg' },
  { id: 'KZ', code: '+7', name: 'Казахстан', image: 'country-flags/kz.svg' },
  { id: 'BY', code: '+375', name: 'Беларусь', image: 'country-flags/by.svg' },
  { id: 'UA', code: '+380', name: 'Украина', image: 'country-flags/ua.svg' },
  { id: 'GE', code: '+995', name: 'Грузия', image: 'country-flags/ge.svg' },
  { id: 'AM', code: '+374', name: 'Армения', image: 'country-flags/am.svg' },
  {
    id: 'US',
    code: '+1',
    name: 'Соединённые Штаты',
    image: 'country-flags/us.svg'
  },
  {
    id: 'GB',
    code: '+44',
    name: 'Великобритания',
    image: 'country-flags/gb.svg'
  },
  { id: 'CA', code: '+1', name: 'Канада', image: 'country-flags/ca.svg' },
  { id: 'AU', code: '+61', name: 'Австралия', image: 'country-flags/au.svg' },
  { id: 'FR', code: '+33', name: 'Франция', image: 'country-flags/fr.svg' },
  { id: 'DE', code: '+49', name: 'Германия', image: 'country-flags/de.svg' },
  { id: 'IT', code: '+39', name: 'Италия', image: 'country-flags/it.svg' },
  { id: 'ES', code: '+34', name: 'Испания', image: 'country-flags/es.svg' },
  { id: 'CN', code: '+86', name: 'Китай', image: 'country-flags/cn.svg' },
  { id: 'JP', code: '+81', name: 'Япония', image: 'country-flags/jp.svg' },
  { id: 'IN', code: '+91', name: 'Индия', image: 'country-flags/in.svg' },
  { id: 'BR', code: '+55', name: 'Бразилия', image: 'country-flags/br.svg' },
  {
    id: 'ZA',
    code: '+27',
    name: 'Южноафриканская Республика',
    image: 'country-flags/za.svg'
  },
  { id: 'MX', code: '+52', name: 'Мексика', image: 'country-flags/mx.svg' },
  { id: 'KR', code: '+82', name: 'Южная Корея', image: 'country-flags/kr.svg' },
  { id: 'AR', code: '+54', name: 'Аргентина', image: 'country-flags/ar.svg' },
  {
    id: 'NZ',
    code: '+64',
    name: 'Новая Зеландия',
    image: 'country-flags/nz.svg'
  },
  { id: 'PH', code: '+63', name: 'Филиппины', image: 'country-flags/ph.svg' },
  { id: 'EG', code: '+20', name: 'Египет', image: 'country-flags/eg.svg' },
  {
    id: 'SA',
    code: '+966',
    name: 'Саудовская Аравия',
    image: 'country-flags/sa.svg'
  },
  { id: 'NG', code: '+234', name: 'Нигерия', image: 'country-flags/ng.svg' },
  { id: 'KE', code: '+254', name: 'Кения', image: 'country-flags/ke.svg' },
  { id: 'CO', code: '+57', name: 'Колумбия', image: 'country-flags/co.svg' },
  { id: 'CL', code: '+56', name: 'Чили', image: 'country-flags/cl.svg' },
  { id: 'SE', code: '+46', name: 'Швеция', image: 'country-flags/se.svg' },
  { id: 'NO', code: '+47', name: 'Норвегия', image: 'country-flags/no.svg' },
  { id: 'FI', code: '+358', name: 'Финляндия', image: 'country-flags/fi.svg' },
  { id: 'PL', code: '+48', name: 'Польша', image: 'country-flags/pl.svg' },
  { id: 'BE', code: '+32', name: 'Бельгия', image: 'country-flags/be.svg' },
  { id: 'NL', code: '+31', name: 'Нидерланды', image: 'country-flags/nl.svg' },
  { id: 'CH', code: '+41', name: 'Швейцария', image: 'country-flags/ch.svg' },
  { id: 'AT', code: '+43', name: 'Австрия', image: 'country-flags/at.svg' },
  { id: 'HU', code: '+36', name: 'Венгрия', image: 'country-flags/hu.svg' },
  { id: 'DK', code: '+45', name: 'Дания', image: 'country-flags/dk.svg' },
  { id: 'IE', code: '+353', name: 'Ирландия', image: 'country-flags/ie.svg' },
  { id: 'PT', code: '+351', name: 'Португалия', image: 'country-flags/pt.svg' },
  { id: 'RO', code: '+40', name: 'Румыния', image: 'country-flags/ro.svg' },
  { id: 'BG', code: '+359', name: 'Болгария', image: 'country-flags/bg.svg' },
  { id: 'SK', code: '+421', name: 'Словакия', image: 'country-flags/sk.svg' },
  { id: 'HR', code: '+385', name: 'Хорватия', image: 'country-flags/hr.svg' },
  { id: 'SI', code: '+386', name: 'Словения', image: 'country-flags/si.svg' },
  { id: 'LT', code: '+370', name: 'Литва', image: 'country-flags/lt.svg' },
  { id: 'LV', code: '+371', name: 'Латвия', image: 'country-flags/lv.svg' },
  { id: 'EE', code: '+372', name: 'Эстония', image: 'country-flags/ee.svg' },
  { id: 'MD', code: '+373', name: 'Молдова', image: 'country-flags/md.svg' },
  { id: 'UZ', code: '+998', name: 'Узбекистан', image: 'country-flags/uz.svg' },
  { id: 'AZ', code: '+994', name: 'Азербайджан', image: 'country-flags/az.svg' },
  { id: 'IL', code: '+972', name: 'Израиль', image: 'country-flags/il.svg' },
  { id: 'LB', code: '+961', name: 'Ливан', image: 'country-flags/lb.svg' },
  { id: 'JO', code: '+962', name: 'Иордания', image: 'country-flags/jo.svg' },
  { id: 'SY', code: '+963', name: 'Сирия', image: 'country-flags/sy.svg' },
  { id: 'IQ', code: '+964', name: 'Ирак', image: 'country-flags/iq.svg' },
  { id: 'KW', code: '+965', name: 'Кувейт', image: 'country-flags/kw.svg' },
  { id: 'OM', code: '+968', name: 'Оман', image: 'country-flags/om.svg' },
  { id: 'QA', code: '+974', name: 'Катар', image: 'country-flags/qa.svg' },
  { id: 'BH', code: '+973', name: 'Бахрейн', image: 'country-flags/bh.svg' },
  { id: 'YE', code: '+967', name: 'Йемен', image: 'country-flags/ye.svg' },
  { id: 'AF', code: '+93', name: 'Афганистан', image: 'country-flags/af.svg' },
  { id: 'PK', code: '+92', name: 'Пакистан', image: 'country-flags/pk.svg' },
  { id: 'BD', code: '+880', name: 'Бангладеш', image: 'country-flags/bd.svg' },
  { id: 'LK', code: '+94', name: 'Шри-Ланка', image: 'country-flags/lk.svg' },
  { id: 'MM', code: '+95', name: 'Мьянма', image: 'country-flags/mm.svg' },
  { id: 'TH', code: '+66', name: 'Таиланд', image: 'country-flags/th.svg' },
  { id: 'VN', code: '+84', name: 'Вьетнам', image: 'country-flags/vn.svg' },
  { id: 'ID', code: '+62', name: 'Индонезия', image: 'country-flags/id.svg' },
  { id: 'MY', code: '+60', name: 'Малайзия', image: 'country-flags/my.svg' },
  { id: 'SG', code: '+65', name: 'Сингапур', image: 'country-flags/sg.svg' },
  { id: 'KH', code: '+855', name: 'Камбоджа', image: 'country-flags/kh.svg' },
  { id: 'LA', code: '+856', name: 'Лаос', image: 'country-flags/la.svg' },
  { id: 'MV', code: '+960', name: 'Мальдивы', image: 'country-flags/mv.svg' },
  { id: 'NP', code: '+977', name: 'Непал', image: 'country-flags/np.svg' },
  { id: 'BT', code: '+975', name: 'Бутан', image: 'country-flags/bt.svg' },
  { id: 'MN', code: '+976', name: 'Монголия', image: 'country-flags/mn.svg' },
  { id: 'HK', code: '+852', name: 'Гонконг', image: 'country-flags/hk.svg' },
  { id: 'MO', code: '+853', name: 'Макао', image: 'country-flags/mo.svg' },
  { id: 'TW', code: '+886', name: 'Тайвань', image: 'country-flags/tw.svg' }
];

export const getPhoneMask = (countryCode: string) => {
  switch (countryCode) {
    case 'RU':
      return '+7 (___) ___-__-__';
    case 'KZ':
      return '+7 (___) ___-__-__'; // Kazakhstan
    case 'BY':
      return '+375 (__) ___-__-__'; // Belarus
    case 'UA':
      return '+380 __ ___-__-__'; // Ukraine
    case 'GE':
      return '+995 __ ___ ____'; // Georgia
    case 'AM':
      return '+374 __ ___ ___'; // Armenia
    case 'US':
      return '+1 (___) ___-____'; // USA
    case 'GB':
      return '+44 ____ ______'; // UK
    case 'CA':
      return '+1 (___) ___-____'; // Canada
    case 'AU':
      return '+61 _ ____ ____'; // Australia
    case 'FR':
      return '+33 _ __ __ __ __'; // France
    case 'DE':
      return '+49 ____ ___-____'; // Germany
    case 'IT':
      return '+39 ___ ___ ____'; // Italy
    case 'ES':
      return '+34 ___ ___ ___'; // Spain
    case 'CN':
      return '+86 ___________'; // China
    case 'JP':
      return '+81 __ ____ ____'; // Japan
    case 'IN':
      return '+91 __________'; // India
    case 'BR':
      return '+55 __ ____-____'; // Brazil
    case 'ZA':
      return '+27 __ ___ ____'; // South Africa
    case 'MX':
      return '+52 __ ____ ____'; // Mexico
    case 'KR':
      return '+82 __ ____ ____'; // South Korea
    case 'AR':
      return '+54 __ ____ ____'; // Argentina
    case 'NZ':
      return '+64 __ ___ ___'; // New Zealand
    case 'PH':
      return '+63 __ ____ ____'; // Philippines
    case 'EG':
      return '+20 __ ____ ____'; // Egypt
    case 'SA':
      return '+966 __ ____ ____'; // Saudi Arabia
    case 'NG':
      return '+234 ___ ___ ____'; // Nigeria
    case 'KE':
      return '+254 ___ ___ ___'; // Kenya
    case 'CO':
      return '+57 ___ ___ ____'; // Colombia
    case 'CL':
      return '+56 __ ____ ____'; // Chile
    case 'SE':
      return '+46 __ ___ ___'; // Sweden
    case 'NO':
      return '+47 ___ __ ___'; // Norway
    case 'FI':
      return '+358 __ ___ ____'; // Finland
    case 'PL':
      return '+48 ___ ___ ___'; // Poland
    case 'BE':
      return '+32 ___ __ __ __'; // Belgium
    case 'NL':
      return '+31 __ ___ ____'; // Netherlands
    case 'CH':
      return '+41 __ ___ __ __'; // Switzerland
    case 'AT':
      return '+43 ___ ___ ____'; // Austria
    case 'HU':
      return '+36 __ ___ ____'; // Hungary
    case 'DK':
      return '+45 __ __ __ __'; // Denmark
    case 'IE':
      return '+353 __ ___ ____'; // Ireland
    case 'PT':
      return '+351 ___ ___ ___'; // Portugal
    case 'RO':
      return '+40 ___ ___ ___'; // Romania
    case 'BG':
      return '+359 __ ___ ____'; // Bulgaria
    case 'SK':
      return '+421 __ ___ ___'; // Slovakia
    case 'HR':
      return '+385 __ ___ ___'; // Croatia
    case 'SI':
      return '+386 __ ___ ___'; // Slovenia
    case 'LT':
      return '+370 __ ___ ___'; // Lithuania
    case 'LV':
      return '+371 __ ___ ___'; // Latvia
    case 'EE':
      return '+372 __ ___ ___'; // Estonia
    case 'MD':
      return '+373 __ ___ ___'; // Moldova
    case 'UZ':
      return '+998 __ ___-__-__'; // Uzbekistan
    case 'AZ':
      return '+994 __ ___-__-__'; // Azerbaijan
    case 'IL':
      return '+972 __ ___ ____'; // Israel
    case 'LB':
      return '+961 __ ___ ___'; // Lebanon
    case 'JO':
      return '+962 __ ___ ____'; // Jordan
    case 'SY':
      return '+963 __ ___ ____'; // Syria
    case 'IQ':
      return '+964 __ ___ ____'; // Iraq
    case 'KW':
      return '+965 __ ___ ____'; // Kuwait
    case 'OM':
      return '+968 __ ___ ____'; // Oman
    case 'YE':
      return '+967 __ ___ ____'; // Yemen
    case 'QA':
      return '+974 __ ___ ____'; // Qatar
    case 'BH':
      return '+973 __ ___ ____'; // Bahrain
    case 'AE':
      return '+971 __ ___ ____'; // UAE
    case 'MN':
      return '+976 __ ___ ___'; // Mongolia
    case 'LK':
      return '+94 __ ___ ____'; // Sri Lanka
    case 'NP':
      return '+977 __ _______'; // Nepal
    case 'BD':
      return '+880 __ ____ ____'; // Bangladesh
    case 'PA':
      return '+507 __-___-___'; // Panama
    case 'CR':
      return '+506 ___-____'; // Costa Rica
    case 'NI':
      return '+505 ___-____'; // Nicaragua
    case 'SV':
      return '+503 __ ___ ____'; // El Salvador
    case 'GT':
      return '+502 __ ___-___'; // Guatemala
    case 'HN':
      return '+504 ___-____'; // Honduras
    case 'BZ':
      return '+501 ___-____'; // Belize
    case 'TT':
      return '+1 (868) ___-____'; // Trinidad and Tobago
    case 'JM':
      return '+1 (876) ___-____'; // Jamaica
    case 'LC':
      return '+1 (758) ___-____'; // Saint Lucia
    case 'VC':
      return '+1 (784) ___-____'; // Saint Vincent and the Grenadines
    case 'GD':
      return '+1 (473) ___-____'; // Grenada
    case 'DM':
      return '+1 (767) ___-____'; // Dominica
    case 'KY':
      return '+1 (345) ___-____'; // Cayman Islands
    case 'BB':
      return '+1 (246) ___-____'; // Barbados
    case 'BL':
      return '+590 __ __ __ __'; // Saint Barthélemy
    case 'MF':
      return '+590 __ __ __ __'; // Saint Martin
    case 'GP':
      return '+590 __ __ __ __'; // Guadeloupe
    case 'RE':
      return '+262 __ __ __ __'; // Réunion
    case 'YT':
      return '+262 __ __ __ __'; // Mayotte
    case 'PF':
      return '+689 __ __ __'; // French Polynesia
    case 'NC':
      return '+687 __ __ __'; // New Caledonia
    case 'WF':
      return '+681 __ __ __'; // Wallis and Futuna
    case 'TV':
      return '+688 __ __'; // Tuvalu
    case 'AS':
      return '+1 (684) ___-____'; // American Samoa
    case 'GU':
      return '+1 (671) ___-____'; // Guam
    case 'MP':
      return '+1 (670) ___-____'; // Northern Mariana Islands
    case 'PR':
      return '+1 (787) ___-____'; // Puerto Rico
    case 'UM':
      return '+1 (__) ___-____'; // U.S. Minor Outlying Islands (specific formats can vary)
    default:
      return '';
  }
};
