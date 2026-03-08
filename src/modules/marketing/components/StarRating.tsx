const StarRating = ({ rating }: { rating: number }) => {
  const filledStar = "★";
  const emptyStar = "☆";

  return (
    <div className="flex text-yellow-500 text-2xl">
      {Array.from({ length: 5 }, (_, index) =>
        index < rating ? (
          <span key={index}>{filledStar}</span>
        ) : (
          <span key={index} className="text-gray-400">
            {emptyStar}
          </span>
        ),
      )}
    </div>
  );
};

export default StarRating;
