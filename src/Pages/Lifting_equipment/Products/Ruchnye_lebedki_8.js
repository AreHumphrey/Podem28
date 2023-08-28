import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_8.png"

const Ruchnye_lebedki_8 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА РУЧНАЯ С ТОРМОЗОМ LRT</h2>
                <p> Лебедки этого типа, как правило, используются в промышленности, и потому отличаются от бытовых
                    моделей более высокой ценой, однако при этом обладают большей надёжностью. Конструкция лебёдки
                    включает в себя стопорный механизм, а так же наличие двух осей для вращения рукоятки: ось низкого
                    крутящего момен- та и ось высокого крутящего момента, которые позволяют выбирать подходящие режимы
                    работы для разных грузов.<br/></p>
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
                                LRT 1200 (канат)
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
                                    5
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRT 1800 (канат)
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
                                    8,8
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRT 2600 (канат)
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
                                    10,7
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRT 1200 (лента)
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
                                    4,5
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRT 1800 (лента)
                            </td>
                            <td>
                                <p align="center">
                                    816
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8,4
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRT 2600 (лента)
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

export default Ruchnye_lebedki_8;