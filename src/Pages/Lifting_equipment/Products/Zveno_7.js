import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_zveno7.png"

const Zveno_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРЮК САМОЗАПИ РАЮЩИЙСЯ</h2>
                <p>Отличием конструкции самозапирающихся крюков является то, что замок выполнен единой деталью с
                    крепежным элементом крюка. Благодаря этому под нагрузкой замок запирается, обеспечивая высокую
                    степень безопасности стропа.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Грузоподъемность, т </strong>
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
                                    1,12
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    0,50
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
                                    0,80
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    3,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    5,4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3,07
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

export default Zveno_7;