import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_3.jpg"

const Rezaki_gazovye_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК ПРОПАНОВЫЙ Р3П-32-Р-У</h2>
                <p>Резак трехтрубный пропано-кислородный рычажный удлиненный с внутрисопловым смешением газов
                    предназначен для резки раскроя и разогрева деталей, заготовок, листового и сортового проката из
                    черных металлов. За счет внутрисоплового смешения газов резаки имеют повышенную стойкость к
                    обратному удару и способны длительное время работать в тяжелых условиях. Резак имеет стандартный
                    мундштук «PNM» и совместим с мундштуками других производителей</p>
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
                                    0.87
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
                                    800
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Комплектация<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Мундштук внутренний № 1, 2, 3, мундштук наружный №1,комплект уплотнительных
                                    колец.<br/>
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Присоединительные размеры<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Ниппель универсальный d6/9<br/>
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

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Rezaki_gazovye_3;