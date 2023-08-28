import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_prochie_aksessuary_8.jpg"

const Aksessuary_2_8 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ФИКСАТОР МАГНИТНЫЙ СВАРОЧНЫЙ 50</h2>
                <p>Угольники магнитные сварочные предназначены для фиксации металлических изделий при сварке, сборке,
                    пайке различных конструкций.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p><b>Отличительные особенности:</b><br/>
                        легкие и простые в работе – заменяют тяжелые и неудобные зажимы и струбцины;<br/>
                        надежная фиксация деталей;<br/>
                        сокращают время и трудоемкость работ;<br/>
                        облегчают монтаж конструкций;<br/>
                        освобождают руки;<br/>
                        обеспечивают работы с различными металлическими деталями, в т.ч. трубами;<br/>
                        может применяться для разметки и клеймения<br/>
                    </p>
                </div>
                <p>
                    различных деталей;<br/>
                    быстрый сбор металлической стружки;<br/>
                    размагничивание инструмента;<br/>
                </p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_2_8;