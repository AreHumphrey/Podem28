import React, {useEffect, useState, useRef} from 'react';
import "./Search.css";

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const popupRef = useRef(null);

    const handleInputChange = (e) => setSearchTerm(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowPopup(searchTerm !== "");

        if (searchTerm !== "") {
            const filteredResults = data.filter((item) => {
                const searchLetters = searchTerm.toLowerCase().split('');
                const itemLetters = item.name.toLowerCase().split('');

                for (let i = 0; i < searchLetters.length; i++) {
                    if (itemLetters[i] !== searchLetters[i]) {
                        return false;
                    }
                }

                return true;
            });

            setResults(filteredResults);
        } else {
            setResults([]);
        }
    };

    const handleOutsideClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showPopup]);

    const data = [
        {id: 1, name: "Блок трехролый (для каната и веревки)", href: "/Blok-trekhrolyy-dlya-kanata-i-verevki"},
        {id: 2, name: " Блоки (монтажные, траловые)", href: "/Bloki-montazhnye-tralovye"},
        {id: 3, name: " Домкрат реечный High-Jack (автомобильный)", href: "/Domkrat-reechnyy-High-Jack-avtomobilnyy-1"},
        {id: 4, name: "Домкрат реечный", href: "/Domkrat-reechnyy"},
        {id: 5, name: " Захват для труб ЗТ", href: "/Zakhvat-dlya-trub-ZT"},
        {id: 6, name: "Домкраты гидравлические бутылочные", href: "/Domkraty-gidravlicheskie-butylochnye"},
        {id: 7, name: "Захват балочный, тип JT", href: "/Zakhvat-balochnyy-tip-JT"},
        {id: 8, name: "Захват тип DSQC", href: "/Zakhvat-tip-DSQC"},
        {id: 9, name: "Захват тип DHQ", href: "/Zakhvat-tip-DHQ"},
        {id: 10, name: "Фал капроновый", href: "/Kapronovaya-verevka"},
        {id: 11, name: "Канат стальной ГОСТ 2688-80", href: "/Kanat-stalnoy-GOST-2688-80"},
        {id: 12, name: "Звено с дополни тельными звеньями", href: "/Zveno-ovalnoe-s-dopolnitelnymi-zvenyami"},
        {id: 13, name: "Зажим для каната DIN 1142", href: "/Zazhim-dlya-kanata-DIN-1142"},
        {id: 14, name: "Крюк S-образный", href: "/Kryuk-S-obraznyy"},
        {id: 15, name: "Талреп такелажный вилка-вилка", href: "/Talrep-takelazhnyy-vilka-vilka"},
        {id: 16, name: "Скобы такелажные", href: "/Skoby-takelazhnye"},
        {id: 17, name: "Крюк чекерный", href: "/Kryuk-chekernyy"},
        {id: 18, name: "Крюк самозапи рающийся", href: "/Kryuk-samozapirayushchiysya"},
        {id: 19, name: " Крюк чалочный тип 322А с вертлюгом", href: "/Kryuk-chalochnyy-tip-322A-s-vertlyugom"},
        {id: 20, name: " Крюк чалочный тип 320А", href: "/Kryuk-chalochnyy-tip-320A"},
        {id: 21, name: "Звено овальное", href: "/Zveno-ovalnoe"},
        {id: 22, name: "Укоротитель цепной клешневой", href: "/Ukorotitel-tsepnoy-kleshnevoy"},
        {id: 23, name: "Крюк с широким зевом", href: "/Kryuk-s-shirokim-zevom"},
        {id: 24, name: "Звено соединительное", href: "/Zveno-soedinitelnoe-evropeyskogo-tipa"},
        {id: 25, name: "Цепь", href: "/TSep8"},
        {id: 26, name: "Коуш оцинкованный для каната", href: "/Koush-otsinkovannyy-dlya-kanata"},
        {id: 27, name: "Втулка алюминиевая", href: "/Vtulka-alyuminievaya"},
        {id: 28, name: "Лебедки электрические серии JK", href: "/Lebedki-elektricheskie-serii-JK"},
        {id: 29, name: "Лебедки электрические серии KDJ", href: "/Lebedki-elektricheskie-serii-KDJ"},
        {id: 30, name: "Лента текстильная", href: "/Lenta-tekstilnaya-item"},
        {id: 31, name: "  BH250A", href: "/mini_tali_elektricheskie_1"},
        {id: 32, name: "Тележка для мини тали с электроприво- дом TD", href: "/mini_tali_elektricheskie_2"},
        {id: 33, name: "Тележка для мини тали с электроприво- дом тип TE1", href: "/mini_tali_elektricheskie_3"},
        {id: 34, name: "HDGD c электрической тележкой (Китай)", href: "/mini_tali_elektricheskie_4"},
        {id: 35, name: "PA (Китай)", href: "/mini_tali_elektricheskie_5"},
        {id: 36, name: "тип МЕН, Стационарная", href: "/mini_tali_elektricheskie_6"},
        {id: 37, name: " Тип МЕН, Комбинированная", href: "/mini_tali_elektricheskie_7"},
        {id: 38, name: " Лебедка ручная LHW (Китай)", href: "/ruchnye_lebedki_1"},
        {id: 40, name: "Лебедка ручная с тормозом BHW (Китай)", href: "/ruchnye_lebedki_2"},
        {id: 41, name: "Лебедка усиленная серии JHW (Китай)", href: "/ruchnye_lebedki_3"},
        {id: 42, name: "Лебедка усиленная LRU", href: "/ruchnye_lebedki_4"},
        {id: 43, name: "Лебедка рычажная (МТМ)", href: "/ruchnye_lebedki_5"},
        {id: 44, name: "Лебедка рычажная гаражная SDB8020", href: "/ruchnye_lebedki_6"},
        {id: 45, name: "Лебедка HWV тип VS, тип GR", href: "/ruchnye_lebedki_7"},
        {id: 46, name: "Лебедка ручная с тормозом LRT", href: "/ruchnye_lebedki_8"},
        {id: 47, name: "Лебедка ручная барабанная LRB", href: "/ruchnye_lebedki_9"},
        {id: 48, name: "Тележка для тали с цепным приводом", href: "/ruchnye_tali_1"},
        {id: 49, name: "Таль ручная цепная HSZ-E (Китай)", href: "/ruchnye_tali_2"},
        {id: 50, name: "Тележка для тали с цепным приводом тип GCL610", href: "/ruchnye_tali_3"},
        {id: 51, name: "Шестеренная стационарная тип HSZ-С (Китай)", href: "/ruchnye_tali_4"},
        {id: 52, name: "Таль ручная цепная LB", href: "/ruchnye_tali_5"},
        {id: 53, name: "Рычажная тип HSH-C (Китай)", href: "/ruchnye_tali_6"},
        {id: 54, name: "Таль рычажная ручная LB", href: "/ruchnye_tali_7"},
        {id: 55, name: "Крюки J-образные двойные", href: "/sredstva-krepleniya-gruzov_1"},
        {id: 56, name: "Стяжной механизм для стяжных ремней", href: "/sredstva-krepleniya-gruzov_2"},
        {id: 57, name: "Ремни буксировочные автомобильные (высокопрочные)", href: "/sredstva-krepleniya-gruzov_3"},
        {id: 58, name: "Талреп с трещеткой", href: "/sredstva-krepleniya-gruzov_4"},
        {id: 59, name: " Комплектующие для стяжных ремней", href: "/sredstva-krepleniya-gruzov_5"},
        {id: 60, name: " Ремни для стяжки груза", href: "/sredstva-krepleniya-gruzov_6"},
        {id: 61, name: "Стропы комбиниро - ванные", href: "/stropy-gruzovye-iz-stalnogo-kanata_1"},
        {id: 62, name: "Кольцевые", href: "/stropy-gruzovye-iz-stalnogo-kanata_2"},
        {id: 63, name: "Стропы канатные четырех-ветвевые", href: "/stropy-gruzovye-iz-stalnogo-kanata_3"},
        {id: 64, name: "Двухветвевые", href: "/stropy-gruzovye-iz-stalnogo-kanata_4"},
        {id: 65, name: "Одноветвевые", href: "/stropy-gruzovye-iz-stalnogo-kanata_5"},
        {id: 66, name: "Строп канатный петлевой (СКП)", href: "/stropy-gruzovye-iz-stalnogo-kanata_6"},
        {id: 67, name: " Петлевые", href: "/stropy-gruzovye-tekstilnye_1"},
        {id: 68, name: "Кольцевые", href: "/stropy-gruzovye-tekstilnye_2"},
        {id: 69, name: "Одноветвевые", href: "/stropy-gruzovye-tekstilnye_3"},
        {id: 70, name: "Двухветвевые", href: "/stropy-gruzovye-tekstilnye_4"},
        {id: 71, name: " Четырех - ветвевые", href: "/stropy-gruzovye-tekstilnye_5"},
        {id: 72, name: "Ветвь цепная", href: "/stropy-gruzovye-tsepnye_1"},
        {id: 73, name: "Строп цепной одноветвевой", href: "/stropy-gruzovye-tsepnye_2"},
        {id: 74, name: "Строп цепной 2-х ветвевой", href: "/stropy-gruzovye-tsepnye_3"},
        {id: 75, name: "Строп цепной 4-х ветвевой", href: "/stropy-gruzovye-tsepnye_4"},
        {id: 76, name: "Кольцевые", href: "/stropy-gruzovye-tsepnye_5"},
        {id: 77, name: "С двумя замкнутыми ветвями", href: "/stropy-gruzovye-tsepnye_6"},
        {id: 78, name: " Тельфер электрический с тележкой ТM-1S", href: "/elektricheskie-tali_1"},
        {id: 79, name: "Электрический с тележкой CD (Китай)", href: "/elektricheskie-tali_2"},
        {id: 80, name: " Стеллаж в гараж", href: "/stelazhi_1"},
        {id: 81, name: "Универсальные металлические стеллажи", href: "/stelazhi_2"},
        {id: 82, name: "Паллетные фронтальные стеллажи", href: "/stelazhi_3"},
        {id: 83, name: "Стеллаж архивный", href: "/stelazhi_4"},
        {id: 84, name: "Тележка гидравлическая BF", href: "/telezhki_1"},
        {id: 85, name: "Тележка двухколесная Р-1", href: "/telezhki_2"},
        {id: 86, name: "Тележка двухколесная Р-3; Р-4; Р-5", href: "/telezhki_3"},
        {id: 87, name: "Тележка платформенная ТПЛ", href: "/telezhki_4"},
        {id: 88, name: " Тележки с сетчатыми бортами", href: "/telezhki_5"},
        {id: 89, name: "Мебельные колеса", href: "/kolesa_1"},
        {id: 90, name: "Термостойкие колеса", href: "/kolesa_2"},
        {id: 91, name: "Большегрузные колеса (нейлон, полиамид)", href: "/kolesa_3"},
        {id: 92, name: "Большегрузные колеса (полиуретан)", href: "/kolesa_4"},
        {id: 93, name: "Большегрузные чугунные колеса", href: "/kolesa_5"},
        {id: 94, name: "Аппаратные колеса", href: "/kolesa_6"},
        {id: 95, name: "Колеса для гидравлических тележек", href: "kolesa_7"},
        {id: 96, name: " Пневматические колеса", href: "/kolesa_8"},
        {id: 97, name: "Промышленные колеса", href: "/kolesa_9"},
        {id: 98, name: "Леса строительные ЛСПР-40", href: "/lesa_stroitelnye_1"},
        {id: 99, name: "Ящики под раствор 0,25 - 1,5 куб.", href: "/badi-dlya-podachi-betona_1"},
        {id: 100, name: "Рюмка для подачи бетона 0,75куб", href: "/badi-dlya-podachi-betona_2"},
        {id: 101, name: "Калоша для подачи бетона 0,75 - 2 куб.", href: "/badi-dlya-podachi-betona_3"},
        {id: 102, name: " Бетоносмесители Патриот", href: "/betonosmesiteli_1"},
        {id: 103, name: "Бетоносмеситель KITTORY", href: "/betonosmesiteli_2"},
        {id: 104, name: "Вышка тура ВСП 250", href: "/vyshka_tura_1"},
        {id: 105, name: "Редуктор кислородный БКО-50-12,5 (Редиус)", href: "/reduktory_ballonnye_1"},
        {id: 106, name: "Редуктор кислородный БКО-50-4 (Редиус)", href: "/reduktory_ballonnye_2"},
        {
            id: 107,
            name: "ГАЙКА 32/16 G 3/4 ДЛЯ БКО",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1"
        },
        {
            id: 108,
            name: "Цельнометалл. неразъем. штуцер-двойник универсал. под шланг д. 6/9мм (БЕЗ БЛИСТЕРА)",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2"
        },
        {
            id: 109,
            name: "Гайка накидная (S27 W21,8LH (Сп21,8LH) Левая и S27 W21,8(Сп21,8) Правая) БПО5-000-09",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3"
        },
        {
            id: 110,
            name: " Гайка накидная (S19 М16х1,5LH Левая, S19 М16х1,5 Правая) БПО5-000-11",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4"
        },
        {
            id: 111,
            name: "Переходник G3/4-Сп21,8 (для импортного редуктора)",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5"
        },
        {
            id: 112,
            name: "Переходник Сп21,8-G3/4 (для импортного баллона)",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6"
        },
        {
            id: 113,
            name: "Гайка накидная (S14 М12х1,25LH Левая, S14 М12х1,25 Правая) УН-100-03",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7"
        },
        {
            id: 114,
            name: "Ниппель Ø9 мм М16х1,5 (латунь)",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8"
        },
        {
            id: 115,
            name: "Ниппель Ø6 мм М16х1,5 (латунь)",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9"
        },
        {
            id: 116,
            name: "Ниппель универсальный 6/9 (латунь)",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10"
        },
        {
            id: 117,
            name: "Прокладка 23 БКО3-600-05 под резьбу G3/4 полиамидная",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11"
        },
        {
            id: 118,
            name: " Прокладка 19 БПО5-000-14 под резьбу W21.8 (Сп21,8) полиамидная",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_12"
        },
        {
            id: 119,
            name: "Прокладка паронитовая 3/4",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_13"
        },
        {
            id: 120,
            name: " Прокладка паронитовая 1/2",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_14"
        },
        {
            id: 121,
            name: "Манометр пропановый 0,6 МПа",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_15"
        },
        {
            id: 122,
            name: "Манометр кислородный 25 МПа",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_16"
        },
        {
            id: 123,
            name: "Манометр кислородный 2.5 МПа",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_17"
        },
        {
            id: 124,
            name: "Манометр ацетиленовый 4.0 МПа",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_18"
        },
        {
            id: 125,
            name: "Манометр ацетиленовый 0.4 МПа",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_19"
        },
        {id: 125, name: "Манометр газовый 1.0МПа", href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_20"},
        {
            id: 126,
            name: "Манометр газовый 16.0 МПа",
            href: "/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_21"
        },
        {id: 127, name: "Ключ баллонный ацетиленовый", href: "/ballony_generatory_kolpaki_1"},
        {id: 128, name: "Ключ баллонный универсальный", href: "/ballony_generatory_kolpaki_2"},
        {id: 129, name: "Ключ сварщика универсальный S8 - 24", href: "/ballony_generatory_kolpaki_3"},
        {id: 130, name: "Баллон пропановый 12 л", href: "/ballony_generatory_kolpaki_4"},
        {id: 131, name: "Баллон пропановый 5 л", href: "/ballony_generatory_kolpaki_5"},
        {id: 132, name: "Баллон углекислотный 10л", href: "/ballony_generatory_kolpaki_6"},
        {id: 133, name: "Баллон газовый 10л", href: "/ballony_generatory_kolpaki_7"},
        {id: 134, name: "Вентиль балонный пропановый ВБ-2", href: "/ventili_i_zapchasti_k_nim_1"},
        {id: 135, name: "Вентиль кислородный ВК-94", href: "/ventili_i_zapchasti_k_nim_2"},
        {id: 136, name: "Горелка ГВ-811", href: "/gazovye_gorelki_i_payalniki_1"},
        {id: 137, name: "Горелка паяльная ГВ-900", href: "/gazovye_gorelki_i_payalniki_2"},
        {id: 138, name: "Горелка паяльная ГВ-915", href: "/gazovye_gorelki_i_payalniki_3"},
        {id: 139, name: "Горелка паяльная ГВ-919", href: "/gazovye_gorelki_i_payalniki_4"},
        {id: 140, name: "Горелка кровельная ГВ-815-Р", href: "/gorelki_gazovozdushnye_1"},
        {id: 141, name: "ГВ-850 Фстакана=60мм", href: "/gorelki_gazovozdushnye_2"},
        {id: 142, name: "ГВ-850 Фстакана=50мм", href: "/gorelki_gazovozdushnye_3"},
        {id: 143, name: "ГВ-850-Р Фстакана=50мм", href: "/gorelki_gazovozdushnye_4"},
        {id: 144, name: "ГВ-850-Р Фстакана=60мм", href: "/gorelki_gazovozdushnye_5"},
        {id: 145, name: "Горелка газовоздушная ГВ-100-Р", href: "/gorelki_gazovozdushnye_6"},
        {id: 146, name: "Горелка кабельная ГВ-385", href: "/gorelki_gazovozdushnye_7"},
        {id: 147, name: "Горелка газовоздушная ГВ-100", href: "/gorelki_gazovozdushnye_8"},
        {id: 148, name: "Горелка пропано-воздушная ГВП AT-TRONIC", href: "/gorelki_gazovozdushnye_9"},
        {id: 149, name: "Горелка-паяльник ГВРП-17", href: "/gorelki_gazovozdushnye_10"},
        {id: 150, name: "Горелка ацетиленовая Г2-М", href: "/gorelki_svarochnye_1"},
        {id: 151, name: "Горелка ацетиленовая Г2 \"MINI ДМ\"", href: "/gorelki_svarochnye_2"},
        {id: 152, name: "Горелка пропановая ГЗУ-3-23 9/6", href: "/gorelki_svarochnye_3"},
        {id: 153, name: "Бачок БГ-08-1ДМ", href: "/zhidkotoplivnoe_oborudovanie_1"},
        {id: 154, name: "Резак \"Вогник\" 182 бензин", href: "/zhidkotoplivnoe_oborudovanie_2"},
        {id: 155, name: "Пост газосварочный ПГУ-10П", href: "/posty_gazosvarochnye_1"},
        {id: 156, name: "Резак пропановый Р1П «Сталь»", href: "/rezaki_gazovye_1"},
        {id: 157, name: "Резак комбинированный Р3П", href: "/rezaki_gazovye_2"},
        {id: 158, name: "Резак пропановый Р3П-32-Р-У", href: "/rezaki_gazovye_3"},
        {id: 159, name: "Резак пропановый Р3П-32", href: "/rezaki_gazovye_4"},
        {id: 160, name: "Резак пропановый Р3П-02МУ", href: "/rezaki_gazovye_5"},
        {id: 161, name: "Резак пропановый Р3П-02МУ", href: "/rezaki_gazovye_6"},
        {id: 162, name: "Резак пропановый Р1П LATION", href: "/rezaki_gazovye_7"},
        {id: 163, name: "Рукав кислородный Ø9,0 мм ЧЕРНЫЙ (III кл., бухта 10 м)", href: "/rukav_svarochnyy_1_1"},
        {id: 164, name: " Рукав кислородный Ø9мм СИНИЙ (III кл., бухта 10 м)", href: "/rukav_svarochnyy_1_2"},
        {id: 165, name: "Рукав кислородный Ø6,3 мм СИНИЙ (III кл., бухта 10 м)", href: "/rukav_svarochnyy_1_3"},
        {id: 166, name: "Рукав кислородный Ø6,3 мм СИНИЙ (III кл., бухта 40 м)", href: "/rukav_svarochnyy_1_4"},
        {id: 167, name: "Рукав газовый Ø6,3 мм КРАСНЫЙ (I кл., бухта 40 м)", href: "/rukav_svarochnyy_1_5"},
        {id: 168, name: " Рукав газовый Ø6,3 мм КРАСНЫЙ (I кл., бухта 10 м)", href: "/rukav_svarochnyy_1_6"},
        {id: 169, name: "Рукав бензостойкий Ø 6,3 мм, 2 класс, МБС", href: "/rukav_svarochnyy_2_1"},
        {id: 170, name: "Рукав бензостойкий Ø 9,0 мм, 2 класс, МБС", href: "/rukav_svarochnyy_2_2"},
        {id: 171, name: "Рукав газовый Ø 6,3 мм (черный с синей полосой)", href: "/rukav_svarochnyy_2_3"},
        {id: 172, name: "Рукав газовый Ø 6,3 мм (синий)", href: "/rukav_svarochnyy_2_4"},
        {id: 173, name: "Рукав газовый Ø 9,0 мм (синий)", href: "/rukav_svarochnyy_2_5"},
        {id: 174, name: "Рукав ацетиленовый ф. 9,0 мм (красный)", href: "/rukav_svarochnyy_2_6"},
        {
            id: 175,
            name: "Затвор предохранительный ЗП-3К-121 (на резак/горелку)",
            href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_1"
        },
        {id: 176, name: "Затвор предохранительный ЗП-3К-333", href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_2"},
        {id: 177, name: "Затвор предохранительный ЗП-3К-111", href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_3"},
        {id: 178, name: "Клапан обратный КО-3-К31", href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_4"},
        {id: 179, name: "Клапан обратный КО-3-Г31", href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_5"},
        {
            id: 180,
            name: "Затвор предохранительный ЗП-3Г-121 (на резак/горелку)",
            href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_6"
        },
        {id: 181, name: "Затвор предохранительный ЗП-3Г-111", href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_7"},
        {id: 182, name: "Затвор предохранительный ЗП-3Г-333", href: "/ustroystva_predokhranitelnye_dlya_gazosvarki_8"},
        {id: 183, name: "Держатель наконечника MP15AK", href: "/gorelki_1"},
        {id: 184, name: "Наконечник E-Cu М8х30х0,8", href: "/gorelki_2"},
        {id: 185, name: "Наконечник E-Cu М6х25х1,0", href: "/gorelki_3"},
        {id: 186, name: "Наконечник E-Cu М6х25х0,8", href: "/gorelki_4"},
        {id: 187, name: "Сопло МВ-25АК D=15 мм", href: "/gorelki_5"},
        {id: 188, name: "Сопло МP-15АК D=12 мм", href: "/gorelki_6"},
        {id: 189, name: "Наконечник E-Cu М6х25х1,2", href: "/gorelki_7"},
        {id: 190, name: "Сварочный инвертор ММА-200 RUBIK", href: "/svarochnye_invertory_1"},
        {id: 191, name: "Сварочный аппарат RIVCEN ARC-250S", href: "/svarochnye_invertory_2"},
        {id: 192, name: " Сварочный полуавтомат REDBO ExpertMIG-205 (MIG-MAG/MMA)", href: "/svarochnye_poluavtomaty_1"},
        {id: 194, name: "Сварочный полуавтомат REDBO ExpertMIG-175 (MIG-MAG/MMA)", href: "/svarochnye_poluavtomaty_2"},
        {id: 195, name: "Травильная паста ESAB Stain Clean", href: "/pripoi_flyusy_1"},
        {id: 196, name: "Паста антипригарная Abicor Binzel", href: "/pripoi_flyusy_2"},
        {id: 197, name: "Проволока порошковая E-71T-GS", href: "/provoloka_poroshkovaya_1"},
        {id: 198, name: " СВАРОЧНАЯ ПРОВОЛОКА ОМЕДНЕННАЯ ER70S-6", href: "/provoloka_sploshnogo_secheniya_1"},
        {id: 199, name: "Проволока сварочная омедненная G3Si1", href: "/provoloka_sploshnogo_secheniya_2"},
        {id: 200, name: " Спрей для сварочных работ AKFIX E90", href: "/sprei_aerozoli_1"},
        {id: 201, name: "Спрей Binzel", href: "/sprei_aerozoli_2"},
        {id: 202, name: "СКР-вставка KDP16a (200А)", href: "/kabelnye_razemy_1"},
        {id: 203, name: "СКРП-гнездо KDZ50a (315А)", href: "/kabelnye_razemy_2"},
        {id: 204, name: "СКРП-гнездо KDZ16a (200А)", href: "/kabelnye_razemy_3"},
        {id: 205, name: "СКР-вставка KDP50a (315А)", href: "/kabelnye_razemy_4"},
        {id: 206, name: "СКР-гнездо KDM16a (200А)", href: "/kabelnye_razemy_5"},
        {id: 207, name: "Маска сварщика РОССИЯ WH-ADF-9030G", href: "/maski-khameleon_1"},
        {id: 208, name: "Маска сварщика Победа с АСФ WH-ADF-9030G", href: "/maski-khameleon_2"},
        {id: 209, name: "Маска сварщика ДЕРЖАВА с АСФ WH-ADF-9030G", href: "/maski-khameleon_3"},
        {id: 210, name: "Очки WG Хамелеон c АСФ", href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1"},
        {
            id: 211,
            name: "Очки защитные прозрачные «ПАНОРАМА»",
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2"
        },
        {id: 212, name: " Защитные очки затемненные", href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3"},
        {id: 213, name: " Очки защитные \"ТРУД\"", href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4"},
        {id: 214, name: "Очки газосварщика 3Н-56-Г", href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5"},
        {
            id: 215,
            name: " Очки защитные откидные арт.7070",
            href: "/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6"
        },
        {id: 216, name: "Перчатки спилковые желтые\"ДРАЙВЕР\"", href: "/sredstva_zashchity_ruk_i_nog_1"},
        {id: 217, name: "Перчатки кожаные желтые\"ДРАЙВЕР\"", href: "/sredstva_zashchity_ruk_i_nog_2"},
        {id: 218, name: "Перчатки комбинированные спилком \"Стандарт\"", href: "/sredstva_zashchity_ruk_i_nog_3"},
        {id: 219, name: "Перчатки комбинированные спилком с 2-м наладонником", href: "/sredstva_zashchity_ruk_i_nog_4"},
        {id: 220, name: "Перчатки спилковые М1", href: "/sredstva_zashchity_ruk_i_nog_5"},
        {id: 221, name: "Краги спилковые черно-желтые", href: "/sredstva_zashchity_ruk_i_nog_6"},
        {id: 222, name: "Краги спилковые синие усил. пал.", href: "/sredstva_zashchity_ruk_i_nog_7"},
        {id: 223, name: "Краги спилковые 5-палые", href: "/sredstva_zashchity_ruk_i_nog_8"},
        {id: 224, name: "Краги спилковые жел./черн. с усил. лад. удлин.", href: "/sredstva_zashchity_ruk_i_nog_9"},
        {id: 225, name: "Пластина защитная поликарбонат 102х52х1", href: "/stekla_dlya_masok_i_ochkov_1"},
        {id: 226, name: "Пластина защитная поликарбонат 121х69х1", href: "/stekla_dlya_masok_i_ochkov_2"},
        {id: 227, name: "Пластина защитная поликарбонат 110х90х1", href: "/stekla_dlya_masok_i_ochkov_3"},
        {id: 228, name: " Пластина защитная поликарбонат 133х114х1", href: "/stekla_dlya_masok_i_ochkov_4"},
        {id: 229, name: "Светофильтр 121х69 ТС-3 DIN 9", href: "/stekla_dlya_masok_i_ochkov_5"},
        {id: 230, name: "СВЕТОФИЛЬТР 121Х69 ТС-3 DIN 8", href: "/stekla_dlya_masok_i_ochkov_6"},
        {id: 231, name: "Светофильтр 110х90 ТС-3 DIN 9", href: "/stekla_dlya_masok_i_ochkov_7"},
        {id: 232, name: "Светофильтр 110х90 ТС-3 DIN 8", href: "/stekla_dlya_masok_i_ochkov_8"},
        {id: 233, name: "Светофильтр 102х52 ТС-3 DIN 9", href: "/stekla_dlya_masok_i_ochkov_9"},
        {id: 234, name: "Светофильтр 102х52 ТС-3 DIN 8", href: "/stekla_dlya_masok_i_ochkov_10"},
        {id: 235, name: "Светофильтр 110х90 ТС-3 прозрачный", href: "/stekla_dlya_masok_i_ochkov_11"},
        {id: 236, name: "Светофильтр 102х52 ТС-3 прозрачный", href: "/stekla_dlya_masok_i_ochkov_12"},
        {id: 237, name: "Светофильтр 121х69 ТС-3 прозрачный", href: "/stekla_dlya_masok_i_ochkov_13"},
        {id: 238, name: "Щиток защитный лицевой НБТ-ЕВРО-сталь", href: "/shchitki_svarochnye_1"},
        {id: 239, name: "Щиток НБТ ЕВРО", href: "/shchitki_svarochnye_2"},
        {id: 240, name: "Щиток сварщика ЕПК-АС", href: "/shchitki_svarochnye_3"},
        {id: 241, name: "Щиток сварщика НН-У1", href: "/shchitki_svarochnye_4"},
        {id: 242, name: "Маска сварщика ЕПК", href: "/shchitki_svarochnye_5"},
        {id: 243, name: "Щиток сварщика пластиковый НН-С-701", href: "/shchitki_svarochnye_6"},
        {id: 244, name: "Мелок стеатитовый FM.400", href: "/aksessuary_1_1"},
        {id: 245, name: "Мелок Markal Soapstone Flat 13х5х127", href: "/aksessuary_1_2"},
        {id: 246, name: "Markal WS 3/8\" Paintstik", href: "/aksessuary_1_3"},
        {id: 247, name: "Markal Dura-Ink 15", href: "/aksessuary_1_4"},
        {id: 248, name: "Маркер EDDING E-790", href: "/aksessuary_1_5"},
        {id: 249, name: "Шаблон сварщика УШС-3 калиброванный", href: "/prochie_aksessuary_1"},
        {id: 250, name: "Шаблон сварщика УШС-2 калиброванный", href: "/prochie_aksessuary_2"},
        {id: 251, name: "Держатель мелка", href: "/prochie_aksessuary_3"},
        {id: 252, name: "Набор для чистки мундштуков", href: "/prochie_aksessuary_4"},
        {id: 253, name: "Зажигалка сварочная", href: "/prochie_aksessuary_5"},
        {id: 254, name: "Молоток сварщика шлакоотбойный", href: "/prochie_aksessuary_6"},
        {id: 255, name: "Фиксатор магнитный сварочный 25", href: "/prochie_aksessuary_7"},
        {id: 256, name: "Фиксатор магнитный сварочный 50", href: "/prochie_aksessuary_8"},
        {id: 257, name: " Фиксатор магнитный сварочный 75", href: "/prochie_aksessuary_9"},
        {id: 258, name: "Фиксатор магнитный сварочный МФ 301", href: "/prochie_aksessuary_10"},
        {id: 259, name: "Фиксатор магнитный сварочный МФ 302", href: "/prochie_aksessuary_11"},
        {id: 260, name: "Фиксатор магнитный сварочный МФ 303", href: "/prochie_aksessuary_12"},
        {id: 261, name: "Фиксатор магнитный сварочный МФ 401", href: "/prochie_aksessuary_13"},
        {id: 262, name: "Фиксатор магнитный сварочный МФ 402", href: "/prochie_aksessuary_14"},
        {id: 263, name: "Фиксатор магнитный сварочный МФ 403", href: "/prochie_aksessuary_15"},
        {id: 264, name: "Фиксатор магнитный сварочный МФ 101", href: "/prochie_aksessuary_16"},
        {id: 265, name: "Фиксатор магнитный сварочный МФ 102", href: "/prochie_aksessuary_17"},
        {id: 266, name: "Фиксатор магнитный сварочный МФ 103", href: "/prochie_aksessuary_18"},
        {id: 267, name: "Магнитная клемма заземления МКЗ-50У Сатурн", href: "/klemmy_svarochnye_1"},
        {id: 268, name: "Клемма заземления ДОКА КЗ-200", href: "/klemmy_svarochnye_2"},
        {id: 269, name: "Клемма заземления ДОКА КЗ-300", href: "/klemmy_svarochnye_3"},
        {id: 270, name: " Клемма заземления ДОКА КЗ-500", href: "/klemmy_svarochnye_4"},
        {id: 271, name: "Струбцина заземления КЗ-50 С (КОРД)", href: "/klemmy_svarochnye_5"},
        {id: 272, name: "Клемма заземления КЗ-50 \"Сатурн Профи\"", href: "/klemmy_svarochnye_6"},
        {id: 273, name: "Клемма заземления КЗ-40 \"Сатурн Профи\"", href: "/klemmy_svarochnye_7"},
        {id: 274, name: "Клемма заземления КЗ-31 \"Сатурн Профи\"", href: "/klemmy_svarochnye_8"},
        {id: 275, name: "Клемма заземления КЗ-25 \"Сатурн Профи\"", href: "/klemmy_svarochnye_9"},
        {id: 276, name: "Клемма заземления КЗ-20 \"Сатурн Профи\"", href: "/klemmy_svarochnye_10"},
        {id: 277, name: "Электрододержатель ДОКА LXEA 002K 500A", href: "/svarochnye_elektrododerzhateli_1"},
        {
            id: 278,
            name: "Электрододержатель ДОКА LXEA 1045 500A тип CONFORT",
            href: "/svarochnye_elektrododerzhateli_2"
        },
        {id: 279, name: "Электрододержатель ЭД-31 \"Универсал\" (КОРД)", href: "/svarochnye_elektrododerzhateli_3"},
        {
            id: 280,
            name: "Электрододержатель ЭД-40 \"Универсал\" (Корд) (400А)",
            href: "/svarochnye_elektrododerzhateli_4"
        },
        {id: 281, name: "Электрододержатель ЭД-20 \"Сатурн\" (200А)", href: "/svarochnye_elektrododerzhateli_5"},
        {id: 282, name: "Электрододержатель ЭД-31 \"Сатурн\" (300А)", href: "/svarochnye_elektrododerzhateli_6"},
        {id: 283, name: "Электрододержатель ЭД-50 \"Сатурн\" (500А)", href: "/svarochnye_elektrododerzhateli_7"},
        {id: 284, name: "Электрододержатель ДОКА LXE 300A тип HANDY", href: "/svarochnye_elektrododerzhateli_8"},
        {id: 285, name: "Электрододержатель ESAB HANDY 200", href: "/svarochnye_elektrododerzhateli_9"},
        {id: 286, name: "Электрододержатель ESAB HANDY 300", href: "/svarochnye_elektrododerzhateli_10"},
        {id: 287, name: "Круг зачистной лепестковый 125мм № 120 БАЗ", href: "/krugi_zachistnye_lepestkovye_1"},
        {id: 288, name: "Круг зачистной лепестковый 125мм № 80 БАЗ", href: "/krugi_zachistnye_lepestkovye_2"},
        {id: 289, name: "Круг отрезной 125х2,5х22,2 Russland", href: "/krugi_otreznye_1"},
        {id: 290, name: "Круг отрезной 125х1,0х22,2 Russland", href: "/krugi_otreznye_2"},
        {id: 291, name: "Круг отрезной 125 х 1,0 х 22 (TIGARBO)", href: "/krugi_otreznye_3"},
        {id: 292, name: "Круг отрезной 115 х 1,2 х 22 (TIGARBO)", href: "/krugi_otreznye_4"},
        {id: 293, name: "Круг отрезной 125 х 1,2 х 22 (TIGARBO)", href: "krugi_otreznye_5"},
        {id: 294, name: "Круг отрезной 115 х 1,6 х 22 (TIGARBO)", href: "/krugi_otreznye_6"},
        {id: 295, name: "Круг отрезной 115 х 2,0 х 22 (TIGARBO)", href: "/krugi_otreznye_7"},
        {id: 296, name: "Круг отрезной 115 х 2,5 х 22 (TIGARBO)", href: "/krugi_otreznye_8"},
        {id: 297, name: "Круг отрезной 125 х 2,5 х 22 (TIGARBO)", href: "/krugi_otreznye_9"},
        {id: 298, name: "Круг отрезной 115 х 2,0 х 22 ст (Луга)", href: "/krugi_otreznye_10"},
        {id: 299, name: "Круг отрезной 150 х 2,0 х 22 (TIGARBO)", href: "/krugi_otreznye_11"},
        {id: 300, name: "Круг отрезной 150 х 2,5 х 22 (TIGARBO)", href: "/krugi_otreznye_12"},
        {id: 301, name: "КРУГ ОТРЕЗНОЙ 230Х2,5Х22,2 RUSSLAND", href: "/krugi_otreznye_13"},
        {id: 302, name: "Круг отрезной 230х1,8х22,2 Russland", href: "/krugi_otreznye_14"},
        {id: 303, name: "Круг отрезной 230 х 2,5 х 22 (TIGARBO)", href: "/krugi_otreznye_15"},
        {id: 304, name: "Круг отрезной 230 х 2,0 х 22 (TIGARBO)", href: "/krugi_otreznye_16"},
        {id: 305, name: "Блоки", href: "/bloki"},
        {id: 306, name: "Домкаты", href: "/domkraty"},
        {id: 307, name: "Захваты", href: "/zakhvaty"},
        {id: 308, name: "Канаты и веревки", href: "/kanaty-i-verevki"},
        {id: 309, name: "Комплектующие для строп", href: "/komplektuyushchie-dlya-strop"},
        {id: 310, name: "Лебедки электрические", href: "/lebedki-elektricheskie"},
        {id: 311, name: "Ленты текстильные", href: "/lenta-tekstilnaya"},
        {id: 312, name: "Мини электрические тали", href: "/mini-tali-elektricheskie"},
        {id: 313, name: "Ручные лебедки", href: "/ruchnye-lebedki"},
        {id: 314, name: "Ручные тали", href: "/ruchnye-tali"},
        {id: 315, name: "Средства крепления грузов", href: "/sredstva-krepleniya-gruzov"},
        {id: 316, name: "Стропы грузовые из стального каната", href: "/stropy-gruzovye-iz-stalnogo-kanata"},
        {id: 317, name: "Стропы грузовые текстильные", href: "/stropy-gruzovye-tekstilnye"},
        {id: 318, name: "Стропы грузовые цепные", href: "/stropy-gruzovye-tsepnye"},
        {id: 319, name: "Электрические тали", href: "/elektricheskie-tali"},
        {id: 320, name: "Стеллажи", href: "/stelazhi"},
        {id: 321, name: "Тележки", href: "/telezhki-gidravlicheskie"},
        {id: 322, name: "Колеса", href: "/kolesa"},
        {id: 323, name: "Леса строительные", href: "/lesa-stroitelnye"},
        {id: 324, name: "Бадьи для подачи бетона", href: "/badi-dlya-podachi-betona"},
        {id: 325, name: "Бетоносмесители", href: "/betonosmesitelie"},
        {id: 326, name: "Вышка тура", href: "/vyshka-tura"},
        {id: 327, name: "ГАЗОСВАРОЧНОЕ ОБОРУДОВАНИЕ", href: "/gazosvarochnoe-oborudovanie_1"},
        {id: 328, name: "СВАРОЧНЫЕ АППАРАТЫ, ГОРЕЛКИ", href: "/svarochnye-apparaty-gorelki"},
        {id: 329, name: "РАСХОДНЫЕ МАТЕРИАЛЫ ДЛЯ СВАРКИ", href: "/raskhodnye-materialy-dlya-svarki"},
        {id: 330, name: "СИЛОВОЙ КАБЕЛЬ И АКСЕССУАРЫ", href: "/silovoy-kabel-i-aksessuary"},
        {id: 331, name: "ЗАЩИТА СВАРЩИКА", href: "/zashchita-svarshchika"},
        {id: 332, name: "ПРИСПОСОБЛЕНИЯ И ОСНАСТКА", href: "/prisposobleniya-i-osnastka"},
        {id: 333, name: "КРУГИ", href: "/krugi"},

        {id: 334, name: "Услуги", href: "/services"},
        {id: 335, name: "Контакты", href: "/contacts"},
        {id: 336, name: "Полезное", href: "/useful"},
        {id: 337, name: "Технический паспорт на блок монтажный HQG (L)K1", href: "/tekh-pasport-na-blok-montazhnyy-hqg-l-k1"},
        {id: 338, name: "Паспорт на лебёдку ручную барабанную канатную JHW 1т; 2т; 3т.", href: "/pasport-na-lebyedku-ruchnuyu-barabannuyu-kanatnuyu-jhw-1t-2t-3t"},
        {id: 339, name: "Паспорт и инструкция по эксплуатации лебёдок ручных барабанных моделей HWV", href: "/pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-barabannykh-modeley-hwv"},
        {id: 340, name: "Паспорт и инструкция по эксплуатации лебёдок ручных моделей HWG", href: "/pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-modeley-hwg"},
        {id: 341, name: "Паспорт и руководство по эксплуатации Лебедка рычажная МТМ 0,8т. / 1,6т. / 3,2т. / 5,4т.", href: "/pasport-i-rukovodstvo-po-ekspluatatsii-lebedka-rychazhnaya-mtm-0-8t-1-6t-3-2t-5-4t"},
        {id: 342, name: "Местоположение", href: "https://2gis.ru/blagoveshensk/geo/7318985049659421"},

    ]

    return (
        <div>
            <form className="search-box" onSubmit={handleFormSubmit}>
                <div className="search-input-container">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Поиск"
                        className="search_input"
                    />

                    <span className="search-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.8677 2.2781e-05C9.824 2.2781e-05 5.7353 3.97622 5.7353 8.88106C5.735 13.7859 9.824 17.7621 14.8676 17.7621C19.9113 17.7621 24 13.7859 24 8.88111C23.994 3.97856 19.9089 0.00583514 14.8682 0H14.8676L148677 2.2781e-05ZM14.8677 15.7064C10.9915 15.7064 7.84926 12.6506 7.84926 8.88106C7.84926 5.11154 10.9915 2.05584 14.8677 2.05584C18.7438 2.05584 21.886 5.11161 21.886 8.88113C21.8812 12.6487 18.7419 15.7017 14.8681 15.7064H14.8676L14.8677 15.7064ZM1.49674 23.3406L10.0657 15.0043L8.57117 13.5509L-0.000976562 21.8841L1.49674 23.3406Z"
                                fill="#717171"
                            />
                        </svg>
                    </span>
                </div>
            </form>
            {showPopup && results.length > 0 && (
                <div className="popup-window" ref={popupRef}>
                    <ul className="popup-list">
                        {results.map((item) => (
                            <li key={item.id}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
