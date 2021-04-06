import React from "react";
import Zewa from "../../img/zewa.png";
import logoGame from "../../img/logoGame.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; import magnit2 from "../../img/magnit-wh.png";
import './index.scss'
import { connect } from "react-redux";
import { showRes } from "../../store/actions";
import Ozon from '../../img/logos/ozon.png'
import Yandex from '../../img/logos/yandex.png'
import sbermarket from '../../img/logos/sbermarket.png'
import utkonos from '../../img/logos/utkonos.png'

class Results extends React.Component {
    render() {
        const { showRes } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <>
                <section className="menu no-after rulesCont">
                    <div className="row justify-content-center nav">
                        <div className="col-lg-3 animate__animated animate__fadeIn sec">
                            <img src={Zewa} alt="" />
                        </div>
                        <div className="col-lg-6 animate__animated animate__fadeIn thrd">
                            <img src={logoGame} alt="" />
                        </div>
                        <div className="col-lg-3">
                            <div className="backContainer"><button
                                style={{
                                    position: "static",
                                    margin: "0 auto",
                                    display: "block",
                                }}
                                className="back pinkTxt"
                                onClick={() => {
                                    showRes(false);
                                }}
                            >
                                В меню
                            </button>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center for-rules ">
                        <div className="col-lg-auto">
                            <h2 className="wh-rules" style={{ 'color': 'black' }}>Результаты розыгрыша</h2>

                        </div>
                    </div>
                    <Slider {...settings}>
                        <>
                            <div className="row justify-content-center for-rules">
                                <div className="col-lg-auto">
                                    <p>Поздравляем победителей первой недели!</p>
                                </div>
                            </div>
                            <div className="row justify-content-center results">
                                <div className="col-lg-5">

                                    <div className="rulesBox resBox">
                                        <div className="col">
                                            <img src={Ozon} alt="Ozon" style={{ width: '5rem', 'margin': '0 auto 1rem' }} />
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id265217588" target="_blank">
                                                    <span className="pinkTxt">Аня Ерофеева</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id170407021" target="_blank">
                                                    <span className="pinkTxt">Екатерина Рублева</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id508480539" target="_blank">
                                                    <span className="pinkTxt">Диана Духу</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id174095221" target="_blank">
                                                    <span className="pinkTxt">Ольга Андронова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id66855797" target="_blank">
                                                    <span className="pinkTxt">Михаил Потапов</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">

                                    <div className="rulesBox resBox">
                                        <div className="col">
                                            <img src={Yandex} alt="Yandex" style={{ width: '7rem', 'margin': '0 auto 1rem' }} />
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id642345811" target="_blank">
                                                    <span className="pinkTxt">Катя Иванова</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id245203514" target="_blank">
                                                    <span className="pinkTxt">Юлия Петрова</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id282200109" target="_blank">
                                                    <span className="pinkTxt">Василий Тимохин</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id540415412" target="_blank">
                                                    <span className="pinkTxt">Коля Ким</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id187009589" target="_blank">
                                                    <span className="pinkTxt">Лиза Силаева</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center results">
                                <div className="col-lg-5">

                                    <div className="rulesBox resBox">
                                        <div className="col">
                                            <img src={sbermarket} alt="sbermarket" style={{ width: '8rem', 'margin': '0 auto 1rem' }} />
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id392434851" target="_blank">
                                                    <span className="pinkTxt">Василий Хованский</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id20318950" target="_blank">
                                                    <span className="pinkTxt">Ирина Аверьянова</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id50334808" target="_blank">
                                                    <span className="pinkTxt">Марина Шишова</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id523908178" target="_blank">
                                                    <span className="pinkTxt">Артём Зориков</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id406422364" target="_blank">
                                                    <span className="pinkTxt">Evgenii Lok</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">

                                    <div className="rulesBox resBox">
                                        <div className="col">
                                            <img src={utkonos} alt="utkonos" style={{ width: '6rem', 'margin': '0 auto 1rem' }} />
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id642345811" target="_blank">
                                                    <span className="pinkTxt">Антон Лесков  </span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id626834577" target="_blank">
                                                    <span className="pinkTxt">Илья Кошик</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id159229044" target="_blank">
                                                    <span className="pinkTxt">Камилла Волкова</span>
                                                </a>
                                            </div><div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id267273410" target="_blank">
                                                    <span className="pinkTxt">Надежда Масленникова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                        <div className="row  resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id84617334" target="_blank">
                                                    <span className="pinkTxt">Екатерина Григорьева</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                        {/* <>
                            <div className="row justify-content-center for-rules">
                                <div className="col-lg-auto">
                                    <p>Поздравляем победителей второй недели!</p>
                                </div>
                            </div>
                            <div className="row justify-content-center results">
                                <div className="col-lg-10">
                                    <div className="rulesBox resBox">
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id606881975" target="_blank">
                                                    <span className="pinkTxt">Федя Подзолков</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id305274496" target="_blank">
                                                    <span className="pinkTxt">Катерина Матиевская</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id32046771" target="_blank">
                                                    <span className="pinkTxt">Оксана Грачева</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id514841321" target="_blank">
                                                    <span className="pinkTxt">Лилия Гоголева</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id33185029" target="_blank">
                                                    <span className="pinkTxt">Екатерина Морозова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row justify-content-center for-rules">
                                <div className="col-lg-auto">
                                    <p>Поздравляем победителей третей недели!</p>
                                </div>
                            </div>
                            <div className="row justify-content-center results">
                                <div className="col-lg-10">
                                    <div className="rulesBox resBox">
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id18401767" target="_blank">
                                                    <span className="pinkTxt">Ирина Бучацкая</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id109374039" target="_blank">
                                                    <span className="pinkTxt">Елена Макаренкова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id611104775" target="_blank">
                                                    <span className="pinkTxt">Владислав Домрачев</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id64949211" target="_blank">
                                                    <span className="pinkTxt">Татьяна Сидорова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id483081912" target="_blank">
                                                    <span className="pinkTxt"> Михаил Михайлович</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        <>
                            <div className="row justify-content-center for-rules">
                                <div className="col-lg-auto">
                                    <p>Поздравляем победителей четвертой недели!</p>
                                </div>
                            </div>
                            <div className="row justify-content-center results">
                                <div className="col-lg-10">
                                    <div className="rulesBox resBox">
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id64545333" target="_blank">
                                                    <span className="pinkTxt">Наталья Алантьева</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id119615416" target="_blank">
                                                    <span className="pinkTxt">Карина Шершнева</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id365438910" target="_blank">
                                                    <span className="pinkTxt">Ирина Кузнецова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id57111888" target="_blank">
                                                    <span className="pinkTxt">Елена Чеснокова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id276236340" target="_blank">
                                                    <span className="pinkTxt">Владимир Шевелев </span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        {/* </> */}
                    </Slider>
                </section>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        rules: state.store.rules,
        start: state.store.start,
        results: state.store.results,
        questWin: state.store.questWin,
        userData: state.store.userData,
        comics: state.store.comics,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showRes: (action) => dispatch(showRes(action)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
