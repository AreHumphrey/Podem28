import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3_1 from "../../../Components/Img/img_kolesa_2_1.png"
import img_3_2 from "../../../Components/Img/img_kolesa_2_2.png"
import img_3_3 from "../../../Components/Img/img_kolesa_2_3.png"
import img_3_4 from "../../../Components/Img/img_kolesa_2_4.png"


const Kolesa_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКИ С СЕТЧАТЫМИ БОРТАМИ</h2>

                <div className="container_foto">
                    <img src={img_3_1}></img>
                   <p>В основном для малоподвижных объектов, стандартная грузоподъемность, необходима в среде с высокими температурами. Использование: печи и промышленные сушки.</p>
                </div>
                <img src={img_3_2}></img>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="13">
                                <p align="center">
                                    <strong>Термостойкие колеса (чугун, до 300°С) пр-во РФ. Крепление – площадка,
                                        поворотные. </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Артикул
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Серия колес
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Г/п, кг (тип)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф колеса, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ширина, колеса, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ширина ступицы, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Общая высота, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф крепеж. отверстия, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф болта (штыря), мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    H болта (штыря), мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Площадка, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Центры отверстий, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф крепеж. отверстия площ., мм
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000235
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100х30-ZZB
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    127
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    105x80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60x80<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000236
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3802-ZZB-100-HT
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    127
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    105x80<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60x80<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9<br/>
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <img src={img_3_3}></img>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="13">
                                <p align="center">
                                    <strong>Колеса для колбасных рам, тележек для фарша (фенол, до 170°С). &nbsp;Без
                                        крепления. </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Артикул
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Серия колес
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Г/п, кг (тип)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф колеса, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ширина, колеса, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ширина ступицы, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Общая высота, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф крепеж. отверстия, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф болта (штыря), мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    H болта (штыря), мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Площадка, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Центры отверстий, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф крепеж. отверстия площ., мм
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000237
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    160х4016-HT
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    160
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    42
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    51
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000238
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;200x40x16-HT&nbsp;<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    42
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    51
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <img src={img_3_4}></img>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="13">
                                <p align="center">
                                    <strong>Колеса для колбасных рам, тележек для фарша (полипропилен, до 40°С). &nbsp;Без
                                        крепления. </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Артикул
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Серия колес
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Г/п, кг (тип)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф колеса, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ширина, колеса, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ширина ступицы, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Общая высота, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф крепеж. отверстия, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф болта (штыря), мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    H болта (штыря), мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Площадка, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Центры отверстий, мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Ф крепеж. отверстия площ., мм
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000239
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    160х40x16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    160
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    42<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    51
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
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

export default Kolesa_2;