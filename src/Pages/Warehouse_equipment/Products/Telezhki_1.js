import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_1_telezhki-gidravlicheskie.png"
import img_3_1 from "../../../Components/Img/img_telezhki_1_1.png"

const Telezhki_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКА ГИДРАВЛИЧЕСКАЯ BF</h2>

                <div className="container_foto">
                    <img width = "250" src={img_3}></img>
                    <p>Гидравлический насос  тележки BF очень надежен и рассчитан более чем на 60тыс. циклов подъема-опускания (3-4 года интенсивной работы). Для легкого управления тележкой во всех подвижных частях установлены 12 пресмасленок. Рукоятка тележки металлическая, большая и удобная, верхняя часть покрыта слоем прочной резины.

                        Колеса и ролики сделаны из сверхпрочного материала – полиуретан! </p>
                </div>
                <p>Не оставляют следов, обеспечивают бесшумный ход гидравлической тележки Дополнительные ролики облегчают оператору работу в условиях неровного покрытия, стыков между покрытиями. Сдвоенные ролики уменьшают нагрузку на колесные опоры, что положительно отражается на сроке эксплуатации тележки.
                </p>
                <img width = "250" src={img_3_1}></img>


                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Модель &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    BF
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Грузоподъемность&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    кг&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    2000/2500
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Высота подъема&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    200
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Высота &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    85~75
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Высота рамы&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    431,5
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Длина вил&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    800, 1150, 1500, 1800, 2000
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Ширина между
                                    вилами&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    550
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Ведущее колесо&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    200
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Ролик&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    80
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Вес &nbsp;тележки&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    кг&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    75
                                </p>
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

export default Telezhki_1;