import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "../src/Pages/Main";
import ContactPage from "../src/Pages/Contacts"
import UseFulPage from "../src/Pages/Useful"
import UseFulPage1 from "./Pages/Useful1";
import UseFulPage2 from "./Pages/Useful2";
import UseFulPage3 from "./Pages/Useful3";
import UseFulPage4 from "./Pages/Useful4";
import UseFulPage5 from "./Pages/Useful5";
import Services from "./Pages/Services";
import Domkraty from "./Pages/Lifting_equipment/Domkraty";
import Zakhvaty from "./Pages/Lifting_equipment/Zakhvaty";
import Blokies from "./Pages/Lifting_equipment/Blokies";
import Kanaty_i_verevki from "./Pages/Lifting_equipment/Kanaty_i_verevki";
import Komplektuyushchie_dlya_strop from "./Pages/Lifting_equipment/Komplektuyushchie_dlya_strop";
import Lebedki_elektricheskie from "./Pages/Lifting_equipment/Lebedki_elektricheskie";
import Lenta_tekstilnaya from "./Pages/Lifting_equipment/Lenta_tekstilnaya";
import Mini_tali_elektricheskie from "./Pages/Lifting_equipment/Mini_tali_elektricheskie";
import Ruchnye_lebedki from "./Pages/Lifting_equipment/Ruchnye_lebedki";
import Ruchnye_tali from "./Pages/Lifting_equipment/Ruchnye_tali";
import Sredstva_krepleniya_gruzov from "./Pages/Lifting_equipment/Sredstva_krepleniya_gruzov";
import stropy_gruzovye_iz_stalnogo_kanata from "./Pages/Lifting_equipment/Stropy_gruzovye_iz_stalnogo_kanata";
import stropy_gruzovye_tekstilnye from "./Pages/Lifting_equipment/Stropy_gruzovye_tekstilnye";
import stropy_gruzovye_tsepnye from "./Pages/Lifting_equipment/Stropy_gruzovye_tsepnye";
import Elektricheskie_tali from "./Pages/Lifting_equipment/Elektricheskie_tali";
import Stelazhi from "./Pages/Warehouse_equipment/Stelazhi";
import Telezhki_gidravlicheskie from "./Pages/Warehouse_equipment/Telezhki_gidravlicheskie";
import Kolesa from "./Pages/Warehouse_equipment/Kolesa";
import Lesa_stroitelnye from "./Pages/Construction_equipment/Lesa_stroitelnye";
import Badi_dlya_podachi_betona from "./Pages/Construction_equipment/Badi_dlya_podachi_betona";
import Betonosmesiteli from "./Pages/Construction_equipment/Betonosmesiteli";
import Vyshka_tura from "./Pages/Construction_equipment/Vyshka_tura";
import Bloki_1 from "./Pages/Lifting_equipment/Products/Blok_trekhrolyy_dlya_kanata_i_verevki";
import Bloki_2 from "./Pages/Lifting_equipment/Products/Bloki_montazhnye_tralovye";
import Domkrat_1 from "./Pages/Lifting_equipment/Products/Domkrat-reechnyy-High-Jack-avtomobilnyy-1";
import Domkrat_2 from "./Pages/Lifting_equipment/Products/Domkrat_reechnyy";
import Domkrat_3 from "./Pages/Lifting_equipment/Products/Domkraty_gidravlicheskie_butylochnye";
import Zakhvat_1 from "./Pages/Lifting_equipment/Products/Zakhvat_dlya_trub_ZT";
import Zakhvat_2 from "./Pages/Lifting_equipment/Products/Zakhvat_balochnyy_tip_JT";
import Zakhvat_3 from "./Pages/Lifting_equipment/Products/Zakhvat_tip_DSQC";
import Zakhvat_4 from "./Pages/Lifting_equipment/Products/Zakhvat_tip_DHQ";
import Kanaty_i_verevki_1 from "./Pages/Lifting_equipment/Products/Kapronovaya_verevka";
import Kanaty_i_verevki_2 from "./Pages/Lifting_equipment/Products/Kanat_stalnoy_GOST-2688-80";
import Zveno_1 from "./Pages/Lifting_equipment/Products/Zveno_ovalnoe_s_dopolnitelnymi_zvenyami";
import Zveno_2 from "./Pages/Lifting_equipment/Products/Zveno_2";
import Zveno_3 from "./Pages/Lifting_equipment/Products/Zveno_3";
import Zveno_4 from "./Pages/Lifting_equipment/Products/Zveno_4";
import Zveno_5 from "./Pages/Lifting_equipment/Products/Zveno_5";
import Zveno_6 from "./Pages/Lifting_equipment/Products/Zveno_6";
import Zveno_7 from "./Pages/Lifting_equipment/Products/Zveno_7";
import Zveno_8 from "./Pages/Lifting_equipment/Products/Zveno_8";
import Zveno_9 from "./Pages/Lifting_equipment/Products/Zveno_9.1";
import Zveno_10 from "./Pages/Lifting_equipment/Products/Zveno_10";
import Zveno_11 from "./Pages/Lifting_equipment/Products/Zveno_11";
import Zveno_12 from "./Pages/Lifting_equipment/Products/Zveno_12";
import Zveno_13 from "./Pages/Lifting_equipment/Products/Zveno_13";
import Zveno_14 from "./Pages/Lifting_equipment/Products/Zveno_14";
import Zveno_15 from "./Pages/Lifting_equipment/Products/Zveno_15";
import Zveno_16 from "./Pages/Lifting_equipment/Products/Zveno_16";
import Zveno_17 from "./Pages/Lifting_equipment/Products/Zveno_17";
import Lebedki_elektricheskie_1 from "./Pages/Lifting_equipment/Products/Lebedki_elektricheskie_1";
import Lebedki_elektricheskie_2 from "./Pages/Lifting_equipment/Products/Lebedki_elektricheskie_2";
import Lenta_tekstilnaya_item_1 from "./Pages/Lifting_equipment/Products/Lenta-tekstilnaya-item_1";
import Mini_tali_elektricheskie_1 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_1";
import Mini_tali_elektricheskie_2 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_2";
import Mini_tali_elektricheskie_3 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_3";
import Mini_tali_elektricheskie_4 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_4";
import Mini_tali_elektricheskie_5 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_5";
import Mini_tali_elektricheskie_6 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_6";
import Mini_tali_elektricheskie_7 from "./Pages/Lifting_equipment/Products/Mini-tali-elektricheskie_7";
import Ruchnye_lebedki_1 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_1";
import Ruchnye_lebedki_2 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_2";
import Ruchnye_lebedki_3 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_3";
import Ruchnye_lebedki_4 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_4";
import Ruchnye_lebedki_5 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_5";
import Ruchnye_lebedki_6 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_6";
import Ruchnye_lebedki_7 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_7";
import Ruchnye_lebedki_8 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_8";
import Ruchnye_lebedki_9 from "./Pages/Lifting_equipment/Products/Ruchnye_lebedki_9";
import Ruchnye_tali_1 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_1";
import Ruchnye_tali_2 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_2";
import Ruchnye_tali_3 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_3";
import Ruchnye_tali_4 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_4";
import Ruchnye_tali_5 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_5";
import Ruchnye_tali_6 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_6";
import Ruchnye_tali_7 from "./Pages/Lifting_equipment/Products/Ruchnye_tali_7";
import Sredstva_krepleniya_gruzov_1 from "./Pages/Lifting_equipment/Products/Sredstva_krepleniya_gruzov_1";
import Sredstva_krepleniya_gruzov_2 from "./Pages/Lifting_equipment/Products/Sredstva_krepleniya_gruzov_2";
import Sredstva_krepleniya_gruzov_3 from "./Pages/Lifting_equipment/Products/Sredstva_krepleniya_gruzov_3";
import Sredstva_krepleniya_gruzov_4 from "./Pages/Lifting_equipment/Products/Sredstva_krepleniya_gruzov_4";
import Sredstva_krepleniya_gruzov_5 from "./Pages/Lifting_equipment/Products/Sredstva_krepleniya_gruzov_5";
import Sredstva_krepleniya_gruzov_6 from "./Pages/Lifting_equipment/Products/Sredstva_krepleniya_gruzov_6";
import Stropy_gruzovye_iz_stalnogo_kanata_1
    from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_iz_stalnogo_kanata_1";
import Stropy_gruzovye_iz_stalnogo_kanata_2
    from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_iz_stalnogo_kanata_2";
import Stropy_gruzovye_iz_stalnogo_kanata_3
    from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_iz_stalnogo_kanata_3";
import Stropy_gruzovye_iz_stalnogo_kanata_4
    from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_iz_stalnogo_kanata_4";
import Stropy_gruzovye_iz_stalnogo_kanata_5
    from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_iz_stalnogo_kanata_5";
import Stropy_gruzovye_iz_stalnogo_kanata_6
    from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_iz_stalnogo_kanata_6";
import Stropy_gruzovye_tekstilnye_1 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tekstilnye_1";
import Stropy_gruzovye_tekstilnye_2 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tekstilnye_2";
import Stropy_gruzovye_tekstilnye_3 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tekstilnye_3";
import Stropy_gruzovye_tekstilnye_4 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tekstilnye_4";
import Stropy_gruzovye_tekstilnye_5 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tekstilnye_5";
import Stropy_gruzovye_tsepnye_1 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tsepnye_1";
import Stropy_gruzovye_tsepnye_2 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tsepnye_2";
import Stropy_gruzovye_tsepnye_3 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tsepnye_3";
import Stropy_gruzovye_tsepnye_4 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tsepnye_4";
import Stropy_gruzovye_tsepnye_5 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tsepnye_5";
import Stropy_gruzovye_tsepnye_6 from "./Pages/Lifting_equipment/Products/Stropy_gruzovye_tsepnye_6";
import Elektricheskie_tali_1 from "./Pages/Lifting_equipment/Products/Elektricheskie_tali_1";
import Elektricheskie_tali_2 from "./Pages/Lifting_equipment/Products/Elektricheskie_tali_2";
import Stelazhi_1 from "./Pages/Warehouse_equipment/Products/Stelazhi_1";
import Stelazhi_2 from "./Pages/Warehouse_equipment/Products/Stelazhi_2";
import Stelazhi_3 from "./Pages/Warehouse_equipment/Products/Stelazhi_3";
import Stelazhi_4 from "./Pages/Warehouse_equipment/Products/Stelazhi_4";
import Telezhki_1 from "./Pages/Warehouse_equipment/Products/Telezhki_1";
import Telezhki_2 from "./Pages/Warehouse_equipment/Products/Telezhki_2";
import Telezhki_3 from "./Pages/Warehouse_equipment/Products/Telezhki_3";
import Telezhki_4 from "./Pages/Warehouse_equipment/Products/Telezhki_4";
import Telezhki_5 from "./Pages/Warehouse_equipment/Products/Telezhki_5";
import Kolesa_1 from "./Pages/Warehouse_equipment/Products/Kolesa_1";
import Kolesa_2 from "./Pages/Warehouse_equipment/Products/Kolesa_2";
import Kolesa_3 from "./Pages/Warehouse_equipment/Products/Kolesa_3";
import Kolesa_4 from "./Pages/Warehouse_equipment/Products/Kolesa_4";
import Kolesa_5 from "./Pages/Warehouse_equipment/Products/Kolesa_5";
import Kolesa_6 from "./Pages/Warehouse_equipment/Products/Kolesa_6";
import Kolesa_7 from "./Pages/Warehouse_equipment/Products/Kolesa_7";
import Kolesa_8 from "./Pages/Warehouse_equipment/Products/Kolesa_8";
import Kolesa_9 from "./Pages/Warehouse_equipment/Products/Kolesa_9";
import Lesa_stroitelnye_1 from "./Pages/Construction_equipment/Products/Lesa_stroitelnye_1";
import Badi_dlya_podachi_betona_1 from "./Pages/Construction_equipment/Products/Badi_dlya_podachi_betona_1";
import Badi_dlya_podachi_betona_2 from "./Pages/Construction_equipment/Products/Badi_dlya_podachi_betona_2";
import Badi_dlya_podachi_betona_3 from "./Pages/Construction_equipment/Products/Badi_dlya_podachi_betona_3";
import Betonosmesiteli_1 from "./Pages/Construction_equipment/Products/Betonosmesiteli_1";
import Betonosmesiteli_2 from "./Pages/Construction_equipment/Products/Betonosmesiteli_2";
import Vyshka_tura_1 from "./Pages/Construction_equipment/Products/Vyshka_tura_1";
import Svarochnye_apparaty_gorelki from "./Pages/Gas_welding_Equipment/Svarochnye_apparaty_gorelki";
import Raskhodnye_materialy_dlya_svarki from "./Pages/Gas_welding_Equipment/Raskhodnye_materialy_dlya_svarki";
import Silovoy_kabel_i_aksessuary from "./Pages/Gas_welding_Equipment/Silovoy_kabel_i_aksessuary";
import Zashchita_svarshchika from "./Pages/Gas_welding_Equipment/Zashchita_svarshchika";
import Krugi from "./Pages/Gas_welding_Equipment/Krugi";
import Gorelki from "./Pages/Gas_welding_Equipment/Then_categorize/Gorelki";
import Svarochnye_invertory from "./Pages/Gas_welding_Equipment/Then_categorize/Svarochnye_invertory";
import Svarochnye_poluavtomaty from "./Pages/Gas_welding_Equipment/Then_categorize/Svarochnye_poluavtomaty";
import Gorelki_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_1";
import Gorelki_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_2";
import Gorelki_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_3";
import Gorelki_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_4";
import Gorelki_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_5";
import Gorelki_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_6";
import Gorelki_7 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_7";
import Svarochnye_invertory_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_invertory_1";
import Svarochnye_invertory_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_invertory_2";
import Svarochnye_poluavtomaty_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_poluavtomaty_1";
import Svarochnye_poluavtomaty_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_poluavtomaty_2";
import Pripoi_flyusy from "./Pages/Gas_welding_Equipment/Then_categorize/Pripoi_flyusy";
import Provoloka_poroshkovaya from "./Pages/Gas_welding_Equipment/Then_categorize/Provoloka_poroshkovaya";
import Provoloka_sploshnogo_secheniya
    from "./Pages/Gas_welding_Equipment/Then_categorize/Provoloka_sploshnogo_secheniya";
import Sprei_aerozoli from "./Pages/Gas_welding_Equipment/Then_categorize/Sprei_aerozoli";
import Pripoi_flyusy_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Pripoi_flyusy_1";
import Pripoi_flyusy_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Pripoi_flyusy_2";
import Provoloka_poroshkovaya_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Provoloka_poroshkovaya_1";
import Provoloka_sploshnogo_secheniya_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Provoloka_sploshnogo_secheniya_1";
import Provoloka_sploshnogo_secheniya_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Provoloka_sploshnogo_secheniya_2";
import Sprei_aerozoli_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sprei_aerozoli_1";
import Sprei_aerozoli_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sprei_aerozoli_2";
import Prisposobleniya_i_osnastka__1 from "./Pages/Gas_welding_Equipment/Prisposobleniya_i_osnastka";
import Kabelnye_razemy from "./Pages/Gas_welding_Equipment/Then_categorize/Kabelnye_razemy";
import Kabelnye_razemy_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Kabelnye_razemy_1";
import Kabelnye_razemy_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Kabelnye_razemy_2";
import Kabelnye_razemy_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Kabelnye_razemy_3";
import Kabelnye_razemy_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Kabelnye_razemy_4";
import Kabelnye_razemy_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Kabelnye_razemy_5";
import Maski_khameleon from "./Pages/Gas_welding_Equipment/Then_categorize/Maski_khameleon";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya
    from "./Pages/Gas_welding_Equipment/Then_categorize/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya";
import Sredstva_zashchity_ruk_i_nog from "./Pages/Gas_welding_Equipment/Then_categorize/Sredstva_zashchity_ruk_i_nog";
import Stekla_dlya_masok_i_ochkov from "./Pages/Gas_welding_Equipment/Then_categorize/Stekla_dlya_masok-i-ochkov";
import Shchitki_svarochnye from "./Pages/Gas_welding_Equipment/Then_categorize/Shchitki_svarochnye";
import Maski_khameleon_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Maski-khameleon_1";
import Maski_khameleon_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Maski-khameleon_2";
import Maski_khameleon_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Maski-khameleon_3";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5";
import Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6";
import Sredstva_zashchity_ruk_i_nog_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_1";
import Sredstva_zashchity_ruk_i_nog_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_2";
import Sredstva_zashchity_ruk_i_nog_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_3";
import Sredstva_zashchity_ruk_i_nog_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_4";
import Sredstva_zashchity_ruk_i_nog_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_5";
import Sredstva_zashchity_ruk_i_nog_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_6";
import Sredstva_zashchity_ruk_i_nog_7
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_7";
import Sredstva_zashchity_ruk_i_nog_8
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_8";
import Sredstva_zashchity_ruk_i_nog_9
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sredstva_zashchity_ruk_i_nog_9";
import Stekla_dlya_masok_i_ochkov_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_1";
import Stekla_dlya_masok_i_ochkov_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_2";
import Stekla_dlya_masok_i_ochkov_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_3";
import Stekla_dlya_masok_i_ochkov_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_4";
import Stekla_dlya_masok_i_ochkov_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_5";
import Stekla_dlya_masok_i_ochkov_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_6";
import Stekla_dlya_masok_i_ochkov_7
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_7";
import Stekla_dlya_masok_i_ochkov_8
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_8";
import Stekla_dlya_masok_i_ochkov_9
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_9";
import Stekla_dlya_masok_i_ochkov_10
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_10";
import Stekla_dlya_masok_i_ochkov_11
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_11";
import Stekla_dlya_masok_i_ochkov_12
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_12";
import Stekla_dlya_masok_i_ochkov_13
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Stekla_dlya_masok_i_ochkov_13";
import Shchitki_svarochnye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Sprei_aerozoli_1";
import Shchitki_svarochnye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Shchitki_svarochnye_2";
import Shchitki_svarochnye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Shchitki_svarochnye_3";
import Shchitki_svarochnye_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Shchitki_svarochnye_4";
import Shchitki_svarochnye_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Shchitki_svarochnye_5";
import Shchitki_svarochnye_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Shchitki_svarochnye_6";
import Aksessuary from "./Pages/Gas_welding_Equipment/Then_categorize/Aksessuary";
import Markery_promyshlennye from "./Pages/Gas_welding_Equipment/Then_categorize/Markery_promyshlennye";
import Prochie_aksessuary_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Prochie_aksessuary_2";
import Aksessuary_1_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_1_1";
import Aksessuary_1_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_1_2";
import Aksessuary_1_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_1_3";
import Aksessuary_1_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_1_4";
import Aksessuary_1_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_1_5";
import Aksessuary_2_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_1";
import Aksessuary_2_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_2";
import Aksessuary_2_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_3";
import Aksessuary_2_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_4";
import Aksessuary_2_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_5";
import Aksessuary_2_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_6";
import Aksessuary_2_7 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_7";
import Aksessuary_2_8 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_8";
import Aksessuary_2_9 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_9";
import Aksessuary_2_10 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_10";
import Aksessuary_2_11 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_11";
import Aksessuary_2_12 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_12";
import Aksessuary_2_13 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_13";
import Aksessuary_2_14 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_14";
import Aksessuary_2_15 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_15";
import Aksessuary_2_16 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_16";
import Aksessuary_2_17 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_17";
import Aksessuary_2_18 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Aksessuary_2_18";
import Klemmy_svarochnye from "./Pages/Gas_welding_Equipment/Then_categorize/Klemmy_svarochnye";
import Svarochnye_elektrododerzhateli
    from "./Pages/Gas_welding_Equipment/Then_categorize/Svarochnye_elektrododerzhateli";
import Klemmy_svarochnye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_1";
import Klemmy_svarochnye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_2";
import Klemmy_svarochnye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_3";
import Klemmy_svarochnye_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_4";
import Klemmy_svarochnye_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_5";
import Klemmy_svarochnye_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_6";
import Klemmy_svarochnye_7 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_7";
import Klemmy_svarochnye_8 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_8";
import Klemmy_svarochnye_9 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_9";
import Klemmy_svarochnye_10 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Klemmy_svarochnye_10";
import Svarochnye_elektrododerzhateli_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_1";
import Svarochnye_elektrododerzhateli_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_2";
import Svarochnye_elektrododerzhateli_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_3";
import Svarochnye_elektrododerzhateli_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_4";
import Svarochnye_elektrododerzhateli_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_5";
import Svarochnye_elektrododerzhateli_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_6";
import Svarochnye_elektrododerzhateli_7
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_7";
import Svarochnye_elektrododerzhateli_8
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_8";
import Svarochnye_elektrododerzhateli_9
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_9";
import Svarochnye_elektrododerzhateli_10
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Svarochnye_elektrododerzhateli_10";
import Krugi_zachistnye_lepestkovye from "./Pages/Gas_welding_Equipment/Then_categorize/Krugi_zachistnye_lepestkovye";
import Krugi_otreznye from "./Pages/Gas_welding_Equipment/Then_categorize/Krugi_otreznye";
import Krugi_zachistnye_lepestkovye_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_zachistnye_lepestkovye_1";
import Krugi_zachistnye_lepestkovye_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_zachistnye_lepestkovye_2";
import Krugi_otreznye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_1";
import Krugi_otreznye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_2";
import Krugi_otreznye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_3";
import Krugi_otreznye_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_4";
import Krugi_otreznye_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_5";
import Krugi_otreznye_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_6";
import Krugi_otreznye_7 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_7";
import Krugi_otreznye_8 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_8";
import Krugi_otreznye_9 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_9";
import Krugi_otreznye_10 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_10";
import Krugi_otreznye_11 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_11";
import Krugi_otreznye_12 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_12";
import Krugi_otreznye_13 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_13";
import Krugi_otreznye_14 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_14";
import Krugi_otreznye_15 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_15";
import Krugi_otreznye_16 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Krugi_otreznye_16";
import Gazosvarochnoe_oborudovanie_1 from "./Pages/Gas_welding_Equipment/Gazosvarochnoe_oborudovanie_1";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry
    from "./Pages/Gas_welding_Equipment/Then_categorize/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10";
import Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11";
import Reduktory_ballonnye from "./Pages/Gas_welding_Equipment/Then_categorize/Reduktory_ballonnye";
import Reduktory_ballonnye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Reduktory_ballonnye_1";
import Reduktory_ballonnye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Reduktory_ballonnye_2";
import Reduktory_ballonnye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Reduktory_ballonnye_3";
import Reduktory_ballonnye_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Reduktory_ballonnye_4";
import Reduktory_ballonnye_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Reduktory_ballonnye_5";
import Reduktory_ballonnye_1_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Reduktory_ballonnye_1.1";
import Reduktory_ballonnye_1_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Reduktory_ballonnye_1.2";
import Reduktory_ballonnye_2_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Reduktory_ballonnye_2.1";
import Reduktory_ballonnye_3_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Reduktory_ballonnye_3.1";
import Reduktory_ballonnye_4_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Reduktory_ballonnye_4.1";
import Reduktory_ballonnye_5_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Reduktory_ballonnye_5.1";
import Ballony_generatory_kolpaki from "./Pages/Gas_welding_Equipment/Then_categorize/Ballony_generatory_kolpaki";
import Ballony_generatory_kolpaki_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_1";
import Ballony_generatory_kolpaki_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_2";
import Ballony_generatory_kolpaki_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_3";
import Ballony_generatory_kolpaki_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_4";
import Ballony_generatory_kolpaki_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_5";
import Ballony_generatory_kolpaki_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_6";
import Ballony_generatory_kolpaki_7
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ballony_generatory_kolpaki_7";
import Ventili_i_zapchasti_k_nim from "./Pages/Gas_welding_Equipment/Then_categorize/Ventili_i_zapchasti_k_nim";
import Ventili_i_zapchasti_k_nim_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ventili_i_zapchasti_k_nim_1";
import Ventili_i_zapchasti_k_nim_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ventili_i_zapchasti_k_nim_2";
import Gazovye_gorelki_i_payalniki from "./Pages/Gas_welding_Equipment/Then_categorize/Gazovye_gorelki_i_payalniki";
import Gazovye_gorelki_i_payalniki_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gazovye_gorelki_i_payalniki_1";
import Gazovye_gorelki_i_payalniki_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gazovye_gorelki_i_payalniki_2";
import Gazovye_gorelki_i_payalniki_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gazovye_gorelki_i_payalniki_3";
import Gazovye_gorelki_i_payalniki_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gazovye_gorelki_i_payalniki_4";
import Gorelki_gazovozdushnye from "./Pages/Gas_welding_Equipment/Then_categorize/Gorelki_gazovozdushnye";
import Gorelki_gazovozdushnye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_1";
import Gorelki_gazovozdushnye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_2";
import Gorelki_gazovozdushnye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_3";
import Gorelki_gazovozdushnye_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_4";
import Gorelki_gazovozdushnye_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_5";
import Gorelki_gazovozdushnye_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_6";
import Gorelki_gazovozdushnye_7 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_7";
import Gorelki_gazovozdushnye_8 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_8";
import Gorelki_gazovozdushnye_9 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_9";
import Gorelki_gazovozdushnye_10
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_gazovozdushnye_10";
import Gorelki_svarochnye from "./Pages/Gas_welding_Equipment/Then_categorize/Gorelki_svarochnye";
import Gorelki_svarochnye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_svarochnye_1";
import Gorelki_svarochnye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_svarochnye_2";
import Gorelki_svarochnye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Gorelki_svarochnye_3";
import Zhidkotoplivnoe_oborudovanie from "./Pages/Gas_welding_Equipment/Then_categorize/Zhidkotoplivnoe_oborudovanie";
import Zhidkotoplivnoe_oborudovanie_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Zhidkotoplivnoe_oborudovanie_1";
import Zhidkotoplivnoe_oborudovanie_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Zhidkotoplivnoe_oborudovanie_2";
import Posty_gazosvarochnye from "./Pages/Gas_welding_Equipment/Then_categorize/Posty_gazosvarochnye";
import Posty_gazosvarochnye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Posty_gazosvarochnye_1";
import Rezaki_gazovye from "./Pages/Gas_welding_Equipment/Then_categorize/Rezaki_gazovye";
import Rezaki_gazovye_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_1";
import Rezaki_gazovye_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_2";
import Rezaki_gazovye_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_3";
import Rezaki_gazovye_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_4";
import Rezaki_gazovye_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_5";
import Rezaki_gazovye_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_6";
import Rezaki_gazovye_7 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rezaki_gazovye_7";
import Rukav_svarochnyy from "./Pages/Gas_welding_Equipment/Then_categorize/Rukav_svarochnyy";
import Rukav_svarochnyy_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Rukav_svarochnyy_1";
import Rukav_svarochnyy_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Rukav_svarochnyy_2";
import Rukav_svarochnyy_1_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_1_1";
import Rukav_svarochnyy_1_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_1_2";
import Rukav_svarochnyy_1_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_1_3";
import Rukav_svarochnyy_1_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_1_4";
import Rukav_svarochnyy_1_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_1_5";
import Rukav_svarochnyy_1_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_1_6";
import Rukav_svarochnyy_2_1 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_2_1";
import Rukav_svarochnyy_2_2 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_2_2";
import Rukav_svarochnyy_2_3 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_2_3";
import Rukav_svarochnyy_2_4 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_2_4";
import Rukav_svarochnyy_2_5 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_2_5";
import Rukav_svarochnyy_2_6 from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Rukav_svarochnyy_2_6";
import Ustroystva_predokhranitelnye_dlya_gazosvarki
    from "./Pages/Gas_welding_Equipment/Then_categorize/Ustroystva_predokhranitelnye_dlya_gazosvarki";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_1
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_1";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_2
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_2";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_3
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_3";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_4
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_4";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_5
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_5";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_6
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_6";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_7
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_7";
import Ustroystva_predokhranitelnye_dlya_gazosvarki_8
    from "./Pages/Gas_welding_Equipment/Then_categorize/Products/Ustroystva_predokhranitelnye_dlya_gazosvarki_8";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Main}></Route>
                <Route path='/contacts' Component={ContactPage}></Route>
                <Route path='/services' Component={Services}></Route>
                <Route path='/useful' Component={UseFulPage}></Route>
                <Route path='/zakhvaty' Component={Zakhvaty}></Route>
                <Route path="/bloki" Component={Blokies}></Route>
                <Route path="/lebedki-elektricheskie" Component={Lebedki_elektricheskie}></Route>
                <Route path="/domkraty" Component={Domkraty}></Route>
                <Route path="/lenta-tekstilnaya" Component={Lenta_tekstilnaya}></Route>
                <Route path="/mini-tali-elektricheskie" Component={Mini_tali_elektricheskie}></Route>
                <Route path="/ruchnye-lebedki" Component={Ruchnye_lebedki}></Route>
                <Route path="/ruchnye-tali" Component={Ruchnye_tali}></Route>
                <Route path="/komplektuyushchie-dlya-strop" Component={Komplektuyushchie_dlya_strop}></Route>
                <Route path="/kanaty-i-verevki" Component={Kanaty_i_verevki}></Route>
                <Route path="/stropy-gruzovye-tsepnye" Component={stropy_gruzovye_tsepnye}></Route>
                <Route path="/sredstva-krepleniya-gruzov" Component={Sredstva_krepleniya_gruzov}></Route>
                <Route path="/elektricheskie-tali" Component={Elektricheskie_tali}></Route>
                <Route path="/stelazhi" Component={Stelazhi}></Route>
                <Route path="/kolesa" Component={Kolesa}></Route>
                <Route path="/vyshka-tura" Component={Vyshka_tura}></Route>
                <Route path="/betonosmesitelie" Component={Betonosmesiteli}></Route>
                <Route path="/badi-dlya-podachi-betona" Component={Badi_dlya_podachi_betona}></Route>
                <Route path="/lesa-stroitelnye" Component={Lesa_stroitelnye}></Route>
                <Route path="/Blok-trekhrolyy-dlya-kanata-i-verevki" Component={Bloki_1}></Route>
                <Route path="/Bloki-montazhnye-tralovye" Component={Bloki_2}></Route>
                <Route path="/Domkrat-reechnyy-High-Jack-avtomobilnyy-1" Component={Domkrat_1}></Route>
                <Route path="/Domkrat-reechnyy" Component={Domkrat_2}></Route>
                <Route path="/Domkraty-gidravlicheskie-butylochnye" Component={Domkrat_3}></Route>
                <Route path="/Zakhvat-dlya-trub-ZT" Component={Zakhvat_1}></Route>
                <Route path="/Zakhvat-balochnyy-tip-JT" Component={Zakhvat_2}></Route>
                <Route path="/Zakhvat-tip-DSQC" Component={Zakhvat_3}></Route>
                <Route path="/Zakhvat-tip-DHQ" Component={Zakhvat_4}></Route>
                <Route path="/Zveno-ovalnoe-s-dopolnitelnymi-zvenyami" Component={Zveno_1}></Route>
                <Route path="/Zazhim-dlya-kanata-DIN-1142" Component={Zveno_2}></Route>
                <Route path="/Kryuk-S-obraznyy" Component={Zveno_3}></Route>
                <Route path="/Talrep-takelazhnyy-vilka-vilka" Component={Zveno_4}></Route>
                <Route path="/Skoby-takelazhnye" Component={Zveno_5}></Route>
                <Route path="/Kryuk-chekernyy" Component={Zveno_6}></Route>
                <Route path="/Kryuk-samozapirayushchiysya" Component={Zveno_7}></Route>
                <Route path="/Kryuk-chalochnyy-tip-322A-s-vertlyugom" Component={Zveno_8}></Route>
                <Route path="/Kryuk-chalochnyy-tip-320A" Component={Zveno_9}></Route>
                <Route path="/Zveno-ovalnoe" Component={Zveno_10}></Route>
                <Route path="/Ukorotitel-tsepnoy-kleshnevoy" Component={Zveno_11}></Route>
                <Route path="/Kryuk-s-shirokim-zevom" Component={Zveno_12}></Route>
                <Route path="/Zveno-soedinitelnoe-evropeyskogo-tipa" Component={Zveno_13}></Route>
                <Route path="/Kryuk-s-vilochnym-razemom" Component={Zveno_14}></Route>
                <Route path="/TSep8" Component={Zveno_15}></Route>
                <Route path="/Koush-otsinkovannyy-dlya-kanata" Component={Zveno_16}></Route>
                <Route path="/Vtulka-alyuminievaya" Component={Zveno_17}></Route>
                <Route path="/Lebedki-elektricheskie-serii-JK" Component={Lebedki_elektricheskie_1}></Route>
                <Route path="/Lebedki-elektricheskie-serii-KDJ" Component={Lebedki_elektricheskie_2}></Route>
                <Route path="/Kapronovaya-verevka" Component={Kanaty_i_verevki_1}></Route>
                <Route path="/Kanat-stalnoy-GOST-2688-80" Component={Kanaty_i_verevki_2}></Route>
                <Route path="/telezhki-gidravlicheskie" Component={Telezhki_gidravlicheskie}></Route>
                <Route path="/stropy-gruzovye-iz-stalnogo-kanata"
                       Component={stropy_gruzovye_iz_stalnogo_kanata}></Route>
                <Route path="/Lenta-tekstilnaya-item" Component={Lenta_tekstilnaya_item_1}></Route>
                <Route path="/stropy-gruzovye-tekstilnye" Component={stropy_gruzovye_tekstilnye}></Route>

                <Route path="/mini_tali_elektricheskie_1" Component={Mini_tali_elektricheskie_1}></Route>
                <Route path="/mini_tali_elektricheskie_2" Component={Mini_tali_elektricheskie_2}></Route>
                <Route path="/mini_tali_elektricheskie_3" Component={Mini_tali_elektricheskie_3}></Route>
                <Route path="/mini_tali_elektricheskie_4" Component={Mini_tali_elektricheskie_4}></Route>
                <Route path="/mini_tali_elektricheskie_5" Component={Mini_tali_elektricheskie_5}></Route>
                <Route path="/mini_tali_elektricheskie_6" Component={Mini_tali_elektricheskie_6}></Route>
                <Route path="/mini_tali_elektricheskie_7" Component={Mini_tali_elektricheskie_7}></Route>

                <Route path="/ruchnye_lebedki_1" Component={Ruchnye_lebedki_1}></Route>
                <Route path="/ruchnye_lebedki_2" Component={Ruchnye_lebedki_2}></Route>
                <Route path="/ruchnye_lebedki_3" Component={Ruchnye_lebedki_3}></Route>
                <Route path="/ruchnye_lebedki_4" Component={Ruchnye_lebedki_4}></Route>
                <Route path="/ruchnye_lebedki_5" Component={Ruchnye_lebedki_5}></Route>
                <Route path="/ruchnye_lebedki_6" Component={Ruchnye_lebedki_6}></Route>
                <Route path="/ruchnye_lebedki_7" Component={Ruchnye_lebedki_7}></Route>
                <Route path="/ruchnye_lebedki_8" Component={Ruchnye_lebedki_8}></Route>
                <Route path="/ruchnye_lebedki_9" Component={Ruchnye_lebedki_9}></Route>

                <Route path="/ruchnye_tali_1" Component={Ruchnye_tali_1}></Route>
                <Route path="/ruchnye_tali_2" Component={Ruchnye_tali_2}></Route>
                <Route path="/ruchnye_tali_3" Component={Ruchnye_tali_3}></Route>
                <Route path="/ruchnye_tali_4" Component={Ruchnye_tali_4}></Route>
                <Route path="/ruchnye_tali_5" Component={Ruchnye_tali_5}></Route>
                <Route path="/ruchnye_tali_6" Component={Ruchnye_tali_6}></Route>
                <Route path="/ruchnye_tali_7" Component={Ruchnye_tali_7}></Route>

                <Route path="/sredstva-krepleniya-gruzov_1" Component={Sredstva_krepleniya_gruzov_1}></Route>
                <Route path="/sredstva-krepleniya-gruzov_2" Component={Sredstva_krepleniya_gruzov_2}></Route>
                <Route path="/sredstva-krepleniya-gruzov_3" Component={Sredstva_krepleniya_gruzov_3}></Route>
                <Route path="/sredstva-krepleniya-gruzov_4" Component={Sredstva_krepleniya_gruzov_4}></Route>
                <Route path="/sredstva-krepleniya-gruzov_5" Component={Sredstva_krepleniya_gruzov_5}></Route>
                <Route path="/sredstva-krepleniya-gruzov_6" Component={Sredstva_krepleniya_gruzov_6}></Route>

                <Route path="/stropy-gruzovye-iz-stalnogo-kanata_1"
                       Component={Stropy_gruzovye_iz_stalnogo_kanata_1}></Route>
                <Route path="/stropy-gruzovye-iz-stalnogo-kanata_2"
                       Component={Stropy_gruzovye_iz_stalnogo_kanata_2}></Route>
                <Route path="/stropy-gruzovye-iz-stalnogo-kanata_3"
                       Component={Stropy_gruzovye_iz_stalnogo_kanata_3}></Route>
                <Route path="/stropy-gruzovye-iz-stalnogo-kanata_4"
                       Component={Stropy_gruzovye_iz_stalnogo_kanata_4}></Route>
                <Route path="/stropy-gruzovye-iz-stalnogo-kanata_5"
                       Component={Stropy_gruzovye_iz_stalnogo_kanata_5}></Route>
                <Route path="/stropy-gruzovye-iz-stalnogo-kanata_6"
                       Component={Stropy_gruzovye_iz_stalnogo_kanata_6}></Route>

                <Route path="/stropy-gruzovye-tekstilnye_1" Component={Stropy_gruzovye_tekstilnye_1}></Route>
                <Route path="/stropy-gruzovye-tekstilnye_2" Component={Stropy_gruzovye_tekstilnye_2}></Route>
                <Route path="/stropy-gruzovye-tekstilnye_3" Component={Stropy_gruzovye_tekstilnye_3}></Route>
                <Route path="/stropy-gruzovye-tekstilnye_4" Component={Stropy_gruzovye_tekstilnye_4}></Route>
                <Route path="/stropy-gruzovye-tekstilnye_5" Component={Stropy_gruzovye_tekstilnye_5}></Route>

                <Route path="/stropy-gruzovye-tsepnye_1" Component={Stropy_gruzovye_tsepnye_1}></Route>
                <Route path="/stropy-gruzovye-tsepnye_2" Component={Stropy_gruzovye_tsepnye_2}></Route>
                <Route path="/stropy-gruzovye-tsepnye_3" Component={Stropy_gruzovye_tsepnye_3}></Route>
                <Route path="/stropy-gruzovye-tsepnye_4" Component={Stropy_gruzovye_tsepnye_4}></Route>
                <Route path="/stropy-gruzovye-tsepnye_5" Component={Stropy_gruzovye_tsepnye_5}></Route>
                <Route path="/stropy-gruzovye-tsepnye_6" Component={Stropy_gruzovye_tsepnye_6}></Route>

                <Route path="/elektricheskie-tali_1" Component={Elektricheskie_tali_1}></Route>
                <Route path="/elektricheskie-tali_2" Component={Elektricheskie_tali_2}></Route>

                <Route path="/stelazhi_1" Component={Stelazhi_1}></Route>
                <Route path="/stelazhi_2" Component={Stelazhi_2}></Route>
                <Route path="/stelazhi_3" Component={Stelazhi_3}></Route>
                <Route path="/stelazhi_4" Component={Stelazhi_4}></Route>

                <Route path="/telezhki_1" Component={Telezhki_1}></Route>
                <Route path="/telezhki_2" Component={Telezhki_2}></Route>
                <Route path="/telezhki_3" Component={Telezhki_3}></Route>
                <Route path="/telezhki_4" Component={Telezhki_4}></Route>
                <Route path="/telezhki_5" Component={Telezhki_5}></Route>

                <Route path="/kolesa_1" Component={Kolesa_1}></Route>
                <Route path="/kolesa_2" Component={Kolesa_2}></Route>
                <Route path="/kolesa_3" Component={Kolesa_3}></Route>
                <Route path="/kolesa_4" Component={Kolesa_4}></Route>
                <Route path="/kolesa_5" Component={Kolesa_5}></Route>
                <Route path="/kolesa_6" Component={Kolesa_6}></Route>
                <Route path="/kolesa_7" Component={Kolesa_7}></Route>
                <Route path="/kolesa_8" Component={Kolesa_8}></Route>
                <Route path="/kolesa_9" Component={Kolesa_9}></Route>

                <Route path="/badi-dlya-podachi-betona_1" Component={Badi_dlya_podachi_betona_1}></Route>
                <Route path="/badi-dlya-podachi-betona_2" Component={Badi_dlya_podachi_betona_2}></Route>
                <Route path="/badi-dlya-podachi-betona_3" Component={Badi_dlya_podachi_betona_3}></Route>

                <Route path="/betonosmesiteli_1" Component={Betonosmesiteli_1}></Route>
                <Route path="/betonosmesiteli_2" Component={Betonosmesiteli_2}></Route>

                <Route path="/lesa_stroitelnye_1" Component={Lesa_stroitelnye_1}></Route>

                <Route path="/vyshka_tura_1" Component={Vyshka_tura_1}></Route>


                <Route path="/svarochnye-apparaty-gorelki" Component={Svarochnye_apparaty_gorelki}></Route>

                <Route path="/raskhodnye-materialy-dlya-svarki" Component={Raskhodnye_materialy_dlya_svarki}></Route>

                <Route path="/silovoy-kabel-i-aksessuary" Component={Silovoy_kabel_i_aksessuary}></Route>

                <Route path="/zashchita-svarshchika" Component={Zashchita_svarshchika}></Route>

                <Route path="/prisposobleniya-i-osnastka" Component={Prisposobleniya_i_osnastka__1}></Route>

                <Route path="/gazosvarochnoe-oborudovanie_1" Component={Gazosvarochnoe_oborudovanie_1}></Route>

                <Route path="/krugi" Component={Krugi}></Route>

                <Route path="/Gorelki-dlya-poluavtomatov" Component={Gorelki}></Route>
                <Route path="/Svarochnye-invertory" Component={Svarochnye_invertory}></Route>
                <Route path="/Svarochnye-poluavtomaty" Component={Svarochnye_poluavtomaty}></Route>

                <Route path="/gorelki_1" Component={Gorelki_1}></Route>
                <Route path="/gorelki_2" Component={Gorelki_2}></Route>
                <Route path="/gorelki_3" Component={Gorelki_3}></Route>
                <Route path="/gorelki_4" Component={Gorelki_4}></Route>
                <Route path="/gorelki_5" Component={Gorelki_5}></Route>
                <Route path="/gorelki_6" Component={Gorelki_6}></Route>
                <Route path="/gorelki_7" Component={Gorelki_7}></Route>

                <Route path="/svarochnye_invertory_1" Component={Svarochnye_invertory_1}></Route>
                <Route path="/svarochnye_invertory_2" Component={Svarochnye_invertory_2}></Route>

                <Route path="/svarochnye_poluavtomaty_1" Component={Svarochnye_poluavtomaty_1}></Route>
                <Route path="/svarochnye_poluavtomaty_2" Component={Svarochnye_poluavtomaty_2}></Route>

                <Route path="/Gorelki-dlya-poluavtomatov" Component={Badi_dlya_podachi_betona_1}></Route>
                <Route path="/Svarochnye-invertory" Component={Badi_dlya_podachi_betona_2}></Route>
                <Route path="/Svarochnye-poluavtomaty" Component={Badi_dlya_podachi_betona_3}></Route>

                <Route path="/pripoi-flyusy" Component={Pripoi_flyusy}></Route>
                <Route path="/provoloka-poroshkovaya" Component={Provoloka_poroshkovaya}></Route>
                <Route path="/provoloka-sploshnogo-secheniya" Component={Provoloka_sploshnogo_secheniya}></Route>
                <Route path="/sprei-aerozoli" Component={Sprei_aerozoli}></Route>

                <Route path="/pripoi_flyusy_1" Component={Pripoi_flyusy_1}></Route>
                <Route path="/pripoi_flyusy_2" Component={Pripoi_flyusy_2}></Route>

                <Route path="/provoloka_poroshkovaya_1" Component={Provoloka_poroshkovaya_1}></Route>

                <Route path="/provoloka_sploshnogo_secheniya_1" Component={Provoloka_sploshnogo_secheniya_1}></Route>
                <Route path="/provoloka_sploshnogo_secheniya_2" Component={Provoloka_sploshnogo_secheniya_2}></Route>

                <Route path="/sprei_aerozoli_1" Component={Sprei_aerozoli_1}></Route>
                <Route path="/sprei_aerozoli_2" Component={Sprei_aerozoli_2}></Route>

                <Route path="/kabelnye-razemy" Component={Kabelnye_razemy}></Route>

                <Route path="/kabelnye_razemy_1" Component={Kabelnye_razemy_1}></Route>
                <Route path="/kabelnye_razemy_2" Component={Kabelnye_razemy_2}></Route>
                <Route path="/kabelnye_razemy_3" Component={Kabelnye_razemy_3}></Route>
                <Route path="/kabelnye_razemy_4" Component={Kabelnye_razemy_4}></Route>
                <Route path="/kabelnye_razemy_5" Component={Kabelnye_razemy_5}></Route>

                <Route path="/aksessuary" Component={Aksessuary}></Route>

                <Route path="/aksessuary_1" Component={Markery_promyshlennye}></Route>
                <Route path="/aksessuary_2" Component={Prochie_aksessuary_2}></Route>

                <Route path="/aksessuary_1_1" Component={Aksessuary_1_1}></Route>
                <Route path="/aksessuary_1_2" Component={Aksessuary_1_2}></Route>
                <Route path="/aksessuary_1_3" Component={Aksessuary_1_3}></Route>
                <Route path="/aksessuary_1_4" Component={Aksessuary_1_4}></Route>
                <Route path="/aksessuary_1_5" Component={Aksessuary_1_5}></Route>

                <Route path="/prochie_aksessuary_1" Component={Aksessuary_2_1}></Route>
                <Route path="/prochie_aksessuary_2" Component={Aksessuary_2_2}></Route>
                <Route path="/prochie_aksessuary_3" Component={Aksessuary_2_3}></Route>
                <Route path="/prochie_aksessuary_4" Component={Aksessuary_2_4}></Route>
                <Route path="/prochie_aksessuary_5" Component={Aksessuary_2_5}></Route>
                <Route path="/prochie_aksessuary_6" Component={Aksessuary_2_6}></Route>
                <Route path="/prochie_aksessuary_7" Component={Aksessuary_2_7}></Route>
                <Route path="/prochie_aksessuary_8" Component={Aksessuary_2_8}></Route>
                <Route path="/prochie_aksessuary_9" Component={Aksessuary_2_9}></Route>
                <Route path="/prochie_aksessuary_10" Component={Aksessuary_2_10}></Route>
                <Route path="/prochie_aksessuary_11" Component={Aksessuary_2_11}></Route>
                <Route path="/prochie_aksessuary_12" Component={Aksessuary_2_12}></Route>
                <Route path="/prochie_aksessuary_13" Component={Aksessuary_2_13}></Route>
                <Route path="/prochie_aksessuary_14" Component={Aksessuary_2_14}></Route>
                <Route path="/prochie_aksessuary_15" Component={Aksessuary_2_15}></Route>
                <Route path="/prochie_aksessuary_16" Component={Aksessuary_2_16}></Route>
                <Route path="/prochie_aksessuary_17" Component={Aksessuary_2_17}></Route>
                <Route path="/prochie_aksessuary_18" Component={Aksessuary_2_18}></Route>

                <Route path="/klemmy-svarochnye" Component={Klemmy_svarochnye}></Route>
                <Route path="/svarochnye-elektrododerzhateli" Component={Svarochnye_elektrododerzhateli}></Route>

                <Route path="/klemmy_svarochnye_1" Component={Klemmy_svarochnye_1}></Route>
                <Route path="/klemmy_svarochnye_2" Component={Klemmy_svarochnye_2}></Route>
                <Route path="/klemmy_svarochnye_3" Component={Klemmy_svarochnye_3}></Route>
                <Route path="/klemmy_svarochnye_4" Component={Klemmy_svarochnye_4}></Route>
                <Route path="/klemmy_svarochnye_5" Component={Klemmy_svarochnye_5}></Route>
                <Route path="/klemmy_svarochnye_6" Component={Klemmy_svarochnye_6}></Route>
                <Route path="/klemmy_svarochnye_7" Component={Klemmy_svarochnye_7}></Route>
                <Route path="/klemmy_svarochnye_8" Component={Klemmy_svarochnye_8}></Route>
                <Route path="/klemmy_svarochnye_9" Component={Klemmy_svarochnye_9}></Route>
                <Route path="/klemmy_svarochnye_10" Component={Klemmy_svarochnye_10}></Route>

                <Route path="/svarochnye_elektrododerzhateli_1" Component={Svarochnye_elektrododerzhateli_1}></Route>
                <Route path="/svarochnye_elektrododerzhateli_2" Component={Svarochnye_elektrododerzhateli_2}></Route>
                <Route path="/svarochnye_elektrododerzhateli_3" Component={Svarochnye_elektrododerzhateli_3}></Route>
                <Route path="/svarochnye_elektrododerzhateli_4" Component={Svarochnye_elektrododerzhateli_4}></Route>
                <Route path="/svarochnye_elektrododerzhateli_5" Component={Svarochnye_elektrododerzhateli_5}></Route>
                <Route path="/svarochnye_elektrododerzhateli_6" Component={Svarochnye_elektrododerzhateli_6}></Route>
                <Route path="/svarochnye_elektrododerzhateli_7" Component={Svarochnye_elektrododerzhateli_7}></Route>
                <Route path="/svarochnye_elektrododerzhateli_8" Component={Svarochnye_elektrododerzhateli_8}></Route>
                <Route path="/svarochnye_elektrododerzhateli_9" Component={Svarochnye_elektrododerzhateli_9}></Route>
                <Route path="/svarochnye_elektrododerzhateli_10" Component={Svarochnye_elektrododerzhateli_10}></Route>

                <Route path="/krugi-zachistnye-lepestkovye" Component={Krugi_zachistnye_lepestkovye}></Route>
                <Route path="/krugi-otreznye" Component={Krugi_otreznye}></Route>

                <Route path="/krugi_zachistnye_lepestkovye_1" Component={Krugi_zachistnye_lepestkovye_1}></Route>
                <Route path="/krugi_zachistnye_lepestkovye_2" Component={Krugi_zachistnye_lepestkovye_2}></Route>

                <Route path="/krugi_otreznye_1" Component={Krugi_otreznye_1}></Route>
                <Route path="/krugi_otreznye_2" Component={Krugi_otreznye_2}></Route>
                <Route path="/krugi_otreznye_3" Component={Krugi_otreznye_3}></Route>
                <Route path="/krugi_otreznye_4" Component={Krugi_otreznye_4}></Route>
                <Route path="/krugi_otreznye_5" Component={Krugi_otreznye_5}></Route>
                <Route path="/krugi_otreznye_6" Component={Krugi_otreznye_6}></Route>
                <Route path="/krugi_otreznye_7" Component={Krugi_otreznye_7}></Route>
                <Route path="/krugi_otreznye_8" Component={Krugi_otreznye_8}></Route>
                <Route path="/krugi_otreznye_9" Component={Krugi_otreznye_9}></Route>
                <Route path="/krugi_otreznye_10" Component={Krugi_otreznye_10}></Route>
                <Route path="/krugi_otreznye_11" Component={Krugi_otreznye_11}></Route>
                <Route path="/krugi_otreznye_12" Component={Krugi_otreznye_12}></Route>
                <Route path="/krugi_otreznye_13" Component={Krugi_otreznye_13}></Route>
                <Route path="/krugi_otreznye_14" Component={Krugi_otreznye_14}></Route>
                <Route path="/krugi_otreznye_15" Component={Krugi_otreznye_15}></Route>
                <Route path="/krugi_otreznye_16" Component={Krugi_otreznye_16}></Route>

                <Route path="/maski-khameleon" Component={Maski_khameleon}></Route>
                <Route path="/sredstva-zashchity-golovy-organov-zreniya-i-dykhaniya"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya}></Route>
                <Route path="/sredstva-zashchity-ruk-i-nog" Component={Sredstva_zashchity_ruk_i_nog}></Route>
                <Route path="/stekla-dlya-masok-i-ochkov" Component={Stekla_dlya_masok_i_ochkov}></Route>
                <Route path="/shchitki-svarochnye" Component={Shchitki_svarochnye}></Route>

                <Route path="/maski-khameleon_1" Component={Maski_khameleon_1}></Route>
                <Route path="/maski-khameleon_2" Component={Maski_khameleon_2}></Route>
                <Route path="/maski-khameleon_3" Component={Maski_khameleon_3}></Route>

                <Route path="/sredstva_zashchity_ruk_i_nog_1" Component={Sredstva_zashchity_ruk_i_nog_1}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_2" Component={Sredstva_zashchity_ruk_i_nog_2}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_3" Component={Sredstva_zashchity_ruk_i_nog_3}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_4" Component={Sredstva_zashchity_ruk_i_nog_4}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_5" Component={Sredstva_zashchity_ruk_i_nog_5}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_6" Component={Sredstva_zashchity_ruk_i_nog_6}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_7" Component={Sredstva_zashchity_ruk_i_nog_7}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_8" Component={Sredstva_zashchity_ruk_i_nog_8}></Route>
                <Route path="/sredstva_zashchity_ruk_i_nog_9" Component={Sredstva_zashchity_ruk_i_nog_9}></Route>

                <Route path="/stekla_dlya_masok_i_ochkov_1" Component={Stekla_dlya_masok_i_ochkov_1}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_2" Component={Stekla_dlya_masok_i_ochkov_2}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_3" Component={Stekla_dlya_masok_i_ochkov_3}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_4" Component={Stekla_dlya_masok_i_ochkov_4}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_5" Component={Stekla_dlya_masok_i_ochkov_5}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_6" Component={Stekla_dlya_masok_i_ochkov_6}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_7" Component={Stekla_dlya_masok_i_ochkov_7}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_8" Component={Stekla_dlya_masok_i_ochkov_8}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_9" Component={Stekla_dlya_masok_i_ochkov_9}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_10" Component={Stekla_dlya_masok_i_ochkov_10}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_11" Component={Stekla_dlya_masok_i_ochkov_11}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_12" Component={Stekla_dlya_masok_i_ochkov_12}></Route>
                <Route path="/stekla_dlya_masok_i_ochkov_13" Component={Stekla_dlya_masok_i_ochkov_13}></Route>

                <Route path="/shchitki_svarochnye_1" Component={Shchitki_svarochnye_1}></Route>
                <Route path="/shchitki_svarochnye_2" Component={Shchitki_svarochnye_2}></Route>
                <Route path="/shchitki_svarochnye_3" Component={Shchitki_svarochnye_3}></Route>
                <Route path="/shchitki_svarochnye_4" Component={Shchitki_svarochnye_4}></Route>
                <Route path="/shchitki_svarochnye_5" Component={Shchitki_svarochnye_5}></Route>
                <Route path="/shchitki_svarochnye_6" Component={Shchitki_svarochnye_6}></Route>

                <Route path="/komplektuyushchie-k-reduktoram-i-regulyatoram-manometry" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry}></Route>

                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_1}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_2}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_5}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_6}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_8}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_9}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_10}></Route>
                <Route path="/komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11" Component={Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_11}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.1" Component={Reduktory_ballonnye}></Route>
                <Route path="/reduktory_ballonnye_1" Component={Reduktory_ballonnye_1}></Route>
                <Route path="/reduktory_ballonnye_2" Component={Reduktory_ballonnye_2}></Route>
                <Route path="/reduktory_ballonnye_3" Component={Reduktory_ballonnye_3}></Route>
                <Route path="/reduktory_ballonnye_4" Component={Reduktory_ballonnye_4}></Route>
                <Route path="/reduktory_ballonnye_5" Component={Reduktory_ballonnye_5}></Route>

                <Route path="/reduktory_ballonnye_1.1" Component={Reduktory_ballonnye_1_1}></Route>
                <Route path="/reduktory_ballonnye_1.2" Component={Reduktory_ballonnye_1_2}></Route>

                <Route path="/reduktory_ballonnye_2.1" Component={Reduktory_ballonnye_2_1}></Route>

                <Route path="/reduktory_ballonnye_3.1" Component={Reduktory_ballonnye_3_1}></Route>

                <Route path="/reduktory_ballonnye_4.1" Component={Reduktory_ballonnye_4_1}></Route>

                <Route path="/reduktory_ballonnye_5.1" Component={Reduktory_ballonnye_5_1}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.3" Component={Ballony_generatory_kolpaki}></Route>

                <Route path="/ballony_generatory_kolpaki_1" Component={Ballony_generatory_kolpaki_1}></Route>
                <Route path="/ballony_generatory_kolpaki_2" Component={Ballony_generatory_kolpaki_2}></Route>
                <Route path="/ballony_generatory_kolpaki_3" Component={Ballony_generatory_kolpaki_3}></Route>
                <Route path="/ballony_generatory_kolpaki_4" Component={Ballony_generatory_kolpaki_4}></Route>
                <Route path="/ballony_generatory_kolpaki_5" Component={Ballony_generatory_kolpaki_5}></Route>
                <Route path="/ballony_generatory_kolpaki_6" Component={Ballony_generatory_kolpaki_6}></Route>
                <Route path="/ballony_generatory_kolpaki_7" Component={Ballony_generatory_kolpaki_7}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.4" Component={Ventili_i_zapchasti_k_nim}></Route>

                <Route path="/ventili_i_zapchasti_k_nim_1" Component={Ventili_i_zapchasti_k_nim_1}></Route>
                <Route path="/ventili_i_zapchasti_k_nim_2" Component={Ventili_i_zapchasti_k_nim_2}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.5" Component={Gazovye_gorelki_i_payalniki}></Route>

                <Route path="/gazovye_gorelki_i_payalniki_1" Component={Gazovye_gorelki_i_payalniki_1}></Route>
                <Route path="/gazovye_gorelki_i_payalniki_2" Component={Gazovye_gorelki_i_payalniki_2}></Route>
                <Route path="/gazovye_gorelki_i_payalniki_3" Component={Gazovye_gorelki_i_payalniki_3}></Route>
                <Route path="/gazovye_gorelki_i_payalniki_4" Component={Gazovye_gorelki_i_payalniki_4}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.6" Component={Gorelki_gazovozdushnye}></Route>

                <Route path="/gorelki_gazovozdushnye_1" Component={Gorelki_gazovozdushnye_1}></Route>
                <Route path="/gorelki_gazovozdushnye_2" Component={Gorelki_gazovozdushnye_2}></Route>
                <Route path="/gorelki_gazovozdushnye_3" Component={Gorelki_gazovozdushnye_3}></Route>
                <Route path="/gorelki_gazovozdushnye_4" Component={Gorelki_gazovozdushnye_4}></Route>
                <Route path="/gorelki_gazovozdushnye_5" Component={Gorelki_gazovozdushnye_5}></Route>
                <Route path="/gorelki_gazovozdushnye_6" Component={Gorelki_gazovozdushnye_6}></Route>
                <Route path="/gorelki_gazovozdushnye_7" Component={Gorelki_gazovozdushnye_7}></Route>
                <Route path="/gorelki_gazovozdushnye_8" Component={Gorelki_gazovozdushnye_8}></Route>
                <Route path="/gorelki_gazovozdushnye_9" Component={Gorelki_gazovozdushnye_9}></Route>
                <Route path="/gorelki_gazovozdushnye_10" Component={Gorelki_gazovozdushnye_10}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.7" Component={Gorelki_svarochnye}></Route>

                <Route path="/gorelki_svarochnye_1" Component={Gorelki_svarochnye_1}></Route>
                <Route path="/gorelki_svarochnye_2" Component={Gorelki_svarochnye_2}></Route>
                <Route path="/gorelki_svarochnye_3" Component={Gorelki_svarochnye_3}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.8" Component={Zhidkotoplivnoe_oborudovanie}></Route>

                <Route path="/zhidkotoplivnoe_oborudovanie_1" Component={Zhidkotoplivnoe_oborudovanie_1}></Route>
                <Route path="/zhidkotoplivnoe_oborudovanie_2" Component={Zhidkotoplivnoe_oborudovanie_2}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.9" Component={Posty_gazosvarochnye}></Route>

                <Route path="/posty_gazosvarochnye_1" Component={Posty_gazosvarochnye_1}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.10" Component={Rezaki_gazovye}></Route>

                <Route path="/rezaki_gazovye_1" Component={Rezaki_gazovye_1}></Route>
                <Route path="/rezaki_gazovye_2" Component={Rezaki_gazovye_2}></Route>
                <Route path="/rezaki_gazovye_3" Component={Rezaki_gazovye_3}></Route>
                <Route path="/rezaki_gazovye_4" Component={Rezaki_gazovye_4}></Route>
                <Route path="/rezaki_gazovye_5" Component={Rezaki_gazovye_5}></Route>
                <Route path="/rezaki_gazovye_6" Component={Rezaki_gazovye_6}></Route>
                <Route path="/rezaki_gazovye_7" Component={Rezaki_gazovye_7}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.11" Component={Rukav_svarochnyy}></Route>

                <Route path="/rukav_svarochnyy_1" Component={Rukav_svarochnyy_1}></Route>
                <Route path="/rukav_svarochnyy_2" Component={Rukav_svarochnyy_2}></Route>

                <Route path="/rukav_svarochnyy_1_1" Component={Rukav_svarochnyy_1_1}></Route>
                <Route path="/rukav_svarochnyy_1_2" Component={Rukav_svarochnyy_1_2}></Route>
                <Route path="/rukav_svarochnyy_1_3" Component={Rukav_svarochnyy_1_3}></Route>
                <Route path="/rukav_svarochnyy_1_4" Component={Rukav_svarochnyy_1_4}></Route>
                <Route path="/rukav_svarochnyy_1_5" Component={Rukav_svarochnyy_1_5}></Route>
                <Route path="/rukav_svarochnyy_1_6" Component={Rukav_svarochnyy_1_6}></Route>

                <Route path="/rukav_svarochnyy_2_1" Component={Rukav_svarochnyy_2_1}></Route>
                <Route path="/rukav_svarochnyy_2_2" Component={Rukav_svarochnyy_2_2}></Route>
                <Route path="/rukav_svarochnyy_2_3" Component={Rukav_svarochnyy_2_3}></Route>
                <Route path="/rukav_svarochnyy_2_4" Component={Rukav_svarochnyy_2_4}></Route>
                <Route path="/rukav_svarochnyy_2_5" Component={Rukav_svarochnyy_2_5}></Route>
                <Route path="/rukav_svarochnyy_2_6" Component={Rukav_svarochnyy_2_6}></Route>

                <Route path="/gazosvarochnoe_oborudovanie_1.12" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki}></Route>

                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_1" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_1}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_2" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_2}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_3" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_3}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_4" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_4}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_5" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_5}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_6" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_6}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_7" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_7}></Route>
                <Route path="/ustroystva_predokhranitelnye_dlya_gazosvarki_8" Component={Ustroystva_predokhranitelnye_dlya_gazosvarki_8}></Route>

                <Route path="/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_1}></Route>
                <Route path="/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2}></Route>
                <Route path="/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_3}></Route>
                <Route path="/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_4}></Route>
                <Route path="/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_5}></Route>
                <Route path="/sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6"
                       Component={Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_6}></Route>

                <Route path='/tekh-pasport-na-blok-montazhnyy-hqg-l-k1' Component={UseFulPage1}></Route>
                <Route path='/tekh-pasport-na-blok-montazhnyy-hqg-l-k1' Component={UseFulPage1}></Route>
                <Route path='/pasport-na-lebyedku-ruchnuyu-barabannuyu-kanatnuyu-jhw-1t-2t-3t'
                       Component={UseFulPage2}></Route>
                <Route path='/pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-barabannykh-modeley-hwv'
                       Component={UseFulPage3}></Route>
                <Route path='/pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-modeley-hwg'
                       Component={UseFulPage4}></Route>
                <Route path='/pasport-i-rukovodstvo-po-ekspluatatsii-lebedka-rychazhnaya-mtm-0-8t-1-6t-3-2t-5-4t'
                       Component={UseFulPage5}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;