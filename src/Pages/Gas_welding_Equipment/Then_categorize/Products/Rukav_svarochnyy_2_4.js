import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_rezaki_gazovye_2_4.jpg"

const Rukav_svarochnyy_2_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РУКАВ ГАЗОВЫЙ Ø 6,3 ММ (СИНИЙ)</h2>

                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Рукав предназначен для подвода кислорода,
                        горючих газов и жидкостей к горелке или резаку.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Rukav_svarochnyy_2_4;