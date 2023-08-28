import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_15.png"

const Zveno_15 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЦЕПЬ</h2>
                <p>Используется для сборки цепных строп 8кл. Разделяются по нагрузке и калибру.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>

                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Обозначение цепи,мм
                                    </strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Рабочая нагрузка, т</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong> Разрывное усилие, т </strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес 1 метра цепи, кг </strong>
                                </p>
                            </td>
                        </tr>


                        <tr>

                            <td>
                                <p align="center">
                                    6х18
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4.8
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    0,8
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    8х24
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8.0
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    10х30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12.8
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    2,3
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    13х39
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    21.6
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    3,8
                                </p>
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    16х48
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    32.0
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    5,8
                                </p>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    20х60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    8,8
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

export default Zveno_15;