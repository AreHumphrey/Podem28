import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_5_sredstva-krepleniya-gruzov.png"

const Sredstva_krepleniya_gruzov_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КОМПЛЕКТУЮЩИЕ ДЛЯ СТЯЖНЫХ РЕМНЕЙ</h2>
                <h2>ЛЕНТА ТЕКСТИЛЬНАЯ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>

                </div>

                <div className="table-container">
                    <table className="table" border="1">
                        <thead>
                        <tr>
                            <th rowSpan="2" align="center">
                                ширина, мм
                            </th>
                            <th colSpan="2" align="center">
                                Нагрузка, т
                            </th>
                            <th rowSpan="2" align="center" valign="middle">
                                цвет ленты
                            </th>
                            <th rowSpan="2" align="center" valign="middle">
                                Вес, кг/м
                            </th>
                        </tr>
                        <tr>
                            <th align="center">
                                рабочая
                            </th>
                            <th align="center">
                                разрывная
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>25</td>
                            <td>0.4</td>
                            <td>1200</td>
                            <td style={{ backgroundColor: '#3DEB3D' }}>зеленая</td>
                            <td>0.026</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>1</td>
                            <td>3000</td>
                            <td style={{ backgroundColor: '#FFD320' }}>оранжевая</td>
                            <td>0.056</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>1.5</td>
                            <td>4500</td>
                            <td style={{ backgroundColor: '#FFD320' }}>оранжевая</td>
                            <td>0.075</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>1.5</td>
                            <td>4500</td>
                            <td style={{ backgroundColor: '#0099FF' }}>синяя</td>
                            <td>0.075</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>2</td>
                            <td>6000</td>
                            <td style={{ backgroundColor: '#0099FF' }}>синяя</td>
                            <td>0.101</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>2.5</td>
                            <td>7500</td>
                            <td style={{ backgroundColor: '#0099FF' }}>синяя</td>
                            <td>0.128</td>
                        </tr>
                        <tr>
                            <td>75</td>
                            <td>3.5</td>
                            <td>10500</td>
                            <td style={{ backgroundColor: '#FFFF00' }}>желтая</td>
                            <td>0.175</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>4</td>
                            <td>12000</td>
                            <td style={{ backgroundColor: '#FFFF00' }}>желтая</td>
                            <td>0.18</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>5</td>
                            <td>15000</td>
                            <td style={{ backgroundColor: '#FFFF00' }}>желтая</td>
                            <td>0.25</td>
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

export default Sredstva_krepleniya_gruzov_5;