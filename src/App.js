/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
//rfce
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Base from './component/Base';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import About from './component/About';
import Brand from './component/Brand';
import VariableUpdate from './component/layout/VariableUpdate';
import State from './component/layout/State';
import { useState } from 'react';
import Propsuse from './component/layout/Propsuse';
import HiddenAndToggle from './component/layout/HiddenAndToggle';
import Form from './component/layout/Form';
import UseEffect from './component/layout/UseEffect';
import API_UseEffect from './component/layout/API_UseEffect';
import EventLister from './component/layout/EventLister';
import ParentAPI from './component/layout/ParentAPI';
import { UserContextProvider } from './component/context/ContextAPI/user-context-provider';
import ToDoList from './component/toDoList/ToDoList';
function App() {

  const [comm_mess, setComm_Mess] = useState('commnication bw component')

  return (

    <div>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<ToDoList />} />
          <Route path='/base' element={<Base />} />
          <Route path='/about' element={<About />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/variable_update' element={<VariableUpdate />}></Route>
          <Route path='/state' element={<State />}></Route>
          <Route path='/props' element={<Propsuse message={comm_mess} />}></Route>
          <Route path='/button' element={<HiddenAndToggle />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/useEffect' element={<UseEffect />}></Route>
          <Route path='/api' element={<API_UseEffect />}></Route>
          <Route path='/eventListner' element={<EventLister />}></Route>
          <Route path='/parentapi' element={<ParentAPI />}></Route>
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>


  );
}

export default App;
