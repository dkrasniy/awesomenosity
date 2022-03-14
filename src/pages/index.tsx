import * as React from "react"
import { Helmet }from "react-helmet"
import MathGame from '../components/mathgame'
// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet title="Awesomenosity" defer={false} /> 
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-50 select-none group">
        <div>
        <div className=" text-white text-4xl font-display my-4 text-center font-bold py-6 px-16  select-none" style={{background: '#9966FF'}}>Awesomenosity</div>
        <span className="block text-center font-display text-gray-900 text-xl font-semibold my-1">Awesome happens here.</span>
        <span className="text-sm text-gray-500 font-display  text-center block">&copy; 2022 Awesomenosity, Inc</span>
        </div>
        </div> */}

        <MathGame/>
        
    </main>
  )
}

export default IndexPage
