import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_6_sredstva-krepleniya-gruzov.png"

const Sredstva_krepleniya_gruzov_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕМНИ ДЛЯ СТЯЖКИ ГРУЗА</h2>
                <p>Стяжные грузовые ремни - современные многооборотные средства крепления - предназначены для надежной
                    и быстрой фиксации различных грузов на всех видах транспорта:<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Допустимая рабочая нагрузка при прямом
                                        натяжении/рабочая нагрузка при обхвате
                                        груза</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Ширина
                                        ленты, мм</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Длина,
                                        м.</strong>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 25 J, 6 м, 1.0 т,
                            </td>
                            <td>
                                <p align="center">
                                    25
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 38-J,H= 6,0м, 3,0т. (1,5/3,0т)
                            </td>
                            <td>
                                38
                            </td>
                            <td>
                                <p align="center">
                                    6
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 38-J,H= 10,5м, 3,0т. (1,5/3,0т)
                            </td>
                            <td>
                                <p align="center">
                                    38
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10,5
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 50 J, 6 м, 5.0 т,
                            </td>
                            <td>
                                <p align="center">
                                    50
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 50А-2-JD,5т (2,5/5,0т)
                            </td>
                            <td>
                                50
                            </td>
                            <td>
                                <p align="center">
                                    10,5
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 75 J, 10,5 м, 7,5 т,
                            </td>
                            <td>
                                <p align="center">
                                    75
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10,5
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 75-2-JD, 10т (5,0/10т)
                            </td>
                            <td>
                                75
                            </td>
                            <td>
                                <p align="center">
                                    10,5
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Ремень стяжной 100 J, 10.5 м, 10.0 т,
                            </td>
                            <td>
                                <p align="center">
                                    100
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10,5
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

export default Sredstva_krepleniya_gruzov_6;