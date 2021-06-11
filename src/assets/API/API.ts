import IAPI from './APIInterfaces/IAPI';
import JSONPlaceholderAPI from './APIs/JSONPlaceholderAPI';

const API : IAPI = new JSONPlaceholderAPI();

export default API;