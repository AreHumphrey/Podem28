import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_4.jpg"

const Rezaki_gazovye_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕЗАК ПРОПАНОВЫЙ Р3П-32</h2>
                <p>Резак газокислородный трехтрубный Р3П-32 предназначен для ручной газокислородной резки (раскроя)
                    листового и сортового металла из низкоуглеродистых сталей толщиной до 300 мм. Конструкция резака
                    позволяет резать с использованием как ацетилена, так и пропан-бутановой смеси путем простой замены
                    режущего мундштука.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Масса комплекта, кг
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    0.70
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Толщина разрезаемой стали, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    До 300
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Длина, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    535
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Комплектация<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Мундштук внутренний №  1, 2, 3. Мундштук наружный №1.
                                    <br/>
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Присоединительные размеры<br/>
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    Ниппель универсальный d6/9<br/>
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

export default Rezaki_gazovye_4;