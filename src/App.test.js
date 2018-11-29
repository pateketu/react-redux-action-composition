import React from 'react';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux'
import {mount} from 'enzyme';
import {getMessages, getMembers} from './data/data';

jest.mock('./data/data');

describe('App', ()=>{
    it('renders chat item as expected', ()=>{

        const messagePromise = getMessages.mockImplementation(()=>{
            return Promise.resolve([{
                "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
                "userId": "e837c9f5-247f-445f-bcc3-7d434348336b",
                "message": "Test Message",
                "timestamp": "2017-02-09T04:27:38Z"
              }]);
        });

        const memberPromise = getMembers.mockImplementation(()=>{
            return Promise.resolve([{
                "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
                "firstName": "Martin",
                "lastName": "Bradley",
                "email": "mbradley0@google.it",
                "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
                "ip": "166.124.172.160"
              }]);
        });


        const wrapper = mount(<Provider store={store} > 
            <App/>
        </Provider>);

        return Promise.all([            
            messagePromise,
            memberPromise
        ]).then(()=>{   
            wrapper.update();            
            expect(wrapper.find('.chatItem').children()).toHaveLength(1);
        });
    });
});