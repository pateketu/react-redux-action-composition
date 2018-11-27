export default function joinMessagesAndMembers(messages, members){    
    if(messages && members){
        return messages.map((message) => {
            const user = members.find((member)=>{
                return member.id === message.userId;
            });
            return {...message, user};
        }).sort((a, b) => {
            if(a.timestamp > b.timestamp){
                return -1;
            }

            if(a.timestamp < b.timestamp){
                return 1;
            }

            return 0;
        });

    }
    return [];
}