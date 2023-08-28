import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_lesa-stroitelnye_1.png"

const Lesa_stroitelnye_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЛЕСА СТРОИТЕЛЬНЫЕ ЛСПР-40</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Леса ЛСПР-40 представляют собой леса строительные приставные рамные, выполненные в соответствии с ГОСТ 27321-87 и предназначенные для отделочных и ремонтных работ на фасадных зданиях или каменной кладке.<br/>
                        Технические характеристики:<br/>
                        · Максимальная высота лесов — 40 м</p>
                </div>
                <p>·  Шаг яруса, м. — 2<br/>
                    · Шаг рам вдоль стены — 3 м;<br/>
                    · Ширина яруса (прохода) между стойками рам — 1 м<br/>
                    · Поверхностная нагрузка на настил — 200 Па<br/>
                    · Количество ярусов настилов одновременно укладываемых на леса — до 19 ярусов<br/>
                    · Масса лесов h=20 м., l=51 м. без настилов — 3300 кг<br/>
                    · Масса лесов h=20 м., l=51 м. с настилами на 2 яруса — 5130 кг</p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}
export default Lesa_stroitelnye_1;
