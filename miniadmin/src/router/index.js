import Dashboard from '../views/Dashboard';
import ComponentPage from '../views/ComponentPage';
import FormsPage from '../views/FormsPage';
import TablesPage from '../views/TablesPage';
import ChartsPage from '../views/ChartsPage';
import Login from '../views/Login';

const routes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/componentpage',
        component: ComponentPage
    },
    {
        path: '/formspage',
        component: FormsPage
    },
    {
        path: '/tablespage',
        component: TablesPage
    },
    {
        path: '/chartspage',
        component: ChartsPage
    },
    {
        path: '/login',
        component: Login
    }
] 

export default routes;