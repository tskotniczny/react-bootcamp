import React, { Component } from 'react';

class Tracks extends Component {

    state = { playing:false, audio: null, playingPreviewUrl: null};

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);


        if(!this.state.playing){
            audio.play();
            this.setState({playing: true, audio, playingPreviewUrl: previewUrl})
        }
        else{

            this.state.audio.pause();
            this.setState({playing: false})

            if(this.state.playingPreviewUrl === previewUrl){
                this.setState({playing: false})
            }
            else{
                audio.play();
                //playing: true should not be there as it is stated above (but I left it as a future reference)
                this.setState({playing: true, audio, playingPreviewUrl: previewUrl});
            }
        }
        
    }

    render() {
        const { tracks } = this.props;

        return(
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url} = track;

                        return(
                            <div key={id} onClick={this.playAudio(preview_url)}> 
                                <img src={album.images[0].url} alt='track-image'/>
                                <p> {name} </p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Tracks;