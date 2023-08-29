import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_svarochnye_3.jpg"

const Gorelki_svarochnye_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА ПРОПАНОВАЯ ГЗУ-3-23 9/6</h2>
                <p>Горелка сварочная универсальная малой мощности ГЗУ-3-23 предназначена для ручных процессов
                    пропан-бутан-кислородной сварки, пайки, нагрева и других видов газопламенной обработки
                    металлов. </p>
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
                                    пропан
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Наконечник
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    №2, №3
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

export default Gorelki_svarochnye_3;