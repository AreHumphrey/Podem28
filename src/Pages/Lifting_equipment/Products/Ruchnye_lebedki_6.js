import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lebedka-ruchnaya_6.png"

const Ruchnye_lebedki_6 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕБЕДКА РЫЧАЖНАЯ ГАРАЖНАЯ SDB8020</h2>
                <p> Лебедка рычажная гаражная SDB8020 используется для транспортировки грузов по наклонной или гори-
                    зонтальной поверхности, а также для вытягивания застрявших транспортных средств. Представляет из
                    себя прочную металлическую конструкцию с рычагом-рукояткой, при помощи которого осуществляется
                    перемеще- ние груза. Данный ручной механизм позволяет производить работы в местах, где отсутствует
                    источник элек- троэнергии<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table width="" cellSpacing="0" cellPadding="3" border="1" align="center">
                        <tbody align="center">
                        <tr>
                            <td>
                                <p>
                                    <b>Модель</b>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b>Грузоподъемность, кг.</b>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b>Длина каната, м.</b>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <b>Вес, кг.</b>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                SDB8020 (одинарный храповый механизм)
                            </td>
                            <td>
                                <p>
                                    2000
                                </p>
                            </td>
                            <td>
                                <p>
                                    2,5
                                </p>
                            </td>
                            <td>
                                <p>
                                    2,7
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                SDB8020-1 (двойной храповый механизм)
                            </td>
                            <td>
                                <p>
                                    2000
                                </p>
                            </td>
                            <td>
                                <p>
                                    2,8
                                </p>
                            </td>
                            <td>
                                <p>
                                    2,8
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                SDB8041 (двойной храповый механизм)
                            </td>
                            <td>
                                <p>
                                    4000
                                </p>
                            </td>
                            <td>
                                <p>
                                    3
                                </p>
                            </td>
                            <td>
                                <p>
                                    5,2
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

export default Ruchnye_lebedki_6;