import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2.jpg"

const Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ОЧКИ ЗАЩИТНЫЕ ПРОЗРАЧНЫЕ «ПАНОРАМА»</h2>

                <p>Очки защитные закрытого типа "Исток" панорамные с непрямой вентиляцией. Маркировка линзы 2-1.2 IS 1
                    BT9 EAC</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Применяются для надежной защиты глаз от механических повреждений стружками и осколками,
                        отлетающими при станочной обработке металлов и других материалов, частиц камня, золы, угля,
                        брызг строительных растворов, при работе с пневмо и электроинструментом, тяжёлых условиях труда
                        металлургической, машиностроительной и других отрослях народно-хозяйственного комплекса.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_golovy_organov_zreniya_i_dykhaniya_2;