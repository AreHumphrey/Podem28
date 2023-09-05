import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_2_telezhki-gidravlicheskie.png"

const Telezhki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКА ДВУХКОЛЕСНАЯ Р-1</h2>

                <div className="container_foto">
                    <img src={img_3}></img>
                    <p> Р-3; P-4; P-5 - грузовые двухколесные консольные тележки с продольными силовыми желобами. Данное
                        техническое решение уникально! Позволяет, без деформации конструкции, отрывать от горизонтальной
                        поверхности грузы весом до 350 кг. Дополнительное приобретение грузовых колес, продлит срок
                        эксплуатации и максимально облегчит физические затраты при перемещении грузов. Попытки
                        сэкономить на любом узле приводит к непоправимому ухудшению эксплуатационных качеств.
                        Остерегайтесь подделок!</p>
                </div>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Артикул&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    ширина мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    длина мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    высота без колёс мм&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    высота с колёсами мм&nbsp;&nbsp;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Р - 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    350&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    312&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    1200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </td>
                            <td>
                                <p>
                                    1350
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

export default Telezhki_2;