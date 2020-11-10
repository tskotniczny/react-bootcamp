import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";


class SocialProfile extends Component{
    render(){

        const {link, image} = this.props.social_profile;

        return(
            <span style={{width: 35, height: 35, margin: 10}}>
                <a href={link}><img src={image} alt="social-profile" style={{width: 50, height: 50}}/></a>
            </span>
        );
    }
}


class SocialProfiles extends Component{
    render(){
        return(
        <div>
            <h3>Social profiles</h3>
            <div> 
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        return(
                            <SocialProfile key={SOCIAL_PROFILE.id} social_profile={SOCIAL_PROFILE}/>
                        );
                        }
                    )
                }
            </div>
        </div>
        )
    }
}

export default SocialProfiles;
