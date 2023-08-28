import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_klemmy_svarochnye_2.jpg"

const Klemmy_svarochnye_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КЛЕММА ЗАЗЕМЛЕНИЯ ДОКА КЗ-200</h2>
                <p><b>Клемма заземления КЗ-200</b> предназначена для присоединения сварочного кабеля к заземлению. </p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                </p>
                                Сварочный ток мин., А<br/>
                            </td>
                            <td>
                                <p>
                                    <br/>
                                </p>
                                <p>
                                    200
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    <br/>
                                </p>
                                <p>
                                    Габариты ДхШхВ, мм.<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                </p>
                                65х170х25<br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Масса, кг.<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0,14
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Ширина захвата<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    50 мм
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

export default Klemmy_svarochnye_2;