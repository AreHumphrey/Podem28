import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3_1 from "../../../Components/Img/img_kolesa_3_1.png"
import img_3_2 from "../../../Components/Img/img_kolesa_3_2.png"
import img_3_3 from "../../../Components/Img/img_kolesa_3_3.png"
import img_3_4 from "../../../Components/Img/img_kolesa_3_4.png"


const Kolesa_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БОЛЬШЕГРУЗНЫЕ КОЛЕСА (НЕЙЛОН, ПОЛИАМИД)</h2>

                <div className="container_foto">
                    <img src={img_3_1}></img>
                    <p>Полиамидные колеса, нейлоновые колеса, промышленные колеса и ролики, колесные опоры, индустриальные колеса. Колесные опоры (кронштейны) большегрузной серии изготовлены из оцинкованной стали повышенной грузоподъёмности (толщина стали колесной опоры 5мм) обод колеса изготовлен из  высококачественного полиамида ,подшипник у большегрузных колес - игольчатый роликоподшипник, поворотная опора имеет подшипник в виде конус-чашки с насыпными шариками, надёжно прижата болтом с гайкой и завальцована . Допустимая грузоподъемность ПОЛИАМИДНЫХ  КОЛЕС  от  150 до 400 кг. </p>
                </div>
                <img src={img_3_2}></img>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="13">
                                <p>
                                    <strong>Большегрузные нейлоновые колеса. Крепление – площадка, поворотные,
                                        шарикоподшипник. </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
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
                                    1000113
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdn 42
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    250
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    142
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
                                    114x100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000114
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdn 55
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    125
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    164
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
                                    114x100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000115
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdn 63
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    400
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    150
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    190
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
                                    114x100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000116
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdn 80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    240
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
                                    &nbsp; &nbsp; &nbsp; 114x100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
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
                                    <strong>Большегрузные нейлоновые колеса. Крепление – площадка, неповоротные,
                                        шарикоподшипник. </strong>
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
                                    1000117
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    FCdn 46
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    250
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    142
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000118
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    &nbsp;FCdn 54&nbsp;&nbsp;<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    125
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    164
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000119
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    FCdn 63
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    400
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    150
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    190
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000120
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    FCdn 80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    240
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
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
                                    <strong>Большегрузные нейлоновые колеса. Крепление – площадка, поворотные, с тормозом,
                                        шарикоподшипник. </strong>
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
                                    1000231
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdbn 42
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    250
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    142
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000232
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdbn 55
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    125
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    164
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000233
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdbn 63
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    400
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    150
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    190
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1000234
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    SCdbn 80
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    500
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    240
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
                                    114x100<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    85x72<br/>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11x19<br/>
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

export default Kolesa_3;