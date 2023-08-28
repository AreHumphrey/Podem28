import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_2_1_pripoi_flyusy.jpg"

const Pripoi_flyusy_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПАСТА АНТИПРИГАРНАЯ ABICOR BINZEL</h2>
                <p><b>Антипригарная паста Дюзофикс</b> (Паста Dusofix) производства ABICOR Binzel применяют при Mig и Tig
                    сварке. Паста Дюзофикс препятствует налипанию и пригоранию раскаленных капель металла (брызг) при
                    формировании сварочного шва на комплектующие части сварочных горелок. Увеличивает срок службы сопел,
                    наконечников горелок. Банка емкостью 300грамм.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <p>Пасту Дюзофикс наносят тонким слоем на сменные части сварочных горелок (сопла, наконечники), на свариваемые конструкции, а также защищают при сварке детали на которые не должен попасть раскаленный металл.
                        Использование антипригарной пасты Дюзофикс: строго запрещено пробовать и вдыхать пары пасты, при работе с пастой необходимо защитить кожу и слизистые от попадания. Сменные части горелок просто окунают в банку с пастой, держа горелку вниз.
                        Срок службы и эксплуатации горелок увеличивается в разы.<br/>

                        Производитель: <b>ABICOR BINZEL</b> (Германия).</p>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Pripoi_flyusy_2;