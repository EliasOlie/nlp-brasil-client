import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/ContactPage";
import IRoute from "../interfaces/IRoute";
import AboutPage from "../components/pages/AboutPage";
import ReportPage from "../components/pages/ReportPage";



const routes: IRoute[] = [
    
    {
        path: '/',
        name: 'Home page',
        component: HomePage,
        exact: true
    },
    {
        path: '/contato',
        name: 'Contact Page',
        component: ContactPage,
        exact: true
    },
    {
        path: '/sobre',
        name: 'About Page',
        component: AboutPage,
        exact: true
    },
    {
        path: '/stack/review/',
        name: 'Report Page',
        component: ReportPage,
        exact: true,
        props: Object

    },
    
];
export default routes;