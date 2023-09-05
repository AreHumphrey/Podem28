import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_2_provoloka_sploshnogo_secheniya.jpg"

const Provoloka_sploshnogo_secheniya_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПРОВОЛОКА СВАРОЧНАЯ ОМЕДНЕННАЯ G3SI1</h2>
                <p><b>Сварочная омедненная проволока СВ08Г2С-О</b> предназначена для полуавтоматической и механизированной
                    сварки</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>
                <div className="table-container">
                    <table className="table" border="1">
                    <p><b>Химический состав %</b></p>
                    <tbody>
                    <tr>
                        <td>
                            C
                        </td>
                        <td>
                            Mn
                        </td>
                        <td>
                            Si
                        </td>
                        <td>
                            P
                        </td>
                        <td>
                            S
                        </td>
                        <td>
                            Cr
                        </td>
                        <td>
                            Ni
                        </td>
                    </tr>
                    <tr>
                        <td>
                            0,05-0,11
                        </td>
                        <td>
                            1,8-2,1
                        </td>
                        <td>
                            0,7-0,95
                        </td>
                        <td>
                            &lt; 0,03
                        </td>
                        <td>
                            &lt; 0,025
                        </td>
                        <td>
                            &lt; 0,2
                        </td>
                        <td>
                            &lt; 0,25
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
                <p><b>Механические свойства наплавленного металла</b></p>
                <div className="table-container">
                    <table className="table" border="1">
                    <tbody>
                    <tr>
                        <td>
                            <p>
                                Ударная вязкость
                            </p>
                            <p>
                                при -40°С
                            </p>
                        </td>
                        <td>
                            <p>
                                Прочность
                            </p>
                            <p>
                                на разрыв
                            </p>
                        </td>
                        <td>
                            <p>
                                Предел
                            </p>
                            <p>
                                текучести
                            </p>
                        </td>
                        <td>
                            <p>
                                Относительное
                            </p>
                            <p>
                                удлинение
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            &lt; 47 Дж
                        </td>
                        <td>
                            530-680 Н/мм2
                        </td>
                        <td>
                            &lt; 460 Н/мм2
                        </td>
                        <td>
                            &lt; 20 %
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </div>

                <p><b>Упаковочные данные<br/></b></p>
               <p>- Прочная картонная коробка<br/>

                - Катушка с проволокой герметично упакована в плотный полиэтиленовый пакет<br/>

                - Пакет селикогеля внутри для защиты от воздействия атмосферной влаги<br/></p>
                <div className="table-container">
                    <table className="table" border="1">
                    <tbody>
                    <tr>
                        <td>
                            <p>
                                Металлическая
                            </p>
                            <p>
                                катушка
                            </p>
                        </td>
                        <td>
                            <p>
                                Пластмассовая
                            </p>
                            <p>
                                катушка
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                BS 300
                            </p>
                            <p>
                                Проволока&nbsp;Ø:&nbsp;0,8 мм; 1 мм;&nbsp;1,2 мм; 1,6 мм
                            </p>
                            <p>
                                Вес: 18 кг
                            </p>
                        </td>
                        <td>
                            <p>
                                D 200
                            </p>
                            <p>
                                Проволока&nbsp;Ø:&nbsp;0,8 мм; 1 мм;&nbsp;1,2 мм
                            </p>
                            <p>
                                Вес: 5 кг
                            </p>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                <p>
                    <b>Стандарты:<br/></b>

                    - ГОСТ 2246-70 СВ08Г2С<br/>

                    - AWS A5.18-93<br/>

                    - ER 70 S-6<br/>

                    - ISO 14341-A<br/>

                    - G 46 4 M G4Si1<br/>
                </p>


            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Provoloka_sploshnogo_secheniya_2;