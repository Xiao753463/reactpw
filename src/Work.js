import React from 'react';
import { Link } from 'react-router-dom'
import { portfolioItems } from './data';
import Blank from './Blank';
import { useParams } from 'react-router-dom';
import './Work.css';

const Work = ({ data }) => {
    let { id } = useParams();
    const item = portfolioItems.find((item) => item.id === parseInt(id));
    return (
        <div>
            <Blank h={30} />
            <div id="main">
                <div className="big-img"><img src={`imgs/${id}/${item.images[0]}`} alt={item.title + ' picture 0'} /></div>
                <div id='work-title' className="title"><h2>{item.title}</h2></div>
                <Blank h={40} />
                <div id='work-subtitle' className="subtitle"><h3>{item.subtitle}</h3></div>
                <Blank h={40} />
                <div id="info">
                    <div id='tech'>
                        {item.tech.map(element => {
                            return (<div className='tech-item'>{element}</div>)
                        })}
                    </div>
                    <div id='description'><p>{item.description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                            <br />
                        </span>
                    ))}
                    </p></div>
                    <div id='images'>
                        {item.images.map((element, i) => {
                            if (i != 0)
                                return (<img src={`imgs/${id}/${element}`} alt={item.title + ' picture ' + i} className="small-img" />)
                        })}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Work;
