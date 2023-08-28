import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_svarochnye_poluavtomaty_1.jpg"

const Svarochnye_poluavtomaty_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СВАРОЧНЫЙ ПОЛУАВТОМАТ REDBO EXPERTMIG-205 (MIG-MAG/MMA)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1" cellSpacing="0" cellPadding="0">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Напряжение питающей сети (В):
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
                                    Частота питающей сети (Гц):
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
                                    Диаметр электродов (мм):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    1.6-4.0
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ПН (%):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    40
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Номинальная мощность (кВа):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    6,2
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Сварочный ток MIG/MMA (A):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    40-190/20-190
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Скорость подачи проволоки (м/мин):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    1-13
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр сварочной проволоки (мм):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0.6-1.0
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Расположение подающего устройства/катушки:
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    встроенное/внутри
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Класс изоляции:
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
                                    Класс защиты:
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
                                    Габаритные размеры (мм):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    420*200*365
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Вес (кг):
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    11,5
                                </p>
                                <br/>
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

export default Svarochnye_poluavtomaty_1;