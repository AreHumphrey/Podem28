import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_varochnye_elektrododerzhateli_6.jpg"

const Svarochnye_elektrododerzhateli_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЭЛЕКТРОДОДЕРЖАТЕЛЬ ЭД-31 "САТУРН" (300А)</h2>
                <p>
                    Уже более 20 лет лидирующую позицию в производстве занимают электрододержатели серии «Сатурн» и
                    «Сатурн-Профи». Латунные составляющие производятся методом литья в специальных машинах на
                    собственной производственной базе. Никаких подмен компонентов на другие, более дешевые, такие как
                    сталь, только латунь согласно ГОСТ! Токоподводы и прижимные элементы из латуни, все видимые части
                    надежно защищены электроизоляционными термостойкими материалами. Электрододержатели удобны и просты
                    в эксплуатации, обеспечивают плотное крепление электрода соответствующего диаметра и позволяют легко
                    производить замену электрода, не дают проскальзывать рукоятке в крагах и перчатках. На всех изделиях
                    реальная продолжительность включения (ПВ) составляет не менее 60%!
                </p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Масса, кг
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0,31
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Номинальный сварочный ток, А
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    315
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Страна производитель
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Россия
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр электрода, мм.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    2,0-6,0
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
                                    Латунь
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

export default Svarochnye_elektrododerzhateli_6;