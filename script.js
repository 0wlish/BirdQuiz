const images = [
    //region is either "EU" or "NA"
    //difficulty is "E", "M", "H"
    {url: "img_0.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Mute Swan", 
        region: "EU", location: "Switzerland", difficulty: "E", 
        notes: ""},
    {url: "img_1.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Common Merganser", 
        region: "EU", location: "Switzerland", difficulty: "M", 
        notes: ""},
    {url: "img_2.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Song Sparrow", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_3.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Black-capped Chickadee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_4.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Chipping Sparrow", 
        region: "NA", location: "Vermont, USA", difficulty: "M", 
        notes: ""},
    {url: "img_5.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Red-breasted Nuthatch", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_6.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Sanderling", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "Semipalmated Sandpipers have similar plumage patters, but they are warmer in color. Least Sandpipers have yellow legs, not black."},
    {url: "img_7.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Mute Swan", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "This Mute Swan is immature!"},
    {url: "img_8.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "American Herring Gull", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Immature bird in third-winter plumage."},
    {url: "img_9.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Ring-billed Gull", 
        region: "NA", location: "New Hampshire, USA", difficulty: "E", 
        notes: ""},
    {url: "img_10.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Common Merganser", 
        region: "NA", location: "New Hampshire, USA", difficulty: "M", 
        notes: "Female with a single chick."},
    {url: "img_11.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Common Loon", 
        region: "NA", location: "New Hampshire, USA", difficulty: "E", 
        notes: ""},
    {url: "img_12.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Mallard", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_13.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Green Heron", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_14.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "White-breasted Nuthatch", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_15.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Dark-eyed Junco", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_16.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "American Oystercatcher", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_17.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Herring Gull", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_18.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Ovenbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_19.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Double-crested Cormorant", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_20.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Alpine Chough", 
        region: "EU", location: "Switzerland", difficulty: "H", 
        notes: ""},
    {url: "img_21.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Wild Turkey", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Hen with two chicks, also known as poults."},
    {url: "img_22.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Mute Swan", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_23.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Northern Mockingbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_24.jpg", 
        o1: "Great Egret", o2: "Great Blue Heron", o3: "Snowy Egret", o4: "Cattle Egret", 
        answer: "Great Blue Heron", 
        region: "NA", location: "Florida, USA", difficulty: "H", 
        notes: "Although this may seem like a Great Egret, note the pale legs. This bird is a subspecies of the Great Blue Heron that is only found in Key West, Florida."},
    {url: "img_25.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Common Grackle", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_26.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Black-crowned Night Heron", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_27.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Canada Goose", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_28.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "House Sparrow", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_29.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Rock Dove", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_30.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "European Robin", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_31.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Eurasian Collared Dove", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_32.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Eurasian Blackbird", 
        region: "EU", location: "Spain", difficulty: "H", 
        notes: ""},
    {url: "img_33.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Rose-ringed Parakeet", 
        region: "EU", location: "Italy", difficulty: "E", 
        notes: ""},
    {url: "img_34.jpg", 
        o1: "Common Wood Pigeon", o2: "Rock Dove", o3: "Eurasian Collared Dove", o4: "Mourning Dove", 
        answer: "Common Wood Pigeon", 
        region: "EU", location: "Spain", difficulty: "H", 
        notes: ""},
    {url: "img_35.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Egyptian Goose", 
        region: "EU", location: "Spain", difficulty: "M", 
        notes: ""},
    {url: "img_36.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Monk Parakeet", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_37.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Eurasian Magpie", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_38.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Northern Cardinal", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_39.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Black-capped Chickadee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_40.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Red-winged Blackbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_41.jpg", 
        o1: "American Robin", o2: "European Robin", o3: "Spotted Towhee", o4: "Eastern Towhee", 
        answer: "Eastern Towhee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: ""},
    {url: "img_42.jpg", 
        o1: "", o2: "", o3: "", o4: "", answer: "Red-crested Pochard", 
        region: "EU", location: "Switzerland", difficulty: "H", 
        notes: ""},
];