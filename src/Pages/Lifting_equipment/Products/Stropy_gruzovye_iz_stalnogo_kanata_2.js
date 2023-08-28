import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_stropy-gruzovye-iz-stalnogo-kanata.png"

const Stropy_gruzovye_iz_stalnogo_kanata_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КОЛЬЦЕВЫЕ</h2>
                <p>Стропы и их элементы испытаны на испытательном стенде статистической нагрузкой, превышающую на 25% их номинальную.<br/>
                    - коэффициент запаса прочности канатов стропов по отношению к расчетному разрывному усилию не менее 6.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1">
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
                        </tr>
                        <tr>
                            <td>
                                <b>СКК 0,7</b>
                            </td>
                            <td>
                                0,7
                            </td>
                            <td>
                                6,7
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>0,8</strong>
                            </td>
                            <td>
                                0,8
                            </td>
                            <td>
                                6,7
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>0,9</strong>
                            </td>
                            <td>
                                0,9
                            </td>
                            <td>
                                7,6
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>1,25</strong>
                            </td>
                            <td>
                                1,25
                            </td>
                            <td>
                                9,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>1,6</strong>
                            </td>
                            <td>
                                1,6
                            </td>
                            <td>
                                9,7
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>2,0</strong>
                            </td>
                            <td>
                                2,0
                            </td>
                            <td>
                                11,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>2,5</strong>
                            </td>
                            <td>
                                2,5
                            </td>
                            <td>
                                13,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>2,8</strong>
                            </td>
                            <td>
                                2,8
                            </td>
                            <td>
                                13,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>3,2</strong>
                            </td>
                            <td>
                                3,2
                            </td>
                            <td>
                                13,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>3,6</strong>
                            </td>
                            <td>
                                3,6
                            </td>
                            <td>
                                15,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>4,0</strong>
                            </td>
                            <td>
                                4,0
                            </td>
                            <td>
                                15,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>5,0</strong>
                            </td>
                            <td>
                                5,0
                            </td>
                            <td>
                                16,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>6,3</strong>
                            </td>
                            <td>
                                6,3
                            </td>
                            <td>
                                19,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>7,0</strong>
                            </td>
                            <td>
                                7,0
                            </td>
                            <td>
                                20,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>8,0</strong>
                            </td>
                            <td>
                                8,0
                            </td>
                            <td>
                                22,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>9,0</strong>
                            </td>
                            <td>
                                9,0
                            </td>
                            <td>
                                23,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>10,0</strong>
                            </td>
                            <td>
                                10,0
                            </td>
                            <td>
                                23,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>12,5</strong>
                            </td>
                            <td>
                                12,5
                            </td>
                            <td>
                                27,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>СКК </b><strong>16,0</strong>
                            </td>
                            <td>
                                16,0
                            </td>
                            <td>
                                30,5
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

export default Stropy_gruzovye_iz_stalnogo_kanata_2;