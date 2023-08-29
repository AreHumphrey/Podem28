import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gorelki_gazovozdushnye_9.jpg"

const Gorelki_gazovozdushnye_9 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА ПРОПАНО-ВОЗДУШНАЯ ГВП AT-TRONIC</h2>
                <p>Горелка пропано-воздушная ГВП AT-TRONIC предназначена для нагрева деталей, пайки кабелей и опрессовки
                    соединительных муфт при кабельно-гидроизоляционных работах, пайки тугоплавкими и серебряными
                    припоями, для проведения кровельных работ, очистки металлических поверхностей от старой краски,
                    окалины и ржавчины, отогревания замерзших водопроводных труб и прочих бытовых хозяйственных
                    работ.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Рабочий газ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    пропан+воздух
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Горючий газ
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    пропан
                                </p>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Вес
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    525 г
                                </p>
                                <br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Особенности:<br/>
                    пьезо-поджиг;<br/>
                    прочная конструкция пластик+металл;<br/>
                    удобная рукоятка специальной формы;<br/>
                    плавная регулировка расхода газа вентилем;<br/>
                    образование мягкого пламени;<br/>
                    подходит для стандартного пропан-бутанового баллона;<br/>
                    ниппель 6/9 для подключения баллонов через рукав;<br/>
                </p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Gorelki_gazovozdushnye_9;