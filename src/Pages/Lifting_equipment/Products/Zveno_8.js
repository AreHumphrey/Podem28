import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_8.png"

const Zveno_8 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК ЧАЛОЧНЫЙ ТИП 322А С ВЕРТЛЮГОМ</h2>
                <p>Предназначены для комплектации при изготовлении стальных (канатных) и текстильных строп. Наличие
                    вертлюга позволяет избежать скручивание ветвей строп.<br/></p>
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
                                    1,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,30
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
                                    0,50
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
                                    0,90
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    3,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,03
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    4,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,90
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
                                    4,12
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
                                    6,50
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

export default Zveno_8;