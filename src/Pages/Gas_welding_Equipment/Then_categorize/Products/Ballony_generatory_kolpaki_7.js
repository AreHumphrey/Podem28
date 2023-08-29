import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_ballony_generatory_kolpaki_7.jpg"

const Ballony_generatory_kolpaki_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>БАЛЛОН УГЛЕКИСЛОТНЫЙ 10Л</h2>

                <div className="container_foto">
                    <img src={img_3}></img>

                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Рабочий газ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    азот, аргон, кислород, углекислота
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Емкость, л
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    10
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

export default Ballony_generatory_kolpaki_7;