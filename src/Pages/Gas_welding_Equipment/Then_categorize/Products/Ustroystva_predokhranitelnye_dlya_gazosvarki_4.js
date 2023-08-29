import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_ustroystva_predokhranitelnye_dlya_gazosvarki_4.png"

const Ustroystva_predokhranitelnye_dlya_gazosvarki_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КЛАПАН ОБРАТНЫЙ КО-3-К31</h2>
                <p>
                    Клапаны обратные предназначены для предохранения рукавов и источников газопитания от обратного
                    перетока газа со стороны инструмента газопламенной обработки металлов. Габаритные размеры клапана не
                    более Ф21,6×85 мм.
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

                                    вход резака, горелки
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
                                    не более 0,08 кг
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

export default Ustroystva_predokhranitelnye_dlya_gazosvarki_4;