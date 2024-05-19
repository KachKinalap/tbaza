import Main from "../pages/Main";
import About from "../pages/About";
import Price from "../pages/Price";
import Events from "../pages/Events";
import Contacts from "../pages/Contacts";
import PriceGroup from "../pages/PriceGroup";
import Item from "../pages/Item";


export const ROUTES = [
    {path: "/", component: <Main/>, caption: "Главная"},
    {path: "/about", component: <About/>, caption: "О нас"},
    {path: "/price", component: <Price/>, caption: "Прайс"},
    {path: "/events", component: <Events/>, caption: "Мероприятия"},
    {path: "/contacts", component: <Contacts/>, caption: "Контакты и маршрут"},
    ]
export const SILENT_ROUTES = [
    {path: "/price/:type", component: <PriceGroup/>},
    {path: "/item/:id", component: <Item/>}
]
export const SERV_CONN = "46.19.66.244/api"
// export const SERV_CONN = "localhost:5000/api"

export const BUCKET_CONN = "https://s3.timeweb.cloud/c1718d14-tbaza58/static/"

export const LIVING_TYPE = ["home", "azbar", "yurt", "railway", "camping"]
export const SERVICE_TYPE = ["bath", "cafe", "cover", "balcony", "desk", "hall", "terrace", "veranda", "semicover", "bower"]
export const ADDITIONAL_TYPE = ["boat", "sports", "rod"]
