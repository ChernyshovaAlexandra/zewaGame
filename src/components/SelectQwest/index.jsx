import React from 'react'
import './index.scss'
import zewa from '../../img/zewa.png'
import delo from '../../img/logoGame.png'
import magnit from '../../img/magnit-wh.png'
import { connect } from 'react-redux'
import { startGame, showRules, showSelected, setQuestReady, showWinQModal, getQuest, getQuestList } from '../../store/actions'
import toiletPaper from '../../img/toilet-p-before.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class SelectQwest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quests: this.props.quests
        }
        this.props.getQuestList()
    }




    handleClick = () => {
        this.props.showSelected(true)
    }
    setReady = (index) => {
        const { quests, showWinQModal, getQuest, showSelected, setQuestReady, userData } = this.props;
        const questsMass = quests;

        if (index === quests.length - 1) {
            showWinQModal(true);
        }
        else {
            getQuest(userData.vk_id, index + 1)
            showSelected(index)
            // questsMass[index].isReady = true
            // questsMass[index].isDone = true
            // questsMass[index + 1].isActive = true


            // this.setState({ quests: this.props.quests })
        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { quests } = this.props
        const remainedQuests = quests.length - (quests.filter(item => item.isActive)).length

        return (
            <div className="selectQwest mainBG container">
                <div className="row justify-content-between nav">
                    <div className="col-lg-2   animate__animated animate__fadeIn ">
                        <img src={zewa} alt="" />
                    </div>
                    <div className="col-lg-3   animate__animated animate__fadeIn sec">
                        <img src={delo} alt="" />
                    </div>
                    <div className="col-lg-3  animate__animated animate__fadeIn thrd">
                        <img src={magnit} alt="" />
                    </div>
                </div>
                <div className="row justify-content-center nav-mob">
                    <div className="col-lg-5">
                        <img src={delo} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={zewa} alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img src={magnit} alt="" />
                    </div>
                </div>
                <div className="row justify-content-between descriptionContainer">
                    <div className="col-lg-5 Header">
                        <h2>Выбери квест </h2>
                        <p className="nav-mob">
                            С каждым пройденным квестом
                            твоя скидка увеличивается
                        </p>
                    </div>
                    <div className="col-lg-5 description">
                        <div className="explanationBox  ">
                            <div className="row blue align-items-center">
                                <div className="col-md-3 numeric">
                                    <p>{remainedQuests}</p>
                                </div>
                                <div className="col-md-11">
                                    <p>квестов осталось пройти<br />до розыгрыша подарочного<br />купона на 3000 рублей</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-auto" style={{ 'marginTop': '-.8rem' }}>
                        <p>С каждым пройденным квестом<br />
                        твоя скидка увеличивается</p>

                    </div>
                </div>

                <div className="row justify-content-center quest-content--inner desktop-only">
                    {quests.map((item, index) => (
                        <div className={"col-lg-4  animate__animated  animate__fadeInTopLeft animate__delay-" + (index + 1) + "s"} style={{ 'position': 'relative' }} key={index}>
                            {item.isActive && !item.isDone && <div className="sale">
                                <img src={toiletPaper} alt="" />
                                <p>{"Скидка " + item.sale + '%'}</p>
                            </div>}
                            <div className={item.isActive ? "quest-container" : "quest-container disabled"}>
                                <div className="imgContainer">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="header">
                                    <h4 dangerouslySetInnerHTML={{ __html: item.name }}></h4>
                                </div>
                                {item.isReady ?
                                    <button className="playBtn selectionBtn againBut">Пройти заново</button > :
                                    <button className="playBtn selectionBtn" onClick={() => { this.setReady(index) }}>Играть</button >}
                            </div>
                        </div>)
                    )}
                </div>
                <div className="row mob-only">
                    <Slider {...settings}>
                        {quests.map((item, index) => (
                            <div className="col-lg-12" key={index}>
                                {item.isActive && !item.isDone && <div className="sale">
                                    <img src={toiletPaper} alt="" />
                                    <p>{"Скидка " + item.sale + '%'}</p>
                                </div>}
                                <div className={item.isActive ? "quest-container" : "quest-container disabled"}>
                                    <div className="imgContainer">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="header">
                                        <h4 dangerouslySetInnerHTML={{ __html: item.name }}></h4>
                                    </div>
                                    {item.isReady ?
                                        <button className="playBtn selectionBtn againBut">Пройти заново</button > :
                                        <button className="playBtn selectionBtn" onClick={() => { this.setReady(index) }}>Играть</button >}
                                </div>
                            </div>)
                        )}

                    </Slider>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        selected: state.store.selected,
        quests: state.store.quests,
        questData: state.store.questData,
        userData: state.store.userData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => dispatch(startGame()),
        showRules: () => dispatch(showRules()),
        showSelected: (index) => dispatch(showSelected(index)),
        setQuestReady: (quests) => dispatch(setQuestReady(quests)),
        showWinQModal: (quest) => dispatch(showWinQModal(quest)),
        getQuest: (vk_id, quest_id) => dispatch(getQuest(vk_id, quest_id)),
        getQuestList: () => dispatch(getQuestList())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectQwest)