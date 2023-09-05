import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3_1 from "../../../Components/Img/img_kolesa_8_1.png"
import img_3_2 from "../../../Components/Img/img_kolesa_8_2.png"
import img_3_3 from "../../../Components/Img/img_kolesa_8_3.png"
import img_3_4 from "../../../Components/Img/img_kolesa_8_4.png"


const Kolesa_8 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПНЕВМАТИЧЕСКИЕ КОЛЕСА</h2>

                <div className="container_foto">
                    <img src={img_3_1}></img>
                    <p>Принципиальное отличие пневматических колес от литых аналогов заключается в наличии полой
                        резиновой камеры, расположенной внутри покрышки. Этот комплект монтируется на стальной (реже –
                        пластиковый) обод, и через специальное устройство – ниппель – заполняется воздухом до достижения
                        требуемого давления. Пневматические колеса, устанавливаемые на тележки, укомплектованы стальным
                        кронштейном, предназначенным для фиксации узла в сборе к платформе. При этом колеса могут быть
                        либо поворотными, либо с постоянным направлением продольной оси.</p>
                </div>
                <img src={img_3_2}></img>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="13">
                                <p align="center">
                                    <strong>Камеры для пневматических колес. </strong>
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
                                    1000225
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.50-4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    230-260
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    87
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
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000226
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.25-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    340-390
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    81
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
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000227
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4.00-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    370-420
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
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
                                    &nbsp;
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
                                    <strong>Камеры для пневматических колес. </strong>
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
                                    1000225
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.50-4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    230-260
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    87
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
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000226
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.25-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    340-390
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    81
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
                                    &nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000227
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4.00-8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    370-420
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
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
                                    &nbsp;
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
                                    <strong>Пневматические колеса. Крепление – площадка, поворотные. </strong>
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
                                    1000054
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    PRS80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    218
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    254
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
                                    115x100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x73<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x20
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000055
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    PRS85&nbsp; &nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    130
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    266
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    90
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    306
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
                                    115x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x73<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x20<br/>
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
                                    <strong>Пневматические колеса. Крепление – площадка, неповоротные. </strong>
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
                                    1000056
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    PRF 80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    218
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    60
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    254
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
                                    115x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x73<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x20<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000057&nbsp;
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    PRF 85
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    130
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    266
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    90
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    306
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
                                    115x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x73
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x20<br/>
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

export default Kolesa_8;