import React from 'react';
import { Map, Placemark } from '@pbe/react-yandex-maps';
import {BorderTextCont, BorderTextContHeader, ScreenDiv} from "../styled";
const ContactsComp = () => {
    return (
        <ScreenDiv>
            <BorderTextCont style={{marginTop: 100}}>
                <BorderTextContHeader>Как добраться к нам</BorderTextContHeader>
                <Map width="100%" height="100vh"  defaultState={{ center: [53.118199, 44.129628], zoom: 9}}>
                    <Placemark properties={{iconCaption: "База отдыха \"Белая гора\""}} geometry={[53.118199, 44.129628]} />
                    <Placemark properties={{iconCaption: "Центр города"}} geometry={[53.195042, 45.018316]} />
                </Map>
            </BorderTextCont>
            <p style={{textAlign: "left", paddingTop: 10}}>*Автотрасса Пенза-Тамбов 59 км, затем поворот налево, проезжаете 1км, потом еще один поворот налево и еще 1км по новой асфальтированной дороге.
                И Вы на месте! (На протяжении дороги Вас будут сопровождать указатели)</p>
        </ScreenDiv>
    );
};

export default ContactsComp;
// width="100%" height="100vh" optionsdefaultState={{ center: [44.123446,53.109039], zoom: 9 }}
