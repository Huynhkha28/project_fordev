
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Header from '../../components/Header/Header';
//import CourseItem from '../components/courseItem/CourseItem';
//import CourseItem from '../components/CourseItem/CourseItem.js';
import Learning from '../../components/Learning/Learning'

export default function learning() {
    return (
        <>
            <Header />
            
            
             <Learning />

           
           
          
     
        </>
    )
}
