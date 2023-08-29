import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_reduktory_ballonnye_3.1.png"

const Reduktory_ballonnye_3_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>АР-40-КР1-М</h2>
                <p>Регулятор расхода баллонный одноступенчатый предназначен для понижения и регулирования давления
                    аргона, поступающего из баллона, и автоматического поддержания постоянного рабочего расхода газа на
                    выходе регулятора в ходе проведения работ.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" width="509" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наибольшее давление газа на входе, при наибольшем расходе МПа (кгс/см<sup>2</sup>)<br/>
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 20 (200)
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наименьшее давление газа на входе, при наибольшем расходе МПа (кгс/см<sup>2</sup>)<br/>
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 0,8 (8)
		</p>
 </span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наибольшая пропускная способность при наибольшем рабочем давлении, л/мин<br/>
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 40
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Давление, на которое настроен предохранительный клапан, МПа (кгс/см<sup>2</sup>)<br/>
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 0,6-1,0
		</p>
 </span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Присоединительные размеры, вход:<br/>
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 Гайка накидная G3/4
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Присоединительные размеры, выход:<br/>
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
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Габаритные размеры, мм<br/>
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			122х162х130&nbsp; &nbsp;&nbsp;
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Масса комплекта, кг
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 0,50
		</p>
 </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Особенности конструкции<br/>
                    Отдельный редуцирующий узел с фильтрующим элементом<br/>
                    Диаметр чувствительного элемента (мембраны) 46 мм<br/>
                    Комплектация<br/>
                    Редуктор в собранном виде - 1 шт.<br/>
                    Ниппель под рукав резиновый диаметром 9 мм по ГОСТ 9356-75 - 1 шт.<br/>
                    Гайка накидная 19 (левая) - 1 шт.
                </p>


            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Reduktory_ballonnye_3_1;