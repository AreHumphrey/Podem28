import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_shchitki_svarochnye_2.jpg"

const Shchitki_svarochnye_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЩИТОК НБТ ЕВРО</h2>
                <p><b>Щиток НБТ ЕВРО</b> предназначен для защиты лица работающих от воздействия механических частиц,
                    стружки,
                    окалин, абразивных остатков и др. при механической обработке деталей, зачистке поверхностей, вырезки
                    дефектных мест сварных швов шлифмашинами.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Корпус щитка отливается из прозрачного ударопрочного полистирола методом литья.<br/>

                        У <b>НБТ ЕВРО</b> отличный дизайн. Высота стекла 185 см. Щиток снабжен наголовным креплением, которое
                        отливается из полиэтилена на литьевых станках. Наголовное крепление обеспечивает пределы
                        регулирования охвата головы и крепится к корпусу гайко-барашками, которые обеспечивают
                        перемещение и 3 фиксации корпуса из закрытого положения в открытое и обратно.</p>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Shchitki_svarochnye_2;