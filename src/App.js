import './App.css';
import Header from './components/header/header.component';
import ChatBody from './components/chat-body/chat-body.component';
import { signInWithGoogle, signOutUser } from './utils/firebase/firebase.util';
import { useContext } from 'react';
import { UserContext } from './contexts/user.context';

function App() {
  const { currentUser } = useContext(UserContext);
  const logInUser = async () => {
    await signInWithGoogle();
  }

  return (
    <div className='w-full max-w-3xl bg-slate-100 h-screen mx-auto my-0 font-sans flex flex-col' >
      <Header />
      <ChatBody />      
    </div>
  );
}

export default App;
