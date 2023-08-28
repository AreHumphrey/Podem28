import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_1_badi-dlya-podachi-betona.jpg"

const Badi_dlya_podachi_betona_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЯЩИКИ ПОД РАСТВОР 0,25 - 1,5 КУБ.</h2>
                    <img src={img_3}></img>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}
export default Badi_dlya_podachi_betona_1;
