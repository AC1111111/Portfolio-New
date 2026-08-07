import "./Render.css"
import Revenant from "../../assets/unnamed (1).webp"
import Murdock from "../../assets/2020-09-08.png"
import Twinblast from "../../assets/unnamed.webp"
import Emissaries from "../../assets/Emissaries.png"

function RenderMain() {
    const renders = [Emissaries, Revenant, Twinblast, Murdock]
    return (
        <div className="container py-4">
            <div>
                <h3 style={{ textAlign: 'left' }}>Renders</h3>
                <p style={{ textAlign: 'justify' }}>
                    I also like messing around in Unreal and other software to make renders. Here are some that I'm proud of. Some of the character models used are third
                    party.
                </p>
            </div>
            <div></div>
            <div className="row g-4">
                {renders.map((render, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <a href={render} target="_blank" rel="noopener noreferrer">
                            <img
                                src={render}
                                alt={`Render ${index + 1}`}
                                className="render-image"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RenderMain