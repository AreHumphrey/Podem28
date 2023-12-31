import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_2.jpg"

const Rezaki_gazovye_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК КОМБИНИРОВАННЫЙ Р3П</h2>
                <p>Предназначен для работы на ацетилене (в качестве горючего газа применяется ацетилен в смеси с
                    кислородом) и на пропан-бутане или природном газе (в качестве горючего газа применяется пропан-бутан
                    или природный газ).</p>
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
                                    Номер внутреннего мундштука<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    №1, №2, №3, №4, №5, №6<br/>
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Номер наружного мундштука<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    №1, №2<br/>
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Режим эксплуатации<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    тяжелый<br/>
                                </p>
                                <br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Инжекторный, или двухтрубный, резак – это самый распространенный тип автогенного оборудования. Поток
                    кислорода в таком резаке поступает в инжектор под высоким давлением, создает там зону разряжения и
                    втягивает горючий газ (пропан) через отверстия. Далее смесь газов проходит по нижней трубке резака к
                    головке и на выходе образует поток разогревающего пламени, которым прогревается место реза.
                    Регулировка осуществляется вентилями, расположенными на корпусе резака.<br/>

                    Резак предназначен для разделки металлов толщиной до 100 мм. Отлично подойдет как для
                    профессионального использования в строительстве, ремонте, так и для частного бытового
                    применения.<br/>

                    Резак марки «Сталь» соответствует ГОСТ 5191-79. РЕЗАКИ ИНЖЕКТОРНЫЕ ДЛЯ РУЧНОЙ КИСЛОРОДНОЙ РЕЗКИ
                </p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Rezaki_gazovye_2;