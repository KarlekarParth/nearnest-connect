import ListingCard from "./ListingCard";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";
import listing5 from "@/assets/listing-5.jpg";
import listing6 from "@/assets/listing-6.jpg";

const listings = [
  {
    image: listing1,
    title: "Sunshine Student Home",
    location: "Koramangala, Bangalore",
    price: 8500,
    rating: 4.8,
    reviews: 124,
    type: "PG",
    gender: "Unisex",
  },
  {
    image: listing2,
    title: "GreenLeaf Co-living",
    location: "Andheri West, Mumbai",
    price: 12000,
    rating: 4.6,
    reviews: 89,
    type: "Co-Living",
    gender: "Unisex",
  },
  {
    image: listing3,
    title: "Urban Nest Hostel",
    location: "Hauz Khas, Delhi",
    price: 7000,
    rating: 4.5,
    reviews: 203,
    type: "Hostel",
    gender: "Boys",
  },
  {
    image: listing4,
    title: "CityView Premium PG",
    location: "Hinjewadi, Pune",
    price: 9500,
    rating: 4.9,
    reviews: 67,
    type: "PG",
    gender: "Unisex",
  },
  {
    image: listing5,
    title: "Blossom Girls Hostel",
    location: "Whitefield, Bangalore",
    price: 6500,
    rating: 4.7,
    reviews: 156,
    type: "Hostel",
    gender: "Girls",
  },
  {
    image: listing6,
    title: "BlueSky Boys PG",
    location: "Powai, Mumbai",
    price: 10000,
    rating: 4.4,
    reviews: 98,
    type: "PG",
    gender: "Boys",
  },
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Featured Listings
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Hand-picked verified PGs and hostels loved by students across India
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", "PG", "Hostel", "Co-Living", "Boys", "Girls", "Unisex"].map(
            (filter, i) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.title} {...listing} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
