import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_2.jpg"

const Ventili_i_zapchasti_k_nim_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ВЕНТИЛЬ КИСЛОРОДНЫЙ ВК-94</h2>
                <p>Вентиль кислородный ВК-94 является запорным приспособлением и используется при наполнении, хранении и
                    расходовании кислорода, азота, углекислого газа, сжатого воздуха, и других неагрессивных газов в
                    баллонах среднего объема.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Рабочее давление, не более, Мпа (кгс/см2)
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    20 (200)
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр условного прохода, мм.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    4
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Резьба для установки на баллон
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Коническая&nbsp;W27,8 ГОСТ 9909-81
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Резьба выходная
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    G3/4
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Габаритные размеры, мм.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    59x58x120
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Вес, кг.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0,6
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

export default Ventili_i_zapchasti_k_nim_2;