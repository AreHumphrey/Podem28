import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_klemmy_svarochnye_5.jpg"

const Klemmy_svarochnye_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СТРУБЦИНА ЗАЗЕМЛЕНИЯ КЗ-50 С (КОРД)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Габаритные размеры
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    высота 125 мм.&nbsp; &nbsp; &nbsp;&nbsp;
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
                                    0,91
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Наибольший сварочный ток, А
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    500
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Раствор губок, мм<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    до 800
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

export default Klemmy_svarochnye_5;