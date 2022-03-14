import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion" 

export default function MathGame() {
    const [gameStarted, setGameStarted] = useState(false)

    const [screenNumber, setScreenNumber] = useState(0)
    const [numberPresentOnPage, setNumberPresentOnPage] = useState([0, 0, 0, 0, 0, 0])
    const [guess, setGuess] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let guessNumber = 0

        numberPresentOnPage.forEach((element, i) => {

            if (element == 1) {
                guessNumber += Math.pow(2, i)
            }
            console.log("guess", guess)
        });

        setGuess(guessNumber)

    }, [screenNumber]);


    const handleButtonSelection = (selection: boolean) => {
        let currentSelections = numberPresentOnPage

        if (selection) {
            currentSelections[screenNumber] = 1
        }

        if (screenNumber + 1 == values.length) {
            console.log('end of game')
             
           
            setTimeout(() => {
                setLoading(false)
              }, 500);
        }
        setScreenNumber(screenNumber + 1)


    }

    const values = [
        [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
        [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63],
        [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63],
        [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63],
        [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
        [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
    ]

    const FooterArea = () => (
        <div className='flex items-center justify-between max-w-4xl w-full flex-col mt-16 pb-4'>
            <div className=" text-white text-lg font-display my-4 text-center font-bold py-3 px-6  select-none bg-gray-300">Awesomenosity</div>
            <span className="text-sm text-gray-500 font-display text-center  block"><a href="https://twitter.com/dkrasniy" className='font-bold' target={"_blank"}>created by @dkrasniy</a></span>
        </div>
    )


    return <div className='min-h-screen bg-gray-100 flex items-center flex-col justify-center px-4'>
        <div className='bg-purple-500 h-4 fixed block w-full top-0 left-0 transition-all rounded-r-full' style={{ width: screenNumber * 21 + '%' }} />


        {!gameStarted ? <div className='flex flex-col justify-center bg-white max-w-4xl bg-white rounded-2xl shadow-xl p-20'>

            <h2 className='font-bold text-2xl md:text-3xl mt-6 text-center text-gray-700'>Think of a number between <span className='text-gray-900'>1</span> and <span className='text-gray-900'>50</span>.<br /><br /> Ready?</h2>
            <button className='px-16 py-4 font-display bg-purple-500 rounded-full text-white font-bold text-xl hover:bg-purple-600 transition-all mt-12 mx-auto ' onClick={() => setGameStarted(true)}>Begin</button>



        </div> : (screenNumber < 6 ? <>
            <div className=' bg-white rounded-2xl shadow-xl  max-w-2xl mt-8'>
                <div className='bg-gray-50 px-12  bg-gray-50 rounded-t-2xl py-8'>
                    <h2 className='font-bold text-2xl md:text-3xl text-center text-gray-800'>Does your number appear in this list of numbers?</h2>

                </div>
                <div className='grid grid-cols-8  mx-auto font-display font-semibold text-xl md:text-2xl border-b px-4'>
                    {values[screenNumber].map((number) => <div className='flex items-center justify-center text-center py-8 text-gray-800 '>{number}</div>)}
                </div>
                <div className='flex items-center my-6 mx-auto justify-center p-2 group'>
                    <button className='px-16 py-4 font-display bg-purple-500 rounded-full text-white font-bold text-xl mr-3 hover:bg-purple-600 transition-all' onClick={() => handleButtonSelection(true)}>Yes</button>
                    <button className='px-16 py-4  font-display bg-gray-200 rounded-full text-gray-800 font-bold text-xl mr-3 hover:bg-gray-300 transition-all' onClick={() => handleButtonSelection(false)}>No</button>
                </div>
            </div>
        </> :
            <div className='flex justify-center flex-col'>

                <h2 className='font-bold text-2xl md:text-3xl mt-6 text-center'>Your number must be...

                  
                        {loading ?  <svg
      className={`animate-spin text-button h-12 w-12 mx-auto my-12`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg> :  <motion.div

initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5, duration: .45 }, }}

viewport={{ once: true }}>
<span className='block text-center text-8xl my-6'>{guess}</span>  </motion.div>  }
                  


                </h2>
 
                <button className='px-16 py-4  font-display bg-gray-200 rounded-full text-gray-800 font-bold text-xl mr-3 hover:bg-gray-300 transition-all' onClick={() => { setGameStarted(false); setGuess(0); setScreenNumber(0); setScreenNumber(0); setNumberPresentOnPage([0, 0, 0, 0, 0, 0]); setLoading(true) }}>Play Again</button>

                <p className='text-sm text-gray-700 font-display p-6 text-center '>Huge shout out to Professor <b>Jay Cummings</b> for the inspiration!</p>
            </div>)}


        <FooterArea />


    </div>
}
