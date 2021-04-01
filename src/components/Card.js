import React from 'react'
import {Link} from 'react-router-dom';


export const Card=()=> {

        return (
            <div>
            <div className="col s20 m14 center">
              <div className="card black  center">
                <div className="card-content white-text  center">
                <h3><font color="white">I’m a freelance <font color="#42a5f5">digital designer</font>, with +10 years of experience</font></h3>

                </div>
                <div className="card-tabs links ">

                    <ul className="tabs tabs-fixed-width " >
                            <li className="tab trans btn "><a href="/">Web</a></li>
                            <li className="tab trans btn"><a href="/">Design</a></li>
                            <li className="tab trans btn"><a href="/">Scenary</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }

export default Card
