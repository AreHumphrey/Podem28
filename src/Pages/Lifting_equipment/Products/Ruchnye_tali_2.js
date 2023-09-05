import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_ruchnye-tali_2.png"

const Ruchnye_tali_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТАЛЬ РУЧНАЯ ЦЕПНАЯ HSZ-E (КИТАЙ)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td align="center" valign="middle">
                                <b>Грузоподъемность, т</b>
                            </td>
                            <td align="center" valign="middle">
                                <b>Высота подъема, м</b>
                            </td>
                        </tr>

                        <tr>
                            <td sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                        </tr>
                        <tr>
                            <td sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td sdval="6" sdnum="1049;">
                                6
                            </td>
                        </tr>
                        <tr>
                            <td sdval="1" sdnum="1049;">
                                1
                            </td>
                            <td sdval="9" sdnum="1049;">
                                9
                            </td>
                        </tr>


                        <tr>
                            <td sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                        </tr>
                        <tr>
                            <td sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td sdval="6" sdnum="1049;">
                                6
                            </td>
                        </tr>
                        <tr>
                            <td sdval="2" sdnum="1049;">
                                2
                            </td>
                            <td sdval="9" sdnum="1049;">
                                9
                            </td>
                        </tr>

                        <tr>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                        </tr>
                        <tr>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td sdval="6" sdnum="1049;">
                                6
                            </td>
                        </tr>
                        <tr>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                            <td sdval="9" sdnum="1049;">
                                9
                            </td>
                        </tr>

                        <tr>
                            <td sdval="6" sdnum="1049;">
                                5
                            </td>
                            <td sdval="3" sdnum="1049;">
                                3
                            </td>
                        </tr>
                        <tr>
                            <td sdval="6" sdnum="1049;">
                                5
                            </td>
                            <td sdval="6" sdnum="1049;">
                                6
                            </td>
                        </tr>
                        <tr>
                            <td sdval="6" sdnum="1049;">
                                5
                            </td>
                            <td sdval="9" sdnum="1049;">
                                9
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

export default Ruchnye_tali_2;