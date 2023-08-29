import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_7.jpg"

const Rezaki_gazovye_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК ПРОПАНОВЫЙ Р1П LATION</h2>
                <p>Преимущества резаков серии "LATION":<br/>
                    Ручка увеличенной длинны (до 120 мм) и эргономичной формы.<br/>
                    Ручка выполнена из композитного полимерного материала с высокой прочностью и огнеупорностью.<br/>
                    Маховики измененной конструкции с увеличенными выступами обеспечивают удобство удобство регулирования газовой смеси.<br/>
                    Облегченная конструкция обеспечивает удобство при длительной эксплуатации.<br/>
                    Конструкция резака запатентована.</p>
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
                                    0.56
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
                                    До 100
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
                                    500
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
                                    Мундштук внутренний № 1*, 3Мундштук наружный №1
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

export default Rezaki_gazovye_7;