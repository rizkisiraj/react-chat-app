import { onDocumentSnapshotChange, signInWithGoogle } from "../../utils/firebase/firebase.util";
import { UserContext } from "../../contexts/user.context";
import { useContext, useEffect, useState, useRef } from "react";
import { getDocs } from "firebase/firestore";

import Message from "../message/message.component";

const dummyData = [{
    
    userId: "ZTzLMsT5Ota6k9osFVbenjlx9ZN2",
    chat: "Welcome to watch mojo, Today imma fuck the shit out of you",
    profileUrl: "https://i.picsum.photos/id/832/200/200.jpg?hmac=V4CRQyK7KVP2wBYsEhpcpP8wSdwyU5c-yTeMm37uOOo"

},
{
    userId: "adasdasdasndashja",
    chat:"Hello",
    profileUrl: "https://i.picsum.photos/id/501/200/200.jpg?hmac=tKXe69j4tHhkAA_Qc3XinkTuubEWwkFVhA9TR4TmCG8"
}]

const ChatBody = () => {
    const {currentUser} = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const dummy = useRef();

    useEffect(() => {
        const unsubscribe = onDocumentSnapshotChange(snapshot => {
            const liberalData = [];
            snapshot.forEach(snap => liberalData.push(snap.data()))
            setMessages(liberalData);
        })
        return unsubscribe;
    },[])

    
    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }, [messages])
    

    const logInUser = async () => {
      await signInWithGoogle();
    }

    return(
        <main className={`w-full flex-1 bg-slate-400 flex py-6 px-2 gap-6 ${currentUser ? "overflow-y-scroll mb-16" : "justify-center items-center"} flex-col`}>
            {
                currentUser ? 
                
                    messages.map((data,index) => {
                        return (
                            <Message key={index} data={data} />
                        )
                    })

                : (
                <>
                <button onClick={logInUser} className="text-3xl mb-4 p-5 bg-blue-400 text-white">Sign In With Google</button>
                <span className="text-2xl text-white text-center">Sign in with your google account</span> 
                </>
                )
            }
            <span ref={dummy}></span>
        </main>
    )
}

export default ChatBody;