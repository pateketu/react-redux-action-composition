import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import loadChat from '../redux/modules/chatActions';
import {formatDate} from '../utils/dateUtil';
import styled from 'styled-components';

const ChatItem = styled.div`
        display:flex;

        div:first-child{
            width:200px;
           
        }
        div{
            margin: 10px;
        }
`;

export class Chat extends React.Component{   

    componentDidMount(){              
        this.props.loadChat();        
    }
    
    render(){                              
        return <div>
            {
                this.props.chat.map((chatItem) =>{
                    return <ChatItem key={chatItem.id}>
                       <div> 
                            {chatItem.message}
                        </div>
                         <div> 
                             by <b>{chatItem.user.firstName}</b>
                         </div> 
                         <div>
                            @  {formatDate(chatItem.timestamp)}
                         </div>
                    </ChatItem>
                })
            }
        </div>;
    }
}

Chat.propTypes = {
    chat:PropTypes.array,
    loadChat:PropTypes.func.isRequired
}

export default connect(state => ({chat:state.chat}),
                        dispatch => (
                                {
                                    loadChat:()=>{dispatch(loadChat())
                                }
                        }))(Chat);