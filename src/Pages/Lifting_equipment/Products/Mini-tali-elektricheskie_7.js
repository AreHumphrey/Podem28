import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_7_mini-tali-elektricheskie.png"

const Mini_tali_elektricheskie_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТИП МЕН, КОМБИНИРОВАН- НАЯ</h2>
                <p>Комбинированная модель МЕН, оснащена штекером для соединения с электрической тележкой, при этом все
                    функции управления и талью и тележкой сводятся к одному пульту.
                    Так же может использоваться как стационарная модель, без соединения с тележкой.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Модель</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Грузоподъемность, кг</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Высота подъема, м</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Скорость подъема, м/с</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Мощность двигателя, Вт</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Напряжение, В/ Частота, Гц</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Габариты, см</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Ширина, балки, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Диаметр каната, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес,кг</strong>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                МЕН125/250
                            </td>
                            <td>
                                <p align="center">
                                    125/250
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12/6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10/5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220/50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    47*38*20
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    68-88
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    24
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                МЕН250/500
                            </td>
                            <td>
                                <p align="center">
                                    250/500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12/6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10/5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    900
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220/50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    44*37*25
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    68-94
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    35
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                МЕН500/1000
                            </td>
                            <td>
                                <p align="center">
                                    500/1000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12/6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10/5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1600
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220/50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    58*28*35
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    80-110
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    38
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                МЕН600/1200
                            </td>
                            <td>
                                <p align="center">
                                    600/1200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12/6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10/5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1800
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220/50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    58*28*35
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    80-110
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
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

export default Mini_tali_elektricheskie_7;