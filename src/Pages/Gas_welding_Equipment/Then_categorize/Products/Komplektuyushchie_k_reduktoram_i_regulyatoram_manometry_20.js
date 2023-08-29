import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_20.png"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_20 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МАНОМЕТР ГАЗОВЫЙ 1.0МПА</h2>
                <p>Манометры — приборы с измерением от 0,06 до 1000 МПа, применяются для контроля и регулировки
                    давления. Как правило, они измеряют избыточное давление. Что касается маркировки манометров, то
                    различают манометры с голубым цветом корпуса, которые используют для измерения давления кислорода, с
                    желтым – для измерения давления аммиака, белый – ацетилена, темно-зеленый-водорода,
                    серовато-зеленый-хлора.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1">
                        <p><b>Технические характеристики</b></p>
                        <tbody>
                        <tr>
                            <td>
                                Класс точности
                            </td>
                            <td>
                                2,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Рабочий газ&nbsp;
                            </td>
                            <td>
                                углекислота
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Максимальное давление, МПа&nbsp;
                            </td>
                            <td>
                                1,0
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Присоединительная резьба
                            </td>
                            <td>
                                &nbsp;М12х1,5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Масса, кг
                            </td>
                            <td>
                                0,15
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

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_20;