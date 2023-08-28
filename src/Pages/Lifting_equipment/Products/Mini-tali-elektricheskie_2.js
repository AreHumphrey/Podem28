import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_mini-tali-elektricheskie.png"

const Mini_tali_elektricheskie_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКА ДЛЯ МИНИ ТАЛИ С ЭЛЕКТРОПРИВО- ДОМ TD</h2>
                <p>Тележка тип TD предназначена для комплектации всех видов электроталей, дополняя их функцией перемещения по балке. Снабжена собственным пультом управления, соединяться с электрической схемой электротали не может.<br/></p>
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
                                    <b>ТD 0,5</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>ТD 1A</strong>
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
                                    150
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Фактическая нагрузка, т
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,2
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Габаритные размеры, мм
                            </td>
                            <td>
                                <p align="center">
                                    360х280х230
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    680х440х230
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Вес, кг
                            </td>
                            <td>
                                <p align="center">
                                    16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    19
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Ширина балки, мм
                            </td>
                            <td>
                                <p align="center">
                                    68-110
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    68-110
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

export default Mini_tali_elektricheskie_2;