import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_bloki_1.png"

const Bloki_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БЛОК ТРЕХРОЛЫЙ (ДЛЯ КАНАТА И ВЕРЕВКИ)</h2>
                <p>Полиспаст – это грузовое устройство, предназначенное для выигрыша в силе, оно состоит из двух блоков
                    собранных в неподвижную обойму, последовательно огибаемых канатом или веревкой. <br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Модель</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Грузоподъемность, кг</b>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Блок трехрольный 3В-75Н
                            </td>
                            <td>
                                <p align="center">
                                    250
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Блок трехрольный 3В-100Н
                            </td>
                            <td>
                                <p align="center">
                                    750
                                </p>
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

export default Bloki_1;