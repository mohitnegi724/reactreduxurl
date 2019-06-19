import React from 'react';
const WorkDone=(props)=>{
    return(
        <div className="SkillCardStyle">
            <a href={(()=> "https://" + props.Link)()} target="_blank" rel="noopener noreferrer">
                <div>
                    <img className="CardImage" src={props.Image} alt={props.name}/>
                </div>
                <div className="CardDesc">
                    <h4 className="thirdRail cardTitle">{props.Name}</h4>
                    <p>{props.Link}</p>
                    <p>Technology Used : </p>
                </div>
            </a>
        </div>
    )
}
export default WorkDone;