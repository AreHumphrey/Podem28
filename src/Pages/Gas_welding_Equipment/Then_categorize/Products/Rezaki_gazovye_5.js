import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_5.jpg"

const Rezaki_gazovye_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК ПРОПАНОВЫЙ Р3П-02МУ</h2>
                <p>Резак инжекторный Р3П-02МУ предназначен для ручной газокислородной резки листового и сортового
                    металла из низкоуглеродистых сталей, с применением в качестве горючего газа пропан-бутана.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Масса комплекта, кг
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    1.00
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Толщина разрезаемой стали, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    До 200
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
                                    768
                                </p>
                                <br/>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <p>
                    Особенности конструкции<br/>
                    Повышенное сопротивление обратному удару<br/>
                    Щелевое сопло<br/>
                    Вентильная подача газа<br/>
                    Алюминиевая рукоятка<br/>

                    Комплектация<br/>
                    Р3П-02-МУ: мундштуки наружн. №1 (на резаке), внутр. №1 (на резаке), 2, 3, 4<br/>
                    Кольцо 011-014-19<br/>
                    Резак в собранном виде с ниппелем Ф9 мм<br/>
                </p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Rezaki_gazovye_5;