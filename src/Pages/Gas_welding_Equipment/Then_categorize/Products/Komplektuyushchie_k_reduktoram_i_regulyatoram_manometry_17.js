import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_17.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_17 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МАНОМЕТР КИСЛОРОДНЫЙ 2.5 МПА</h2>
                <p>Манометр кислородный - измерительный прибор избыточного давления предназначен для газообразных и
                    жидких некристаллизующихся и неагрессивных сред. Измеряет давление до 2.5 атмосфер.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                Регулируемый газ
                            </td>
                            <td>
                                кислород
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Корпус
                            </td>
                            <td>
                                сталь
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Механизм
                            </td>
                            <td>
                                латунь
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр манометра, мм
                            </td>
                            <td>
                                50
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Вес, кг
                            </td>
                            <td>
                                0.1
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

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_17;