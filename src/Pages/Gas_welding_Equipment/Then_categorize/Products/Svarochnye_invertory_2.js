import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_svarochnye_invertory_2.jpg"

const Svarochnye_invertory_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СВАРОЧНЫЙ АППАРАТ RIVCEN ARC-250S</h2>
                <p><b>Сварочный инвертор Rivcen Arc-250</b> – мощный и надежный аппарат для ручной дуговой сварки и наплавки
                    покрытыми электродами (ММА) профессионального уровня для сварки углеродистых и легированных сталей.
                    Универсален, подходит как для промышленного, так и для бытового применения.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1" cellSpacing="0" cellPadding="0">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Вес, кг
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    17
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
                                    220±15%
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Габаритные размеры
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    &nbsp;480х205х300
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Частота сети, Гц
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    50/60
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Номинальная мощность, кВа
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    9,4
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
                                    43
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Рабочее напряжение на дуге, В
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    29
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
                                    30-250
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Период нагрузки при 160А, %
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
                                    Потребление на холостом ходу, Вт
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
                                    0,93
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
                                    В
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
                                    IP 23
                                </p>
                                <br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <b>Комплектность инвертора Rivcen ARC-250:</b><br/>
                    инверторный сварочный аппарат;<br/>
                    электрододержатель с кабелем 3 м;<br/>
                    клемма заземления с кабелем 3 м;<br/>
                    2 соединителя кабельных разъемных (СКР);
                    паспорт.<br/>
                </p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Svarochnye_invertory_2;