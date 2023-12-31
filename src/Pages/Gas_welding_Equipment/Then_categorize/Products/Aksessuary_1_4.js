import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_aksessuary_1_4.jpg"

const Aksessuary_1_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>MARKAL DURA-INK 15</h2>
                <p>Мгновенно сохнущий фетровый маркер <b>Markal Dura-Ink 15</b> с перманентными чернилами высоко ценим за
                    качественную маркировку. Повсеместно применяется на рабочих местах, как на производстве, так и в
                    отделах складирования и отгрузки продукции. Снабжен наконечником высокого качества и стойкими
                    чернилами. Является идеальным средством маркировки практически в любых условиях.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>
                        <b>Особенности и преимущества</b><br/>

                        водостойкие чернила промышленного качества не размазываются и гарантируют долговечные, хорошо сохраняющиеся надписи<br/>
                        очень прочный наконечник предохраняет от подтеков и размазывания<br/>
                        прочный пластмассовый корпус и металлический наконечник защищают от повреждений при использовании на производстве<br/>
                        благодаря практичному колпачку с зажимом маркер не скатывается с рабочих поверхностей<br/>
                        отсутствие ксилола в составе снижает вред для здоровья
                    </p>
                </div>
               <p>
                   <b>Применение</b><br/>

                   Металлообработка<br/>
                   Строительство<br/>
                   Автомобили<br/>
                   Упаковочные материалы<br/>
                   Текстильная промышленность<br/>
                   Авиация и авиастроение<br/>
                   <b>Тип поверхности</b><br/>
                   Металлы<br/>
                   Картон<br/>
                   Стекло<br/>
                   Трубы различного диаметра и назначения<br/>
                   Пластмасса<br/>
                   <b>Дополнительные сведения</b><br/>
                   Тонкий наконечник конической формы, толщина линии 1,5 мм
               </p>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_1_4;