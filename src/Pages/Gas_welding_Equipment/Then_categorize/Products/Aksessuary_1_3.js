import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_aksessuary_1_3.jpg"

const Aksessuary_1_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>MARKAL WS 3/8" PAINTSTIK</h2>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>белый, красный
                        105ммх Ø 11мм, легкосмываемый водораств.маркер, упак.12шт.</p>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Aksessuary_1_3;