import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_5.png"

const Ruchnye_lebedki_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА РЫЧАЖНАЯ (МТМ)</h2>
                <p> Монтажно-тяговый механизм WRP ORIGINAL представляет собой универсальный подъемно-тяговый меха- низм,
                    применяемый для выполнения подъемных и тяговых работ. Лебедки WRP с маркировкой ORIGINAL
                    производятся с применением высококачественных комплектующих, которые позволяют повысить их надеж-
                    ность и увеличить срок службы. Канат 20м входит комплект<br/></p>
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
                                    <b>Грузоподъем- ность, кг</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Диаметр каната, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес, без каната, кг</b>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                WRP800
                            </td>
                            <td>
                                <p align="center">
                                    800
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8,3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16,7
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                WRP1600
                            </td>
                            <td>
                                1600
                            </td>
                            <td>
                                <p align="center">
                                    11
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    33,8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                WRP3200
                            </td>
                            <td>
                                <p align="center">
                                    3200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    56,8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                WRP5400
                            </td>
                            <td>
                                <p align="center">
                                    5400
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    20
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    90,3
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

export default Ruchnye_lebedki_5;