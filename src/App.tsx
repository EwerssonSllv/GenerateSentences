import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {

  const [textSentence, setTextSentence] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(0)

  const allSentences = [{
    id: 1,
    category: "Motivation",
    sentences: [
      'To be or not',
      'Start where you are. Use what you have. Do what you can.',
      'Every bird that flies has overcome the fear of falling.',
      'Persist until it becomes easy.',
      'Sometimes you have to be your own hero.',
      'We are what we repeatedly do.'
    ]
  },
  {
    id: 2,
    category: 'Good Morning!',
    sentences: [
      'Your smile brightens my morning!',
      'Good morning! Have a wonderful day!',
      'Today will be a good day. So wake up and smile!',
      "It's time to rise and shine, sweetheart!",
      'Good morning, Sunshine!',
      'Enjoy life - now! Good morning!'
    ]
  }
  ]

  function handleSwitchCategory(index: number) {
    setSelectedCategory(index)
  }

  function generateSentence() {
    let randomNumber = Math.floor(Math.random() * allSentences[selectedCategory].sentences.length)
    setTextSentence(`"${allSentences[selectedCategory].sentences[randomNumber]}"`)
  }

  return (
    <div>
      <main className='container'>
        <img src={logoImg} className='logo' />
        <h1 className='title'>Categories</h1>
        <section className='category-area'>
          {allSentences.map((item, index) => (<button className='btn-category'
            key={item.id}
            style={{
              borderWidth: item.category === allSentences[selectedCategory].category ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwitchCategory(index)}>{item.category}</button>))}

        </section>
        <button className='btn-generate' onClick={generateSentence}>Generate Sentence</button>
        {textSentence != '' &&
          <h3 className='sentence'>
            {textSentence}
          </h3>
        }
      </main>
    </div>

  )
}

export default App