const images = [
    //region is either "EU" or "NA"
    //difficulty is "E", "M", "H"
    {url: "img_0.jpg", 
        o1: "Tundra Swan", o2: "Whooper Swan", o3: "Mute Swan", o4: "Barnacle Goose", 
        answer: "Mute Swan", 
        region: "EU", location: "Switzerland", difficulty: "E", 
        notes: "Based off of range, the Tundra Swan, the Whooper Swan, and the Barnacle Goose can be eliminated."},
    {url: "img_1.jpg", 
        o1: "Common Merganser", o2: "Mallard", o3: "Northern Shoveler", o4: "Eurasian Teal", 
        answer: "Common Merganser", 
        region: "EU", location: "Switzerland", difficulty: "M", 
        notes: "Note the white sides, the black back, and the small bill. Mallards and Shovelers have large rounded bills, and Eurasian Teals have grey-ish sides."},
    {url: "img_2.jpg", 
        o1: "House Finch", o2: "House Sparrow", o3: "Song Sparrow", o4: "Savannah Sparrow", 
        answer: "Song Sparrow", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Female House Sparrows and House Finches lack distinctive streaking. The Savannah Sparrow has a yellowy face."},
    {url: "img_3.jpg", 
        o1: "Carolina Chickadee", o2: "Black-capped Chickadee", o3: "White-breasted Nuthatch", o4: "Boreal Chickadee", 
        answer: "Black-capped Chickadee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Based off of range, we can eliminate the Carolina Chickadee and the Boreal Chickadee. The White-breasted Nuthatch has a white patch over its eye, while this bird does not."},
    {url: "img_4.jpg", 
        o1: "Chipping Sparrow", o2: "American Tree Sparrow", o3: "House Sparrow", o4: "Field Sparrow", 
        answer: "Chipping Sparrow", 
        region: "NA", location: "Vermont, USA", difficulty: "M", 
        notes: "This bird has a black stripe over its eye, which the American Tree Sparrow and the Field Sparrow lack. House Sparrows have a grey cap, not a chestnut cap."},
    {url: "img_5.jpg", 
        o1: "White-breasted Nuthatch", o2: "Red-breasted Nuthatch", o3: "Black-capped Chickadee", o4: "Brown-headed Nuthatch", 
        answer: "Red-breasted Nuthatch", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Neither White-breasted Nuthatch, the Black-capped Chickadee, or the Brown-headed Nuthatch have a black stripe over the eye with a white eyebrow."},
    {url: "img_6.jpg", 
        o1: "Semipalmated Sandpiper", o2: "Least Sandpiper", o3: "Sanderling", o4: "Western Sandpiper", 
        answer: "Sanderling", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "Semipalmated Sandpipers have similar plumage patters, but they are warmer in color. Least Sandpipers have yellow legs, not black. Western Sandpiper can be eliminated based off of range."},
    {url: "img_7.jpg", 
        o1: "Tundra Swan", o2: "Trumpeter Swan", o3: "Canada Goose", o4: "Mute Swan", 
        answer: "Mute Swan", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Juvenile Tundra and Trumpeter Swans have pinker beaks. Canada Geese have black heads with a white patch on their cheek."},
    {url: "img_8.jpg", 
        o1: "California Gull", o2: "American Herring Gull", o3: "Ring-billed Gull", o4: "Great Black-backed Gull", 
        answer: "American Herring Gull", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "The California Gull can be eliminated based off of range. Ring-billed Gulls don't have a red spot on their beaks, and Great Black-backed Gulls have darker backs."},
    {url: "img_9.jpg", 
        o1: "Laughing Gull", o2: "American Herring Gull", o3: "Ring-billed Gull", o4: "Little Gull", 
        answer: "Ring-billed Gull", 
        region: "NA", location: "New Hampshire, USA", difficulty: "E", 
        notes: "Neither the Laughing Gull, the American Herring Gull, or the Little Gull have a black ring on their beak."},
    {url: "img_10.jpg", 
        o1: "Red-breasted Merganser", o2: "Hooded Merganser", o3: "Common Goldeneye", o4: "Common Merganser", 
        answer: "Common Merganser", 
        region: "NA", location: "New Hampshire, USA", difficulty: "M", 
        notes: "Female Red-breasted Mergansers and Hooded Mergansers don't have a pale grey back and belly. Common Goldeneyes have short, thick beaks."},
    {url: "img_11.jpg", 
        o1: "Common Loon", o2: "Common Merganser", o3: "Double-crested Cormorant", o4: "Yellow-billed Loon", 
        answer: "Common Loon", 
        region: "NA", location: "New Hampshire, USA", difficulty: "E", 
        notes: "Yellow-billed Loon can be eliminated based off of range and beak color. Double-crested Cormorants and Common Mergansers don't have characteristic white spots on their backs."},
    {url: "img_12.jpg", 
        o1: "Common Merganser", o2: "Mallard", o3: "Red-breasted Merganser", o4: "Northern Shoveler", 
        answer: "Mallard", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Common Merganser, Red-breasted Merganser, and Northern Shoveler can be eliminated based off of beak shape and plumage patterns."},
    {url: "img_13.jpg", 
        o1: "Least Bittern", o2: "American Bittern", o3: "Black-crowned Night Heron", o4: "Green Heron", 
        answer: "Green Heron", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Least Bitterns and Black-crowned Night Herons don't have white streaking on chest. American Bitterns don't have a dark blue-grey cap."},
    {url: "img_14.jpg", 
        o1: "Red-breasted Nuthatch", o2: "White-breasted Nuthatch", o3: "Black-capped Chickadee", o4: "White Wagtail", 
        answer: "White-breasted Nuthatch", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Red-breasted Nuthatches and Black-capped Chicadees have black feathers around their eyes, while this bird has white feathers. White Wagtails look similar, but they are not found in North America."},
    {url: "img_15.jpg", 
        o1: "Black Phoebe", o2: "Eastern Towhee", o3: "Black-capped Chickadee", o4: "Dark-eyed Junco", 
        answer: "Dark-eyed Junco", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "This bird has an all-grey head and body, which eliminates the Eastern Towhee and the Black-capped Chickadee. Black Phoebes have a dark beak, while this bird has a pale beak."},
    {url: "img_16.jpg", 
        o1: "American Oystercatcher", o2: "Eurasian Oystercatcher", o3: "Black Oystercatcher", o4: "Pied Oystercatcher", 
        answer: "American Oystercatcher", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Based off of range, this is an American Oystercatcher."},
    {url: "img_17.jpg", 
        o1: "Great Black-backed Gull", o2: "Lesser Black-backed Gull", o3: "Herring Gull", o4: "Kelp Gull", 
        answer: "Herring Gull", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "The shadow makes it difficult to see, but this bird has a light grey back. Great Black-backed Gulls, Lesser Black-backed Gulls, and Kelp Gulls have very dark grey backs."},
    {url: "img_18.jpg", 
        o1: "Swainson's Thrush", o2: "Song Sparrow", o3: "Golden-crowned Kinglet", o4: "Ovenbird", 
        answer: "Ovenbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Based off of the orange crest with a black outline, this bird is not a Swainson's Thrush or a Song Sparrow. Golden-crowned Kinglets do not have spotting on their chest and are very small birds, so this is an Ovenbird."},
    {url: "img_19.jpg", 
        o1: "Neotropic Cormorant", o2: "Double-Crested Cormorant", o3: "Great Cormorant", o4: "Anhinga", 
        answer: "Double-crested Cormorant", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Based off of range, it cannot be an Anhinga or a Neotropic Cormorant. These birds have all-black heads so they are most likely Double-crested Cormorants."},
    {url: "img_20.jpg", 
        o1: "Alpine Chough", o2: "Red-billed Chough", o3: "Eurasian Blackbird", o4: "Carrion Crow", 
        answer: "Alpine Chough", 
        region: "EU", location: "Switzerland", difficulty: "H", 
        notes: "Note the yellow beak, the orange feet, and the habitat. Red-billed Choughs and Eurasian Blackbirds have orange beaks, and Carrion Crows have black beaks. None of these three birds are commonly found in high altitudes."},
    {url: "img_21.jpg", 
        o1: "Ring-necked Pheasant", o2: "Ruffed Grouse", o3: "Wild Turkey", o4: "Velociraptor", 
        answer: "Wild Turkey", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "General shape and pattern are characteristic of Wild Turkeys. This is a hen with two chicks, which are also known as poults."},
    {url: "img_22.jpg", 
        o1: "Whooper Swan", o2: "Trumpeter Swan", o3: "Mute Swan", o4: "Tundra Swan", 
        answer: "Mute Swan", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_23.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Northern Mockingbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_24.jpg", 
        o1: "Great Egret", o2: "Great Blue Heron", o3: "Snowy Egret", o4: "Cattle Egret", 
        answer: "Great Blue Heron", 
        region: "NA", location: "Florida, USA", difficulty: "H", 
        notes: "Although this may seem like a Great Egret, note the pale legs. This bird is a subspecies of the Great Blue Heron that is only found in Key West, Florida."},
    {url: "img_25.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Common Grackle", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_26.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Black-crowned Night Heron", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_27.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Canada Goose", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_28.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "House Sparrow", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_29.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Rock Dove", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_30.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "European Robin", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_31.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Eurasian Collared Dove", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_32.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Eurasian Blackbird", 
        region: "EU", location: "Spain", difficulty: "H", 
        notes: ""},
    {url: "img_33.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Rose-ringed Parakeet", 
        region: "EU", location: "Italy", difficulty: "E", 
        notes: ""},
    {url: "img_34.jpg", 
        o1: "Common Wood Pigeon", o2: "Rock Dove", o3: "Eurasian Collared Dove", o4: "Mourning Dove", 
        answer: "Common Wood Pigeon", 
        region: "EU", location: "Spain", difficulty: "H", 
        notes: ""},
    {url: "img_35.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Egyptian Goose", 
        region: "EU", location: "Spain", difficulty: "M", 
        notes: ""},
    {url: "img_36.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Monk Parakeet", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_37.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Eurasian Magpie", 
        region: "EU", location: "Spain", difficulty: "E", 
        notes: ""},
    {url: "img_38.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Northern Cardinal", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_39.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Black-capped Chickadee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: ""},
    {url: "img_40.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Red-winged Blackbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_41.jpg", 
        o1: "American Robin", o2: "European Robin", o3: "Spotted Towhee", o4: "Eastern Towhee", 
        answer: "Eastern Towhee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: ""},
    {url: "img_42.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Red-crested Pochard", 
        region: "EU", location: "Switzerland", difficulty: "H", 
        notes: ""},
    {url: "img_43.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Eurasian Coot", 
        region: "EU", location: "Switzerland", difficulty: "E", 
        notes: ""},
    {url: "img_44.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Black Swan", 
        region: "EU", location: "Switzerland", difficulty: "M", 
        notes: ""},
    {url: "img_45.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "American Robin", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "A robin in juvenile plumage! They're more yellowy than an adult and have spots on their breast."},
    {url: "img_46.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Ruby-throated Hummingbird", 
        region: "NA", location: "New Hampshire, USA", difficulty: "M", 
        notes: ""},
    {url: "img_47.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Wood Duck", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: ""},
    {url: "img_48.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Eurasian Starling", 
        region: "NA", location: "New York, USA", difficulty: "M", 
        notes: ""},
    {url: "img_49.jpg", 
        o1: "", o2: "", o3: "", o4: "", 
        answer: "Ring-billed Duck", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: ""},
    {url: "img_50.jpg", 
        o1: "Mallard", o2: "American Black Duck", o3: "Mottled Duck", o4: "Northern Shoveler", 
        answer: "Mallard", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_51.jpg", 
        o1: "Double-crested Cormorant", o2: "Anhinga", o3: "European Shag", o4: "Great Cormorant", 
        answer: "Great Cormorant", 
        region: "EU", location: "France", difficulty: "M", 
        notes: ""},
    {url: "img_52.jpg", 
        o1: "Grey Heron", o2: "Great Blue Heron", o3: "Western Reef Egret", o4: "Purple Heron", 
        answer: "Grey Heron", 
        region: "EU", location: "France", difficulty: "E", 
        notes: "This looks like a Great Blue Heron, but Great Blues are not found in France. Their European counterpart, with similar plumage but no overlapping range, is the Grey Heron."},
    {url: "img_53.jpg", 
        o1: "Wild Turkey", o2: "Greater Prairie-chicken", o3: "Ring-necked Pheasant", o4: "Golden Pheasant", 
        answer: "Ring-necked Pheasant", 
        region: "NA", location: "New York, USA", difficulty: "H", 
        notes: ""},
    {url: "img_54.jpg", 
        o1: "Spotted Sandpiper", o2: "Solitary Sandpiper", o3: "Greater Yellowlegs", o4: "Dunlin", 
        answer: "Solitary Sandpiper", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: ""},
    {url: "img_55.jpg", 
        o1: "Roseate Tern", o2: "Forster's Tern", o3: "Common Tern", o4: "Least Tern", 
        answer: "Least Tern", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "Notice the pale orange bills and the white triangles on their foreheads. Common Terns, Roseate Terns, and Forster's Terns have more reddish-orange beaks and are larger birds."},
    {url: "img_56.jpg", 
        o1: "Killdeer", o2: "Pacific Golden-plover", o3: "Black-bellied Plover", o4: "American Golden-plover", 
        answer: "American Golden-plover", 
        region: "NA", location: "New York, USA", difficulty: "H", 
        notes: "By plumage, we can eliminate the Killdeer, and by range, we can eliminate the Pacific Golden-plover. That just leaves the Black-bellied Plover and the American Golden-plover. Both birds are very similar, but the American Golden has a white stripe and a black spot on its head, while the Black-bellied only has a white spot."},
    {url: "img_57.jpg", 
        o1: "Eurasian Tree Sparrow", o2: "House Sparrow", o3: "Italian Sparrow", o4: "Common Chaffinch", 
        answer: "House Sparrow", 
        region: "EU", location: "Estonia", difficulty: "E", 
        notes: ""},
    {url: "img_58.jpg", 
        o1: "Greater Yellowlegs", o2: "Willet", o3: "Spotted Sandpiper", o4: "Semipamated Plover", 
        answer: "Ring-necked Pheasant", 
        region: "NA", location: "New Hampshire, USA", difficulty: "H", 
        notes: ""},
    {url: "img_59.jpg", 
        o1: "American Black Duck", o2: "Wood Duck", o3: "Mallard", o4: "Double-crested Cormorant", 
        answer: "Mallard", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: ""},
    {url: "img_60.jpg", 
        o1: "Common Magpie", o2: "Western Jackdaw", o3: "Carrion Crow", o4: "Hooded Crow", 
        answer: "Hooded Crow", 
        region: "EU", location: "Italy", difficulty: "M", 
        notes: ""},
    {url: "img_61.jpg", 
        o1: "Black Redstart", o2: "Common Redstart", o3: "Güldenstädt's Redstart", o4: "Common Rock Thrush", 
        answer: "Black Redstart", 
        region: "EU", location: "Italy", difficulty: "H", 
        notes: "Güldenstädt's Redstart can be eliminated through range. The Common Rock Thrush has scaly plumage, which this bird does not. Between the Black Redstart and the Common Redstart, the female Black Redstart is a cool grey while the female Common Redstart is more dusty."},
    {url: "img_62.jpg", 
        o1: "Coal Tit", o2: "Blue Tit", o3: "Pied Wagtail", o4: "White Wagtail", 
        answer: "White Wagtail", 
        region: "EU", location: "Italy", difficulty: "E", 
        notes: "This bird's white spot extends over the eyes, while the Coal Tit's eyes are surrounded with black feathers and the Blue Tit has a black \"mask\" and a blue crown. The Pied Wagtail is a subspecies found in the British Isles."},
    {url: "img_63.jpg", 
        o1: "Italian Sparrow", o2: "House Sparrow", o3: "Eurasian Tree Sparrow", o4: "Spanish Sparrow", 
        answer: "Italian Sparrow", 
        region: "EU", location: "Italy", difficulty: "M", 
        notes: "House Sparrows and Spanish Sparrows are not found on the Italian peninsula, so they can be eliminated. This bird looks a lot like a Tree Sparrow, but it has a white supercilium (\"eyebrow\"), and it lacks the black spot that Tree Sparrows have on their cheeks. Italian Sparrows have both a white supercilium and a white cheek."},
    {url: "img_64.jpg", 
        o1: "Great Egret", o2: "Cattle Egret", o3: "White Stork", o4: "Little Egret", 
        answer: "Cattle Egret", 
        region: "EU", location: "Italy", difficulty: "H", 
        notes: "Based off of range, the White Stork can be eliminated. These birds appear to have pale legs, unlike Great Egrets and Little Egrets. In addition, they're grazing in a field, while Great and Little Egrets are typically found near water."},
    {url: "img_65.jpg", 
        o1: "Water Rail", o2: "Eurasian Moorhen", o3: "Eurasian Coot", o4: "Purple Swamphen", 
        answer: "Eurasian Moorhen", 
        region: "EU", location: "Italy", difficulty: "E", 
        notes: "Based off of the red beak with a yellow tip, we can safely say that this is a Eurasian Moorhen. Water Rails are lighter grey, Eurasian Coots have a white beak, and the Purple Swamphen has an all-red beak."},
    {url: "img_66.jpg", 
        o1: "Cooper's Hawk", o2: "Sharp-shinned Hawk", o3: "Red-tailed Hawk", o4: "Broad-winged Hawk", 
        answer: "Cooper's Hawk", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "When I was making this quiz, I thought this was an easy Red-tailed Hawk, but I thought I should check to be sure. The streaking is way to heavy to be a Red-tail! The yellow eye makes me thing that this is an immature bird. Immature Sharp-shinned Hawks and immature Broad-winged Hawks have blotchier streaking, so I believe this is an immature Cooper's Hawk. If you think I'm wrong, email me at tortugavpn@gmail.com."},
    {url: "img_67.jpg", 
        o1: "Northern Mockingbird", o2: "Brown-headed Cowbird", o3: "Grey Catbird", o4: "Rufous Bush Robin", 
        answer: "Grey Catbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "This bird has an all-grey body with a darker grey cap, which bith the Brown-headed Cowbird and the Northern Mockingbird are lacking. The Rufous Bush Robin is a European bird."},
    {url: "img_68.jpg", 
        o1: "Pacific Wren", o2: "Carolina Wren", o3: "Southern House Wren", o4: "Northern House Wren", 
        answer: "Northern House Wren", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "We can eliminate the Southern House Wren and the Pacific Wren based off of range and the Carolina Wren based off of the lack of its characteristic white stripe above the eye."},
    {url: "img_69.jpg", 
        o1: "Eastern Kingbird", o2: "Eastern Phoebe", o3: "Eastern Wood-Pewee", o4: "Barn Swallow", 
        answer: "Northern House Wren", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "The Eastern Pheobe and the Eastern Wood-Pewee both lack the distinctive white stripe on the tip of the tail. The Barn Swallow has a V-shaped tail, not a rounded tail."},
    {url: "img_70.jpg", 
        o1: "Eurasian Collared-dove", o2: "Mourning Dove", o3: "Rock Pigeon", o4: "White-winged Dove", 
        answer: "Mourning Dove", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "The White-winged Dove and the Eurasian Collared-dove can be eliminated based off of range. Although Rock Pigeons can have a wide range of plumage colors, they're usually very grey."},
];