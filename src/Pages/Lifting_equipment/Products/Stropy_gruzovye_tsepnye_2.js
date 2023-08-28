import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_stropy-gruzovye-tsepnye.png"

const Stropy_gruzovye_tsepnye_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СТРОП ЦЕПНОЙ ОДНОВЕТВЕВОЙ</h2>
                <p>Цепные стропы, собранные из комплектующих 8кл. прочности произведенными немецкой компании D.H.A. –это
                    новое поколение устройств для подъема груза.
                    Сборка цепных строп происходит без применения сварки, простым соединением элементов.
                    Высочайшая прочность 8кл, позволяет использовать данный вид строп в самых тяжелых условиях, в
                    которых другие виды строп очень быстро приходят в негодность.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Г/п, т</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>1,0</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>2,0</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>3,0</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>5,0</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>8,0</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>12,5</strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Цепь, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>6х18</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>8х24</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>10х30</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>13х39</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>16х48</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>20х60</strong>
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

export default Stropy_gruzovye_tsepnye_2;