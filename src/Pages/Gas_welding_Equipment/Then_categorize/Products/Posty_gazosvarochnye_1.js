import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_posty_gazosvarochnye_1.jpg"

const Posty_gazosvarochnye_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПОСТ ГАЗОСВАРОЧНЫЙ ПГУ-10П</h2>
                <p>Комплект ПГУ- 10П предназначен для ручной резки и сварки металлов с применением смесей ацетилен +
                    кислород, газ-заменитель (пропан, природный газ) + кислород.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Габариты, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    585х340х1200
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Рабочий газ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    пропан
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Толщина разрезаемого металла, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    3-100
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Емкость, л
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    10
                                </p>
                                <br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Комплектация:<br/>
                    Баллон пропановый 12 л (новый) - 1 шт.<br/>
                    Баллон кислородный 10 л (новый) - 1 шт.<br/>
                    Редуктор пропановый БПО-5-3 - 1 шт.<br/>
                    Редуктор кислородный БКО-50-12,5 - 1 шт.<br/>
                    Рукав Ф6,3 мм красный - 10 м.<br/>
                    Рукав Ф6,3 мм синий- 10 м.<br/>
                    Резак пропановый Р1П Редиус - 1 шт.<br/>
                    Горелка пропановая ГЗУ-3-23 - 1 шт.<br/>
                    Хомут 3/4 - 4 шт.<br/>
                    Тележка - 1 шт.<br/>
                </p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Posty_gazosvarochnye_1;