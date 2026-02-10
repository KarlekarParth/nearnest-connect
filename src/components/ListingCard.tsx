import { Star, MapPin, Shield, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ListingCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  type: string;
  gender: string;
  verified?: boolean;
}

const ListingCard = ({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  type,
  gender,
  verified = true,
}: ListingCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
          <Heart className="h-4 w-4 text-muted-foreground" />
        </button>
        {verified && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-verified/90 backdrop-blur-sm">
            <Shield className="h-3 w-3 text-secondary-foreground" />
            <span className="text-[10px] font-semibold text-secondary-foreground uppercase tracking-wide">
              Verified
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-card-foreground leading-snug line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="h-3.5 w-3.5 fill-current text-secondary" />
            <span className="text-sm font-medium text-card-foreground">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs font-medium">{type}</Badge>
          <Badge variant="outline" className="text-xs font-medium">{gender}</Badge>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xl font-bold text-primary">₹{price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
          <button className="text-sm font-medium text-primary hover:underline">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
