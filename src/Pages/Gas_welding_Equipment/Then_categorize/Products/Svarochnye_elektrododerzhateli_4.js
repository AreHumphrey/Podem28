import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_varochnye_elektrododerzhateli_4.jpg"

const Svarochnye_elektrododerzhateli_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЭЛЕКТРОДОДЕРЖАТЕЛЬ ЭД-40 "УНИВЕРСАЛ" (КОРД) (400А)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Масса, кг
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0.29
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Время замены электрода, сек
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    4
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Габаритные размеры: высота, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    85
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Габаритные размеры: длина, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    220
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Габаритные размеры: ширина, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    31
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр применяемых элекродов (max), мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0-10
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Диаметр применяемых элекродов (min), мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    2.0
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Наибольший сварочный ток при ПВ=35%, А
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    500
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Номинальный сварочный ток, А
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    400
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Продолжительность цикла сварки, мин
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    5
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Сечение жилы подсоединяемого сварочного кабеля (max), мм2
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    70
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Угол закрепления электрода без подгиба, с подгибом от 0 до 270 °
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0-270
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Усилие прижатия электрода, кгс
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    12.5-25
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Сечение жилы подсоединяемого сварочного кабеля (min), мм2
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    50
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

export default Svarochnye_elektrododerzhateli_4;