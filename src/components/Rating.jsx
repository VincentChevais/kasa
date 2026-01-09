function Rating({ value }) {
    const rating = Number(value);

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`rating__star ${star <= rating ? "rating__star--active" : ""
                        }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default Rating;