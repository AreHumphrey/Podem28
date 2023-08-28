import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_14.png"

const Zveno_14 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК С ВИЛОЧНЫМ РАЗЪЕМОМ</h2>
                <p>Применяется как концевой элемент при сборке цепных строп, Крепление к цепи производится с помощью силового штифта.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
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
                                    0.49
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
                                    0.67
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    3.15
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.36
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    5.3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.2
                                </p>
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    8.0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4.0
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
                                    6,7
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

export default Zveno_14;