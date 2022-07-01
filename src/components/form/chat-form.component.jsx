import { FiSend } from "react-icons/fi";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { addDocumentData } from "../../utils/firebase/firebase.util";




const ChatForm = () => {
    const [inputValue, setInputValue] = useState("");
    const { currentUser } = useContext(UserContext)
    const handleSubmit = async (e) => {
        e.preventDefault();

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
        <form onSubmit={handleSubmit} className="h-20 flex justify-center items-center">
            <input onChange={handleChange} value={inputValue} className="flex-1 bg-white h-full placeholder-slate-400 focus:outline-none px-4" type="text" placeholder="Write message..."/>
            <button className="bg-blue-500 h-full text-white px-7" type="submit"><FiSend className="text-4xl"/></button>
        </form>
    )
}

export default ChatForm;