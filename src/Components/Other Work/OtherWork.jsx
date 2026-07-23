import WorkList from "../Other Work/WorkList"
import paperPicture from "../../assets/Screenshot 2026-07-23 162829.png"
import striveTournament from "../../assets/15.02.26.png"
import granblueTournament from "../../assets/image-23.png"

function otherWork() {
    return (
        <div className="container py-4">
            <div>
                <h3 style={{ textAlign: 'left' }}>Other Work</h3>
                <p style={{ textAlign: 'justify' }}>
                    Some other work I've done as a student or on my own time.
                </p>
            </div>
            <div>
                <WorkList 
                title="Chaotic robust zero-watermarking for game ready 3D meshes"
                image={paperPicture}
                description="A research paper written as part of my Master's at Thapar that details a novel ownership authentication method for game ready 3D meshes using
                zero watermarking. It has been accepted at the 20th International Conference on Industrial and Information Systems (To be held at ABV-IIITM Gwalior from 
                18-19 December 2026)"/>
                <WorkList 
                title="TO + Commentator for IVFG's Feb 2026 GGST Tournament"
                image={striveTournament}
                description="Acted as the tournament organiser and commentator for IVFG's 2026 Guilty Gear -Strive- online tournament. As TO, I was required to manage the 
                bracket itself on challonge, ensuring the tournament went by smoothly and verify player scores. As commentator, I was required to give play-by-plays during 
                downtime and call out, analyse and explain standout plays and moments during the tournament while coordinating with my co-commentator."
                >
                    <a href="https://www.youtube.com/watch?v=nlddjR0NMyk&t=13878s" className="card-link">Watch the VOD for the tournament here</a>
                </WorkList>
                <WorkList 
                title="Commentator for IVFG's April 2026 GBVSR Tournament"
                image={granblueTournament}
                description="Acted as the commentator for IVFG's 2026 Granblue Fantasy Versus: Rising online tournament. As commentator, I was required to give play-by-plays 
                during downtime and call out, analyse and explain standout plays and moments during the tournament while coordinating with my co-commentator."
                >
                    <a href="https://www.youtube.com/live/DGUCsRWb-40" className="card-link">Watch the VOD for the tournament here</a>
                </WorkList>
            </div>
        </div>
    );
}

export default otherWork