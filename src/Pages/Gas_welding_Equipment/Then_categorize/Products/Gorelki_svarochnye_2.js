import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_svarochnye_2.jpg"

const Gorelki_svarochnye_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА АЦЕТИЛЕНОВАЯ Г2 "MINI ДМ"</h2>
                <p>Газовая горелка Г2 ацетиленовая предназначена для проведения ручной сварки, пайки, нагрева и других
                    видов газопламенной обработки металлов при помощи таких технических газов, как кислород и
                    ацетилен. </p>
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
                                    0,29
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
                                    ацетилен
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
                                    390
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
                        <tr>
                            <td>
                                <p>
                                    Свариваемая толщина, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    1,0-4,0
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

export default Gorelki_svarochnye_2;