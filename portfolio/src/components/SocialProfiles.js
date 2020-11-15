import React from "react"; //import of { component } can be deleted when using stateless components 
import SOCIAL_PROFILES from "../data/socialProfiles";

//Stateless component, which means it can now have an input of "props" which means I can delete "this.props.social_profile" and change it to the line below
const SocialProfile = props => {
    const {link, image} = props.social_profile;

    return(
        <span style={{width: 35, height: 35, margin: 10}}>
            <a href={link}><img src={image} alt="social-profile" style={{width: 50, height: 50}}/></a>
        </span>
    );
}

//inline return (just return os simpliefied it and deleted it and changed {} to ())
const SocialProfiles = () => (
    <div>
        <h3>Social profiles</h3>
        <div> 
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
                        <SocialProfile key={SOCIAL_PROFILE.id} social_profile={SOCIAL_PROFILE}/>
                    )
                )
            }
        </div>
    </div>
)

export default SocialProfiles;
