import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sredstva_zashchity_ruk_i_nog_7.jpg"

const Sredstva_zashchity_ruk_i_nog_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КРАГИ СПИЛКОВЫЕ СИНИЕ УСИЛ. ПАЛ.</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Отличные краги высокого качества, на х/б подкладке, кисть дополнительно утеплена флисом.<br/>

                        Мягкие синие спилковые краги придутся по душе в первую очередь сварщикам, работающим на
                        полуавтомате. В них удобно манипулировать горелкой и нажимать кнопку подачи проволоки.</p>
                </div>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sredstva_zashchity_ruk_i_nog_7;