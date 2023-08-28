import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_domkraty_2.png"

const Domkrat_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ДОМКРАТ РЕЕЧНЫЙ</h2>
                <p>Данный тип домкрата находит свое применение преимущественно в промышленности. Модель JR отличается
                    высокой степенью надежности конструкции и превосходно подходит для интенсивной работы.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>

                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Модель</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Грузоподъемность, кг</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Высота подъема, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес, кг</strong>
                                </p>
                            </td>
                        </tr>


                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной JR 30
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    350
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    15
                                </p>
                            </td>


                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной JR 50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    400
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    22
                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной низкопрофильный JRN 50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    400
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    22
                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной JR100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    580
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    38
                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной низкопрофильный JRN100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    580
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    38
                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной JR160
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16
                                </p>
                            </td>
                            <td>
                                <p align="center">

                                </p>
                            </td>

                            <td>
                                <p align="center">

                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной JR200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    20
                                </p>
                            </td>
                            <td>
                                <p align="center">

                                </p>
                            </td>

                            <td>
                                <p align="center">

                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    ДР стальной JR250
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    25
                                </p>
                            </td>
                            <td>
                                <p align="center">

                                </p>
                            </td>

                            <td>
                                <p align="center">

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

export default Domkrat_2;