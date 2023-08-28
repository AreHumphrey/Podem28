import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_varochnye_elektrododerzhateli_3.jpg"

const Svarochnye_elektrododerzhateli_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЭЛЕКТРОДОДЕРЖАТЕЛЬ ЭД-31 "УНИВЕРСАЛ" (КОРД)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Сварочный ток мин., А.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    315;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Габариты ДхШхВ, мм.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    77х220х31;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Масса, кг.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0,26;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Страна производитель
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Россия;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр электрода, мм.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    2-4;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Сечение жилы сварочного кабеля, мм2
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    35-50;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Угол закрепления электрода, °С.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0-270;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Продолжительность сварки, мин.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    5;
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Время замены, сек.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    4;
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

export default Svarochnye_elektrododerzhateli_3;