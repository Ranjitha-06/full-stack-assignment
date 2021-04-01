import React from 'react'
import {Link} from 'react-router-dom';


export const Card=()=> {

        return (
            <div>
            <div className="col s20 m14 center">
              <div className="card black  center">
                <div className="card-content white-text  center">
                  <span className="card-title" ><h4>I’m a freelance digital designer, with +10 years of experience</h4></span>
                </div>
                <div className="card-tabs links ">
                    <ul className="tabs tabs-fixed-width black" >
                            <li className="tab"><a href="/">Web</a></li>
                            <li className="tab"><a href="/design">Design</a></li>
                            <li className="tab"><a href="/scenary">Scenary</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }

export default Card
