import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

const Message = ({data}) => {

    const {currentUser} = useContext(UserContext)
    const { uid,chat,profileURL } = data;


    return (
        <div className={`flex items-start gap-3 ${uid === currentUser.uid ? "flex-row-reverse" : null}`}>
                            <img className="w-12 h-12 rounded-full" src={profileURL || "https://i.picsum.photos/id/144/200/200.jpg?hmac=3uevqKoBuYGJxqInvMh1R9bfnV2bz-Vetuv5Zwnb3mE"} alt="foto-profil" />
                            <p className={`max-w-md px-5 py-2 text-base ${uid === currentUser.uid ? "bg-blue-300 self-end" : "bg-orange-300"} rounded-2xl`}>{chat}</p>
        </div>
    )
}

export default Message;