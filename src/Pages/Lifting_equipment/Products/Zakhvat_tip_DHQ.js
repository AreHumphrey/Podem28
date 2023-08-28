import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zahvat_4.png"

const Zakhvat_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗАХВАТ ТИП DHQ</h2>
                <p>Захваты типа DHQ служит для подъема и перемещения листов металла в горизонтальном положении. Работает
                    в паре на стропе типа 2СК или 4СК (при подъеме листа четырьмя захватами). Удобная и легкая
                    конструкция обеспечивает надежное удержание захватываемого груза. Захваты могут комплектоваться
                    омегообразной скобой типа G2130.<br/></p>
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
                                        листа, мм</b>
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
                                DHQ-0.75
                            </td>
                            <td>
                                <p align="center">
                                    0-25
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,75
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2,4
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                DHQ-1.0
                            </td>
                            <td>
                                <p align="center">
                                    0-30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,4
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                DHQ-1.5
                            </td>
                            <td>
                                <p align="center">
                                    0-30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                DHQ-2.0
                            </td>
                            <td>
                                <p align="center">
                                    0-35
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5,4
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                DHQ-3.0
                            </td>
                            <td>
                                <p align="center">
                                    0-40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                DHQ-4.0
                            </td>
                            <td>
                                <p align="center">
                                    0-45
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,3
                                </p>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                DHQ-5.0
                            </td>
                            <td>
                                <p align="center">
                                    0-50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,9
                                </p>
                            </td>

                        </tr>


                        <tr>
                            <td>
                                DHQА-5,0
                            </td>
                            <td>
                                <p align="center">
                                    10,0-80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12,5
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

export default Zakhvat_4