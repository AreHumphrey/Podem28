import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_varochnye_elektrododerzhateli_1.jpg"

const Svarochnye_elektrododerzhateli_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ЭЛЕКТРОДОДЕРЖАТЕЛЬ ДОКА LXEA 002K 500A</h2>
                <p><b>Электрододержатель ДОКА LXEA002 </b>предназначен для ручной дуговой сварки (ММА). Используется для
                    фиксации электрода и подвода к нему сварочного тока величиной до 500А.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>
                        Отлично подойдет как начинающим любителям, так и сварщикам-профессионалам для успешного
                        выполнения любых задач. Очень легок и удобен в работе, в то же время обладает прочной
                        конструкцией. Позволяет жестко фиксировать электрод, выдерживает высокие механические и тепловые
                        нагрузки. Токоподводящие детали изготавлены из меди и латуни. Изолирующие поверхности -
                        высококачественная пластмасса с низким коэффициентом теплопроводности.
                    </p>
                </div>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Svarochnye_elektrododerzhateli_1;