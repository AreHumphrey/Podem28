import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_13.png"

const Zveno_13 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗВЕНО СОЕДИНИТЕЛЬНОЕ</h2>
                <p>Используется как соединительный элемент при сборке цепных строп.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>

                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Г/п, т
                                    </strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Цепь 8 кл.</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong> Вес, кг</strong>
                                </p>
                            </td>

                        </tr>


                        <tr>

                            <td>
                                <p align="center">
                                    1.12
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0.14
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    2.0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7/8-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0.20
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    3.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0.38
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    5.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0.76
                                </p>
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    8.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.2
                                </p>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    12,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    20-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,95
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

export default Zveno_13;