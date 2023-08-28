import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_9.png"

const Zveno_9 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК ЧАЛОЧНЫЙ ТИП 320А</h2>
                <p>Предназначены для комплектации при изготовлении стальных (канатных) и текстильных строп<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Грузоподъемность, т </strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Масса, кг </strong>
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    0,75
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,16
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    1,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,25
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,34
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,34
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    2,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,57
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    3,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,77
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,95
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    7,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,20
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    11,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5,90
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    15,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9,80
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    22,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    15,60
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    30,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    19
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

export default Zveno_9;