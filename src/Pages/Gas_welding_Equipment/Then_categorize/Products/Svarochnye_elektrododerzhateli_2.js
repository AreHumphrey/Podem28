import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_varochnye_elektrododerzhateli_2.jpg"

const Svarochnye_elektrododerzhateli_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЭЛЕКТРОДОДЕРЖАТЕЛЬ ДОКА LXEA 1045 500A ТИП CONFORT</h2>
                <p>Полный аналог знаменитого электрододержателя ESAB Handy.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    максимальный сварочный ток
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    500А
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    материал исполнения
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    латунь+сталь+пластик
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

export default Svarochnye_elektrododerzhateli_2;