import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_prochie_aksessuary_4.jpg"

const Aksessuary_2_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>НАБОР ДЛЯ ЧИСТКИ МУНДШТУКОВ</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Набор предназначен для очистки мундштуков (сопел) горелок и резаков от брызг металла, окалины,
                        нагара, копоти и т. д., образующихся в процессе работы.<br/>
                        Длинна 80 мм
                    </p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_2_4;