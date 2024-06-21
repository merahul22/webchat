
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import ChatArea from './components/ChatArea/ChatArea';
import OnlineUser from './components/OnlineUsers/OnlineUser';
import CreateGroup from './components/CreateGroup/CreateGroup';
import OnlineGroup from './components/OnlineGroup/OnlineGroup';
function App() {
  return (
    <div className="app">
<Routes>
<Route  path="/" element={<Login/>}/>
<Route path='app' element={<MainContainer/>}>
<Route path='welcome' element={<Welcome/>}></Route>
<Route path='group' element={<OnlineGroup/>}></Route>
<Route path='chat' element={<ChatArea/>}></Route>
<Route path='user' element={<OnlineUser/>}></Route>
<Route path='create-group' element={<CreateGroup/>}></Route>
</Route>
</Routes>

    </div>
  );
}

export default App;
