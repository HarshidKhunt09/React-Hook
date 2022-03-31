import React from 'react';
import './App.css';
import { HookCounter } from './HookCounter';
import { HookCounterTwo } from './HookCounterTwo';
import { HookCounterThree } from './HookCounterThree';
import { HookCounterFour } from './HookCounterFour';
import { EffectCounter } from './EffectCounter';
import { EffectMouse } from './EffectMouse';
import { EffectMouseContainer } from './EffectMouseContainer';
import { EffectDataFetching } from './EffectDataFetching';
import { ComponentC } from './usecontext/ComponentC';
import { ReducerCounter1 } from './ReducerCounter1';
import { ReducerCounter2 } from './ReducerCounter2';
import { MemoCounter } from './MemoCounter';
import { FocusInput } from './useRef/FocusInput';
import { HookTimer } from './useRef/HookTimer';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


export const App = () => {

  return(
    <div className='app'>
      <HookCounter />
      <br />
      <HookCounterTwo />
      <br />
      <HookCounterThree />
      <br />
      <HookCounterFour />
      <br />
      <EffectCounter />
      <br />
      <EffectMouse />
      <br />
      <EffectMouseContainer />
      <br />
      <EffectDataFetching />
      <br />
      <UserContext.Provider value={'Harshid'}>
        <ChannelContext.Provider value={'CodingChannel'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <br />
      <ReducerCounter1 />
      <br />
      <ReducerCounter2 />
      <br />
      <MemoCounter />
      <br />
      <FocusInput />
      <br />
      <HookTimer />
    </div>
  );
}

