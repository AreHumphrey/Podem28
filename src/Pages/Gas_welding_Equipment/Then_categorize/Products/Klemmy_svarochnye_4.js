import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_klemmy_svarochnye_4.jpg"

const Klemmy_svarochnye_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КЛЕММА ЗАЗЕМЛЕНИЯ ДОКА КЗ-500</h2>
                <p><b>Клемма заземления КЗ-500</b> предназначена для присоединения сварочного кабеля к заземлению. </p>
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
                                    500
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
                                85х210х35<br/>
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
                                    0,33
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

export default Klemmy_svarochnye_4;