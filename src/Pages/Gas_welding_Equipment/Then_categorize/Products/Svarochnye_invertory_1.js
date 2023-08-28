import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_svarochnye_invertory_1.jpg"

const Svarochnye_invertory_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СВАРОЧНЫЙ ИНВЕРТОР ММА-200 RUBIK</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1" cellSpacing="0" cellPadding="0">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Габариты, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    350 x 165 x 275
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Вес, кг
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    5
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Напряжение сети, В
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    220В ± 10%
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Максимальный ток сети, А
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    32
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диапазон регулировки сварочного тока, А
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    20 — 200
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Напряжение холостого хода, В
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    62
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    КПД, %
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    85
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Коэффициент мощности
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0.93
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Класс изоляции
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    F
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Класс защиты
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    IP21S
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр электрода, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    1.6 — 4.0
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Режим работы (ПВ), %
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    60
                                </p>
                                <br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Особенности сварочных аппаратов REDBO ММА RUBIK:<br/>
                    передовая технология инвертора IGBT;<br/>
                    большое снижение электромагнитных потерь увеличивает эффективность сварки (реальная экономия энергии);<br/>
                    функция «горячий старт» делает процесс зажигание дуги проще и надежнее;<br/>
                </p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Svarochnye_invertory_1 ;