import React, { useEffect, useState } from 'react';
import './App.css';
import './components/dropdown.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCog } from 'react-icons/fa';

import Toggle from './components/toggle';
import Card from './components/card';
import logo from './logo_minnow.svg';
import LocalStorage from './services/LocalStorage';
import PodService from './domain/pod/pod.service';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [pods, setPods] = useState([]);
  const [reports, setReports] = useState([]);

  const onChangeTheme = (isChecked) => {
    setDarkMode(isChecked)
    LocalStorage.set(LocalStorage.getDarkModeKey(), isChecked)
  }

  const getUpdatedPods = async () => {
    const pods = await PodService.getPods();
    setPods(pods);
  }

  const getUpdatedReports = async () => {
    const pods = await PodService.getReports();
    setReports(pods);
  }

  useEffect(() => {
    const darkModeSet = LocalStorage.get(LocalStorage.getDarkModeKey());
    setDarkMode(darkModeSet);
    getUpdatedReports();
    getUpdatedPods();

  }, [])

  return (
    <div className={`app ${darkMode ? 'app--dark' : ''}`}>
      <header className={`app__header ${darkMode ? 'app__header--dark' : ''}`} >

        <div className='app__title'>Hello Jhon</div>
        <div className='app_header-options'>
          Dark mode
          <Toggle onToggle={(checked) => onChangeTheme(checked)} isChecked={darkMode} />
        </div>
      </header>

      <div className={`app__sidebar ${darkMode ? 'app__sidebar--dark' : ''}`}>
        <img src={logo} className='app__logo' alt='logo' />

        <div className='app__sidebar-menu'>
          <div className='app__sidebar-menu-item app__sidebar-menu-item--selected'>Home</div>
          <div className='app__sidebar-menu-item'>Reports</div>
        </div>
        <div className='app__sidebar-options'>
          <FaCog />
          <div className='app__sidebar-label'>Settings</div>
        </div>
      </div>

      <div className={`app__body ${darkMode ? 'app__body--dark' : ''}`}>
        <div className='app__row'>
          <div className={`app__card app__card--blank ${darkMode ? 'app__card--dark' : ''}`}>
            <div className={`app__card-header ${darkMode ? 'app__card-header--dark' : ''}`}>
              Pod online status
            </div>
            <div className={`app__card-content ${darkMode ? 'app__card-content--dark' : ''}`}>
              {pods.map((item, index) => {
                return (
                  <div className='app__card-list' key={index}>
                    <div className='app__card-list-title'>{item.locationName}</div>
                    {item.pods.map((pod, indexPod) => {
                      return (
                        <div className='app__card-list-item' key={indexPod}>
                          <div className={`app-card-list-item__pin
                            ${!pod.onlineStatus ? 'app-card-list-item__pin--red' : ''}`}></div>
                          <label>{pod.name}</label>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className='app__row app__column--3'>
          {reports.map((item, index) => {
            return <Card key={index} title={item.title} filters={item.filters} improvement={item.improvement} amount={item.amount} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
