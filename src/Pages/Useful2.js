import React from 'react';
import ButtonAppBar from "../Components/Header/Header"
import '../Pages/Pages.css'
import Basement from "../Components/Basement/Basement";
import Gap from "../Components/Gap/Gap";
import img_useful2 from "../Components/Img/useful2.png"

const UseFulPage2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>

            <div className="pages_text">
                <h2>Паспорт на лебёдку ручную барабанную канатную JHW 1т; 2т; 3т.</h2>
                <img width="200" src={img_useful2} alt="img_2"></img>
                <b>
                    Внимание!&nbsp;Вся информация, приведенная в данной инструкции, основывается на данных, доступных на
                    момент печати. Завод оставляет за собой право вносить изменения в производимую продукцию в любой
                    момент времени без предварительного уведомления, если таковые не ухудшают потребительские свойства и
                    качества производимого товара.
                </b>
                <h2>1. НАЗНАЧЕНИЕ </h2>
                <p>Лебедки ручные канатные используются для подъема и перемещения грузов при строительных, монтажных и
                    ремонтных работах, при эксплуатации и ремонте транспортных средств. В конструкции лебедки
                    предусмотрено крепление к горизонтальной, вертикальной и наклонной поверхностям.</p>

                <h2>2. ХАРАКТЕРИСТИКИ </h2>
                <div className="table-container">
                    <table className="table" border="1">
                        <tr>
                            <th>Г/п, т (тип лебедки)</th>
                            <td>
                                1,0(JHW)
                            </td>
                            <td>
                                2,0(JHW)
                            </td>
                            <td>
                                3,0(JHW)
                            </td>
                        </tr>
                        <tr>
                            <th>Макс. длина каната, м.</th>
                            <td>40</td>
                            <td>40</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <th>Диаметр каната, мм.</th>
                            <td>8,0</td>
                            <td>9,0</td>
                            <td>12,5</td>
                        </tr>
                        <tr>
                            <th>Усилие на рукоятке, кг.</th>
                            <td>32</td>
                            <td>39</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <th>Тип передачи</th>
                            <td>шестер.</td>
                            <td>шестер.</td>
                            <td>шестер.</td>
                        </tr>
                        <tr>
                            <th>Комплектация канатом</th>
                            <td>+</td>
                            <td>+</td>
                            <td>+</td>
                        </tr>
                        <tr>
                            <th>Масса, Кг</th>
                            <td>20</td>
                            <td>25</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <th>Габариты, мм</th>
                            <td>390х320х270</td>
                            <td>480х340х270</td>
                            <td>480х340х310</td>
                        </tr>
                    </table>
                </div>

                <h2>3. УСТРОЙСТВО И ПРИНЦИП РАБОТЫ</h2>
                <p>Ручная лебедка состоит из канатного барабана, редуктора подъема, корпуса (рамы), несущего узлы
                    лебедки, стального каната и рычага. Лебедка управляется вручную с помощью рычага, который совершает
                    круговое движение. Она, как правило, имеет стопорный механизм, предотвращающий самопроизвольное
                    опускание поднятого груза. Если поднимаемый груз и лебедка ручная расположены на одном уровне, то
                    для его подъема лебедку необходимо доукомплектовать блоком, который крепится сверху над
                    механизмом.</p>

                <h2>4. ОБСЛУЖИВАНИЕ И УХОД</h2>
                <p>Храните лебедку в сухом месте, чтобы препятствовать коррозии механизма и каната. Периодически
                    очищайте канат и механизм от грязи. Регулярно (по крайней мере 1 раз в месяц, а при тяжелых условиях
                    эксплуатации - чаще) необходимо проводить осмотр внешнего вида лебедки, смазку шестерней, каната и
                    проверять состояние деталей на предмет отсутствия коррозии повреждения и износа. Все ремонтные
                    работы должны выполняться квалифицированными специалистами. После выполнения ремонта и сборки
                    лебедки, а так же замены каната лебедка должна быть подвергнута испытанию весом превышающим
                    грузоподъемность лебедки на 25%.
                </p>
                <h2>5. МЕРЫ БЕЗОПАСНОСТИ</h2>
                <ul>
                    <li>Запрещается перегружать лебедку.</li>
                    <li>Запрещается использовать лебедку для поднятия людей.</li>
                    <li>Запрещается моторизировать лебедку - лебедка предназначена для ручного использования.</li>
                    <li>Запрещается использовать лебедку не по назначению.</li>
                    <li>Запрещается проводить ремонт механизма при поднятом грузе.</li>
                    <li>Перед эксплуатацией осмотрите канат, крюк, корпус лебедки. В случае выявления дефектов или
                        неисправностей - использование лебедки запрещается.
                    </li>
                    <li>Немедленно прекратите использование лебедки в случае поломки механизма лебедки, запутывания
                        каната, превышения грузоподъемности, появления посторонних звуков при работе механизма.
                    </li>
                    <li>Запрещается выравнивание груза на весу.</li>
                    <li>Запрещено производить подъем и спуск груза, если под ним находятся люди.</li>
                    <li>После окончания работы или в перерыве груз не должен оставаться в поднятом состоянии.</li>
                </ul>
                <h2>6. ГАРАНТИЙНЫЕ ОБЯЗАТЕЛЬСТВА</h2>
                <p>Гарантийный срок устанавливается 6 месяцев со дня ввода изделия в эксплуатацию, но не более 30
                    месяцев со дня изготовления. Гарантия не распространяется на повреждения, возникшие в результате
                    естественного износа, плохого ухода, неправильного использования или небрежного обращения, а так же
                    являющиеся следствием несанкционированного вмешательства в устройство изделия лиц, не имеющих
                    специального разрешения на проведение ремонта. В целях определения причин отказа и/или характера
                    повреждений изделия производиться техническая экспертиза сроком 10 рабочих дней. По результатам
                    экспертизы принимается решение о замене/ремонте изделия. При этом изделие принимается на экспертизу
                    только при наличии паспорта с отметкой о дате продажи и штампом организации-продавца. Срок
                    консервации 3 года. <br/></p>
                <h3>Отметки о продаже.</h3>
                <p>С требованиями безопасности, рекомендациями по уходу и с условиями гарантии ознакомлен и согласен.
                    Претензий к внешнему виду и комплектности поставки не имею.</p>
                <p>
                    Покупатель _____________
                </p>
                <p>
                    Дата
                    продажи: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;МП: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Кол-во: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;шт
                </p>
                <h2>СВЕДЕНИЯ О РЕМОНТЕ ЛЕБЕДКИ</h2>
                <table border="1">
                    <tbody>
                    <tr>
                        <td>
                            <p align="center">
                                Дата
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                Сведения о ремонте лебедки или замене ее узлов и деталей
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                Подпись лица, ответственного за содержание лебедки
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                        <td>
                            <p>
                                &nbsp;
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default UseFulPage2;