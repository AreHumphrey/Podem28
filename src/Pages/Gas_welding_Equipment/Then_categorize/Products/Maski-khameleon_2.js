import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_maski_khameleon_2.jpg"

const Maski_khameleon_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МАСКА СВАРЩИКА ПОБЕДА С АСФ WH-ADF-9030G</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Габаритные размеры
                            </td>
                            <td>
                                110x90x10 мм
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

export default Maski_khameleon_2;