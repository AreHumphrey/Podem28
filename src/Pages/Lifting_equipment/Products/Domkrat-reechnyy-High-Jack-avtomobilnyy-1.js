import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_domkraty_1.png"

const Domkrat_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ДОМКРАТ РЕЕЧНЫЙ HIGH-JACK (АВТОМОБИЛЬНЫЙ)</h2>
                <p>Домкрат High Jack используется автолюбителями для вытягивания застрявшего в грязи автомобиля, при
                    замене колеса и прочих работах. Металлический корпус домкрата окрашен во избежание образования
                    коррозии. Инструмент не требует специального обслуживания и отличается долгим сроком
                    эксплуатации.<br/></p>
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
                                    High Jack JRC-700
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    700
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    13.5
                                </p>
                            </td>


                        </tr>

                        <tr>

                            <td>
                                <p align="center">
                                    High Jack JRC-1070
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1070
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    14.7
                                </p>
                            </td>


                        </tr>
                        <tr>

                            <td>
                                <p align="center">
                                    High Jack JRC-1350
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1350
                                </p>
                            </td>

                            <td>
                                <p align="center">
                                    15.8
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

export default Domkrat_1;