
import React from 'react'
import Image from 'next/image'
import Navbar from '../navebar/page'

const MyProject = () => {
  return (
    <body>
      
    <div>
        <Navbar />
        <h1 className='text-white text-center text-5xl m-5'>My Project</h1>
          
         <div className='card_conta'>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/atm.PNG' 
                alt='ATM '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'>ATM Machine</h2>
                  <p>
                  I have created a fully functional ATM Machine using TypeScript. 
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/04-atm-project.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/Todo.png' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'> Todo-app </h2>
                <p>
                  I have created a fully functional Todo-app using TypeScript. 
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/06-todo-project.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/currency.PNG' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'>currency-con</h2>
                  <p>
                  I have created a fully functional  currency converter application using TypeScript.
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/07-currency-coverter-project.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/word.PNG' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'>word-counter</h2>
                  <p>
                  I have created a fully functional  Word Counter application using TypeScript.
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/08-word-counter.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/student.PNG' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>

                <h2 className='card_h1'>Student Manag</h2>
                  <p>
                  I have created a fully functional  Studnet Managment Systam using TypeScript.
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/student-management-system.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/gussing.PNG' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'>Guessing Game</h2>
                  <p>
                  I have created a fully functional Guessing Game using TypeScript.
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/03-project-cli_number_guessing_game.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/Quiz.PNG' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'>Quiz App</h2>
                  <p>
                   
                  I have created a fully functional Quiz App using TypeScript.
                  
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="./" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card'>
                <Image 
                className='card_image'
                src='/Calculator.PNG' 
                alt='Todo app image '
                width={400}
                height={400}/>
                <div className='card_content'>
                <h2 className='card_h1'>Calculator</h2>
                  <p>
                    
                  I have created a fully functional Calculator using TypeScript.
                    
                  </p>
                </div>
                <div className='card_info'>
                    <div>
                      <a href="https://github.com/Alishba06/simple-calculator-a.git" className='card_link'>view project</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
   </div>
   </body>     
  )
}

export default  MyProject