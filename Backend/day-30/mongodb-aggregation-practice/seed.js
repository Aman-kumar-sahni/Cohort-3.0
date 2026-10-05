import mongoose from "mongoose";
import "dotenv/config";

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  director: String,
  year: Number,
  rating: Number,
  budget: Number,
  language: String
});

const Movie = mongoose.model("Movie", movieSchema);

const movies = [
  {
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
    budget: 185,
    language: "English"
  },
  {
    title: "Inception",
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    budget: 160,
    language: "English"
  },
  {
    title: "Interstellar",
    genre: ["Sci-Fi", "Drama"],
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.7,
    budget: 165,
    language: "English"
  },
  {
    title: "Avengers: Endgame",
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Anthony Russo",
    year: 2019,
    rating: 8.4,
    budget: 356,
    language: "English"
  },
  {
    title: "Avengers: Infinity War",
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Anthony Russo",
    year: 2018,
    rating: 8.4,
    budget: 321,
    language: "English"
  },
  {
    title: "Joker",
    genre: ["Crime", "Drama", "Thriller"],
    director: "Todd Phillips",
    year: 2019,
    rating: 8.3,
    budget: 55,
    language: "English"
  },
  {
    title: "The Hangover",
    genre: ["Comedy"],
    director: "Todd Phillips",
    year: 2009,
    rating: 7.7,
    budget: 35,
    language: "English"
  },
  {
    title: "3 Idiots",
    genre: ["Comedy", "Drama"],
    director: "Rajkumar Hirani",
    year: 2009,
    rating: 8.4,
    budget: 55,
    language: "Hindi"
  },
  {
    title: "Dangal",
    genre: ["Biography", "Drama", "Sport"],
    director: "Nitesh Tiwari",
    year: 2016,
    rating: 8.3,
    budget: 70,
    language: "Hindi"
  },
  {
    title: "PK",
    genre: ["Comedy", "Drama", "Fantasy"],
    director: "Rajkumar Hirani",
    year: 2014,
    rating: 8.1,
    budget: 85,
    language: "Hindi"
  },
  {
    title: "Drishyam",
    genre: ["Crime", "Drama", "Mystery"],
    director: "Nishikant Kamat",
    year: 2015,
    rating: 8.2,
    budget: 6,
    language: "Hindi"
  },
  {
    title: "Zindagi Na Milegi Dobara",
    genre: ["Comedy", "Drama", "Adventure"],
    director: "Zoya Akhtar",
    year: 2011,
    rating: 8.2,
    budget: 55,
    language: "Hindi"
  },
  {
    title: "Taare Zameen Par",
    genre: ["Drama", "Family"],
    director: "Aamir Khan",
    year: 2007,
    rating: 8.3,
    budget: 12,
    language: "Hindi"
  },
  {
    title: "KGF Chapter 1",
    genre: ["Action", "Drama"],
    director: "Prashanth Neel",
    year: 2018,
    rating: 8.2,
    budget: 80,
    language: "Kannada"
  },
  {
    title: "RRR",
    genre: ["Action", "Drama"],
    director: "S. S. Rajamouli",
    year: 2022,
    rating: 8.0,
    budget: 550,
    language: "Telugu"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Movie.deleteMany({});

    await Movie.insertMany(movies);

    console.log(`${movies.length} movies seeded successfully`);

    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();