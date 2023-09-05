import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_6_stropy-gruzovye-iz-stalnogo-kanata.png"
import img_1 from "../../../Components/Img/7f.gif"

const Stropy_gruzovye_iz_stalnogo_kanata_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СТРОП КАНАТНЫЙ ПЕТЛЕВОЙ (СКП)</h2>
                <p>СКП - это наиболее распространенная разновидность канатных стропов.
                    Изготавливаются согласно ГОСТ 25573-82 и предназначены для использования в качестве грузозахватных
                    приспособлений<br/></p>
                <div className="container_foto">
                    <img src={img_3} width="200"></img>
                </div>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Обозначение стропа</strong>
                            </td>
                            <td>
                                <strong>Грузоподъемность (т.)</strong>
                            </td>
                            <td>
                                <strong>Диаметр каната (мм)</strong>
                            </td>
                            <td>
                                <strong>Длина петли стропа</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 0,7</b>
                            </td>
                            <td>
                                0,7
                            </td>
                            <td>
                                8,1
                            </td>
                            <td>
                                320
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 0,9</b>
                            </td>
                            <td>
                                0,9
                            </td>
                            <td>
                                9,7
                            </td>
                            <td>
                                320
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 1,25</b>
                            </td>
                            <td>
                                1,25
                            </td>
                            <td>
                                11,5
                            </td>
                            <td>
                                320
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 1,6 </b>
                            </td>
                            <td>
                                1,6
                            </td>
                            <td>
                                13,5
                            </td>
                            <td>
                                320
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 2,0 </b>
                            </td>
                            <td>
                                2,0
                            </td>
                            <td>
                                15,0
                            </td>
                            <td>
                                320
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 2,5 </b>
                            </td>
                            <td>
                                2,5
                            </td>
                            <td>
                                16,5
                            </td>
                            <td>
                                400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 2,8 </b>
                            </td>
                            <td>
                                2,8
                            </td>
                            <td>
                                18,0
                            </td>
                            <td>
                                400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 3,6</b>
                            </td>
                            <td>
                                3,6
                            </td>
                            <td>
                                20,0
                            </td>
                            <td>
                                400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 4,0</b>
                            </td>
                            <td>
                                4,0
                            </td>
                            <td>
                                22,0
                            </td>
                            <td>
                                400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 5,0 </b>
                            </td>
                            <td>
                                5,0
                            </td>
                            <td>
                                23,5
                            </td>
                            <td>
                                400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 5,6 </b>
                            </td>
                            <td>
                                5,6
                            </td>
                            <td>
                                25,5
                            </td>
                            <td>
                                400
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 6,3 </b>
                            </td>
                            <td>
                                6,3
                            </td>
                            <td>
                                27,0
                            </td>
                            <td>
                                500
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 7,0 </b>
                            </td>
                            <td>
                                7,0
                            </td>
                            <td>
                                30,5
                            </td>
                            <td>
                                500
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 10,0 </b>
                            </td>
                            <td>
                                10,0
                            </td>
                            <td>
                                33,0
                            </td>
                            <td>
                                500
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 12,5 </b>
                            </td>
                            <td>
                                12,5
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 16,0 </b>
                            </td>
                            <td>
                                16,0
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКП 20,0 </b>
                            </td>
                            <td>
                                20,0
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h2><b>Изменение грзуподъемности при различных способах строповки
                    (Q номинальная грузоподъемность):</b></h2>
                <img src={img_1} width="250"></img>
                <p>Стропы и их элементы испытаны на испытательном стенде статистической нагрузкой, превышающую на 25% их номинальну.<br/>
                    - коэффициент запаса прочности канатов стропов по отношению к расчетному разрывному усилию не менее 6.</p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Stropy_gruzovye_iz_stalnogo_kanata_6;