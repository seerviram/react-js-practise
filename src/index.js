import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todos from './Todos';
import Accordion from './Accordian';
import Form from './Form';
import Progessbar from './Prograss/Progessbar';
import TabList from './TabList';
import Tab from './Tab';
import Tabs from './Tabs/Tabs';
import App2 from './Carosuel/Carousel';
import Fileexplore from './FileExp/Fileexplore';
import Trafic from './Traficight/Trafic';
import TicTac from './tictac/TicTac';
import Comment from './Comments/Comment';
import Youtube from './Live streaming/Youtube';
import Passwordgenerator from './Passwordgenerator';
import ModelApp from './Modal';
import StarRating from './StarRating/StarRating';
import MultiProgress from './MultiProgressBar/App';
import Table from './TabularData/Table';
import TabContainer from './ContextApi/TabContainer/Tab';
import CustomModal from './Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Todos/> */}
   {/* <Accordion/> */}
   {/* <Form/> */}
 {/* <Tabs/> */}
 {/* <App2/> */}
 {/* <Fileexplore/> */}
   {/* <Progessbar/> */}
   {/* <MultiProgress/> */}
   {/* <TabContainer/> */}
<CustomModal/>
   {/* <Table/> */}
   {/* <Trafic/> */}
   {/* <TicTac/> */}
   {/* <Comment/> */}
   {/* <Youtube/> */}
   {/* <Passwordgenerator/> */}
   {/* <ModelApp/> */}
   {/* <StarRating/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
