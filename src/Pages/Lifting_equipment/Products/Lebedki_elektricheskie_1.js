import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_1_lebedki_elektricheskie.png"

const Lebedki_elektricheskie_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКИ ЭЛЕКТРИЧЕСКИЕ СЕРИИ JK</h2>
                <p>Тяговые электрические лебедки серии JK предназначены для подъема и перемещении грузов при строительстве, монтажных и других работах. Лебедки могут использоваться в качестве комплектующих различного грузоподъемного оборудования. В рабочем положении закрепляются на горизонтальной площадке.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>
                <div className="table-container">
                    <table className="table" border="1" cellPadding="3" align="center">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Модель</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Грузоподъемность, кг</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Канатоемкость, м</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Диаметр каната, мм</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Вес с канатом, кг</b>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                JK1
                            </td>
                            <td>
                                <p align="center">
                                    1000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    110
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9.3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    460
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                JK3
                            </td>
                            <td>
                                <p align="center">
                                    3000
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    200
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    17
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1000
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

export default Lebedki_elektricheskie_1;