import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_5_mini-tali-elektricheskie.png"

const Mini_tali_elektricheskie_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>PA (КИТАЙ)</h2>
                <p>Мини электрическая таль PA, является аналогом европейских электрических талей, полностью копирующая
                    их внешний вид и характеристики. Производится из комплектующих и материалов более низкого класса. Не
                    подходит для работы с высокой интенсивностью.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
                <div className="table-container">
                    <table className="table" border="1">
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
                                PA 250
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
                                    540
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    230/50
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
                                    11.5
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                PA 500
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
                                    1020
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    230/50
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
                                    17.5
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                PA 990A
                            </td>
                            <td>
                                <p align="center">
                                    500/990
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12/6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8/4,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1600
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    230/50
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
                                    33
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                PA 990B
                            </td>
                            <td>
                                <p align="center">
                                    600/990
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12/6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8/4,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1800
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    230/50
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
                                    33
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

export default Mini_tali_elektricheskie_5;