import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zahvat_3.png"

const Zakhvat_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗАХВАТ ТИП DSQC</h2>
                <p>Захваты типа DSQC служат для вертикального подъема и перемещения листов проката,. В отличии от
                    захватов горизонтального подъема, захват DSQC может, работает один.<br/></p>
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
                                    <b>Толщина
                                        листа в станке,
                                        мм</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Г/п , т</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес изделия, кг</b>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                DSQC-0.75
                            </td>
                            <td>
                                <p align="center">
                                    0-15
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,75
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,9
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                DSQC-1.5
                            </td>
                            <td>
                                <p align="center">
                                    0-20
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,4
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                DSQC-2.0
                            </td>
                            <td>
                                <p align="center">
                                    0-25
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7,2
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                DSQC-3.0
                            </td>
                            <td>
                                <p align="center">
                                    0-30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13,8
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                DSQК-1.5
                            </td>
                            <td>
                                <p align="center">
                                    20-40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7,6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                DSQК-4,5
                            </td>
                            <td>
                                <p align="center">
                                    20-50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13,8
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

export default Zakhvat_3;