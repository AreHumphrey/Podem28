import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7.jpg"

const Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ГАЙКА НАКИДНАЯ (S14 М12Х1,25LH ЛЕВАЯ, S14 М12Х1,25 ПРАВАЯ) УН-100-03</h2>
                <p>Гайка накидная с резьбой М12х1,25 с внешним шестигранником под ключ №14 используется для
                    присоединения газовых рукавов и ниппелей к различному газовому оборудованию.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>

                <div className="table-container">
                    <table className="table" border="1">
                    <p><b>
                        Технические характеристики:</b></p>
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
			М12х1,25
		</p>
		</span>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Размер под ключ&nbsp;
		</p>
 </span>
                        </td>
                        <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			14
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

export default Komplektuyushchie_k_reduktoram_i_regulyatoram_manometry_7;