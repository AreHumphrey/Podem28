import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_3.png"

const Ruchnye_lebedki_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА УСИЛЕННАЯ СЕРИИ JHW (КИТАЙ)</h2>
                <p> Лебедки серии JHW являются аналогом немецких лебедок LRU, применяются в строительстве, промышленно-
                    сти и других сферах. Конструкция механизма оснащена стопорным механизмом, предотвращающим произ-
                    вольное опускание груза. Канат 40м входит в комплект.<br/></p>
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
                                    <b>Грузоподъем-
                                        ность, кг</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Макс. длинна
                                        каната, м</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Диаметр ка-
                                        ната, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес с кана-
                                        том, кг</b>
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                JHW 0,3
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11,6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                JHW 0,5
                            </td>
                            <td>
                                500
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                JHW 1,0
                            </td>
                            <td>
                                <p align="center">
                                    1000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    19,7
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                JHW 2,0
                            </td>
                            <td>
                                <p align="center">
                                    2000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    25,1
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                JHW 3,0
                            </td>
                            <td>
                                <p align="center">
                                    3000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12,5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    44,3
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

export default Ruchnye_lebedki_3;