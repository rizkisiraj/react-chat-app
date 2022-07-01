import { FiSend } from "react-icons/fi";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { addDocumentData } from "../../utils/firebase/firebase.util";




const ChatForm = () => {
    const [inputValue, setInputValue] = useState("");
    const { currentUser } = useContext(UserContext)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!inputValue) return;

        const data = {
            profileURL: currentUser.photoURL,
            chat: inputValue,
            uid: currentUser.uid
        }

        await addDocumentData(data);
        setInputValue("");
    }
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="h-16 fixed flex justify-center items-center w-full max-w-3xl bottom-0">
            <input onChange={handleChange} value={inputValue} className="basis-4/5 bg-white h-full placeholder-slate-400 focus:outline-none px-1 sm:px-4" type="text" placeholder="Write message..."/>
            <button className="bg-blue-500 h-full text-white basis-1/5 text-center" type="submit"><FiSend className="text-3xl text-center w-full"/></button>
        </form>
    )
}

export default ChatForm;