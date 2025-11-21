import { Star } from "lucide-react";

const GoogleReviews = () => {
  return (
    <div className="bg-card border rounded-lg p-4 inline-flex items-center gap-3 shadow-sm">
      <div className="flex items-center gap-1">
        <img 
          src="https://www.google.com/favicon.ico" 
          alt="Google" 
          className="w-5 h-5"
          width="20"
          height="20"
        />
        <span className="font-semibold text-sm">Google Reviews</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <span className="font-bold text-lg">4.8</span>
      </div>
      <div className="text-xs text-muted-foreground border-l pl-3">
        127 reviews
      </div>
    </div>
  );
};

export default GoogleReviews;