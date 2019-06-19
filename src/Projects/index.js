import React,{Component} from 'react';
import WorkDone from './Work/Workdone';


class Projects extends Component{
    state={
        Projects:[
            {
                Id:"short-link",
                Name:"Link Shortener",
                Link:"shorturlbymohit.herokuapp.com",
                TechnologyUsed:["HTML","CSS","Javascript","Nodejs","MongoDB","Express"],
                Image:"./Assets/shorturl.png"
            },
            {
                Id:"saheb-productions",
                Name:"Saheb Productions",
                Link:"sahebproductionbymohit.firebaseapp.com",
                TechnologyUsed:["HTML","CSS","Javascript","Jquery"],
                Image:"./Assets/Saheb-Productions.png"
            },
            {
                Id:"the-vergomont",
                Name:"The Vergomont Stay",
                Link:"nainitalhomestay.firebaseapp.com",
                TechnologyUsed:["HTML","CSS",":Javascript","Bootstrap"],
                Image:"./Assets/thevergomont.png"
            },
            {
                Id:"the-bluedigit",
                Name:"The Bluedigit",
                Link:"thebluedigit.com",
                TechnologyUsed:["HTML","CSS","Javascript","Jquery"],
                Image:"./Assets/blank-Image.png"
            }
        ],
        Skills:["HTML","CSS","Javascript","jQuery","Nodejs","Express","Mongodb","React","Photography","Photoshop"]
    }
    showSkills=()=>{
        const Skills = this.state.Skills;
        return Skills.map(skill=><div className="skillsCards whiteText">{skill}</div>)
    }
    showProjects=()=>{
        let workProjects = this.state.Projects;
        return workProjects.map(project=>{
            return(
                <WorkDone key={project.Id} Name={project.Name} Link={project.Link} Image={project.Image}/>
            )
        })
    }
    render(){
        return(
            <div>
                <h4 className="whiteText thirdRail subHeading">Projects I Have Worked With </h4>
                {this.showSkills()}
                <hr/>
                {this.showProjects()}
            </div>
        )
    }
}

export default Projects;