import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_6.png"

const Zveno_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК ЧЕКЕРНЫЙ</h2>
                <p>Крюки чекерные – используются в комплексе с подъемным устройством: краном, талью или лебедкой. Крюк
                    чекерный не является концевой деталью стропа и применяется при способе строповки «на удавку»<br/>
                </p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Нагрузка, т </strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Масса, кг </strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Диаметр отверстия, мм </strong>
                                </p>
                            </td>

                        </tr>


                        <tr>
                            <td>
                                <p align="center">
                                    1,6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,70
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    17
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
                                    1,10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    22
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
                                    1,95
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    28
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

                                </p>
                            </td>
                            <td>
                                <p align="center">

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

export default Zveno_6;