import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_maski_khameleon_1.jpg"

const Maski_khameleon_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СКР-ВСТАВКА KDP16A (200А)</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p><b>Характеристики:</b>
                        Размер светофильтра - 110х90х10 мм<br/>
                        Размер смотрового окна - 90х30 мм<br/>
                        Модель светофильтра - WH-9030G<br/>
                        Скорость затемнения - 1/20000, с<br/>
                        Время выключения затемнения - 0.1- 1.0 с<br/>
                        плавноСтепень затемнения - 9-13 DIN<br/>
                        Режим шлифовки - ДА<br/>
                        Степень затемнения в режиме шлифовки - 4 DIN<br/>
                        Регулировка чувствительности - плавная<br/>
                        Количество сенсоров - 2<br/>
                        Защита от УФ и ИК-излучения - до 15 DIN (постоянно)<br/>
                        Комбинированное питание - солнечная батарея и литиевые элементы питания</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Maski_khameleon_1;