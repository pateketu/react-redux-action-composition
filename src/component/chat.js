import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import loadChat from '../redux/modules/chatActions';
import {formatDate} from '../utils/dateUtil';
export class Chat extends React.Component{   

    componentDidMount(){              
        this.props.loadChat();        
    }
    
    render(){                              
        return <div>
            {
                this.props.chat.map((chatItem) =>{
                    return <div key={chatItem.id} className='chatItem'>
                        {chatItem.message} by <b>{chatItem.user.firstName}</b>  @  {formatDate(chatItem.timestamp)}
                    </div>
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