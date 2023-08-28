import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_4.png"

const Zveno_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТАЛРЕП ТАКЕЛАЖНЫЙ ВИЛКА-ВИЛКА</h2>
                <p>Талрепы (винтовые стяжки) обычно широко применяются для регулирования или натягивания проводов,
                    тросов, распорок и т.п. Талрепы рассчитаны только на линейное (осевое) регулирование, натяжение или
                    увязывание.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Пред. раб. нагрузка, кг</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Размеры (толщина прутка *длина), дюйм М-аналог резьбы</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес изделия, кг</strong>
                                </p>
                            </td>

                        </tr>


                        <tr>
                            <td>
                                <p align="center">
                                    998
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    ½*6 М12
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    710
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1588
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5/8*6 М16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1230
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    2358
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    ¾*6 М19
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1860
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    3266
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7/8*18 М22
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4890
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    4536
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1*24 М25
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8200
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

export default Zveno_4;