function ListMember({
    title,
    image,
    description,
    tools,
    children
}) {
    return (
        <div className="card mb-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={image}
                        alt={title}
                        className="img-fluid rounded-start h-100"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h2>{title}</h2>

                        <p>{description}</p>

                        <h6>Tools/Tech</h6>

                        <div className="mb-3">
                            {tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="badge bg-secondary me-2"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMember