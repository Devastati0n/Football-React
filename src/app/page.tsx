import Image from "next/image";
import Link from 'next/link';
import './shared/header.css'
import './shared/variables.css'


import Eugenia from './ui/Eugenia_School';



export default function Home() {
   return (
 
        
        <div>

         <header>   
          <nav className="header-nav">     
           
            <Eugenia />                     
            <a href="/">Sign-In</a>
            <a href="/">Link</a>
            <a href="/">Link2</a>
            <a href="/">Link3</a>
            
           
         </nav>
         </header>
          <main>

          </main> 
      

      <footer>
      
      </footer>
      </div>  
  );
}


       {/*<a className="header-title" href="/">My-Superbowl</a>*/}













