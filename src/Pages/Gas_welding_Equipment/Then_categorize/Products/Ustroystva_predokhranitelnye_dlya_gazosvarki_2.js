import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_2.png"

const Ustroystva_predokhranitelnye_dlya_gazosvarki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗАТВОР ПРЕДОХРАНИТЕЛЬНЫЙ ЗП-3К-333</h2>
                <p>
                    Затворы предохранительные ЗП-3 предназначены для предотвращения прохождения обратного удара
                    (пламени), возникающего при газопламенной обработке металлов, в защищаемое оборудование (баллон).
                    Габаритные размеры затвора не более Ф24,5×130 мм.
                </p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Рабочий газ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    кислород
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Пропускная способность
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    40 м3/час
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Рабочее давление
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    1,25 МПа
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Входной размер
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    М16х1,5LH
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Выходной размер
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    М16х1,5LH
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Место установки
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    выход редуктора
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Масса
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    не более 0,205 кг
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

export default Ustroystva_predokhranitelnye_dlya_gazosvarki_2;