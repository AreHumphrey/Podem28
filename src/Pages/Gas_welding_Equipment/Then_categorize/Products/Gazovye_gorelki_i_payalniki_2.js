import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_gazovye_gorelki_i_payalniki_2.jpg"

const Gazovye_gorelki_i_payalniki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГОРЕЛКА ПАЯЛЬНАЯ ГВ-900</h2>
                <p>Горелка газовая под баллон типа ГВ-900 предназначена для нагрева и пайки деталей, кабелей,
                    отогревания замерзших труб, работы с тугоплавкими и серебряными припоями и прочих бытовых
                    хозяйственных работ. Удобна для использования в местах, где нет электроснабжения, так как она
                    работает от одноразового баллончика с цанговым зажимом (пропан-бутан, изобутан)</p>
                <div className="container_foto">
                    <img src={img_3}></img>


                </div>


            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Gazovye_gorelki_i_payalniki_2;