import React from 'react';
import {COLOURS, FooterCont, FooterContCent, FooterItem, FooterItemCent} from "../styled";
import { ROUTES } from "../utils/const";
import MediaQuery from "react-responsive";

const Footer = () => {
    return (
        <>
        <MediaQuery minWidth={800}>
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
        </MediaQuery>
        <MediaQuery maxWidth={800}>
            <FooterContCent>
                <FooterItemCent>
                    <h5 style={{marginBottom:30}}>Меню</h5>
                    {ROUTES.map( el => {
                        return <a href={el.path} style={{textDecoration:"none", color: COLOURS.BEJ}}>
                                <span className="navHref" style={{display: "block", marginBottom: 10}}>{el.caption}</span>
                               </a>
                    })}
                </FooterItemCent>

                <FooterItemCent>
                    <h5 style={{marginBottom:30}}>Контакты</h5>
                    {/*TODO исправить данные*/}
                    <span style={{display: "block", marginBottom: 10, fontWeight: "normal"}}><b>Email: </b>tbaza@yandex.ru</span>
                    <span style={{display: "block", marginBottom: 10}}><b>Телефон: </b>8(927)-097-70-17, 8(800)-222-58-08</span>
                    <span style={{display: "block", marginBottom: 10}}><b>Адрес: </b>Пензенская обл. Каменский р-н а/д Пенза-Тамбов, 59 км, поворот на село Залесное</span>
                    <span style={{display: "block", marginBottom: 10}}><b>Режим работы: </b>Пн. – Вс. (с 10:00 до 22:00)</span>
                </FooterItemCent>
                <FooterItemCent>
                    <h5 style={{marginBottom:30}}>Мы в соцсетях</h5>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <a href="https://vk.com/bazabelayagora"><div className="iconDivCent vkDiv"></div></a>
                        {/*TODO links*/}
                        <a href="#"><div className="iconDivCent telegramDiv"></div></a>
                        <a href="#"><div className="iconDivCent instDiv"></div></a>
                    </div>
                </FooterItemCent>
            </FooterContCent>
        </MediaQuery>
        </>
    );
};

export default Footer;
