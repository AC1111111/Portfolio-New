import "./Card.css";

function CardNoLink({
    title,
    tagline,
    description,
    image,
    imageAlt
}) {
    return (
        <div className="card project-card text-white bg-primary mb-3" style={{ maxWidth: "250px" }}>
            <h3 className="card-header">{title}</h3>

            <div className="image-container">
                <img
                    src={image}
                    alt={imageAlt}
                    className="card-img-top"
                    style={{ height: "400px", objectFit: "cover" }}
                />
            </div>
            <div className="overlay">
                <div className="card-body">
                    <h5 className="card-title">{tagline}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardNoLink;