function Host({ name, picture }) {
    const [firstName, lastName] = name.split(" ");

    return (
        <div className="host">
            <p className="host__name">
                {firstName}
                <br />
                {lastName}
            </p>
            <img
                src={picture}
                alt={name}
                className="host__picture"
            />
        </div>
    );
}

export default Host;