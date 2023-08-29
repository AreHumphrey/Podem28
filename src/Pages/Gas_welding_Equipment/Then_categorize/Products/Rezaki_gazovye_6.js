import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_6.jpg"

const Rezaki_gazovye_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК ПРОПАНОВЫЙ Р3П-02М</h2>
                <p>Резак инжекторный предназначен для ручной газокислородной резки листового и сортового металла из
                    низкоуглеродистых сталей, с применением в качестве горючего газа пропан-бутана.</p>
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
                                    0.75
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
                                    До 300
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
                                    485
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Комплектация
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>

                                    Мундштук внутренний № 1, 2, 3, 4, мундштук наружный №1,кольцо 011-014-19
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Присоединительные размеры
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Ниппель универсальный d6/9
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

export default Rezaki_gazovye_6;