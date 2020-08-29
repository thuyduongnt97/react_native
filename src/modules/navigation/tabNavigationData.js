import HomeScreen from '../home/HomeViewContainer';
import CalendarScreen from '../calendar/CalendarViewContainer';
import GridsScreen from '../grids/GridsViewContainer';
import GroupsScreen from '../group/GroupsViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';
import CampaignsViewContainer from '../campaigns/CampaignsViewContainer'
import LoginScreen from '../auth/LoginViewContainer';
const iconHome = require('../../../assets/images/tabbar/home.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationData = [
  {
    name: 'Login',
    component: LoginScreen,
    icon: iconHome,
  },
  {
    name: 'Dashboard',
    component: GridsScreen,
    icon: iconGrids,
  },
  {
    name: 'Group',
    component: GroupsScreen,
    icon: iconGrids,
  },
  {
    name: 'Campaign',
    component: CampaignsViewContainer,
    icon: iconPages,
  },
];

export default tabNavigationData;