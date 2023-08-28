import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_4_sredstva-krepleniya-gruzov.png"

const Sredstva_krepleniya_gruzov_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТАЛРЕП С ТРЕЩЕТКОЙ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1" cellPadding="3" cellSpacing="0" width="90%" align="center">
                        <tbody>
                        <tr></tr>

                        <tr>
                            <td>
                                <center><b>Модель</b></center>
                            </td>
                            <td>
                                <center><b>Рабочая нагрузка, т</b></center>
                            </td>
                            <td>
                                <center><b>Разрушающее усилие, т</b></center>
                            </td>
                        </tr>

                        <tr>
                            <td>LBН 8 с крюками</td>
                            <td>2</td>
                            <td>8</td>
                        </tr>

                        <tr>
                            <td>LBН 10&nbsp;с крюками</td>
                            <td>3,2</td>
                            <td>12,8</td>
                        </tr>

                        <tr>
                            <td>LBН 13&nbsp;с крюками</td>
                            <td>5,4</td>
                            <td>21,6</td>
                        </tr>

                        <tr>
                            <td>LBН 16&nbsp;с крюками</td>
                            <td>8</td>
                            <td>32</td>
                        </tr>

                        <tr>
                            <td>LBE 8 с&nbsp;проушинами</td>
                            <td>2</td>
                            <td>8</td>
                        </tr>

                        <tr>
                            <td>LBE 10&nbsp;с&nbsp;проушинами</td>
                            <td>3,2</td>
                            <td>12,8</td>
                        </tr>

                        <tr>
                            <td>LBE 13&nbsp;с&nbsp;проушинами</td>
                            <td>5,4</td>
                            <td>21,6</td>
                        </tr>

                        <tr>
                            <td>LBE 16&nbsp;с&nbsp;проушинами</td>
                            <td>8</td>
                            <td>32</td>
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

export default Sredstva_krepleniya_gruzov_4;