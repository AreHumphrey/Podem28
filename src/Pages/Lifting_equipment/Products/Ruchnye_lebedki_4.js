import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_4.png"

const Ruchnye_lebedki_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА УСИЛЕННАЯ LRU</h2>
                <p> Отличительные черты этой модели – относительно не большие масса и габариты в сочетании с высокой на-
                    дежностью и прочностью. Чаще всего лебедки модели LRU применяются в строительстве, промышленности и
                    других сферах, для которых свойственна высокая интенсивность операций подъема и перемещения груза.
                    Конструкция механизма оснащена стопорным механизмом, предотвращающим произвольное опускание груза. В
                    силу трудоемкости процесса установки механизм рассчитан преимущественно на стационарный тип работы.
                    Канат 40м входит в комплект.<br/></p>
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
                                    <strong>Длинна каната/ленты, м.</strong>
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
                                LRU
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    19
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRU
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
                                    24,2
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRU
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
                                    34
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRU
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
                                    43,1
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                LRU
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
                                    75,6
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

export default Ruchnye_lebedki_4;