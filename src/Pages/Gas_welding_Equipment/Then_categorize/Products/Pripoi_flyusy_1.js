import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_1_pripoi_flyusy.jpg"

const Pripoi_flyusy_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТРАВИЛЬНАЯ ПАСТА ESAB STAIN CLEAN</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Новая <b>травильная паста StainClean</b> предназначена для восстановления коррозионностойких свойств
                        нержавеющих сталей, изменивших свой цвет и потерявших хром в результате сварки. Она превосходит
                        по своим свойствам обычные травильные пасты. Благодаря специальному хим.составу и желеобразной
                        консистенции её очень легко использовать. Паста обеспечивает высокую чистоту и прекрасный
                        внешний вид шва. Stain Clean состоит из азотной (макс.20%), серной (макс. 10%) и плавиковой
                        (макс.5%) кислот, нерастворимых в воде сложных фторидных структур, разбавленных водой до 100%. В
                        процессе производства обеспечивается желеобразная консистенция что обеспечивает хорошую клейкую
                        способность и поэтому паста может применяться на вертикальных поверхностях и потолке без особого
                        риска . Травильная паста Stainclean Green с полностью новой формулой. Паста фактически свободна
                        от формирования ядовитых, азотных газов.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Pripoi_flyusy_1;