import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_9.png"

const Ruchnye_lebedki_9 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА РУЧНАЯ БАРАБАННАЯ LRB</h2>
                <p> Лебёдка этого типа используется для подтягивания и перемещения груза. По своей функциональности,
                    запасу прочности и цене лебедка ручная барабанная LRB находится в промежуточной категории между
                    бытовой и промышленной лебёдками. Лебедка оснащена стопорным механизмом, а так же имеет две оси для
                    враще- ния рукоятки, которые позволяют выбирать подходящие режимы работы для разных грузов.<br/></p>
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
                                    <strong>Диаметр
                                        каната, мм</strong>
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
                                LRB 1200 (канат)
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
                                    3,6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 1600 (канат)
                            </td>
                            <td>
                                725
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

                        </tr>
                        <tr>
                            <td>
                                LRB 2000 (канат)
                            </td>
                            <td>
                                <p align="center">
                                    907
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5,6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 2500 (канат)
                            </td>
                            <td>
                                <p align="center">
                                    1134
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td >
                                <p align="center">
                                    6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 3000 (канат)
                            </td>
                            <td>
                                <p align="center">
                                    1360
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,55
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 1200 (лента)
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
                                    3,4
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 1600 (лента)
                            </td>
                            <td>
                                725
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,8
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 2000 (лента)
                            </td>
                            <td>
                                <p align="center">
                                    907
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4,9
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 2500 (лента)
                            </td>
                            <td>
                                <p align="center">
                                    1134
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5,8
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRB 3000 (лента)
                            </td>
                            <td>
                                <p align="center">
                                    1360
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,13
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

export default Ruchnye_lebedki_9;