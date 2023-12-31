import React from 'react';
import ButtonAppBar from "../Components/Header/Header"
import '../Pages/Pages.css'
import Basement from "../Components/Basement/Basement";
import Gap from "../Components/Gap/Gap";

const UseFulPage3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>

            <div className="pages_text">
                <h2>Паспорт и инструкция по эксплуатации лебёдок ручных барабанных моделей HWV</h2>
                <h2>1. НАЗНАЧЕНИЕ</h2>
                <p>Лебедки монтажные ручные моделей HWV предназначены для ручного подъема и перемещения грузов с
                    намоткой металлического каната (троса) на барабан. В качестве приводного механизма на лебедках
                    модели HWV используется червячная пара. <br/></p>
                <p>Лебедки не предназначены для подъема и перемещения людей.<br/></p>
                <p>Лебедки не предназначены для работы в пожаро- и взрывоопасных зонах.<br/>
                </p>
                <p>Температура окружающей среды от -20 до +40 град. С. Допускается эксплуатация лебедок на открытом
                    воздухе. При попадании влаги по окончании работы протереть открытые от смазки места лебедки сухой
                    салфеткой.<br/>
                </p>
                <h2>2. Технические характеристики лебедок модель HWV:</h2>
                <table cellSpacing="0" cellPadding="0" border="1">
                    <tbody>
                    <tr>
                        <td colSpan="2" width="229">
                            <p align="center">
                                Наименование/Модель
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                HWV 250
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                HWV 500
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                HWV 1000
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="185">
                            <p align="center">
                                Тяговое усилие
                            </p>
                        </td>
                        <td width="44">
                            <p align="center">
                                кг
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                250
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                500
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                1000
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="185">
                            <p align="center">
                                Диаметр каната
                            </p>
                        </td>
                        <td width="44">
                            <p align="center">
                                мм
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                5
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                6.8
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                9
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="185">
                            <p align="center">
                                Канатоемкость
                            </p>
                        </td>
                        <td width="44">
                            <p align="center">
                                м
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                20
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                25
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                35
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" width="229">
                            <p align="center">
                                Количество слоев
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                4
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                4
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                4
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="5" width="185">
                            <p align="center">
                                Размеры (мм.)
                            </p>
                        </td>
                        <td width="44">
                            <p align="center">
                                A
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                150
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                180
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                300
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="44">
                            <p align="center">
                                B
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                330
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                360
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                490
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="44">
                            <p align="center">
                                C
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                150
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                180
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                300
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="44">
                            <p align="center">
                                D
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                200
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                260
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                300
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td width="44">
                            <p align="center">
                                E
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                240
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                240
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                370
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" width="229">
                            <p align="center">
                                Вес (кг.)
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                11
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                17
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                41
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" width="229">
                            <p align="center">
                                Скорость навивки (м/мин.)
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                1
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                1
                            </p>
                        </td>
                        <td width="94">
                            <p align="center">
                                1
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <h2>3. Комплектация HWV:</h2>
                <ol>
                    <li>Рама лебедки.</li>
                    <li>Червячный вал.</li>
                    <li>Зубчатое колесо.</li>
                    <li>Опора вала барабана.</li>
                    <li>Опора червячного вала.</li>
                    <li>Рукоятка.</li>
                    <li>Фиксатор рукоятки.</li>
                    <li>Кожух редуктора.</li>
                </ol>

                <h2>4. Меры безопасности при работе с ручными лебедками:
                </h2>
                <p>
                    4.1 Лебедки моделей HWV являются сложными механическими устройствами повышенной опасности.
                </p>
                <p>
                    4.2 Перед установкой лебедок ознакомьтесь со следующими инструкциями:
                </p>
                <ul>
                    <li>«Правила устройства и безопасной эксплуатации грузоподъемных кранов» (ПБ10-382-00).</li>
                    <li>«Типовая инструкция по охране труда для машинистов лебедок электрических» (ТОИ Р-66-38-95 или ТИ
                        Р О-027-2003).
                    </li>
                    <li>«Типовая инструкция для лиц, ответственных за безопасное производство работ кранами» (РД
                        10-34-93).
                    </li>
                    <li>«Типовая инструкция для стропальщиков по безопасному производству работ грузоподъемными
                        машинами» (РД 10-107-96.
                    </li>
                </ul>
                <p>
                    4.3 Основные меры безопасности – ЗАПРЕЩАЕТСЯ:
                </p>
                <ul>
                    <li>Поднимать груз, вес которого превышает грузоподъемность лебедки.</li>
                    <li>Удлинять канат при недостаточной длине.</li>
                    <li>Выводить из зацепления собачку храпового механизма.</li>
                    <li>Производить чистку, смазку и ремонт лебедки во время работы.</li>
                    <li>Работать на неисправной лебедке и/или с поврежденным канатом.</li>
                    <li>Находиться посторонним лицам около лебедки во время работы.</li>
                </ul>
                <h2>5. Порядок установки и работы ручных лебедок моделей HWV:</h2>
                <p>
                    5.1 Выберете или изготовьте ровную поверхность под основание лебедки. Поверхность для лебедки модели
                    GR необходимо подбирать или изготавливать с учетом длины рукоятки.
                </p>
                <p>
                    5.2 Установите на площадке анкерные болты с резьбой равной диаметру установочного отверстия лебедки
                    или просверлите в ней соответствующие отверстия под болтовое соединение.
                </p>
                <p>
                    5.3 Установите лебедку на основание и убедитесь, что конструкция выдержит нагрузки, под которые
                    предназначена лебедка.
                </p>
                <p>
                    5.4 Проверьте работоспособность механизмов лебедки.
                </p>
                <p>
                    5.5 Заправьте и закрепите канат.
                </p>
                <p>
                    5.6 Намотайте канат на лебедку с нагрузкой не менее 60 кг. Первый слой намотки должен
                    соответствовать рисунку. Намотку каната производите строго по стрелке, которая находится под
                    рукояткой.
                </p>
                <p>
                    5.7 Лебедка готова к работе.
                </p>
                <p>
                    5.8 Лебедки моделей HWV оснащены храповым механизмом, препятствующим произвольному вращению барабана
                    и грузоупорным тормозом, состоящему из фрикционных дисков.
                </p>
                <p>
                    5.9 При работе с лебедками категорически запрещается снимать фиксатор храповика.
                </p>
                <h2>6. ГАРАНТИЙНЫЕ ОБЯЗАТЕЛЬСТВА</h2>
                <p>
                    6.1 На основании «Гражданского Кодекса РФ» и Закона РФ «О защите прав потребителя» на лебедку
                    устанавливается гарантийный срок 6 месяцев с даты продажи лебедки.
                </p>
                <p>
                    6.2 В целях определения причин отказа и/или характер повреждений лебедки проводится техническая
                    экспертиза в сервисном центре, в сроки, оговоренные Законом РФ.
                </p>
                <p>
                    6.3 Гарантии распространяются на все поломки, вызванные дефектами изготовления, материала или
                    конструкции.
                </p>
                <p>
                    6.4 Гарантии не распространяются на повреждения, возникшие в результате естественного износа,
                    плохого ухода, неправильного использования или грубого обращения, а так же на изделие со следами
                    несанкционированного вмешательства в устройство изделия.
                </p>
                <h2>7. Отметки о продаже</h2>
                <p>
                    Дата
                    продажи: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; МП: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Кол-во:
                    шт
                </p>
                <h2>8. Техническое обслуживание и освидетельствование:</h2>
                <p>
                    Техническое обслуживание лебедки заключается во внешнем осмотре не менее одного раза в месяц и
                    смазке зубчатой передачи смазкой типа «ЛИТОЛ 24». При внешнем осмотре особое внимание обращайте на
                    канат, заделку крюка и крепления лебедки.
                </p>
                <p>
                    С требованиями безопасности, рекомендациями по уходу и с условиями гарантии ознакомлен и согласен.
                    Претензий к внешнему виду и комплектности поставки не имею.
                </p>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default UseFulPage3;