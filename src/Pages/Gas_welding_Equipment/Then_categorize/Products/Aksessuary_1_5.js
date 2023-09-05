import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_aksessuary_1_5.jpg"

const Aksessuary_1_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>МАРКЕР EDDING E-790</h2>
                <p>Корпус экономичного маркера Edding изготовлен из прочного пластика. <b>Маркер Edding-790</b> имеет
                    круглый
                    (пулевидный) наконечник. Универсальный лаковый маркер Edding 790 предназначен для нанесения
                    промышленной маркировки в индустриальных условиях Чернила Edding содержат высокую концентрацию
                    пигмента, что позволяет им хорошо ложиться на гладкие и шероховатые поверхности, чернила этого
                    маркера светостойкие. Непрозрачные лаковые чернила позволяют делать хорошо заметные надписи густым
                    плотным слоем даже на темных поверхностях. Маркер Edding 790 хорошо зарекомендовал себя в работе при
                    перепадах температур от —15 до +30.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr>
                            <td>
                                <p>
                                    Толщина линий, мм
                                </p>
                                <br/>
                            </td>
                            <td>
                                <p>
                                    2-4
                                </p>
                                <br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <b>Применение</b><br/>

                    - для маркировки в промышленности при инвентаризации для оформительских робот и хобби.
                    Индустриальный лаковый<br/>

                    Промышленный лаковый маркер Е-790 также может использоваться как универсальный, например, при
                    нанесении меток на разнородные материалы. При маркировке изделий из резины, пластика, стекла,
                    металла, кабеля, проводов, при нанесении маркировки на товары, нет необходимости использовать разные
                    маркеры, можно обойтись одним — Edding 790. Идеально подходит для маркировки грузов,
                    приборостроения, технологической маркировки.<br/>

                    Кроме того, маркер Edding 790 широко используется для декоративных работ дизайнерами и оформителями
                    интерьеров. Благодаря разнообразной палитре цветов и свойствам красящего вещества используется в
                    витражных работах, росписи по дереву и керамике, а также для других интерьерных работ.<br/>
                </p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_1_5;