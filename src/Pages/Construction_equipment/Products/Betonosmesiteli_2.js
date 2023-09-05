import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_betonosmesiteli_2.png"

const Betonosmesiteli_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БЕТОНОСМЕСИТЕЛЬ KITTORY</h2>
                <p>Увеличенная мощность двигателя бетоносмесителя обеспечивает высокую надежность в работе при
                    длительных нагрузках.
                    Корпус электропривода из прочного пластика - исключает поражение электрическим током (электропривод
                    полностью изолирован от корпуса бетоносмесителя).<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Элетрический выключатель с элементом термозащиты для надежного включения/выключения и
                        автоматического отключения электропитания при перегрузках, и защитой от попадания пыли и грязи.
                        Шкиф привода изготовлен из высокопрочного композитного материала РА66 Надежный ручейковый ремень
                        с V образными ребрами "не зубчатый" - не рвется при резкой остановке или перегрузке барабана
                        (при перегрузке ремень просто проскальзывает по шкиву). <br/></p>
                </div>
                <p>Тихая работа, малый вес.<br/>
                    Усиленная конструкция станины.<br/>
                    Легкий монтаж и демонтаж.<br/>
                    Большие колеса обеспечивают легкий ход на любой<br/></p>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>TTX</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-125</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-160</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-180</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-210</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-240</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-300</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>CMU-500</strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Мощность, Вт
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    600
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    700
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    800
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    900
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1800
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3500
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Напряжение, В
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Объем бака, л
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    125
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    160
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    180
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    210
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    240
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Объем по загрузке, л
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    87
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    120
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    140
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    160
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    180
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    220
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    375
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Венец
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    чугун
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
                                    58
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    70
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    73
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    133
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    138
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    312
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Габариты, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1200×710×1350
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1260×850×1350
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1260×850×1400
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1260×850×1420
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1580×830×1470
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1580×830×1500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2780×1180×1650
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
export default Betonosmesiteli_2;
