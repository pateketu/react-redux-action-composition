import {getMessages} from './data';
class DataService{
    fetchMessages(){
        return getMessages();
    }
}
export default  new DataService();