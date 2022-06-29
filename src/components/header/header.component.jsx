import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

const Header = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <header className="w-full py-5 px-5 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white" >Amazing Chat App</h1>
            {
                currentUser ? <button onClick={signOutUser} className="bg-red-500 text-xl p-2 text-white">Sign Out</button> : null
            }
        </header>
    )
}

export default Header;