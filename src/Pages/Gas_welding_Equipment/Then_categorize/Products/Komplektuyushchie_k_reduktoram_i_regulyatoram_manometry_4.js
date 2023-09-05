import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГАЙКА НАКИДНАЯ (S19 М16Х1,5LH ЛЕВАЯ, S19 М16Х1,5 ПРАВАЯ) БПО5-000-11</h2>
                <p>Гайка накидная с резьбой М16х1,5 с внешним шестигранником под ключ 19 используется для присоединения газовых рукавов и ниппелей к различному оборудованию.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>

                <div className="table-container">
                    <table className="table" border="1">
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
			 М16х1,5
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
			 19
		</p>
 </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
                <p>
                    БПО5-000-11 - левая резьба,
                    БПО5-000-11.01 - правая резьба
                </p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_4;