import React from 'react';
import {COLOURS, FooterCont, FooterItem} from "../styled";
import { ROUTES } from "../utils/const";

const Footer = () => {
    return (
        <FooterCont>
            <FooterItem>
                <h5 style={{marginBottom:30}}>Меню</h5>
                {ROUTES.map( el => {
                    return <a href={el.path} style={{textDecoration:"none", color: COLOURS.BEJ}}>
                            <span className="navHref" style={{display: "block", marginBottom: 10}}>{el.caption}</span>
                           </a>
                })}
            </FooterItem>

            <FooterItem>
                <h5 style={{marginBottom:30}}>Контакты</h5>
                {/*TODO исправить данные*/}
                <span style={{display: "block", marginBottom: 10, fontWeight: "normal"}}><b>Email: </b>tbaza@yandex.ru</span>
                <span style={{display: "block", marginBottom: 10}}><b>Телефон: </b>8(927)-097-70-17, 8(800)-222-58-08</span>
                <span style={{display: "block", marginBottom: 10, maxWidth: 400}}><b>Адрес: </b>Пензенская обл. Каменский р-н а/д Пенза-Тамбов, 59 км, поворот на село Залесное</span>
                <span style={{display: "block", marginBottom: 10}}><b>Режим работы: </b>Пн. – Вс. (с 10:00 до 22:00)</span>
            </FooterItem>
            <FooterItem>
                <h5 style={{marginBottom:30}}>Мы в соцсетях</h5>
                <div style={{display: "flex"}}>
                    <a href="https://vk.com/bazabelayagora"><div className="iconDiv vkDiv"></div></a>
                    {/*TODO links*/}
                    <a href="#"><div className="iconDiv telegramDiv"></div></a>
                    <a href="#"><div className="iconDiv instDiv"></div></a>
                </div>
            </FooterItem>
        </FooterCont>
    );
};

export default Footer;
