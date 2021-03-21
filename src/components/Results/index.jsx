import React from "react";
import Zewa from "../../img/zewa.png";
import logoGame from "../../img/logoGame.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; import magnit2 from "../../img/magnit-wh.png";
import './index.scss'
import { connect } from "react-redux";
import { showRes } from "../../store/actions";

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
                    <div className="row justify-content-center nav-mob">
                        <div className="col-lg-4">
                            <div className="backContainer">   <button
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
                                В меню  </button>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <img src={Zewa} alt="" />
                        </div>
                        <div className="col-lg-5">
                            <img src={magnit2} alt="" />
                        </div>
                    </div>

                    <div className="row justify-content-center for-rules ">
                        <div className="col-lg-auto">
                            <h2 className="wh-rules">Результаты розыгрыша</h2>

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
                                <div className="col-lg-10">
                                    <div className="rulesBox resBox">
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">1</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id115545387" target="_blank">
                                                    <span className="pinkTxt">Николай Медведев</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">2</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id20415285" target="_blank">
                                                    <span className="pinkTxt">Юлия Игумнова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">3</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id259115944" target="_blank">
                                                    <span className="pinkTxt">Женя Терехова</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">4</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id612346282" target="_blank">
                                                    <span className="pinkTxt">Мамука Мамардашвили</span>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">3000 руб.</div>
                                        </div>
                                        <div className="row justify-content-between resultsContainer">
                                            <div className="col-lg-2">5</div>
                                            <div className="col-lg-auto">
                                                <a href="https://vk.com/id429114025" target="_blank">
                                                    <span className="pinkTxt">Наташа Егорова</span>
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
                            </div>
                        </>
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
