import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_2.png"

const Ruchnye_lebedki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА РУЧНАЯ С ТОРМОЗОМ BHW (КИТАЙ)</h2>
                <p>Лебедки серии BHW являются аналогом лебедок LRT. Собраны из более дешевых материалов, не предна-
                    значены для интенсивной работы Так же применяются исключительно для подтягивания и перемещения гру-
                    за. Оснащены стопорным механизмом. Канат (лента) 10 м входит в комплект.<br/></p>
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
                                    <strong>Макс. длинна, м</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Диаметр каната, ширина ленты, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес, кг</b>
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                BHW 1200 (канат)
                            </td>
                            <td>
                                <p align="center">
                                    544
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,7
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                BHW 1800 (канат)
                            </td>
                            <td>
                                816
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8,1
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                BHW 2600 (канат)
                            </td>
                            <td>
                                <p align="center">
                                    1180
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10,3
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                BHW 1200 (лента)
                            </td>
                            <td>
                                <p align="center">
                                    544
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,7
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                BHW 1800 (лента)
                            </td>
                            <td>
                                816
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8,1
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                BHW 2600 (лента)
                            </td>
                            <td>
                                <p align="center">
                                    1180
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10,3
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

export default Ruchnye_lebedki_2;