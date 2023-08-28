import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_shchitki_svarochnye_3.jpg"

const Shchitki_svarochnye_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЩИТОК СВАРЩИКА ЕПК-АС</h2>
                <p><b>Щиток для сварщика ЕПК-АС</b>, предназначен для защиты сварщика при проведении сварочных работ. </p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Размеры светофильтра, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    110х90 мм.
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Темп-а эксп.
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    -20°С до +70°С
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Размер смотрового окна
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    100×49 мм
                                </p>
                                <br/>
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

export default Shchitki_svarochnye_3;