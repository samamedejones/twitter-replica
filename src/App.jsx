import { useEffect, useState } from "react"
import Sidebar from "./components/Siderbar"
import { Tweet } from "./components/Tweet"
import { Twitterform } from "./components/TwitterForm"
import { generateImages, getAvatar } from "./until/generateImagens"
import { v4 } from "uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { TrendTops } from "./components/TrendTops"
import { FollowItem } from "./components/FollowItem"

function App() {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets()
    }, 5000);
    return () => clearInterval(interval)
  }, [])

  const addNewRandomTweets = () => {
    const randomTweets = [
      "Aproveitando o dia com um bom livro! 📚 #Leitura",
      "Nada como um café para começar bem a semana ☕ #SegundaFeira",
      "Praticar esportes é essencial para a saúde! 🏃‍♂️ #VidaSaudável",
      "Explorando novos lugares e culturas 🌍 #Viagem",
      "A importância de cuidar do meio ambiente 🌱 #Sustentabilidade",
      "Trabalhando duro para alcançar meus objetivos 💪 #Foco",
      "Compartilhando momentos especiais com amigos ❤️ #Amizade",
      "Desenvolvendo novas habilidades e aprendendo sempre 📈 #CrescimentoPessoal",
      "A música tem o poder de transformar o dia 🎶 #Música",
      "Celebrando pequenas vitórias diárias 🥳 #Gratidão"
    ]

    const randomTweet = randomTweets[Math.floor(Math.random() * randomTweets.length)]
    addNewTweet(randomTweet, Math.random() > 0.2)
  }

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit'
        }),
      image: includeImage ? generateImages() : null,
      likes: 0,
      retweets: 0,
      comments: 0
      }
    
    setTweets((prevTweets) => [newTweet, ...prevTweets])
  }



  return (
      <div className="flex mx-auto max-w-7xl">
        <Sidebar/>
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
          <header className="sticky top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm w-full">
            <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
          </header>
          <Twitterform onTweet={(content) => addNewTweet(content, Math.random() > 0.2)}/>
          <div>
            {tweets.map( tweet => (
              <Tweet key={tweet.id} tweet={tweet}/>
            ))}
          </div>
        </main>
        <aside className="hidden xl:block w-80 px-4">
          <div className="sticky top-0 pt-2">
            <div className="relative">
              <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-gray-500"/>
              <input placeholder="Search Twitter" className="w-full bg-gray-800 rounded-full text-white outline-none py-2 pl-10 pr-4"/>
            </div>

            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">Subscribe to Premium</h2>
              <p className="text-gray-500 mb-4">Subscribe to unlock new features and if elegible, receive a share of ads revenue</p>
              <button className="bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">Subscribe</button>
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">Whats Happening</h2>
              <TrendTops category="Games" name="League of Legends"/>
              <TrendTops category="CBLOL" name="Pain Gaming"/>
              <TrendTops category="E-sport" name="Torneio das Americas" tweetCount="21,3k posts"/>
              <TrendTops category="CBLOL" name="Pain Academy" tweetCount="13,756 posts"/>
              <TrendTops category="CBLOL" name="TitaN" tweetCount="1,452 posts"/>
            </div>
            <div className="bg-gray-800 rounded-xl mt-4 p-4">
              <h2 className="font-bold text-xl mb-4">Who to Follow</h2>
              <FollowItem name="Ranger" username="@rangerlol1"/>
              <FollowItem name="Brucerlol" username="@littlebrucer"/>
            </div>
          </div>
        </aside>
      </div>
  )
}

export default App
