import sut from './chatReducer';
import {chatLoaded} from './chatActions';
import  joinMessagesAndMembers from './domain/joinMessagesAndMembers';

jest.mock('./domain/joinMessagesAndMembers');
joinMessagesAndMembers.mockImplementation(() => ([{}]));

describe('Chat reducer', ()=>{
    
    it('should return initial state', ()=>{
        const  state = sut();
        expect(state).toEqual([]);
    });

    it('updates the state with new chat', ()=>{
        const initialState = [{/*Some dummy item*/},{/*Some dummy item*/}]            
        const  state = sut(initialState, chatLoaded([{}], [{}]));
        expect(state).toHaveLength(3);
    });

    it('calls domain function joinMessagesAndMembers', ()=>{                
        sut([], chatLoaded([{}], [{}]));        
        expect(joinMessagesAndMembers).toHaveBeenCalled();
    });

});