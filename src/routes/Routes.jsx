import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Pricing from '../pages/Pricing'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Auth/Login'
import Thesis from '../pages/Thesis'
import ProjectWork from '../pages/Project-work'
import Consultation from '../pages/Consultation'
import Plagiarism from '../pages/Plagiarism'
import Proofreading from '../pages/Proofreading'
import Assignments from '../pages/Assignments'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsCondition from '../pages/TermsCondition'

const PageRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/service' element={ <Services />} />
            <Route path='/pricing' element={ <Pricing />} />
            <Route path='/about' element={ <About />} />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/privacy-policy' element={ <PrivacyPolicy />} />
            <Route path='/terms-condition' element={ <TermsCondition />} />
            <Route path='/service/thesis' element={ <Thesis />} />
            <Route path='/service/project-work' element={ <ProjectWork />} />
            <Route path='/service/assignments-term-papers' element={ <Assignments />} />
            <Route path='/service/proofreading' element={ <Proofreading />} />
            <Route path='/service/plagiarism-checks' element={ <Plagiarism />} />
            <Route path='/service/consultation' element={ <Consultation />} />
            <Route path='*' element={ <Home />} />
        </Routes>
    </div>
  )
}

export default PageRoutes