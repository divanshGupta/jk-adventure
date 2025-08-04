export const tourPackages = [
  // TOUR PACKAGE
  {
    id: 1,
    category: 'tour',
    slug: 'leh-ladakh-bike-trip',
    title: 'Leh-Ladakh Bike Trip',
    images: ['/images/img7.jpg', '/images/img6.jpg', '/images/img5.jpg', '/images/img8.jpg', '/images/img9.jpg'],
    price: 22999,
    discountedPrice: '2499',
    time: '7 Days / 6 Nights',
    location: 'Leh, Ladakh',
    description:
      'An unforgettable bike journey through the scenic valleys and passes of Ladakh.',
    includes: [
      'Bike with fuel',
      'Accommodation',
      'Meals (Breakfast & Dinner)',
      'Backup vehicle',
    ],
    itinerary: [
      'Day 1: Arrival at Leh',
      'Day 2: Leh sightseeing',
      'Day 3: Ride to Nubra',
      'Day 4: Pangong Lake',
      'Day 5: Return to Leh',
      'Day 6: Rest & Explore',
      'Day 7: Departure',
    ],
    reviews: [
      { name: 'Rahul Sharma', comment: 'Epic experience!' },
      { name: 'Aditi Verma', comment: 'Well organized trip!' },
    ],
  },
  // TOUR PACKAGE
  {
    id: 2,
    category: 'tour',
    slug: 'golden-triangle-tour',
    title: 'Golden Triangle Tour (Delhi, Agra, Jaipur)',
    images: ['/images/img7.jpg', '/images/img6.jpg', '/images/img5.jpg'],
    price: 16999,
    discountedPrice: '2499',
    time: '5 Days / 4 Nights',
    location: 'Delhi - Agra - Jaipur',
    description:
      'Explore the heritage cities of North India with guided tours and cultural stays.',
    includes: [
      'AC Transportation',
      'Hotel Stay',
      'Daily Breakfast',
      'Sightseeing with Guide',
    ],
    itinerary: [
      'Day 1: Delhi local tour',
      'Day 2: Agra - Taj Mahal',
      'Day 3: Jaipur arrival & City Palace',
      'Day 4: Amber Fort',
      'Day 5: Return to Delhi',
    ],
    reviews: [
      { name: 'Arun Mishra', comment: 'Well curated!' },
      { name: 'Priya Dey', comment: 'Family loved it!' },
    ],
  },
];

export const taxiPackages = [
   // TAXI SERVICE
  {
    id: 1,
    category: 'taxi',
    slug: 'delhi-to-manali-sedan',
    title: 'Taxi from Delhi to Manali (Sedan)',
    images: ['/images/taxi1.jpg'],
    price: 5499,
    duration: '12 Hours',
    location: 'Delhi to Manali',
    description:
      'Comfortable one-way ride in AC Sedan (4-seater) with experienced driver.',
    includes: [
      'Fuel charges',
      'Driver charges',
      'Toll & taxes',
    ],
    itinerary: [
      'Pickup from your location in Delhi',
      'Tea break at Murthal',
      'Scenic drive through Himachal valleys',
      'Drop at Manali hotel/center',
    ],
    reviews: [
      { name: 'Puneet Thakur', comment: 'Safe and smooth ride!' },
    ],
  },
];

export const bikePackages = [
  // BIKE RENTAL
  {
    id: 1,
    category: 'bike',
    slug: 'royal-enfield-350-rental',
    title: 'Royal Enfield Classic 350 (Rental)',
    images: ['/images/bike1.jpg'],
    price: 1499,
    duration: 'Per Day',
    location: 'Manali',
    description:
      'Rent a powerful Classic 350 for your mountain adventures. Helmet & documents included.',
    includes: [
      'Bike',
      'Helmet',
      'RC & Insurance copy',
    ],
    itinerary: ['Pickup from our garage', 'Free to ride anywhere in region'],
    reviews: [
      { name: 'Simran Kaur', comment: 'Loved riding in hills!' },
    ],
  },
];
// ADVENTURE ACTIVITY
export const adventurePackages = [
  
  {
    id: 1,
    category: 'adventure',
    slug: 'rafting-in-rishikesh',
    title: 'River Rafting in Rishikesh',
    images: ['/images/img4.jpg'],
    price: 899,
    discountedPrice: 599,
    duration: '1 Day',
    location: 'Rishikesh, Uttarakhand',
    description:
      'Experience the thrill of rafting on the Ganga with certified instructors and safety gear.',
    includes: [
      'Raft & Gear',
      'Instructor',
      'Safety Jacket & Helmet',
    ],
    itinerary: [
      'Arrival at camp',
      'Briefing & gear check',
      'Rafting from Shivpuri to Ram Jhula (16km)',
    ],
    reviews: [
      { name: 'Karan Joshi', comment: 'Adrenaline rush!' },
      { name: 'Meena Gupta', comment: 'Loved the energy!' },
    ],
  },
  {
    id: 2,
    category: 'adventure',
    slug: 'paragliding-bir-billing',
    title: 'Paragliding in Bir Billing',
    images: ['/images/img5.jpg'],
    price: 2999,
    discountedPrice: 1999,
    duration: '1 Day',
    location: 'Bir Billing, Himachal Pradesh',
    description:
      'Fly like a bird over the scenic valley of Bir with certified pilots.',
    includes: [
      'Paragliding gear',
      'Pilot & safety checks',
      'Transport to takeoff site',
    ],
    itinerary: ['Registration', 'Drive to takeoff point', '15–20 min flight'],
    reviews: [
      { name: 'Nisha Rana', comment: 'Dream come true!' },
    ],
  },
  {
    id: 3,
    category: 'adventure',
    slug: 'rafting-in-dal-lake',
    title: 'River Rafting in Srinagar',
    images: ['/images/img6.jpg'],
    price: 1899,
    discountedPrice: 1599,
    duration: '1 Day',
    location: 'Srinagar, Jammu and Kashmir',
    description:
      'Experience the thrill of rafting on the Ganga with certified instructors and safety gear.',
    includes: [
      'Raft & Gear',
      'Instructor',
      'Safety Jacket & Helmet',
    ],
    itinerary: [
      'Arrival at camp',
      'Briefing & gear check',
      'Rafting from Shivpuri to Ram Jhula (16km)',
    ],
    reviews: [
      { name: 'Karan Joshi', comment: 'Adrenaline rush!' },
      { name: 'Meena Gupta', comment: 'Loved the energy!' },
    ],
  },
  {
    id: 4,
    category: 'adventure',
    slug: 'rafting-in-dal-lake',
    title: 'River Rafting in Srinagar',
    images: ['/images/img6.jpg'],
    price: 1899,
    discountedPrice: 1599,
    duration: '1 Day',
    location: 'Srinagar, Jammu and Kashmir',
    description:
      'Experience the thrill of rafting on the Ganga with certified instructors and safety gear.',
    includes: [
      'Raft & Gear',
      'Instructor',
      'Safety Jacket & Helmet',
    ],
    itinerary: [
      'Arrival at camp',
      'Briefing & gear check',
      'Rafting from Shivpuri to Ram Jhula (16km)',
    ],
    reviews: [
      { name: 'Karan Joshi', comment: 'Adrenaline rush!' },
      { name: 'Meena Gupta', comment: 'Loved the energy!' },
    ],
  },
];

export const allServices = {
  tours: tourPackages,
  taxis: taxiPackages,
  bikes: bikePackages,
  adventures: adventurePackages,
};

