import React from "react";
import ListMember from "./ListMember";
import Flip from "../../assets/MFz2pg.png"
import EndlessRunner from "../../assets/Course Full.png"
import CombatSidescroller from "../../assets/d8ac79e5-e20a-466c-bfab-258e18608a06.png"
import Archvis from "../../assets/f0434478-cebc-4393-9b4f-05bded1ced31.jpg"
import PowerTrip from "../../assets/LvYTvB.png"
import Polysynth from "../../assets/PolySynth.png"
import Rover from "../../assets/Robotics.png"
import TimeSlow from "../../assets/6a7c79ad-53c9-4c57-b301-9965909aa97f.jpg"
import FinanceManager from "../../assets/111fc789-95d7-41b3-817f-4e6268b5f6cf.jpg"
import Unika from "../../assets/Unika 8.jpg"

function projects() {
  return (
    <div className="container py-4">
      <div>
        <h3 style={{ textAlign: 'left' }}>Projects</h3>
        <p style={{ textAlign: 'justify' }}>
          A list of projects that I have made/been involved in so far.
        </p>
      </div>
      <div>
        <ListMember
          title="Flip"
          image={Flip}
          description="A third-person shooter made for the 2022 Epic MegaJam. The player can switch gravity planes to navigate mirrored versions of the arena."
          tools={[
            "Unreal Engine 5",
            "C++",
            "Blueprints",
            "Blender",
            "GIMP"
          ]}>
            <a href="https://edward-shanon.itch.io/flip" className="card-link">Play the game now on itch.io</a>
          </ListMember>
        
        <ListMember
          title="Power Trip"
          image={PowerTrip}
          description="A small game about patience. Made for the 2025 Bigmode Game Jam. A third person shooter where the player fights enemies and descends further
          down the tower."
          tools={[
            "Unreal Engine 5",
            "C++",
            "Blueprints",
            "GIMP"
          ]}
        >
          <a href="https://edward-shanon.itch.io/power-trip" className="card-link">Play the game now on itch.io</a>
        </ListMember>

        <ListMember
          title="Modding"
          image={Unika}
          description="Have done some modding work for Unreal Engine games and have publicly available texture and music mods for the unreal game Guilty Gear -Strive-."
          tools={[
            "Unreal Engine 4",
            "GIMP",
            "Audacity"
          ]}
        >
          <a href="https://gamebanana.com/members/2844343" className="card-link">My gamebanana profile that has all of my publicly available mods</a>
        </ListMember>

        <ListMember
          title="Side Scroller"
          image={CombatSidescroller}
          description="A combat focused side scroller where the player fights against hordes of skeletons."
          tools={[
            "Unity",
            "C#",
            "GIMP"
          ]}
        />

        <ListMember
           title="Endless Runner"
           image={EndlessRunner}
           description="An endless runner game made in Unreal Engine 4 using a combination of Blueprints and C++."
           tools={[
            "Unreal Engine 4",
            "C++",
            "Blueprints",
            "Adobe Premiere Pro"
           ]}
        />

        <ListMember
          title="Realtime Archvis Prototype"
          image={Archvis}
          description="A prototype of a tool made in Unreal Engine that allows users to place walls, floors and other props into
          an environment and then use them to build 3D architectural visualisation in realtime. The tool also allowed users to 
          add descriptions and let the users import their own meshes for use in the environment (The import features were incomplete)."
          tools={[
            "Unreal Engine 5",
            "C++",
            "Blueprints"
          ]} 
        />

        <ListMember
          title="Remote Polysynth"
          image={Polysynth}
          description="A project made for the Raspberry Pi but can be used on any platform that can run Sonic Pi. Allows the user to 
          use an Android App to control the note played and switch the synth in real time."
          tools={[
            "Android Studio",
            "Sonic Pi",
            "Java",
            "Ruby"
          ]}
        />

        <ListMember
          title="Time slow prototype"
          image={TimeSlow}
          description="A prototype for a shooter in which the player is pitted against a relentless wave of enemies and has the ability to
          slow down time for everyone except themselves."
          tools={[
            "Unreal Engine 5",
            "C++",
            "Blueprints",
            "Blender",
            "GIMP"
          ]} 
        />

        <ListMember
          title="Line following proximity Rover"
          image={Rover}
          description="A proximity rover that could follow an object while adhering to paths fixed for it."
          tools={[
            "Arduino Uno",
            "Arduino IDE (C++)",
            "Rover Chasis",
            "2 Ultrasonic Sensors",
            "1 Infrared Sensor",
            "Arduino Motor Driver Board",
            "Jumper Wires"
          ]} 
        />

        <ListMember
          title="AI-Powered Finance Manager"
          image={FinanceManager}
          description="Worked in a team where I created the browser-side Frontend for an AI-Powered Finance 
          Manager and Backend that allows the user to send and receive data from the model."
          tools={[
            "ReactJS",
            "ExpressJS"
          ]} 
        />
      </div>
    </div>
  );
}

export default projects