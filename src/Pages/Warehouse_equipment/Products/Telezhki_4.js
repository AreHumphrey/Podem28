import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_4_telezhki-gidravlicheskie.png"

const Telezhki_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКА ПЛАТФОРМЕННАЯ ТПЛ</h2>

                <div className="container_foto">
                    <img src={img_3}></img>
                    <p> Платформенные тележки предназначены для перевозки разногабаритных товаров. Конструктивными особенностями являются: закругленные края платформы, металлический настил.<br/>

                        Комплектуются различными типами колес: с литыми резиновыми ободами, пневматическими, протекторными ободами повышенной грузоподъемностью, нейлоновыми с двойным подшипником для тяжелых условий эксплуатации.<br/>

                        Изделия окрашиваются порошковой коррозионностойкой краской.</p>
                </div>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Артикул
                                </p>
                            </td>
                            <td>
                                <p>
                                    Размер платформы (мм х мм)
                                </p>
                            </td>
                            <td>
                                <p>
                                    Диаметр колеса (мм)
                                </p>
                            </td>
                            <td>
                                <p>
                                    Грузоподъёмность (кг.)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ТПЛ 5х8-1Р 160-Ч
                                </p>
                            </td>
                            <td>
                                <p>
                                    500х800
                                </p>
                            </td>
                            <td>
                                <p>
                                    160
                                </p>
                            </td>
                            <td>
                                <p>
                                    500
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ТПЛ 6х9-1Р 160-Ч
                                </p>
                            </td>
                            <td>
                                <p>
                                    600х900
                                </p>
                            </td>
                            <td>
                                <p>
                                    160
                                </p>
                            </td>
                            <td>
                                <p>
                                    500
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ТПЛ 6х9-1Р 200-Ч
                                </p>
                            </td>
                            <td>
                                <p>
                                    600х900
                                </p>
                            </td>
                            <td>
                                <p>
                                    200
                                </p>
                            </td>
                            <td>
                                <p>
                                    600
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ТПЛ 7х10-1Р 200-Ч
                                </p>
                            </td>
                            <td>
                                <p>
                                    700х1000
                                </p>
                            </td>
                            <td>
                                <p>
                                    200
                                </p>
                            </td>
                            <td>
                                <p>
                                    600
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ТПЛ 7х12-1Р 200-Ч
                                </p>
                            </td>
                            <td>
                                <p>
                                    700х1200
                                </p>
                            </td>
                            <td>
                                <p>
                                    200
                                </p>
                            </td>
                            <td>
                                <p>
                                    600
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    ТПЛ 8х14-1Р 200-Ч
                                </p>
                            </td>
                            <td>
                                <p>
                                    800х1400
                                </p>
                            </td>
                            <td>
                                <p>
                                    200
                                </p>
                            </td>
                            <td>
                                <p>
                                    700
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

export default Telezhki_4;