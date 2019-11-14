import React from 'react';
import { IconBase, IconCalendar } from '../components/Icons';
import AppFooter from '../components/AppFooter.js';
import './GroupPage.css';
import {schedule} from "../store";

export default function GroupPage() {
  return (
    <React.Fragment>
      <main className="GroupMain">
        <div className="places">
          <p className="top">Group Activities</p>
          <h1>相册</h1>
          <hr />
          <div className="wrapper">
            <div className="box item1"/>
            <div className="box item2" />
            <div className="box item3" />
            <div className="box item4" />
            <div className="box item5" />
            <div className="box item6" />
            <div className="box item7" />
            <div className="box item8" />
            <div className="box item9" />
            <div className="box item10" />
            <div className="box item11" />
            <div className="box item12" />
            <div className="box item13" />
            <div className="box item14" />
            <div className="box item15" />
          </div>
        </div>

        <aside className="sidebar">
          <h3>
            <IconBase iconName="calendar">
              <IconCalendar />
            </IconBase>{' '}
            日程计划
          </h3>
          {schedule.map(schedule => {
            return <div>
              <th className="table"><h3>{schedule.date}：</h3></th>
              <hr />
              <td className='table'>{schedule.plan}</td>
              <hr />
            </div>
          })}
        </aside>
      </main>
      <AppFooter />
    </React.Fragment>
  );
}
