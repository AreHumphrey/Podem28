import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3_1 from "../../../Components/Img/img_kolesa_6_1.png"
import img_3_2 from "../../../Components/Img/img_kolesa_6_2.png"
import img_3_3 from "../../../Components/Img/img_kolesa_6_3.png"
import img_3_4 from "../../../Components/Img/img_kolesa_6_4.png"
import img_3_5 from "../../../Components/Img/img_kolesa_6_5.png"
import img_3_6 from "../../../Components/Img/img_kolesa_6_7.png"
import img_3_7 from "../../../Components/Img/img_kolesa_6_7.png"
import img_3_8 from "../../../Components/Img/img_kolesa_6_8.png"
import img_3_9 from "../../../Components/Img/img_kolesa_6_9.png"


const Kolesa_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>АППАРАТНЫЕ КОЛЕСА</h2>

                <div className="container_foto">
                    <img src={img_3_1}></img>
                    <p>Аппаратные колеса используются в основном в помещениях. Они рассчитаны на эксплуатацию со
                        скоростью движения до 3 км/ч. Типичными примерами применения аппаратных колес являются
                        медицинское оборудование, стойки для мониторов и оборудование промышленных кухонь.</p>
                </div>
                <img src={img_3_2}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса с площадкой. Поворотные, подшипник скольжения. </strong>
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
                                1000063</p>
                        </td>
                        <td>
                            <p align="center">
                                SCg 25
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">&nbsp;</p>
                        </td>
                        <td>
                            <p align="center">72 &nbsp; &nbsp;</p>
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
                        <td><p align="center">50x50&nbsp; &nbsp;</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 36x36</p>
                        </td>
                        <td><p align="center">12x6 &nbsp; &nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000064</p>
                        </td>
                        <td>
                            <p align="center">
                                SCg 93</p>
                        </td>
                        <td>
                            <p align="center">
                                50
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                75</p>
                        </td>
                        <td>
                            <p align="center">
                                21</p>
                        </td>
                        <td>
                            <p align="center">&nbsp;</p>
                        </td>
                        <td>
                            <p align="center">104 &nbsp; &nbsp;</p>
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
                                65x65&nbsp;</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 49x49</p>
                        </td>
                        <td><p align="center">12x6 &nbsp;&nbsp;&nbsp;
                        </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000065</p>
                        </td>
                        <td>
                            <p align="center">
                                SCg 42</p>
                        </td>
                        <td>
                            <p align="center">
                                80
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                100</p>
                        </td>
                        <td>
                            <p align="center">
                                26</p>
                        </td>
                        <td>
                            <p align="center">&nbsp;</p>
                        </td>
                        <td>
                            <p align="center">134 &nbsp; &nbsp;</p>
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
                        <td><p align="center">75x75 &nbsp; &nbsp;</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 55x55</p>
                        </td>
                        <td><p align="center">15x8 &nbsp;&nbsp;&nbsp;
                        </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <img src={img_3_3}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса с площадкой. Неповоротные, подшипник скольжения. </strong>
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
                                1000066</p>
                        </td>
                        <td>
                            <p align="center">
                                FCg 25
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                72</p>
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
                                65x50</p>
                        </td>
                        <td>
                            <p align="center">
                                45x33</p>
                        </td>
                        <td>
                            <p align="center">
                                6.5</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000067</p>
                        </td>
                        <td>
                            <p align="center">
                                FCg 92</p>
                        </td>
                        <td>
                            <p align="center">50
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                75</p>
                        </td>
                        <td>
                            <p align="center">
                                21
                            </p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                104
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
                                100x59</p>
                        </td>
                        <td>
                            <p align="center">
                                81x40
                            </p>
                        </td>
                        <td>
                            <p align="center">8.5<br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000068</p>
                        </td>
                        <td>
                            <p align="center">
                                FCg 46</p>
                        </td>
                        <td>
                            <p align="center">
                                80
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                100
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                26
                            </p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                134
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
                            <p align="center">100x59<br/></p>
                        </td>
                        <td>
                            <p align="center">81x40<br/></p>
                        </td>
                        <td>
                            <p align="center">8.5<br/></p>
                        </td>
                    </tr>


                    </tbody>
                </table>
                <img src={img_3_4}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса с площадкой. Поворотные, с тормозом, подшипник
                                    скольжения. </strong>
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
                                1000069</p>
                        </td>
                        <td>
                            <p align="center">
                                SCgb 25
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                72</p>
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
                                50x50</p>
                        </td>
                        <td>
                            <p align="center">
                                36x36</p>
                        </td>
                        <td>
                            <p align="center">
                                12x6
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000070</p>
                        </td>
                        <td>
                            <p align="center">
                                SCgb 93</p>
                        </td>
                        <td>
                            <p align="center">
                                50
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                75
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                21
                            </p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                104
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
                                65x65</p>
                        </td>
                        <td>
                            <p align="center">
                                49x49</p>
                        </td>
                        <td>
                            <p align="center">
                                12x6</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000071</p>
                        </td>
                        <td>
                            <p align="center">
                                SCgb 42</p>
                        </td>
                        <td>
                            <p align="center">
                                80
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                100
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                26
                            </p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                134
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
                                75x75</p>
                        </td>
                        <td>
                            <p align="center">
                                55x55</p>
                        </td>
                        <td>
                            <p align="center">
                                15x8
                            </p>
                        </td>
                    </tr>


                    </tbody>
                </table>
                <img src={img_3_5}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса со штырем. Поворотные, подшипник скольжения. </strong>
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
                                1000072</p></td>
                        <td>
                            <p align="center">
                                SCig 25
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">М10 &nbsp; &nbsp;</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <img src={img_3_6}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса со штырем. Поворотные, с тормозом, подшипник
                                    скольжения. </strong>
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
                                1000075</p>
                        </td>
                        <td>
                            <p align="center">SCigb 25<br/></p>
                        </td>
                        <td>
                            <p align="center">25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; М10</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>


                    </tbody>
                </table>
                <img src={img_3_8}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса со штырем. Поворотные, с тормозом, подшипник
                                    скольжения. </strong>
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
                                1000072</p>
                        </td>
                        <td>
                            <p align="center">SCig 25<br/></p>
                        </td>
                        <td>
                            <p align="center">25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; М10</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>


                    </tbody>
                </table>

                <img src={img_3_9}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса с болтом. Поворотные, подшипник скольжения. </strong>
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
                                1000346</p>
                        </td>
                        <td>
                            <p align="center">
                                SCtg 25</p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">М10</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000073</p>
                        </td>
                        <td>
                            <p align="center">
                                SCtg 93</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">75</p>
                        </td>
                        <td>
                            <p align="center">
                                21</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                101</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">М10</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000074</p>
                        </td>
                        <td>
                            <p align="center">
                                SCtg 42</p>
                        </td>
                        <td>
                            <p align="center">
                                80</p>
                        </td>
                        <td>
                            <p align="center">
                                100
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                26</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                132</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                М12</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000344</p>
                        </td>
                        <td>
                            <p align="center">
                                SCtg 55</p>
                        </td>
                        <td>
                            <p align="center">
                                100</p>
                        </td>
                        <td>
                            <p align="center">
                                125</p>
                        </td>
                        <td>
                            <p align="center">
                                31</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                154</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                М12</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"></p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <img src={img_3_7}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса с болтом. Поворотные, с тормозом, подшипник
                                    скольжения. </strong>
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
                                1000347</p>
                        </td>
                        <td>
                            <p align="center">
                                SCtgb 25</p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; М10</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000076</p>
                        </td>
                        <td>
                            <p align="center">SCtgb 93<br/></p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                75</p>
                        </td>
                        <td>
                            <p align="center">
                                21</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                101</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; М10</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000077</p>
                        </td>
                        <td>
                            <p align="center">SCtgb 42<br/></p>
                        </td>
                        <td>
                            <p align="center">
                                80</p>
                        </td>
                        <td>
                            <p align="center">
                                100
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                26</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                132</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; М12</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 30</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000345</p>
                        </td>
                        <td>
                            <p align="center">SCtgb 55<br/></p>
                        </td>
                        <td>
                            <p align="center">100</p>
                        </td>
                        <td>
                            <p align="center">
                                125</p>
                        </td>
                        <td>
                            <p align="center">
                                31</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                154</p>
                        </td>
                        <td>
                            <p align="center">
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; М12</p>
                        </td>
                        <td>
                            <p align="center">&nbsp; &nbsp; &nbsp; 26</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>

                    </tbody>
                </table>

                <img src={img_3_9}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса под болт. Поворотные, подшипник скольжения. </strong>
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
                                1000078</p>
                        </td>
                        <td>
                            <p align="center">
                                SChg 25
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">
                                50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td><p align="center">10.5 &nbsp; &nbsp;</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p align="center">
                                1000079</p>
                        </td>
                        <td>
                            <p align="center">
                                SChg 93</p>
                        </td>
                        <td>
                            <p align="center">
                                50
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                75</p>
                        </td>
                        <td>
                            <p align="center">
                                21
                            </p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                101</p>
                        </td>
                        <td><p align="center">10.5 &nbsp; &nbsp;</p>
                        </td>
                        <td><p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000080</p>
                        </td>
                        <td>
                            <p align="center">
                                SChg 42</p>
                        </td>
                        <td>
                            <p align="center">
                                80
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                100</p>
                        </td>
                        <td>
                            <p align="center">
                                26</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                132</p>
                        </td>
                        <td><p align="center">10.5 &nbsp; &nbsp;</p>
                        </td>
                        <td><p align="center"><br/></p></td>
                        <td><p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>


                    </tbody>
                </table>
                <img src={img_3_7}></img>
                <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="13">
                            <p align="center">
                                <strong>Аппаратные колеса под болт. Поворотные, с тормозом, подшипник
                                    скольжения. </strong>
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
                                1000081</p>
                        </td>
                        <td>
                            <p align="center">
                                SChgb 25
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                25</p>
                        </td>
                        <td>
                            <p align="center">50</p>
                        </td>
                        <td>
                            <p align="center">
                                16</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                70</p>
                        </td>
                        <td>
                            <p align="center">10.5</p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p align="center">
                                1000082</p>
                        </td>
                        <td>
                            <p align="center">
                                SChgb 93</p>
                        </td>
                        <td>
                            <p align="center">
                                50
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                75</p>
                        </td>
                        <td>
                            <p align="center">
                                21
                            </p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                101</p>
                        </td>
                        <td><p align="center">10.5<br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">
                                1000083</p>
                        </td>
                        <td>
                            <p align="center">
                                SChgb 42</p>
                        </td>
                        <td>
                            <p align="center">
                                80
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                100</p>
                        </td>
                        <td>
                            <p align="center">
                                26</p>
                        </td>
                        <td>
                            <p align="center">
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                132</p>
                        </td>
                        <td>
                            <p align="center">10.5<br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                        <td>
                            <p align="center"><br/></p>
                        </td>
                    </tr>


                    </tbody>
                </table>



            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Kolesa_6;