import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_betonosmesiteli_1.png"

const Betonosmesiteli_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БЕТОНОСМЕСИТЕЛИ ПАТРИОТ</h2>
                <p>Высокие технические характеристики «Патриотов» достигаются за счет использования высококачественных комплектующих и материалов, а также высокого качества их обработки. Многолетний опыт использования техники привел ее разработчиков к созданию конструкции, наиболее подходящей для эксплуатации в российских условиях. Помимо этого, в производстве не используются материалы и технологии, удешевляющие и облегчающее производство в ущерб долговечности и  износостойкости. Все узлы и детали сделаны из стали, а их компоновка обеспечивает  надежную работу и максимальную простоту в обслуживании в течение всего срока службы.<br/></p>
                <div className="container_foto">
                <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>БГР-200</strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Объем барабана, л
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Объем загрузки, л
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    140
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    MAX крупность заполнителя, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    40
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Время одного замеса, мин
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Число замесов в час, шт
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Мощность электородвигателя, кВ
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.1
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Напряжение трехфазное, В (Гц)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    380(50)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Напряжение однофазное, В (Гц)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220(50)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Длина, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1200
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Ширина без рычага, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    825
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Высота, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1150
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Вес, кг
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    150
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
export default Betonosmesiteli_1;
