import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_12.png"

const Zveno_12 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК С ШИРОКИМ ЗЕВОМ</h2>
                <p>Крюк с широким зевом (литейный крюк) относится к комплектующим 8кл, не имеет предохранительного замка.
                    Основным преимуществом крюка с широким зевом считается универсальное использование для нестандартных проушин.<br/></p>
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
                                    <strong>Ширина зева, мм</strong>
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
                                    1.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    62
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0.70
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
                                    74
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.20
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
                                    86
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2.30
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
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.3
                                </p>
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    12.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    111
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10.1
                                </p>
                            </td>
                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    15
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    22-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    124
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13,6
                                </p>
                            </td>

                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    21,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    26-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    134
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    19,2
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

export default Zveno_12;