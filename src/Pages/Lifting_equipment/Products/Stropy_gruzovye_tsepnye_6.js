import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_5_stropy-gruzovye-tsepnye.png"

const Stropy_gruzovye_tsepnye_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>С ДВУМЯ ЗАМКНУТЫМИ ВЕТВЯМИ</h2>
                <p>Цепные стропы, собранные из комплектующих 8кл. прочности произведенными немецкой компании D.H.A. – это новое поколение устройств для подъема груза.
                    Сборка цепных строп происходит без применения сварки, простым соединением элементов.
                    Высочайшая прочность 8кл, позволяет использовать данный вид строп в самых тяжелых условиях, в которых другие виды строп очень быстро приходят в негодность.<br/>
                    - стандартно снабжены крюками.<br/>
                    - на заказ также концевики: скобы, захваты для металла, крюки с предохранителем, крюки поворотные самозажимные и т.д.<br/>
                    - коэффициент запаса прочности 5:1.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table className="brd" cellSpacing="0" cellPadding="3" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <strong>Грузоподъем, т</strong>
                            </td>
                            <td>
                                1,0
                            </td>
                            <td>
                                1,6
                            </td>
                            <td>
                                2,0
                            </td>
                            <td>
                                2,5
                            </td>
                            <td>
                                3,2
                            </td>
                            <td>
                                5,0
                            </td>
                            <td>
                                6,3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Цепь, мм </b>
                            </td>
                            <td>
                                8х23
                            </td>
                            <td>
                                9х27
                            </td>
                            <td>
                                11х31
                            </td>
                            <td>
                                13х36
                            </td>
                            <td>
                                13х36
                            </td>
                            <td>
                                16х44
                            </td>
                            <td>
                                19х57
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

export default Stropy_gruzovye_tsepnye_6;