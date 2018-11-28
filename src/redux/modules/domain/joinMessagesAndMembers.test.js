import sut from './joinMessagesAndMembers';
describe('Messages And Members', ()=>{  
    const messages = [{
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Test Message",
        "timestamp": "2017-01-09T10:27:38Z"
    },
    {
        "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
        "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "message": "Test Message",
        "timestamp": "2017-02-09T12:27:38Z"
    }];

    const members = [{
        "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        "firstName": "Martin",
        "lastName": "Bradley",
        "email": "mbradley0@google.it",
        "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
        "ip": "166.124.172.160"
      },
      {
        "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
        "firstName": "Helen",
        "lastName": "Hawkins",
        "email": "hhawkins1@posterous.com",
        "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
        "ip": "179.239.189.173"
      }
    ];

    it('are joined correctly', ()=>{        
        const result = sut(messages, members);
        expect(result[0].user).toBe(members[0]);
    });

    it('joined results are sorted by timestamp', ()=>{        
        const result = sut(messages, members);
        expect(result[0].timestamp > result[1].timestamp).toBe(true);
    });
});