import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_7_1.png"
import img_4 from "../../../Components/Img/img_lebedka-ruchnaya_7_2.png"

const Ruchnye_lebedki_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА HWV ТИП VS, ТИП GR</h2>
                <p> Лебедка применяется для подъёма и перемещения грузов при строительных, монтажных и ремонтных рабо-
                    тах, при эксплуатации и ремонте транспортных средств. Лебедки просты в эксплуатации, надежны и
                    безопас- ны в работе. Цена на лебедку без каната. Канат можно заказать различной длинны.<br/></p>
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
                                    <b>Тяговое усилие, тс</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Диаметр&nbsp;</strong><strong>каната, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Макс. длинна каната, м</b>
                                </p>
                            </td>
                            <td>
                                <div>
                                    <b>Вес, без каната, кг</b>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                VS 250&nbsp;
                            </td>
                            <td>
                                <p align="center">
                                    0,25
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    20
                                </p>
                            </td>
                            <td>
                                <p>
                                    10
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                VS 500
                            </td>
                            <td>
                                0,5
                            </td>
                            <td>
                                <p align="center">
                                    6,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    25
                                </p>
                            </td>
                            <td>
                                <p>
                                    16
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                VS 1000
                            </td>
                            <td>
                                <p align="center">
                                    1,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    35
                                </p>
                            </td>
                            <td>
                                40
                            </td>
                        </tr>
                        <tr>
                            <td>
                                GR 2000
                            </td>
                            <td>
                                <p align="center">
                                    2,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    30
                                </p>
                            </td>
                            <td>
                                <p>
                                    60
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <img src={img_4}></img>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Ruchnye_lebedki_7;