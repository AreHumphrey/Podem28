import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_2.png"

const Zveno_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗАЖИМ ДЛЯ КАНАТА DIN 1142</h2>
                <p>DIN 1142 Зажим канатный, тросовый, стальной с двумя шестигранными гайками. Канатный (тросовый) зажим
                    применяется для создания петель на концах канатов и тросов, а также для их соединения<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Размер каната, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес изделия, кг </strong>
                                </p>
                            </td>


                        </tr>


                        <tr>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,02
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    6,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,04
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,08
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,09
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    13
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,28
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,43
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    19
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,49
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    22
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,68
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    26
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,17
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,40
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    34
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2,11
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2,68
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

export default Zveno_2;