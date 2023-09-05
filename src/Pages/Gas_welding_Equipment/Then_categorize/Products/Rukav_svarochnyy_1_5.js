import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_1_5.jpg"

const Rukav_svarochnyy_1_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РУКАВ ГАЗОВЫЙ Ø6,3 ММ КРАСНЫЙ (I КЛ., БУХТА 40 М)</h2>
                <p>Рукав предназначен для подвода кислорода, горючих газов и жидкостей к горелке или резаку.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Диаметр, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    6,3
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Длина, м
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    40
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Цвет
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                </p>
                                красный<br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Класс
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    I<br/>
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

export default Rukav_svarochnyy_1_5;