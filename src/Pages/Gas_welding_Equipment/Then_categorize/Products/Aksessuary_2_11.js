import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_prochie_aksessuary_11.jpg"

const Aksessuary_2_11 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ФИКСАТОР МАГНИТНЫЙ СВАРОЧНЫЙ МФ 302</h2>
                <p>Предназначен для надежной, точной фиксации металлических деталей, изделий при сварочных и иных
                    монтажных работах.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table>
                        <thead>
                        <tr>
                            <th>Серия</th>
                            <th>Габаритные размеры</th>
                            <th>Вес, г</th>
                            <th>Цвет по RAL</th>
                            <th>Возможные углы</th>
                            <th>Усилие</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>МФ 302</td>
                            <td> 150х110х20</td>
                            <td>630</td>
                            <td>зеленый 6018</td>
                            <td>45, 90, 135</td>
                            <td>25 кг</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Заменяет струбцины, зажимы, кондукторы, обеспечивает "наличие третьей руки", позволяя тем самым
                    значительно более быстрый, удобный, точный производственный процесс.<br/>

                    Возможность создать варианты наклона по градусам 45, 90, 135

                    Сокращает время монтажа, сборки конечного изделия.

                    Изготовлено в России, на собственном производстве ООО «ПО Асанта» в Московской области.<br/>

                    Корпус из горячекатаной стали (ГОСТ 19903-74) толщиной 2мм, с порошковой окраской, ферритовый магнит
                    с повышенными качествами сцепления в корпусе из ПНД черного цвета. Заклепки полупустотелые
                    оцинкованные диаметром 4 мм.

                    Усилие на отрыв 25 кг согласно протоколу испытания.

                    Выпускается в защитной блистерной упаковке собственного производства по одной штуке.<br/>

                    Все изделия имеют сертификат соответствия по РОСТЕСТ</p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_2_11;