import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_1_mini-tali-elektricheskie.png"

const Mini_tali_elektricheskie_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>BH250A</h2>
                <p>Мини электрическая таль BН250А, применяется там , где требуется осуществлять подъем груза на большую
                    высоту до 60м. Данные электротали работают от сети 230В, легко переносятся, при наличии распорной
                    консоли, могут подавать груз в окно здания.<br/></p>
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
                                    <b>BH250A</b>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Напряжение
                            </td>
                            <td>
                                <p align="center">
                                    230 Вольт ~
                                    50 Гц
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Мощность, Вт
                            </td>
                            <td>
                                <p align="center">
                                    1300
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Грузоподъемность, кг
                            </td>
                            <td>
                                <p align="center">
                                    250
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Скорость подъема, м/мин
                            </td>
                            <td>
                                <p align="center">
                                    15
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Высота подъема, м
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Диаметр каната, мм
                            </td>
                            <td>
                                <p align="center">
                                    5.1
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Вес нетто, кг
                            </td>
                            <td>
                                <p align="center">
                                    32
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

export default Mini_tali_elektricheskie_1;