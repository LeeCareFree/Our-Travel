import React from 'react';
import { places } from '../store';
import './PlacePage.css';
import AppStarRating from '../components/AppStarRating';
import AppFooter from '../components/AppFooter.js';
import { Subscribe, State ,photo} from '../store';

export default function PlacePage() {
  return (
    <Subscribe to={[State]}>
      {$ => (
        <React.Fragment>
          <main className="PlaceMain">
            <div className="places">
              {photo.map(photo => {
                return <div key={photo.name}>

                  <hr />
                  <br />
                  <div className='imgbox'><img className="main-img" src={photo.img} alt={photo.name} /></div>
                  <h3 className="place" >{photo.name}</h3>
                  <p className="stars">
                    Star:<AppStarRating />
                  </p>
                  <hr />
                </div>
              })}
              {/*<h1 className='place'>{places.name}</h1>*/}
              {/*<p>*/}
              {/*  <strong>Score: {places[0].rating}</strong>*/}
              {/*</p>*/}
              {/*<p className="stars">*/}
              {/*  Star:<AppStarRating />*/}
              {/*</p>*/}

              <div className="main-img" />
              {/*<p>{places[0].description}</p>*/}
            </div>

            <aside className="sidebar">
              <h3>Other Trips</h3>
              {places.map(place => {
                return (
                  <div className="placelocation" key={place.name}>
                    <img src={place.img} alt={place.name} />
                    <p className="top">
                      <h3>{place.name}</h3>
                    </p>
                    <p className="description">{place.description}</p>
                    <hr />
                  </div>
                );
              })}
            </aside>
          </main>
          <AppFooter />
        </React.Fragment>
      )}
    </Subscribe>
  );
}
