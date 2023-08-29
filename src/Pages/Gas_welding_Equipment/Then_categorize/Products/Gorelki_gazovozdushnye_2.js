import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_gazovozdushnye_2.jpg"

const Gorelki_gazovozdushnye_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГВ-850 ФСТАКАНА=60ММ</h2>
                <p>Горелка газовоздушная вентильная (Фстакана=60мм, L= 850мм, 9/6) предназначена преимущественно для
                    кровельных и изоляционных работ, оплавления битумных рулонных материалов, сушки литейных форм,
                    обжига старой краски.

                    Отличается высокой тепловой мощностью и производительностью.

                    Регулировка подачи пропана осуществляется с помощью удобного рычага. Универсальный ниппель позволяет
                    подводить горючий газ рукавом как 6, так и 9мм.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Длина (мм)
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    850
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ГАЗ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    ПРОПАН
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Расход газа&nbsp;(м³/час)
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0,15
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Давление, не меньше&nbsp;&nbsp; МPa&nbsp;(кгс/см²)
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0,05 (0,5)
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    тип и Ø стакана (мм)
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    турбостакан&nbsp;50/60
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

export default Gorelki_gazovozdushnye_2;