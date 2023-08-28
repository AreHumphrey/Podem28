import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_sprei_aerozoli_2.jpg"

const Sprei_aerozoli_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>СПРЕЙ BINZEL</h2>
                <p><b>Спрей Binzel</b> - защита сварочной поверхности от налипания брызг</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Немецкий защитный сварочный спрей от ABICOR BINZEL предотвращает прилипание брызг и капелек
                        металла во время сварки образуя прочную защитную пленку на поверхности.
                        Может наноситься на : наружные сопла и медные наконечники любых сварочных горелок, инструменты,
                        заготовки и изделия перед выполнением сварочных работ.
                        Часто используется при работах где важен внешний вид свариваемых изделий. Так как без
                        использования защитных сварочных средств сварочные брызги и наплывы приходится убирать
                        болгаркой, которая оставляет специфические следы на поверхности металла.
                        В отличие от Dusofix-пасты (которая наносится на заготовку и служит для таких же целей)
                        применяется до начала сварки на холодное изделие.
                        Сварочный спрей BINZEL не содержит вредных компонентов, представляющих опасность для работающего
                        и очень удобен в применении.</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Sprei_aerozoli_2;