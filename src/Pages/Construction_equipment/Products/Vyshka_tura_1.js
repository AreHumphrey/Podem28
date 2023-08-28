import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_vyshka-tura_1.png"
import img_3_1 from "../../../Components/Img/img_vyshka-tura_2.png"
import img_3_2 from "../../../Components/Img/img_vyshka-tura_3.png"

const Vyshka_tura_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ВЫШКА ТУРА ВСП 250</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Передвижная вышка представляет собой пространственную конструкцию башенного типа из плоских
                        лестниц, имеющих три ступени.
                        Параллельные лестницы устанавливаются в патрубки гантелей и образуют секцию.<br/></p>
                </div>
                <p>Для обеспечения жесткости самой конструкции секции соединяются между собой стяжками, которые крепятся
                    на замках лестниц и гантелей. Нижние секции устанавливаются на две базы, которые соединены между
                    собой объемной диагональю.<br/>

                    Базы имеют четыре винтовые опоры и четыре колеса. Колеса служат для передвижения вышки. Винтовые
                    опоры компенсируют неровности опорной поверхности. Вышка с помощью винтовых опор должна быть
                    установлена так, чтобы колеса не касались опорной поверхности на 2 мм.<br/>

                    Вышка имеет комплект настилов, который состоит из настила сплошного и настила с люком. Рабочая
                    площадка оборудована настилами, перекладинами ограждения и боковыми фанерными ограждениями настилов.<br/>

                    Для обеспечения устойчивости вышка снабжена стабилизаторами, которые крепятся хомутами к основной
                    конструкции вышки.<br/>

                    Элементы вышки окрашены порошковой полимерной краской, обеспечивающей долговечное и стойкое
                    покрытие. Вышка соответствует всем нормативным документам, имеет сертификат соответствия.<br/>

                    Полная инструкция по монтажу, эксплуатации, демонтажу приведена в паспорте на вышку. Вышеприведенная
                    информация является ознакомительной.<br/></p>
                <div className="container_foto">
                    <img src={img_3_1}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="5">
                                <p align="center">
                                    <strong>СТРОИТЕЛЬНАЯ ВЫШКА ВСП-250/0.7 рабочая площадка 0,7×1,6 Россия </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Комплектация
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Достигаемая Высота, м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Общая высота, м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Высота до настила, м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Вес, кг
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1 секция+б.блок
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    80
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    2 секции+б.блок
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2.7
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    98
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    3 секции+б.блок
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    116
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    4 секции+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.1
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    134
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    5 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6.3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    152
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <p align="center">
                                    * Необходима комплектация стабилизаторами
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="container_foto">
                    <img src={img_3_2}></img>
                    <table cellSpacing="0" cellPadding="3" width="" align="center" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="5">
                                <p align="center">
                                    <strong>СТРОИТЕЛЬНАЯ ВЫШКА ВСП-250/1.2 рабочая площадка 1,2×2,0 Россия </strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Комплектация
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Достигаемая Высота, м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Общая высота, м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Высота до настила, м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Вес, кг
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    1 секция+б.блок
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    117.7
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    2 секции+б.блок
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    2.7
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    141.9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    3 секции+б.блок
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    3.9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    166.1
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    4 секции+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    5.1
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    190.3
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    5 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    6.3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    214.5
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    6 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    7.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    238.7
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    7 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    10
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    8.7
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    262.9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    8 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11.2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    9.9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    287.1
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    9 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    11.1
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    311.3
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    10 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    14.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13.6
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    12.3
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    335.5
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    11 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    15.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    14.8
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    13.5
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    359.7
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    12 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    17
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    16
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    14.7
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    383.9
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    13 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    18,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    17,2
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    15.9
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    408.1
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    14 секций+б.блок*
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    19.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    18.4
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    17.1
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    432.3
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="5">
                                <p align="center">
                                    * Необходима комплектация стабилизаторами
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
export default Vyshka_tura_1;
