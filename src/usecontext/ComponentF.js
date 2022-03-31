import React from 'react'
import { UserContext, ChannelContext } from '../App'

export const ComponentF = () => {

  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return (
                                        <>
                                        <div>User context value {user}</div>
                                        <div>Channel Context Value {channel}</div> 
                                        </>
                                    );
                                }
                            }
                        </ChannelContext.Consumer>
                    ); 
                }
            }
        </UserContext.Consumer>
    </div>
  )
}
