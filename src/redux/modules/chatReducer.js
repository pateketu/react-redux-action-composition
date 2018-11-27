import {CHAT_DATA_LOADED} from './chatActions'
import joinMessagesAndMembers from './domain/joinMessagesAndMembers';

export default function reducer(state=[], action={type:undefined, payLoad:{messages:[],memebers:[]}}){
    let nextState = state;

    switch(action.type){
        case CHAT_DATA_LOADED:
            const chatter = joinMessagesAndMembers(action.payLoad.messages, action.payLoad.memebers);
            nextState = [...state, ...chatter]
            break;
        default:
            break;

    }

    return nextState;
}