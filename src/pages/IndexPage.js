
import React from 'react'
import { IconBase, IconMapPin } from '../components/Icons'
import { Subscribe, State, places } from '../store';
import AppFooter from '../components/AppFooter.js'

import './IndexPage.css'
export default class extends React.Component {
  mapContainer = React.createRef();

  render() {
    return (
      <Subscribe to={[State]}>
        {$ =>
        <React.Fragment>
          <main className="IndexMain">
            <div className="places" ref="places">
              {places.map(place => {
                return <div className="location" key={place.name}>
                  <img src={place.img} alt={place.name} />
                  <h2 className="pn">{place.name}</h2>
                  <p><strong>Score: {place.rating}</strong></p>
                  <pre><p>{place.description}</p></pre>
                  <hr />

                </div>
              })}
            </div>
            <div className="mapcontain" ref={this.mapContainer}>
              {places.map(place => {
                return <div className="location" key={place.location}>
                  <p>
                    <IconBase iconName="mappin"><IconMapPin /></IconBase>
                    {place.location}
                  </p>
                </div>
              })}

            </div>
          </main>

          <AppFooter />
        </React.Fragment>
        }
      </Subscribe>
    )
  }
}
