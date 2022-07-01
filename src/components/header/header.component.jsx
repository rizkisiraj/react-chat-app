import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

const Header = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <header className="w-full py-5 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center">
            {
                currentUser ?
                <> 
                <div className="flex items-center gap-4">
                    <img className="h-16 w-16 rounded-full border-white border-2" src={currentUser.photoURL || "https://i.picsum.photos/id/501/200/200.jpg?hmac=tKXe69j4tHhkAA_Qc3XinkTuubEWwkFVhA9TR4TmCG8"} alt="" />
                    <span className="text-lg text-white">{currentUser.displayName}</span>
                </div>
                <button onClick={signOutUser} className="bg-red-500 text-xl p-2 text-white">Sign Out</button> 
                </>
                : 
                <h1 className="text-xl font-semibold text-white" >Amazing Chat App</h1>
            }
        </header>
    )
}

export default Header;