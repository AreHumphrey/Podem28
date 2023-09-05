import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_bloki.png"

const Bloki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БЛОКИ (МОНТАЖНЫЕ, ТРАЛОВЫЕ)</h2>
                <p>Блок монтажный с крюком активно применяется в промышленной сфере для изменения направления и снижения
                    тягового усилия грузоподъемных механизмов. <br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
                <div className="table-container">
                    <table className="table" border="1">
                        <tr>
                            <td>
                                <p>
                                    <strong>Модель</strong>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b>Грузоподъемность, кг</b>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b>Рекомендуемый диаметр каната, мм</b>
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH3"*1
                            </td>
                            <td>
                                <p>
                                    2
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 7 до 9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH6"*1
                            </td>
                            <td>
                                <p>
                                    4
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 16 до 18
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH8"*1
                            </td>
                            <td>
                                <p>
                                    8
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 20 до 22
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с крюком LH10"*1
                            </td>
                            <td>
                                <p>
                                    10
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 24 до 26
                                </p>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS3"*1
                            </td>
                            <td>
                                <p>
                                    2
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 7 до 9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS6"*1
                            </td>
                            <td>
                                <p>
                                    4
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 16 до 18
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS8"*1
                            </td>
                            <td>
                                <p>
                                    8
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 20 до 22
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок шкивовый с проушиной LS10"*1
                            </td>
                            <td>
                                <p>
                                    10
                                </p>
                            </td>
                            <td>
                                <p>
                                    от 24 до 26
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Блок тралловый IB-75
                            </td>
                            <td>
                                <p>
                                    0.5
                                </p>
                            </td>
                            <td>
                                <p>
                                    8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок тралловый IB-100
                            </td>
                            <td>
                                <p>
                                    1
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
                                Блок однорольный с крюком 1В-100Н
                            </td>
                            <td>
                                <p>
                                    0.5
                                </p>
                            </td>
                            <td>
                                <p>
                                    8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Блок однорольный крюком 1В-125Н
                            </td>
                            <td>
                                <p>
                                    1
                                </p>
                            </td>
                            <td>
                                <p>
                                    10
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Bloki_2;