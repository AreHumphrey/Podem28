import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zahvat_1.png"

const Zakhvat_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗАХВАТ ДЛЯ ТРУБ ЗТ</h2>
                <p>Захват ЗТ предназначен для подъема и перемещения труб. Изготавливается различной грузоподъемности и
                    работает в паре. Ширина зева выбирается в зависимости от толщины кромки трубы. Захваты
                    укомплектованы фторопластовыми вставками для предотвращения повреждения трубы. В комплект так же
                    входят такелажные скобы<br/></p>
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
                                    <b>Г/п, т</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Зев, мм</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес, кг</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Тип скобы</b>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Захват для труб ЗТ2
                            </td>
                            <td>
                                <p align="center">
                                    2,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5,4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Омегообразная-3,25
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Захват для труб ЗТ4
                            </td>
                            <td>
                                <p align="center">
                                    4,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12,8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Омегообразная-4,75
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Захват для труб ЗТ6
                            </td>
                            <td>
                                <p align="center">
                                    6,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    18,6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Омегообразная-8,50
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

export default Zakhvat_1;