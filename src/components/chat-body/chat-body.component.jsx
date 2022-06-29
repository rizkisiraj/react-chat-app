import { signInWithGoogle } from "../../utils/firebase/firebase.util";


const ChatBody = () => {
    const logInUser = async () => {
      await signInWithGoogle();
    }

    return(
        <main className="w-full flex-1 bg-slate-400 flex justify-center items-center flex-col">
            <button onClick={logInUser} className="text-3xl mb-4 p-5 bg-blue-400 text-white">Sign In With Google</button>
            <span className="text-2xl text-white text-center">Sign in with your google account</span>
        </main>
    )
}

export default ChatBody;