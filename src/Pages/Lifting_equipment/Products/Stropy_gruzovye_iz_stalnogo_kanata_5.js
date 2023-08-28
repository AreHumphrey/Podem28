import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_5_stropy-gruzovye-iz-stalnogo-kanata.jpg"

const Stropy_gruzovye_iz_stalnogo_kanata_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ОДНОВЕТВЕВЫЕ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Обозначение стропа</strong>
                            </td>
                            <td>
                                <strong>Грузоподъемность, т</strong>
                            </td>
                            <td>
                                <strong>Диаметр каната, мм</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 0,5
                            </td>
                            <td>
                                0,5
                            </td>
                            <td>
                                8,1
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 0,63
                            </td>
                            <td>
                                0,6
                            </td>
                            <td>
                                8,1
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 0,8
                            </td>
                            <td>
                                0,8
                            </td>
                            <td>
                                9,7
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 1,0
                            </td>
                            <td>
                                1,0
                            </td>
                            <td>
                                11,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 1,6
                            </td>
                            <td>
                                1,6
                            </td>
                            <td>
                                13,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 2,0
                            </td>
                            <td>
                                2,0
                            </td>
                            <td>
                                15,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 2,5
                            </td>
                            <td>
                                2,5
                            </td>
                            <td>
                                16,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 3,2
                            </td>
                            <td>
                                3,2
                            </td>
                            <td>
                                19,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 4,0
                            </td>
                            <td>
                                4,0
                            </td>
                            <td>
                                22,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 5,0
                            </td>
                            <td>
                                5,0
                            </td>
                            <td>
                                23,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 6,3
                            </td>
                            <td>
                                6,3
                            </td>
                            <td>
                                27,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 8,0
                            </td>
                            <td>
                                8,0
                            </td>
                            <td>
                                30,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 10,0
                            </td>
                            <td>
                                10,0
                            </td>
                            <td>
                                32,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1 ск - 12,5
                            </td>
                            <td>
                                12,5
                            </td>
                            <td>
                                33,5
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>- комплектуются звеном ОВ только по желанию заказчика- стандартно снабжены крюками с
                    предохранителем. <br/></p>
                <p>- на заказ также концевики: скобы, захваты для металла, крюки с предохранителем, крюки поворотные
                    самозажимные и т.д. <br/></p>
                <p>- коэффициент запаса прочности канатов стропов по отношению к расчетному разрывному усилию не менее
                    6. <br/></p>
                <p>- коэффициент запаса прочности соединительных элементов (кроме каната) и захватов стропов по
                    отношению к разрушающей нагрузке не менее 5.<br/></p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Stropy_gruzovye_iz_stalnogo_kanata_5;