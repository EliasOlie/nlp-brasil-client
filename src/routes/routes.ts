import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/ContactPage";
import IRoute from "../interfaces/IRoute";
import AboutPage from "../components/pages/AboutPage";



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
        name: 'About PAge',
        component: AboutPage,
        exact: true
    },
    
];
export default routes;