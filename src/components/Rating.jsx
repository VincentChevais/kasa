function Rating({ value }) {
    const rating = Number(value);

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <img
                    key={star}
                    src={
                        star <= rating
                            ? "/assets/rating-red.svg"
                            : "/assets/rating-grey.svg"
                    }
                    alt=""
                    className="rating__star"
                />
            ))}
        </div>
    );
}

export default Rating;