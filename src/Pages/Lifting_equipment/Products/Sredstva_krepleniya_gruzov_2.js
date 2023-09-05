import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_sredstva-krepleniya-gruzov.png"

const Sredstva_krepleniya_gruzov_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СТЯЖНОЙ МЕХАНИЗМ ДЛЯ СТЯЖНЫХ РЕМНЕЙ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td rowSpan="2" align="center">
                                <b>ширина применяемой ленты, мм</b>
                            </td>
                            <td rowSpan="2" align="center">
                                <b>максимальная нагрузка, кг</b>
                            </td>
                            <td rowSpan="2" align="center">
                                <b>материал ручки</b>
                            </td>
                            <td rowSpan="2" align="center">
                                <b>длина ручки, мм</b>
                            </td>
                            <td rowSpan="2" align="center">
                                <b>Вес, кг</b>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td>
                                25
                            </td>
                            <td>
                                1500
                            </td>
                            <td>
                                стальная
                            </td>
                            <td>
                                120
                            </td>
                            <td>
                                0,35
                            </td>
                        </tr>
                        <tr>
                            <td>
                                35
                            </td>
                            <td>
                                3000
                            </td>
                            <td>
                                алюминиевая
                            </td>
                            <td>
                                150
                            </td>
                            <td>
                                0,575
                            </td>
                        </tr>
                        <tr>
                            <td>
                                50
                            </td>
                            <td>
                                5000
                            </td>
                            <td>
                                алюминиевая
                            </td>
                            <td>
                                230
                            </td>
                            <td>
                                0,925
                            </td>
                        </tr>
                        <tr>
                            <td>
                                75
                            </td>
                            <td>
                                10000
                            </td>
                            <td>
                                алюминиевая
                            </td>
                            <td>
                                300
                            </td>
                            <td>
                                3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                100
                            </td>
                            <td>
                                10000
                            </td>
                            <td>
                                алюминиевая
                            </td>
                            <td>
                                300
                            </td>
                            <td>
                                3,75

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

export default Sredstva_krepleniya_gruzov_2;