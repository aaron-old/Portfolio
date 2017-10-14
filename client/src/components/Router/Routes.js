import Home from '../Page/Home/Home';
import Blog from '../Page/Blog/Blog';
import Resume from '../Page/Resume/Resume';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/blog',
        exact: true,
        component: Blog
    },
    {
        path: '/resume',
        exact: true,
        component: Resume
    }
];
export default routes;