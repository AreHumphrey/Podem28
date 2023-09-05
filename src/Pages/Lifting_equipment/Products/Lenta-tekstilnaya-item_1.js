import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_1_lenta_tekstilnaya.png"

const Lenta_tekstilnaya_item_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕНТА ТЕКСТИЛЬНАЯ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Текстильная лента используется для производства текстильных стропов и стяжных ремней. Окраска лент для текстильных строп производится в соответствии с грузоподъемностью и согласно международному цветовому коду.<br/></p>
                </div>
                <h2>ЛЕНТА ПОЛИЭСТЕР SF 6:1</h2>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td rowSpan="2" style={{textAlign: 'center'}}><b>Ширина, мм</b></td>
                            <td rowSpan="2" style={{textAlign: 'center'}}><b>Рабочая г/п стропа, т</b></td>
                            <td rowSpan="2" style={{textAlign: 'center'}}><b>Цвет</b></td>
                            <td rowSpan="2" style={{textAlign: 'center'}}><b>Разрывная нагрузка, не менее, кг</b></td>
                            <td rowSpan="2" style={{textAlign: 'center'}}><b>Вес кг/м</b></td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>30</td>
                            <td>1</td>
                            <td bgcolor="#2F3192"><font color="#acacac">фиолетовая</font></td>
                            <td>3500</td>
                            <td>0,083</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>2</td>
                            <td bgcolor="#007236">зеленая</td>
                            <td>7000</td>
                            <td>0,146</td>
                        </tr>
                        <tr>
                            <td>75</td>
                            <td>3</td>
                            <td bgcolor="#FFF100">желтая</td>
                            <td>10500</td>
                            <td>0,218</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>4</td>
                            <td bgcolor="#898989">серая</td>
                            <td>14000</td>
                            <td>0,288</td>
                        </tr>
                        <tr>
                            <td>125</td>
                            <td>5</td>
                            <td bgcolor="#EE1D24">красная</td>
                            <td>17500</td>
                            <td>0,36</td>
                        </tr>
                        <tr>
                            <td>150</td>
                            <td>6</td>
                            <td bgcolor="#7C4900">коричневая</td>
                            <td>21000</td>
                            <td>0,432</td>
                        </tr>
                        <tr>
                            <td>200</td>
                            <td>8</td>
                            <td bgcolor="#0072BC">синяя</td>
                            <td>32000</td>
                            <td>0,592</td>
                        </tr>
                        <tr>
                            <td>250</td>
                            <td>10</td>
                            <td bgcolor="#F7941D">оранжевая</td>
                            <td>40000</td>
                            <td>0,740</td>
                        </tr>
                        <tr>
                            <td>300</td>
                            <td>12</td>
                            <td bgcolor="#F7941D">оранжевая</td>
                            <td>48000</td>
                            <td>0,904</td>
                        </tr>
                        </tbody>
                    </table>

                    <h2>ЛЕНТА ПОЛИЭСТЕР SF 7:1</h2>
                    <div className="table-container">
                        <table className="table" border="1">
                            <tbody>
                            <tr>
                                <td rowSpan="2" style={{textAlign: 'center'}}><b>Ширина, мм</b></td>
                                <td rowSpan="2" style={{textAlign: 'center'}}><b>Рабочая г/п стропа, т</b></td>
                                <td rowSpan="2" style={{textAlign: 'center'}}><b>Цвет</b></td>
                                <td rowSpan="2" style={{textAlign: 'center'}}><b>Разрывная нагрузка, не менее, кг</b></td>
                                <td rowSpan="2" style={{textAlign: 'center'}}><b>Вес кг/м</b></td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>30</td>
                                <td>1</td>
                                <td bgcolor="#2F3192"><font color="#cccccc">фиолетовая</font></td>
                                <td>4500</td>
                                <td>0,083</td>
                            </tr>
                            <tr>
                                <td>60</td>
                                <td>2</td>
                                <td bgcolor="#007236">зеленая</td>
                                <td>9000</td>
                                <td>0,161</td>
                            </tr>
                            <tr>
                                <td>90</td>
                                <td>3</td>
                                <td bgcolor="#FFF100">желтая</td>
                                <td>13500</td>
                                <td>0,255</td>
                            </tr>
                            <tr>
                                <td>120</td>
                                <td>4</td>
                                <td bgcolor="#707070">серая</td>
                                <td>18500</td>
                                <td>0,335</td>
                            </tr>
                            <tr>
                                <td>150</td>
                                <td>5</td>
                                <td bgcolor="#EE1D24">красная</td>
                                <td>22500</td>
                                <td>0,426</td>
                            </tr>
                            <tr>
                                <td>180</td>
                                <td>6</td>
                                <td bgcolor="#7C4900">коричневая</td>
                                <td>27000</td>
                                <td>0,508</td>
                            </tr>
                            <tr>
                                <td>240</td>
                                <td>8</td>
                                <td bgcolor="#0072BC">синяя</td>
                                <td>36000</td>
                                <td>0,666</td>
                            </tr>
                            <tr>
                                <td>300</td>
                                <td>10</td>
                                <td bgcolor="#F7941D">оранжевая</td>
                                <td>45000</td>
                                <td>0,848</td>
                            </tr>
                            <tr>
                                <td>300</td>
                                <td>12</td>
                                <td bgcolor="#F7941D">оранжевая</td>
                                <td>54000</td>
                                <td>1,010</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Lenta_tekstilnaya_item_1;