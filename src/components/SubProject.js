import React from 'react';

function SubProject({projectData}) {  
    return (                
        <div class="tile" style={{backgroundImage: `url(${projectData.image})`}}>
            <div class="label">
                <h3><a href={projectData.url} target="_blank" rel="noreferrer">{projectData.name}</a></h3>
                <p><a href={projectData.github} target="_blank" rel="noreferrer">Github</a></p>
            </div>
        </div>                     
    );
};

export default SubProject;