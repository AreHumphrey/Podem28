import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_5_telezhki-gidravlicheskie.png"

const Telezhki_5 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ТЕЛЕЖКИ С СЕТЧАТЫМИ БОРТАМИ</h2>

                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Платформенная тележка с бортами подойдет вам, если вы планируете перевозку мелких и неустойчивых грузов. Сетчатые борта защитят груз от падения, а двойные поручни помогут с осторожностью перевезти даже неустойчивый и хрупкий груз. Купить платформенную тележку с бортами можно в одной из семи вариаций, которые отличаются размерами – от 500х800 мм до 800х1400 мм. Высота бортов у всех моделей одинаковая – 500 мм. Диаметр обрезиненных колес в изначальной комплектации составляет 160 мм, однако возможно заменить их на колеса диаметром 200 мм. Правильный выбор диаметра колес влияет на подвижность и проходимость тележки.</p>
                </div>




            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Telezhki_5;