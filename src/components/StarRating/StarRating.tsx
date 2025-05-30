import React from 'react';
import { StarImage, StarRow } from './StarRatingStyle';
import { Images } from '../../utils/theme';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <StarRow>
      {[...Array(maxStars)].map((_, index) => {
        const isFilled = index < fullStars;
        const isHalf = index === fullStars && hasHalfStar;

        return (
          <StarImage
            key={index}
            source={isFilled || isHalf ? Images.starIcon : Images.halfStarIcon}
          />
        );
      })}
    </StarRow>
  );
};

export default StarRating;
