import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_ballony_generatory_kolpaki_3.jpg"

const Ballony_generatory_kolpaki_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КЛЮЧ СВАРЩИКА УНИВЕРСАЛЬНЫЙ S8 - 24</h2>
                <p>Ключ сварщика универсальный применяется для ремонта, сборки и разборки газовых резаков, горелок, редукторов и т. п.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Размер захватываемых деталей, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    8, 10, 12, 14, 17, 19, 22, 24
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

export default Ballony_generatory_kolpaki_3;