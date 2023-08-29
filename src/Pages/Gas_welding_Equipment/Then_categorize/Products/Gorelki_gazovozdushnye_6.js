import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_gazovozdushnye_6.jpg"

const Gorelki_gazovozdushnye_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА ГАЗОВОЗДУШНАЯ ГВ-100-Р</h2>
                <p>Горелка ручная газовоздушная инжекторная ГВ-100Р предназначена для нагрева изделий и заготовок из
                    черных и цветных металлов и их пайки, оплавления битумных рулонных материалов, сушки литейных форм,
                    обжига старой краски, ремонта кабельных линий и др. работ</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
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
                                    0,37
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Рабочий газ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    пропан + воздух
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Длина, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    470
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

export default Gorelki_gazovozdushnye_6;