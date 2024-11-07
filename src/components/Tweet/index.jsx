import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartBar, faComment, faEllipsisH, faHeart, faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export function Tweet({ tweet }) {
const [comment, setComment] = useState(0)
const [retweet, setRetweet] = useState(0)
const [like, setLike] = useState(0)
    function handleAction(action) {
        switch (action) {
            case 'comment':
            setComment((comment) => comment + 1)
                break;
            case 'retweet':
            setRetweet((retweet) => retweet + 1)
                break;
            default:
            setLike((like) => like + 1)
                break;
        }
    }

    return (
            <div className="flex p-4 border-b border-gray-800 hover:bg-gray-800 cursor-pointer transition duration-200">
                <img className="rounded-full w-12 h-12" src={tweet.avatar} alt="avatar do usúario" />
                <div className="ml-4 w-full">
                    <div className="flex justify-between">
                        <div className="flex space-x-2">
                            <p className="font-bold text-8">{tweet.name}</p>
                            <span className="text-gray-500">@{tweet.username}</span>
                            <span className="text-gray-500">{tweet.time}</span>
                        </div>
                        <FontAwesomeIcon className="text-gray-500 cursor-pointer" icon={faEllipsisH} />
                    </div>
                    <p>{tweet.content}</p>
                    {tweet.image && <img src={tweet.image} className="mt-3 rounded-2xl max-w-full h-auto"/>}
                    <div className="flex justify-between mt-4 text-gray-500">
                        <div className="flex items-center cursor-pointer hover:text-blue-400">
                            <FontAwesomeIcon 
                            icon={faComment} className=""
                            onClick={() => handleAction('comment')}
                            />
                            <span className="ml-2">{comment}</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-green-400">
                            <FontAwesomeIcon 
                            icon={faRetweet} className=""
                            onClick={() => handleAction('retweet')}
                            />
                            <span className="ml-2">{retweet}</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-red-400">
                            <FontAwesomeIcon 
                            icon={faHeart} className=""
                            onClick={() => handleAction('like')}
                            />
                            <span className="ml-2">{like}</span>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-blue-400">
                            <FontAwesomeIcon icon={faChartBar}/>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-blue-400">
                            <FontAwesomeIcon icon={faUpload}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}