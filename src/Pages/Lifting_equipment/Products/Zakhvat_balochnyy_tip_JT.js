import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zahvat_2.png"

const Zakhvat_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЗАХВАТ БАЛОЧНЫЙ, ТИП JT</h2>
                <p>Простое, надёжное и грамотное решение для монтажа тали или просто как захват для перемещения двутавровых элементов. К преимуществам захвата JT можно отнести:
                    - быстрая установка
                    - надёжная конструкция
                    - широкая область применения<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Грузоподъемность, т</strong>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                1.0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2.0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3.0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5.0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10.0
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

export default Zakhvat_2;