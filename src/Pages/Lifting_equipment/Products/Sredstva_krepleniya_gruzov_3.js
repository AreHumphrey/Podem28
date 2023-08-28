import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_3_sredstva-krepleniya-gruzov.png"

const Sredstva_krepleniya_gruzov_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕМНИ БУКСИРОВОЧНЫЕ АВТОМОБИЛЬНЫЕ (ВЫСОКОПРОЧНЫЕ)</h2>
                <p>Буксировочные ремни произведенные нашей компанией изготовлены из текстильной полиэстеровой ленты,
                    которая применяется для производства подъемных строп. За счет этого ремни имеют колоссальный запас
                    прочности. Длинна ремня буксировочного в таблице стандартная. Под заказ возможно изготовление ремня
                    любой длинны и нагрузки.<br/></p>
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
                                    <b>Рабочая
                                        нагрузка,
                                        т</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Разрывная
                                        нагрузка, т</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Ширина
                                        ленты,
                                        мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Длинна,
                                        м</strong>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень буксировочный крюк-крюк, 3т
                            </td>
                            <td>
                                <p align="center">
                                    3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Ремень буксировочный крюк-крюк, 6т
                            </td>
                            <td>
                                <p align="center">
                                    6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Ремень буксировочный крюк-крюк, 9т
                            </td>
                            <td>
                                <p align="center">
                                    9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    15
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    90
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
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

export default Sredstva_krepleniya_gruzov_3;