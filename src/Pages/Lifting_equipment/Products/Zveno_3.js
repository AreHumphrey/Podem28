import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno_3.png"

const Zveno_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК S-ОБРАЗНЫЙ</h2>
                <p>S-образный крюк служит для различных такелажных работ. S-образная форма крюка позволяет с его помощью
                    быстро и надёжно сцеплять различные грузы. Крюк широко используется в строительных, такелажных
                    работах, в промышленном и любительском альпинизме, в противопожарной службе, при буксировке
                    различных транспортных средств.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Грузоподъемность, т</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Масса, кг </strong>
                                </p>
                            </td>


                        </tr>


                        <tr>
                            <td>
                                <p align="center">
                                    1,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    2,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,5
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    3,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2
                                </p>
                            </td>


                        </tr>

                        <tr>
                            <td>
                                <p align="center">
                                    5,0
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4,5
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

export default Zveno_3;