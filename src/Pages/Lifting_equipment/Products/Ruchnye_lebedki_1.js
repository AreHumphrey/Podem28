import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_1.png"

const Ruchnye_lebedki_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА РУЧНАЯ LHW (КИТАЙ)</h2>
                <p>Данный тип лебедок являются бюджетным аналогом лебедок серии LRB. Также применяются исключительно
                    для подтягивания и перемещения груза. Оснащены стопорным механизмом. За счет использования более
                    де- шевых материалов при изготовлении лебедки, а так же благодаря внесению в конструкцию
                    зубчатых передач некоторых изменений, цена на эту лебедку стала существенно меньше.<br/></p>
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
                                    <strong>Длинна
                                        каната/ленты, м.</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес,кг.</strong>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                LHW 1200 (канат)
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
                                LHW 1600 (канат)
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
                                    3,7
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                LHW 2000 (канат)
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
                                    4,8
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                LHW 2500 (канат)
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
                                    5,7
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LHW 3000 (канат)
                            </td>
                            <td>
                                1360
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,46
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                LHW 1200 (лента)
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
                                LHW 1600 (лента)
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
                                LHW 2000 (лента)
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
                                    5,5
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                LHW 2500 (лента)
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
                                    5,9
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LHW 3000 (лента)
                            </td>
                            <td>
                                1360
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6,63
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

export default Ruchnye_lebedki_1;