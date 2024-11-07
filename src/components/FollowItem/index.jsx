import { getAvatar } from "../../until/generateImagens"

export function FollowItem ({name, username}){
    const avatar = getAvatar(`${Math.floor(Math.random() * 1000)}@email.com`)


    return (
        <div className="flex items-center justify-between py-3 hover:bg-gray-800 transition duration-200">
            <div className="flex items-center">
                <img className="rounded-full w-12 h-12 mr-3" src={avatar} alt="avatar do perfil recomendado" />
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-gray-500">{username}</p>
                </div>
            </div>
            <div>
                <button className="bg-twitter-extra-light-gray text-twitter-black font-bold py-2 px-4 rounded-full hover:bg-blue-400 transition duration-200">Follow</button>
            </div>
        </div>
    )
}