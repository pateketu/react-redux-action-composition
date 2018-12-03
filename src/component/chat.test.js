import { Chat} from './chat';
import React from 'react';
import renderer from 'react-test-renderer';
describe('Chat Component', ()=>{
    it('Renders correctly', ()=>{
        const chat = [{
            "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
            "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
            "message": "Test Message",
            "timestamp": "2017-02-09T04:27:38Z",
            "user":{
                "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
                "firstName": "Martin",
                "lastName": "Bradley",
                "email": "mbradley0@google.it",
                "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                "ip": "166.124.172.160"
              }
          }];
        const tree = renderer.create(<Chat chat={chat} loadChat={()=>{}}></Chat>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});