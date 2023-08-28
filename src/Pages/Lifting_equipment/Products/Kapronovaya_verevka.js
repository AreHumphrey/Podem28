import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_kanaty_i_verevki_1.png"

const Kanaty_i_verevki_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ФАЛ КАПРОНОВЫЙ</h2>
                <p>Шнур (фал) — плетеное изделие многократного применения. В отличие от веревок и шпагатов, шнуры
                    предназначены для более ответственных целей, имеют повышенный эксплуатационные характеристики.
                    Применяются в грузоподъемных операциях, при изготовлении различного спортивного инвентаря, в
                    туристическом снаряжении, яхтинге, спелеологии, при буксировке автомобилей.<br/></p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table border="1" cellSpacing="0" cellPadding="3">
                        <tbody>
                        <tr>
                            <td>
                                Фал капроновый
                            </td>
                            <td>
                                Разрывная нагрузка, кгс
                            </td>
                            <td>
                                Намотка, м
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Диаметр 5.0 мм
                            </td>
                            <td>
                                250
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 6.0 мм (мягкий)
                            </td>
                            <td>
                                480
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 6.0 мм
                            </td>
                            <td>
                                550
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 8.0 мм
                            </td>
                            <td>
                                1000
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 10.0 мм
                            </td>
                            <td>
                                2100
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 12.0 мм
                            </td>
                            <td>
                                2800
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 14.0 мм
                            </td>
                            <td>
                                3400
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 16.0 мм
                            </td>
                            <td>
                                4200
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 18.0 мм
                            </td>
                            <td>
                                4700
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 19.0 мм
                            </td>
                            <td>
                                4900
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Диаметр 20.0 мм
                            </td>
                            <td>
                                5200
                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Веревка джутовая 8,0 мм
                            </td>
                            <td>

                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Веревка джутовая 10,0 мм
                            </td>
                            <td>

                            </td>
                            <td>
                                30; 50; 100
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Веревка джутовая 12,0 мм
                            </td>
                            <td>

                            </td>
                            <td>
                                30; 50; 100
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

export default Kanaty_i_verevki_1;