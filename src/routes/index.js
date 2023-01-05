
import banner from "../pages/News_banner/banner"
import Recruit from "../pages/Recruit/Recruit"
import routesConfig from "../routesConfig/routes"
import home from "../pages/Home"
import informaiton_recruit from "../pages/Information_recruit"
import informaiton_news from "../pages/information_news"
//public routes
const publicRoutes =[
    {path:routesConfig.home,component:home},
    {path:routesConfig.news,component:banner},
    {path:routesConfig.Recruit,component:Recruit},
    {path:routesConfig.informaiton_recruit,component:informaiton_recruit},
    {path:routesConfig.informaiton_news,component:informaiton_news}
]

export {publicRoutes}