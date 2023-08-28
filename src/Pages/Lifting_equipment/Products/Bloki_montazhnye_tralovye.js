import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_bloki.png"

const Bloki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БЛОКИ (МОНТАЖНЫЕ, ТРАЛОВЫЕ)</h2>
                <p>Блок монтажный с крюком активно применяется в промышленной сфере для изменения направления и снижения
                    тягового усилия грузоподъемных механизмов. <br/></p>
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
                                    <b>Рекомендуемый диаметр каната, мм</b>
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH3"*1
                            </td>
                            <td>
                                <p align="center">
                                    2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 7 до 9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH6"*1
                            </td>
                            <td>
                                <p align="center">
                                    4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 16 до 18
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH8"*1
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 20 до 22
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH10"*1
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 24 до 26
                                </p>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS3"*1
                            </td>
                            <td>
                                <p align="center">
                                    2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 7 до 9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS6"*1
                            </td>
                            <td>
                                <p align="center">
                                    4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 16 до 18
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS8"*1
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 20 до 22
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS10"*1
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 24 до 26
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Блок тралловый IB-75
                            </td>
                            <td>
                                <p align="center">
                                    0.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок тралловый IB-100
                            </td>
                            <td>
                                <p align="center">
                                    1
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Блок однорольный с крюком 1В-100Н
                            </td>
                            <td>
                                <p align="center">
                                    0.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок однорольный крюком 1В-125Н
                            </td>
                            <td>
                                <p align="center">
                                    1
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
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

export default Bloki_2;