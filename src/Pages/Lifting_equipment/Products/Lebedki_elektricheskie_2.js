import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_Lebedki_elektricheskie_2.png"

const Lebedki_elektricheskie_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКИ ЭЛЕКТРИЧЕСКИЕ СЕРИИ KDJ</h2>
                <p>Электрические лебедки серии KDJ обладают широким спектром применения: строительно-монтажные и ремонтные работы, комплектация подъемников, подъем и перемещение грузов на предприятиях и в быту. Модельный ряд позволяет подбирать электрическую лебедку по тяговому усилию, канатоемкости, напряжению
                    питания.<br/></p>
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
                                    <b>Канатоемкость, м</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Диаметр каната, мм</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес с канатом, кг</b>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-200Е (220В)
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    36
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-300Е (220В)
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    49
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-300Е1 (380В)
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    49
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-500Е1
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    136
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-1000
                            </td>
                            <td>
                                <p align="center">
                                    1000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    156
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-2200
                            </td>
                            <td>
                                <p align="center">
                                    2200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    450
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                KDJ-3200
                            </td>
                            <td>
                                <p align="center">
                                    3200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    18
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    500
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

export default Lebedki_elektricheskie_2;