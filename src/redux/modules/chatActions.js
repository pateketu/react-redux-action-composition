import {getMessages, getMembers} from '../../data/data';
export const CHAT_DATA_LOADED = 'react-redux-action-composition-app/chat/DATA_LOAD';

function chatLoaded(messages, memebers){
    return{
        type:CHAT_DATA_LOADED,
        payLoad:{messages, memebers}
    }
}
export default function loadChat() {
    return (dispatch) => {
         Promise.all([            
            getMessages(),
            getMembers()
          ]).then((data)=>{              
                dispatch(chatLoaded(data[0], data[1]));
          });
    };    
  };