import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_3_mini-tali-elektricheskie.png"

const Mini_tali_elektricheskie_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКА ДЛЯ МИНИ ТАЛИ С ЭЛЕКТРОПРИВО- ДОМ ТИП TE1</h2>
                <p>Тележка TE1 предназначена для комплектации мини электроталей МЕН, дополняя их функцией передвижения
                    по балке. Снабжена специальным штекером для соединения с электроталью, в результате чего управление
                    талью и тележкой происходит с одного пульта.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p align="center">
                                    <strong>Напряжение</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <b>Мощность, Вт</b>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Фактическая нагрузка, т</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Габаритные размеры, мм</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Вес, кг</strong>
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    <strong>Ширина балки, мм</strong>
                                </p>
                            </td>


                        </tr>
                        <tr>
                            <td>
                                230 Вольт ~ 50 Гц
                            </td>
                            <td>
                                <p align="center">
                                    300
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    680х440х230
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    14,4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    68-110
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

export default Mini_tali_elektricheskie_3;