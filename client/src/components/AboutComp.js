import React, { useEffect, useState } from 'react';
import { getPic } from "../http";
import { PageDiv } from "../styled";
import { COLOURS } from "../styled";
const AboutComp = (props) => {

    const [photos, setPhotos] = useState([])
    const fillPhotos = (element) => {
        getPic(element).then((res)=>{
            setPhotos(prevState => ([...prevState, res]))
        })
    };

    useEffect(()=>{
        props.paths.forEach((el)=>{
            fillPhotos(el)
        })
    },[])

    return (
        <PageDiv>
            {photos.length === props.paths.length
             ?
                // div style={{backgroundColor: "black"}}
                <div style={{color: COLOURS.BEJ}}>
                    <div style={{background: `url(${photos[0]})`, width: "100%", height: "100vh", marginTop: 50, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,.7)", width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 20%"}}>
                            <p style={{color: COLOURS.BEJ, textAlign: "center", fontSize: 24}}>Наша страна является одной из самых богатых на наличие мест для отдыха. Одним из прекрасных выборов для своего времяпровождения можно выбрать базу отдыха «Белая гора», так как здесь есть масса возможностей сделать свой отдых ярким, незабываемым, комфортным, полезным и интересным.</p>
                        </div>
                    </div>

                    <div style={{width: "100%", height: 50, boxShadow: `0 0 20px 25px ${COLOURS.BEJ}`, backgroundColor: "rgba(237, 245, 225, .5)", position: "relative"}}></div>

                    <div style={{background: `url(${photos[1]})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,.7)", width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 20%", justifyContent: "space-around", fontSize: 24}}>
                            <span>Мы предлагаем:</span>
                            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", fontSize: 16}}>
                                <div className="aboutItem">банный отдых</div>
                                <div className="aboutItem">рыбалка</div>
                                <div className="aboutItem">активные развлечения</div>
                                <div className="aboutItem">водные развлечения</div>
                                <div className="aboutItem">кафе</div>
                            </div>
                            <span>и многое другое...</span>
                        </div>
                    </div>

                    <div style={{width: "100%", height: 50, boxShadow: `0 0 20px 25px ${COLOURS.BEJ}`, backgroundColor: "rgba(237, 245, 225, .5)", position: "relative"}}></div>

                    <div style={{background: `url(${photos[2]})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,.7)", width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 20%", justifyContent: "space-around", fontSize: 24}}>
                            <p style={{color: COLOURS.BEJ, textAlign: "center", fontSize: 24}}>На территории нашей базы отдыха можно уединенно отдохнуть среди прекрасных живописных мест, забыв про городскую суету, шум и усталость.</p>
                        </div>
                    </div>

                    <div style={{width: "100%", height: 50, boxShadow: `0 0 20px 25px ${COLOURS.BEJ}`, backgroundColor: "rgba(237, 245, 225, .5)", position: "relative"}}></div>

                    <div style={{background: `url(${photos[3]})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,.7)", width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 20%", justifyContent: "space-around", fontSize: 24}}>
                            <p style={{color: COLOURS.BEJ, textAlign: "center", fontSize: 24}}>Для наших посетителей представлены различные зоны отдыха, вкусное и разнообразное питание, а также полное удовлетворение всех современных стандартных требований.</p>
                        </div>
                    </div>

                    <div style={{width: "100%", height: 50, boxShadow: `0 0 20px 25px ${COLOURS.BEJ}`, backgroundColor: "rgba(237, 245, 225, .5)", position: "relative"}}></div>

                    <div style={{background: `url(${photos[4]})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,.7)", width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 20%", justifyContent: "space-around", fontSize: 24}}>
                            <p style={{color: COLOURS.BEJ, textAlign: "center", fontSize: 18}}>В год культурного наследия народов России на базе отдыха "Белая гора" было открыто сельское подворье музей "Мирас"- наследие. Музей порадует наших гостей настоящей избой из прошлого века с интересными старинными экспонатами и русской печью, в которой пекут лучшие домашние пироги по рецептам наших бабушек. Закажите горячую выпечку, выпейте свежего чая, приготовленного на дровах, проведите увлекательную фотосессию - все это позволит Вам прикоснуться к быту предков Сурского края.</p>
                        </div>
                    </div>

                    <div style={{width: "100%", height: 50, boxShadow: `0 0 20px 25px ${COLOURS.BEJ}`, backgroundColor: "rgba(237, 245, 225, .5)", position: "relative"}}></div>

                    <div style={{background: `url(${photos[5]})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                        <div style={{backgroundColor: "rgba(0,0,0,.7)", width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 20%", justifyContent: "space-around", fontSize: 24}}>
                            <p style={{color: COLOURS.BEJ, textAlign: "center", fontSize: 18}}>Территория базы отдыха «Белая гора» является отличным местом для отдыха, как большой компании, так и для времяпровождения с семьей и близкими. Банкетный зал «Белая гора» готов принять до 200 человек одновременно в своих просторных двух залах, расположено прямо над водоемом, что придаст торжественность и грандиозность любому мероприятию. Вы сможете отдохнуть в  уютных домиках, расположенных на берегу живописного озера, оборудованных всем необходимым для  комфортного проживания на любой срок.</p>
                        </div>
                    </div>

                    <div style={{width: "100%", height: 50, boxShadow: `0 0 20px 25px ${COLOURS.BEJ}`, backgroundColor: "rgba(237, 245, 225, .5)", position: "relative"}}></div>

                </div>
             :
                <></>
            }
        </PageDiv>
    );
};

export default AboutComp;
