import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_ruchnye-tali_4.png"

const Ruchnye_tali_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ШЕСТЕРЕННАЯ СТАЦИОНАРНАЯ ТИП HSZ-С (КИТАЙ)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1" cellPadding="3" cellSpacing="0" align="center">
                        <tbody>
                        <tr>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <b>Грузоподъемность, т</b>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b>Высота подъема, м</b>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                6
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                9
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                6
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td>
                                9
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                6
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td>
                                9
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                6
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5
                            </td>
                            <td>
                                9
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <p>Технические характеристики<br/></p>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b> Модель </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 0,5 </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 1 </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 1,5 </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 2 </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 3 </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 5 </b>
                            </td>
                            <td align="LEFT" valign="TOP">
                                <b> HSZ 10 </b>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Грузоподъемность, т</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="0,5" sdnum="1049;">
                                0,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1,5" sdnum="1049;">
                                1,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td align="CENTER" valign="TOP" sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td align="CENTER" valign="TOP" sdval="5" sdnum="1049;">
                                5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="10" sdnum="1049;">
                                10
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Высота подъема, м</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,5" sdnum="1049;">
                                2,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,5" sdnum="1049;">
                                2,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,5" sdnum="1049;">
                                2,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,5" sdnum="1049;">
                                2,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td align="CENTER" valign="TOP" sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td align="CENTER" valign="TOP" sdval="3" sdnum="1049;">
                                3
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Тестовая нагрузка, т</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="0,75" sdnum="1049;">
                                0,75
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1,5" sdnum="1049;">
                                1,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,25" sdnum="1049;">
                                2,25
                            </td>
                            <td align="CENTER" valign="TOP" sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td align="CENTER" valign="TOP" sdval="4,5" sdnum="1049;">
                                4,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="6,25" sdnum="1049;">
                                6,25
                            </td>
                            <td align="CENTER" valign="TOP" sdval="12,5" sdnum="1049;">
                                12,5
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Габаритная высота H, мм</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="258" sdnum="1049;">
                                258
                            </td>
                            <td align="CENTER" valign="TOP" sdval="274" sdnum="1049;">
                                274
                            </td>
                            <td align="CENTER" valign="TOP" sdval="347" sdnum="1049;">
                                347
                            </td>
                            <td align="CENTER" valign="TOP" sdval="396" sdnum="1049;">
                                396
                            </td>
                            <td align="CENTER" valign="TOP" sdval="486" sdnum="1049;">
                                486
                            </td>
                            <td align="CENTER" valign="TOP" sdval="616" sdnum="1049;">
                                616
                            </td>
                            <td align="CENTER" valign="TOP" sdval="700" sdnum="1049;">
                                700
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Необходимое усилие подъема, н</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="221" sdnum="1049;">
                                221
                            </td>
                            <td align="CENTER" valign="TOP" sdval="304" sdnum="1049;">
                                304
                            </td>
                            <td align="CENTER" valign="TOP" sdval="343" sdnum="1049;">
                                343
                            </td>
                            <td align="CENTER" valign="TOP" sdval="314" sdnum="1049;">
                                314
                            </td>
                            <td align="CENTER" valign="TOP" sdval="343" sdnum="1049;">
                                343
                            </td>
                            <td align="CENTER" valign="TOP" sdval="382" sdnum="1049;">
                                382
                            </td>
                            <td align="CENTER" valign="TOP" sdval="392" sdnum="1049;">
                                392
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Кол-во грузовых цепей</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td align="CENTER" valign="TOP" sdval="4" sdnum="1049;">
                                4
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Диаметр грузовых цепей, мм</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="6" sdnum="1049;">
                                6
                            </td>
                            <td align="CENTER" valign="TOP" sdval="6" sdnum="1049;">
                                6
                            </td>
                            <td align="CENTER" valign="TOP" sdval="8" sdnum="1049;">
                                8
                            </td>
                            <td align="CENTER" valign="TOP" sdval="6" sdnum="1049;">
                                6
                            </td>
                            <td align="CENTER" valign="TOP" sdval="8" sdnum="1049;">
                                8
                            </td>
                            <td align="CENTER" valign="TOP" sdval="10" sdnum="1049;">
                                10
                            </td>
                            <td align="CENTER" valign="TOP" sdval="10" sdnum="1049;">
                                10
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="4" height="79" align="CENTER" valign="MIDDLE">
                                <b>Размеры</b>
                            </td>
                            <td align="CENTER" valign="TOP">
                                <b>A</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="125" sdnum="1049;">
                                125
                            </td>
                            <td align="CENTER" valign="TOP" sdval="147" sdnum="1049;">
                                147
                            </td>
                            <td align="CENTER" valign="TOP" sdval="183" sdnum="1049;">
                                183
                            </td>
                            <td align="CENTER" valign="TOP" sdval="147" sdnum="1049;">
                                147
                            </td>
                            <td align="CENTER" valign="TOP" sdval="183" sdnum="1049;">
                                183
                            </td>
                            <td align="CENTER" valign="TOP" sdval="215" sdnum="1049;">
                                215
                            </td>
                            <td align="CENTER" valign="TOP" sdval="360,5" sdnum="1049;">
                                360,5
                            </td>
                        </tr>
                        <tr>
                            <td align="CENTER" valign="TOP">
                                <b>B</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="111" sdnum="1049;">
                                111
                            </td>
                            <td align="CENTER" valign="TOP" sdval="126" sdnum="1049;">
                                126
                            </td>
                            <td align="CENTER" valign="TOP" sdval="141" sdnum="1049;">
                                141
                            </td>
                            <td align="CENTER" valign="TOP" sdval="126" sdnum="1049;">
                                126
                            </td>
                            <td align="CENTER" valign="TOP" sdval="141" sdnum="1049;">
                                141
                            </td>
                            <td align="CENTER" valign="TOP" sdval="163" sdnum="1049;">
                                163
                            </td>
                            <td align="CENTER" valign="TOP" sdval="163" sdnum="1049;">
                                163
                            </td>
                        </tr>
                        <tr>
                            <td align="CENTER" valign="TOP">
                                <b>C</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="24" sdnum="1049;">
                                24
                            </td>
                            <td align="CENTER" valign="TOP" sdval="28" sdnum="1049;">
                                28
                            </td>
                            <td align="CENTER" valign="TOP" sdval="34" sdnum="1049;">
                                34
                            </td>
                            <td align="CENTER" valign="TOP" sdval="34" sdnum="1049;">
                                34
                            </td>
                            <td align="CENTER" valign="TOP" sdval="38" sdnum="1049;">
                                38
                            </td>
                            <td align="CENTER" valign="TOP" sdval="48" sdnum="1049;">
                                48
                            </td>
                            <td align="CENTER" valign="TOP" sdval="64" sdnum="1049;">
                                64
                            </td>
                        </tr>
                        <tr>
                            <td align="CENTER" valign="TOP">
                                <b>D</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="134" sdnum="1049;">
                                134
                            </td>
                            <td align="CENTER" valign="TOP" sdval="154" sdnum="1049;">
                                154
                            </td>
                            <td align="CENTER" valign="TOP" sdval="192" sdnum="1049;">
                                192
                            </td>
                            <td align="CENTER" valign="TOP" sdval="154" sdnum="1049;">
                                154
                            </td>
                            <td align="CENTER" valign="TOP" sdval="192" sdnum="1049;">
                                192
                            </td>
                            <td align="CENTER" valign="TOP" sdval="224" sdnum="1049;">
                                224
                            </td>
                            <td align="CENTER" valign="TOP" sdval="224" sdnum="1049;">
                                224
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Вес нетто, кг</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="8" sdnum="1049;">
                                8
                            </td>
                            <td align="CENTER" valign="TOP" sdval="10" sdnum="1049;">
                                10
                            </td>
                            <td align="CENTER" valign="TOP" sdval="16" sdnum="1049;">
                                16
                            </td>
                            <td align="CENTER" valign="TOP" sdval="14" sdnum="1049;">
                                14
                            </td>
                            <td align="CENTER" valign="TOP" sdval="24" sdnum="1049;">
                                24
                            </td>
                            <td align="CENTER" valign="TOP" sdval="36" sdnum="1049;">
                                36
                            </td>
                            <td align="CENTER" valign="TOP" sdval="68" sdnum="1049;">
                                68
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="CENTER" valign="TOP">
                                <b>Вес брутто, кг</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="10" sdnum="1049;">
                                10
                            </td>
                            <td align="CENTER" valign="TOP" sdval="13" sdnum="1049;">
                                13
                            </td>
                            <td align="CENTER" valign="TOP" sdval="20" sdnum="1049;">
                                20
                            </td>
                            <td align="CENTER" valign="TOP" sdval="17" sdnum="1049;">
                                17
                            </td>
                            <td align="CENTER" valign="TOP" sdval="28" sdnum="1049;">
                                28
                            </td>
                            <td align="CENTER" valign="TOP" sdval="45" sdnum="1049;">
                                45
                            </td>
                            <td align="CENTER" valign="TOP" sdval="83" sdnum="1049;">
                                83
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" height="28" align="CENTER" valign="TOP">
                                <b>Дополнительный вес на метр доп,подъёма, кг</b>
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1,7" sdnum="1049;">
                                1,7
                            </td>
                            <td align="CENTER" valign="TOP" sdval="1,7" sdnum="1049;">
                                1,7
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,3" sdnum="1049;">
                                2,3
                            </td>
                            <td align="CENTER" valign="TOP" sdval="2,5" sdnum="1049;">
                                2,5
                            </td>
                            <td align="CENTER" valign="TOP" sdval="3,7" sdnum="1049;">
                                3,7
                            </td>
                            <td align="CENTER" valign="TOP" sdval="5,3" sdnum="1049;">
                                5,3
                            </td>
                            <td align="CENTER" valign="TOP" sdval="9,7" sdnum="1049;">
                                9,7
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Ruchnye_tali_4;