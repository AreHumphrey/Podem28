import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГАЙКА НАКИДНАЯ (S27 W21,8LH (СП21,8LH) ЛЕВАЯ И S27 W21,8(СП21,8) ПРАВАЯ) БПО5-000-09</h2>
                <p>Гайка накидная с резьбой W21.8LH с внешним шестигранником под ключ 27. Гайка используется для
                    присоединения редуктора к пропановому баллону.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" width="509" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Резьба
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 W21.8 (Сп21,8)
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Размер под ключ
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 27
		</p>
 </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_3;