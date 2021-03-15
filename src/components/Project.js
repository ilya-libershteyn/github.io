import React from 'react';

function Project({props}) {  
    return (
        <div class="work">
                <a href={props.url} target="_blank">
                    <div class="main_tile" style={{backgroundImage: `url(${props.image})`}}>
                        <div class="label">
                            <h3>{props.name}</h3>
                            <p>{props.tech}</p>
                        </div>
                    </div>
                </a>    
            </div>
    );
};

export default Project;