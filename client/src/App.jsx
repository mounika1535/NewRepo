import React, { useState } from 'react'
import One from './FunctionalComponents/One'
//import A from './FunctionalComponents/props/A'
//import B from './FunctionalComponents/B'
import Parent from './FunctionalComponents/props/ChildToChild/Parent'
import Child from './FunctionalComponents/props/ParentToChild/Child'
//import A from './FunctionalComponents/GlobalState/ContextApi/A'
import { store } from './FunctionalComponents/GlobalState/Toolkit/App'
//import {} from './FunctionalComponents/GlobalState/Toolkit/App'
import { Provider } from 'react-redux'
//import A from './FunctionalComponents/LocalState/UseReducer/UseReducer/A'
import Profile from './FunctionalComponents/CondentionalRendering/Profile'
import Login from './FunctionalComponents/CondentionalRendering/Login'
import Signup from './FunctionalComponents/CondentionalRendering/Signup'
import B from './FunctionalComponents/Layout/HigherOrderComponents/B'
//import A from './FunctionalComponents/A'
import Header from './FunctionalComponents/Layout/HigherOrderComponents/Header'
import Footer from './FunctionalComponents/Layout/HigherOrderComponents/Footer'
import A from './FunctionalComponents/Layout/HigherOrderComponents/A'
import Layout from './FunctionalComponents/Layout/HigherOrderComponents/Layout'
//import A from './FunctionalComponents/useEffect/A'
//import A from './FunctionalComponents/Data/A'
//import A from './FunctionalComponents/props/props/A'
// import A from './FunctionalComponents/props/Dummy/A'
// import A from './FunctionalComponents/props/Childs/a'

function App() {
  
    let [state,setState]=useState(true)
    return (
      //<A/>
      <Provider store={store}>
      <>
        <button onClick={()=>setState(!state)}>click</button>
        <Header/>
        <Layout>
          <A/>
        </Layout>
        {state? <A/> : <B/>}
        <Footer/>
        {/*<Profile/>*/}
        <A/>
        {/* <Login/> */}
        {/* <Signup/> */}
        <A/>
      </>
      </Provider>
    )
}

export default App