import React from 'react'

const Hero = ({myTheme}) => {
  return (
    <main data-theme = {myTheme}  className='hero --p --mh-80vh'>
    <div className="container">
        <div className='main-container'>
            <div className="content-container">
                <h1>Visit Vila Shop Landing Page</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione debitis voluptatum corporis iusto cumque, dolores inventore consectetur sequi sint fugit praesentium nobis iste quis maxime temporibus, similique porro nemo corrupti
                </p>
                <div className="buttons">
                    <button className='--btn --btn-lg btn-l '>Learn More</button>
                    <button className='--btn --btn-danger --btn-lg'>Sign Up</button>
                </div>
            </div>
            <div className="img-container ">
                <img src="./assets/phone.svg" alt="" />
            </div>
        </div>
    </div>
        
    </main>
  )
}

export default Hero