import React from "react";
import { Component } from "react";
import Card from "./Card";
import CardNoLink from "./CardNoLink";
import Flip from "../../assets/MFz2pg.png"
import itch from "../../assets/badge-color.svg"
import RemotePolySynth from "../../assets/PolySynth.png"
import PowerTrip from "../../assets/LvYTvB.png"
import ArchVis from "../../assets/f0434478-cebc-4393-9b4f-05bded1ced31.jpg"

class Home extends Component {
    /* constructor(props) {
         super(props)
     }*/

    render() {
        return (
            <div className="container py-4">
                <br></br>
                <div>
                    <h3 style={{ textAlign: 'left' }}>Hi There!</h3>
                    <p style={{ textAlign: 'justify' }}>
                        My name's Aditya and this is a little website I made to document the work that I've done. It also has the added benefit of
                        being my portfolio. My primary area of interest is video games but, honestly, anything related to storytelling is of great
                        interest to me, so, if you think that there's something that I can help you with or that I'd be a good fit for, hit me up. My
                        primary skill is as a programmer. Naturally, my education reflects this with a BE and ME in Computer Science and Engineering.
                    </p>
                </div>
                <div>
                    <h2 style={{ textAlign: 'left' }}>Education</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>Qualification</th>
                                <th>Name of Institution</th>
                                <th>Year of Graduation</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr className="table-dark">
                                <td>Class XII</td>
                                <td>St. Mary's School, Patiala</td>
                                <td>2019</td>
                            </tr>
                            <tr className="table-dark">
                                <td>BE - Computer Science and Engineering</td>
                                <td>Chitkara University, Rajpura</td>
                                <td>2024</td>
                            </tr>
                            <tr className="table-dark">
                                <td>ME - Computer Science and Engineering</td>
                                <td>Thapar Institute of Engineering and Technology, Patiala</td>
                                <td>2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>
                        Here's some of the work I've done so far (Don't worry there's more in the projects section).
                    </h2>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Card
                            title="Flip"
                            tagline="A gravity defying shooter"
                            description="Made for the 2022 Epic Megajam. A third person shooter where the player fights enemies with the ability to swap their
                            current plane of movement and go to an inverted version of the play area"
                            image={Flip}
                            imageAlt="Flip"
                            link="https://edward-shanon.itch.io/flip"
                            linkIcon={itch}
                            linkAlt="Flip itch.io page" />

                        <CardNoLink
                            title="Remote Polysynth"
                            tagline="A quick and easy way to play multiple instruments with your phone"
                            description="An android app that, when connected to a Raspberry Pi or any device running the Sonic Pi script, will
                            play a selected instrument. The selected instrument and note played can be controlled via the app."
                            image={RemotePolySynth}
                            imageAlt="Flip" />

                        <Card
                            title="Power Trip"
                            tagline="A small game about Patience"
                            description="Made for the 2025 Bigmode Game Jam. A third person shooter where the player fights enemies and descends further
                            down the tower."
                            image={PowerTrip}
                            imageAlt="Power Trip"
                            link="https://edward-shanon.itch.io/power-trip"
                            linkIcon={itch}
                            linkAlt="Power Trip itch.io page" />

                        <CardNoLink
                            title="Realtime Archvis"
                            tagline="Prototype of a realtime Archvis tool made in Unreal Engine"
                            description="A tool made within Unreal that allows the user to place environment props and objects in realtime and add descriptions
                            to every part of the environment inserted. Allows importing custom meshes."
                            image={ArchVis}
                            imageAlt="Realtime Archvis" />
                    </div>
                </div>
                <h4>And, of course, this website that you're perusing right now</h4>
            </div>
        );
    }
}

export default Home;