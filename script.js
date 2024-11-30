const allQuestions = [
    //region is either "EU" or "NA"
    //difficulty is "E", "M", "H"
    {url: "img_0.jpg", 
        o1: "Tundra Swan", o2: "Whooper Swan", o3: "Mute Swan", o4: "Barnacle Goose", 
        answer: "Mute Swan", 
        region: "EU", location: "Genève, Switzerland", difficulty: "E", 
        notes: "Based off of range, the Tundra Swan, the Whooper Swan, and the Barnacle Goose can be eliminated."},
    {url: "img_1.jpg", 
        o1: "Common Merganser", o2: "Mallard", o3: "Northern Shoveler", o4: "Eurasian Teal", 
        answer: "Common Merganser", 
        region: "EU", location: "Genève, Switzerland", difficulty: "M", 
        notes: "Note the white sides, the black back, and the small bill. Mallards and Shovelers have large rounded bills, and male Eurasian Teals have grey-ish sides."},
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
        notes: "Female Red-breasted Mergansers and female Hooded Mergansers don't have a pale grey back and belly. Common Goldeneyes have short, thick beaks."},
    {url: "img_11.jpg", 
        o1: "Common Loon", o2: "Common Merganser", o3: "Double-crested Cormorant", o4: "Yellow-billed Loon", 
        answer: "Common Loon", 
        region: "NA", location: "New Hampshire, USA", difficulty: "E", 
        notes: "Yellow-billed Loon can be eliminated based off of range and beak color. Double-crested Cormorants and Common Mergansers don't have characteristic white spots on their backs. Their checkered plumage, from a distance, is nearly indistinguishable from the patterns of waves on the water."},
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
        o1: "Alpine Chough", o2: "Red-billed Chough", o3: "Eurasian Blackbird", o4: "Spotless Starling", 
        answer: "Alpine Chough", 
        region: "EU", location: "Wallis, Switzerland", difficulty: "H", 
        notes: "Note the yellow beak, the orange feet, and the habitat. Red-billed Choughs and Eurasian Blackbirds have orange beaks, but Spotless Starlings have a yellow beak and orange feet. However, of these three birds are commonly found in high altitudes."},
    {url: "img_21.jpg", 
        o1: "Ring-necked Pheasant", o2: "Ruffed Grouse", o3: "Wild Turkey", o4: "Velociraptor", 
        answer: "Wild Turkey", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "General shape and pattern are characteristic of Wild Turkeys. This is a hen with two chicks, which are also known as poults."},
    {url: "img_22.jpg", 
        o1: "Whooper Swan", o2: "Trumpeter Swan", o3: "Mute Swan", o4: "Tundra Swan", 
        answer: "Mute Swan", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "The Whooper Swan, the Trumpeter Swan, and the Tundra Swan all have black bills with varying amounts of yellow. This birds has an orange and black bill with a black tubercle at the base, which identifies it as a Mute Swan."},
    {url: "img_23.jpg", 
        o1: "Northern Mockingbird", o2: "Grey Catbird", o3: "Northern Shrike", o4: "Loggerhead Shrike", 
        answer: "Northern Mockingbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "This bird has a thin beak, not a hooked beak, so it isn't a Northern Shrike or a Loggerhead Shrike. It also has white bars on its wings, which Grey Catbirds lack."},
    {url: "img_24.jpg", 
        o1: "Great Egret", o2: "Great Blue Heron", o3: "Snowy Egret", o4: "Cattle Egret", 
        answer: "Great Blue Heron", 
        region: "NA", location: "Florida, USA", difficulty: "H", 
        notes: "Although this may seem like a Great Egret, a Snowy Egret, or a Cattle Egret in non-breeding plumage, note the pale legs. This bird is also pure white, so it can't be a Cattle Egret in breeding plumage. This bird is a subspecies of the Great Blue Heron that is only found in Key West, Florida."},
    {url: "img_25.jpg", 
        o1: "Eurasian Starling", o2: "Common Grackle", o3: "Brown-headed Cowbird", o4: "Red-winged Blackbird", 
        answer: "Common Grackle", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "This bird lacks the white spots of a Eurasian Starling and the red blotches of a Red-Winged Blackbird. It has an iridescent blue head, not a bronze head like a Brown-headed Cowbird."},
    {url: "img_26.jpg", 
        o1: "Black-crowned Night Heron", o2: "Yellow-crowned Night Heron", o3: "Green Heron", o4: "Great Blue Heron", 
        answer: "Black-crowned Night Heron", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Great Blue Heron can be eliminated based off of body shape, it is lankier than our bird. Yellow-crowned Night Herons have a black throat, while this bird has a white throat. Green Herons have a dark red chest with white streaking, and this bird has an all-whitish grey chest."},
    {url: "img_27.jpg", 
        o1: "Brant", o2: "Snow Goose", o3: "Egyptian Goose", o4: "Canada Goose", 
        answer: "Canada Goose", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "A Brant has an all-black head with a thin white \"chinstrap\", and a Snow Goose is all-white or black with a white head. An Egyptian Goose has a brown spot over its eye."},
    {url: "img_28.jpg", 
        o1: "House Sparrow", o2: "Eurasian Tree Sparrow", o3: "White-throated Sparrow", o4: "Black-throated Sparrow", 
        answer: "House Sparrow", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Black-throated Sparrow and Eurasian Tree Sparrow can be eliminated based off of range. White-throated sparrows have yellow lores (feathers near the beak), which this bird does not have."},
    {url: "img_29.jpg", 
        o1: "Eurasian Collared Dove", o2: "Mourning Dove", o3: "Rock Dove", o4: "European Turtle Dove", 
        answer: "Rock Dove", 
        region: "EU", location: "Catalunya, Spain", difficulty: "E", 
        notes: "Mourning Dove can be eliminated based off of range. Eurasian Collared Doves and European Turtle Doves both have a band of black on the back of their necks, which this bird does not have. In addition, this bird's general plumage pattern is very different from Eurasian Collared Doves and European Turtle Doves."},
    {url: "img_30.jpg", 
        o1: "European Robin", o2: "American Robin", o3: "White-throated Robin", o4: "Common Redstart", 
        answer: "European Robin", 
        region: "EU", location: "Catalunya, Spain", difficulty: "E", 
        notes: "This bird has an orange face, which the American Robin, the White-throated Robin, and the Common Redstart do not have."},
    {url: "img_31.jpg", 
        o1: "European Turtle Dove", o2: "Eurasian Collared Dove", o3: "Rock Dove", o4: "Wood Pigeon", 
        answer: "Eurasian Collared Dove", 
        region: "EU", location: "Catalunya, Spain", difficulty: "E", 
        notes: "This bird has a black half-collar, which Rock Doves and Wood Pigeons do not have. A European Turtle Dove's collar is streaked with white, so this is a Eurasian Collared Dove."},
    {url: "img_32.jpg", 
        o1: "Eurasian Starling", o2: "Common Grackle", o3: "Spotless Starling", o4: "Eurasian Blackbird", 
        answer: "Eurasian Blackbird", 
        region: "EU", location: "Comunidad de Madrid, Spain", difficulty: "H", 
        notes: "Common Grackle can be eliminated based off of range. Eurasian Starlings have speckles and a yellow beak, and Spotless Starlings have a yellow beak and orange feet. This bird has an orange beak, and, although its characteristic orange eyering is obscured, it is a Eurasian Blackbird."},
    {url: "img_33.jpg", 
        o1: "Rose-ringed Parakeet", o2: "Monk Parakeet", o3: "Blue-cheeked Bee-eater", o4: "Green Woodpecker", 
        answer: "Rose-ringed Parakeet", 
        region: "EU", location: "Lazio, Italy", difficulty: "E", 
        notes: "This bird has the wrong body shape to be a Blue-cheeked Bee-eater or a Green Woodpecker. It has a red beak, and Monk Parakeets have a pale pink beak. Rose-ringed Parakeets are not native to Europe, but they have established colonies in warmer urban areas."},
    {url: "img_34.jpg", 
        o1: "Common Wood Pigeon", o2: "Rock Dove", o3: "Eurasian Collared Dove", o4: "Mourning Dove", 
        answer: "Common Wood Pigeon", 
        region: "EU", location: "Comunidad de Madrid, Spain", difficulty: "H", 
        notes: "Mourning Dove can be eliminated based off of range. Eurasian Collared Doves are beige, and this bird appears to be blue-grey. Rock Doves do not have distinctive white patches on their neck."},
    {url: "img_35.jpg", 
        o1: "Canada Goose", o2: "Greylag Goose", o3: "Egyptian Goose", o4: "Ruddy Shelduck", 
        answer: "Egyptian Goose", 
        region: "EU", location: "Comunidad de Madrid, Spain", difficulty: "M", 
        notes: "This bird has a brown eyepatch, which neither the Canada Goose, the Greylag Goose, or the Ruddy Shelduck have. Egyptian Geese originate from Africa, but escaped captive birds have created established populations elsewhere."},
    {url: "img_36.jpg", 
        o1: "Monk Parakeet", o2: "Rose-ringed Parakeet", o3: "Blue Tit", o4: "Great Tit", 
        answer: "Monk Parakeet", 
        region: "EU", location: "Comunidad de Madrid, Spain", difficulty: "E", 
        notes: "Wrong body shape and coloration to be a Blue Tit or a Great Tit. This bird has a pale beak, and Rose-ringed Parakeets have a red beak. Monk Parakeets are introduced in parts of Europe, and have a thriving population. They build massive colonial nests in trees, and sometimes cause trees to collapse under the weight of the nest."},
    {url: "img_37.jpg", 
        o1: "Eurasian Jay", o2: "Hooded Crow", o3: "Western Jackdaw", o4: "Eurasian Magpie", 
        answer: "Eurasian Magpie", 
        region: "EU", location: "Comunidad de Madrid, Spain", difficulty: "E", 
        notes: "Note the bright white belly and shoulders. Hooded Crows and Western Jackdaws are grey and black, and Eurasian Jays are light brown."},
    {url: "img_38.jpg", 
        o1: "Scarlet Tanager", o2: "Summer Tanager", o3: "Northern Cardinal", o4: "Pyrrhuloxia", 
        answer: "Northern Cardinal", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Summer Tanager and Pyrrhuloxia can be eliminated based off of range. This bird lacks the black wings of the male Scarlet Tanager."},
    {url: "img_39.jpg", 
        o1: "Carolina Chickadee", o2: "Black-capped Chickadee", o3: "White-breasted Nuthatch", o4: "Boreal Chickadee", 
        answer: "Black-capped Chickadee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "Based off of range, we can eliminate the Carolina Chickadee and the Boreal Chickadee. The White-breasted Nuthatch has a white patch over its eye, while this bird does not."},
    {url: "img_40.jpg", 
        o1: "Red-winged Blackbird", o2: "Tricolored Blackbird", o3: "Eurasian Blackbird", o4: "Eurasian Starling", 
        answer: "Red-winged Blackbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Tricolored Blackbird and Eurasian Blackbird can be eliminated based off of range. Eurasian Starlings don't have red shoulders."},
    {url: "img_41.jpg", 
        o1: "American Robin", o2: "European Robin", o3: "Spotted Towhee", o4: "Eastern Towhee", 
        answer: "Eastern Towhee", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "Spotted Towhee and European Robin can be eliminated based off of range. American Robins have grey-ish heads and backs, while this bird has a black head and back."},
    {url: "img_42.jpg", 
        o1: "Eurasian Wigeon", o2: "Smew", o3: "Red-crested Pochard", o4: "Marbled Teal", 
        answer: "Red-crested Pochard", 
        region: "EU", location: "Genève, Switzerland", difficulty: "H", 
        notes: "This bird has a dark brown head with a pale grey-white cheek and a light brown back. Marbled Teal can be eliminated based off of range. Female Eurasian Wigeons don't have a pale cheek. Female Smews have a white throat, but they also have a grey back."},
    {url: "img_43.jpg", 
        o1: "Eurasian Coot", o2: "Red-knobbed Coot", o3: "Eurasian Moorhen", o4: "Black-crowned Night Heron", 
        answer: "Eurasian Coot", 
        region: "EU", location: "Genève, Switzerland", difficulty: "E", 
        notes: "This bird has thickly lobed feet, so it must be a coot or a moorhen. Eurasian Moorhens have a red and yellow beak and Red-knobbed Coots aren't found in Switzerland, so this bird is a Eurasian Coot."},
    {url: "img_44.jpg", 
        o1: "Canada Goose", o2: "Mute Swan", o3: "Black Swan", o4: "Brant", 
        answer: "Black Swan", 
        region: "EU", location: "Bern, Switzerland", difficulty: "M", 
        notes: "Neither Canada Geese, Mute Swans, or Brants are all-black, so this is a Black Swan. This species is native to Australia, so these birds are likely escapees."},
    {url: "img_45.jpg", 
        o1: "Hermit Thrush", o2: "Wood Thrush", o3: "Swainson's Thrush", o4: "American Robin", 
        answer: "American Robin", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "This bird has a yellow-orange chest with black spots. Hermit Thrushes and Wood Thrushes have black spots on a white chest, and Swainson's Thrush have black spots on a white-light yellow chest. Also, none of these three birds have dark grey backs. This is an American Robin in juvenile plumage. They're more yellowy than an adult and have spots on their breast."},
    {url: "img_46.jpg", 
        o1: "Black-chinned Hummingbird", o2: "Ruby-throated Hummingbird", o3: "Rufous Hummingbird", o4: "Anna's Hummingbird", 
        answer: "Ruby-throated Hummingbird", 
        region: "NA", location: "New Hampshire, USA", difficulty: "M", 
        notes: "Black-chinned Hummingbird and Anna's Hummingbird can be eliminated based off of range. Rufous Hummingbirds are rare in New Hampshire, but females have an orangey tail and flanks, which this bird does not have."},
    {url: "img_47.jpg", 
        o1: "Wood Duck", o2: "Green-winged Teal", o3: "Mallard", o4: "Common Merganser", 
        answer: "Wood Duck", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "Note the white stripe on the throat, which male Green-winged Teals, male Mallards, and male Common Mergansers lack."},
    {url: "img_48.jpg", 
        o1: "Common Grackle", o2: "Rusty Blackbird", o3: "Eurasian Starling", o4: "Eurasian Blackbird", 
        answer: "Eurasian Starling", 
        region: "NA", location: "New York, USA", difficulty: "E", 
        notes: "Eurasian Blackbird can be eliminated based off of range. Rusty Blackbirds and Common Grackles do not have spotted feathers, but Eurasian Grackles do."},
    {url: "img_49.jpg", 
        o1: "Greater Scaup", o2: "Lesser Scaup", o3: "Ring-necked Duck", o4: "Common Goldeneye", 
        answer: "Ring-necked Duck", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "This bird has a thin white stripe at the base of its bill and a spot of white and black at the tip, which makes it a Ring-necked Duck."},
    {url: "img_50.jpg", 
        o1: "Mallard", o2: "American Black Duck", o3: "Mottled Duck", o4: "Northern Shoveler", 
        answer: "Mallard", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Mottled Duck can be eliminated based off of range, and Northern Shoveler can be eliminated based off of beak shape. This duck has a black bill with an orange outline, while male and female American Black Ducks have solid-color bills."},
    {url: "img_51.jpg", //REDO
        o1: "Double-crested Cormorant", o2: "Anhinga", o3: "European Shag", o4: "Great Cormorant", 
        answer: "Great Cormorant", 
        region: "EU", location: "Île-de-France, France", difficulty: "M", 
        notes: "Double-crested Cormorant, Anhinga, and European Shag can be eliminated based off of range."},
    {url: "img_52.jpg", 
        o1: "Grey Heron", o2: "Great Blue Heron", o3: "Western Reef Egret", o4: "Purple Heron", 
        answer: "Grey Heron", 
        region: "EU", location: "Île-de-France, France", difficulty: "E", 
        notes: "This looks like a Great Blue Heron, but Great Blues are not found in France. Their European counterpart, with similar plumage but no overlapping range, is the Grey Heron."},
    {url: "img_53.jpg", 
        o1: "Wild Turkey", o2: "Greater Prairie-chicken", o3: "Ring-necked Pheasant", o4: "Golden Pheasant", 
        answer: "Ring-necked Pheasant", 
        region: "NA", location: "New York, USA", difficulty: "H", 
        notes: "Greater Prairie-chicken and Golden Pheasant can be eliminated based off of range. This bird appears to have the long, upright tail and green head of a male Ring-necked Pheasant."},
    {url: "img_54.jpg", 
        o1: "Spotted Sandpiper", o2: "Solitary Sandpiper", o3: "Greater Yellowlegs", o4: "Dunlin", 
        answer: "Solitary Sandpiper", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "This bird is darker than a Dunlin and has duller legs than a Greater Yellowlegs. It also has white spots on its back and faint brown streaking on its chest, so it is not a Spotted Sandpiper."},
    {url: "img_55.jpg", 
        o1: "Roseate Tern", o2: "Forster's Tern", o3: "Common Tern", o4: "Least Tern", 
        answer: "Least Tern", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "Notice the pale orange bills and the white triangles on their foreheads. Common Terns, Roseate Terns, and Forster's Terns have more reddish-orange beaks and are larger birds."},
    {url: "img_56.jpg", 
        o1: "Killdeer", o2: "Pacific Golden-plover", o3: "Black-bellied Plover", o4: "American Golden-plover", 
        answer: "American Golden-plover", 
        region: "NA", location: "Massachusetts, USA", difficulty: "H", 
        notes: "By plumage, we can eliminate the Killdeer, and by range, we can eliminate the Pacific Golden-plover. That just leaves the Black-bellied Plover and the American Golden-plover. Both birds are very similar, but the American Golden has a white stripe and a black spot on its head, while the Black-bellied only has a white spot."},
    {url: "img_57.jpg", 
        o1: "Eurasian Tree Sparrow", o2: "House Sparrow", o3: "Italian Sparrow", o4: "Common Chaffinch", 
        answer: "House Sparrow", 
        region: "EU", location: "Harjumaa, Estonia", difficulty: "E", 
        notes: "Italian Sparrow can be eliminated based off of range. Eurasian Tree Sparrows have a brown cap, while this bird has a grey cap. Male Common Chaffinches are redder and have white bars on their wings, which this bird lacks."},
    {url: "img_58.jpg", 
        o1: "Greater Yellowlegs", o2: "Willet", o3: "Spotted Sandpiper", o4: "Semipamated Plover", 
        answer: "Greater Yellowlegs", 
        region: "NA", location: "New Hampshire, USA", difficulty: "H", 
        notes: "Note the pale grey back and the bright yellow legs. Spotted Sandpipers also have yellow legs, but they have a brown back. It would have been mean to have one of the options be a Lesser Yellowlegs."},
    {url: "img_59.jpg", 
        o1: "American Black Duck", o2: "Wood Duck", o3: "Mallard", o4: "Double-crested Cormorant", 
        answer: "Mallard", 
        region: "NA", location: "Massachusetts, USA", difficulty: "M", 
        notes: "Double-crested Cormorant and Wood Duck can be eliminated based off of plumage. One of these birds has a black and orange beak, which identifies it as a female Mallard, but the other duck has a solid yellow bill but lacks a green head. However, it has a white tail, which means that it is a male Mallard in non-breeding plumage."},
    {url: "img_60.jpg", 
        o1: "Common Magpie", o2: "Western Jackdaw", o3: "Carrion Crow", o4: "Hooded Crow", 
        answer: "Hooded Crow", 
        region: "EU", location: "Lazio, Italy", difficulty: "M", 
        notes: "Carrion Crow and Common Magpie can be eliminated based off of this bird's grey plumage. Western Jackdaws have similar plumage patterns to Hooded Crows, but Western Jackdaws have visibly pale eyes, which this bird does not have."},
    {url: "img_61.jpg", 
        o1: "Black Redstart", o2: "Common Redstart", o3: "Güldenstädt's Redstart", o4: "Common Rock Thrush", 
        answer: "Black Redstart", 
        region: "EU", location: "Campania, Italy", difficulty: "H", 
        notes: "Güldenstädt's Redstart can be eliminated through range. The Common Rock Thrush has scaly plumage, which this bird does not. Between the Black Redstart and the Common Redstart, the female Black Redstart is a cool grey while the female Common Redstart is more dusty."},
    {url: "img_62.jpg", 
        o1: "Coal Tit", o2: "Blue Tit", o3: "Pied Wagtail", o4: "White Wagtail", 
        answer: "White Wagtail", 
        region: "EU", location: "Campania, Italy", difficulty: "E", 
        notes: "This bird's white spot extends over the eyes, while the Coal Tit's eyes are surrounded with black feathers and the Blue Tit has a black \"mask\" and a blue crown. The Pied Wagtail is a subspecies found in the British Isles."},
    {url: "img_63.jpg", 
        o1: "Italian Sparrow", o2: "House Sparrow", o3: "Eurasian Tree Sparrow", o4: "Spanish Sparrow", 
        answer: "Italian Sparrow", 
        region: "EU", location: "Lazio, Italy", difficulty: "M", 
        notes: "House Sparrows and Spanish Sparrows are not found on the Italian peninsula, so they can be eliminated. This bird looks a lot like a Tree Sparrow, but it has a white supercilium (\"eyebrow\"), and it lacks the black spot that Tree Sparrows have on their cheeks. Italian Sparrows have both a white supercilium and a white cheek."},
    {url: "img_64.jpg", 
        o1: "Great Egret", o2: "Cattle Egret", o3: "White Stork", o4: "Little Egret", 
        answer: "Cattle Egret", 
        region: "EU", location: "Lazio, Italy", difficulty: "H", 
        notes: "Based off of range, the White Stork can be eliminated. These birds appear to have pale legs, unlike Great Egrets and Little Egrets. In addition, they're grazing in a field, while Great and Little Egrets are typically found near water."},
    {url: "img_65.jpg", 
        o1: "Water Rail", o2: "Eurasian Moorhen", o3: "Eurasian Coot", o4: "Purple Swamphen", 
        answer: "Eurasian Moorhen", 
        region: "EU", location: "Lazio, Italy", difficulty: "E", 
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
        answer: "Eastern Kingbird", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "The Eastern Pheobe and the Eastern Wood-Pewee both lack the distinctive white stripe on the tip of the tail. The Barn Swallow has a V-shaped tail, not a rounded tail."},
    {url: "img_70.jpg", 
        o1: "Eurasian Collared-dove", o2: "Mourning Dove", o3: "Rock Pigeon", o4: "White-winged Dove", 
        answer: "Mourning Dove", 
        region: "NA", location: "Massachusetts, USA", difficulty: "E", 
        notes: "The White-winged Dove and the Eurasian Collared-dove can be eliminated based off of range. Although Rock Pigeons can have a wide range of plumage colors, they're usually very grey."},
];

//71 bird questions

const questions = []; //holds addresses of questions in allQuestions
const answers = []; //hold values of answers (a String equal to one of the options) for each question

function makeQuiz() {
    if (getCookie("q1") == "") { //if cookie has not been set
        for (let i = 0; i < 10; i++) { //populate questions with numbers 0..70, then generate list of images
            let num = Math.floor(Math.random() * 71);
            if (i == 0) {
                questions[0] = num;
            }
            else {
                while (questions.indexOf(num) != -1) { //do this while num already exists in question
                    num = Math.floor(Math.random() * 71);
                }
                questions[i] = num;
            }
            setCookie("q" + (i + 1), num);
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            questions[i] = getCookie("q" + (i + 1));
        }
    }

    for (let i = 0; i < 10; i++) {
        document.getElementById("i" + (i + 1)).src = "/server/images/" + allQuestions[questions[i]].url;
        document.getElementById("l" + (i + 1)).innerHTML = allQuestions[questions[i]].location;
        document.getElementById((i + 1) + "o1").innerHTML = allQuestions[questions[i]].o1;
        document.getElementById((i + 1) + "o2").innerHTML = allQuestions[questions[i]].o2;
        document.getElementById((i + 1) + "o3").innerHTML = allQuestions[questions[i]].o3;
        document.getElementById((i + 1) + "o4").innerHTML = allQuestions[questions[i]].o4;
    }
}
function getCookie(name) {
    let n = name + "=";
    const cArr = document.cookie.split(";");
    for (let i = 0; i < cArr.length; i++) {
        let c = cArr[i];
        if (c.indexOf(n) != -1) {
            return c.substring(n.length + c.indexOf(n), c.length);
        }
      }
    return "";
}
function setCookie(name, value) {
    document.cookie = name + "=" + value + ";" + "path=/;SameSite=None; Secure";
}
function deleteCookie(name) { //run when answers are submitted
    document.cookie = name+"=; Max-Age=-99999999;SameSite=None; Secure";
}
function newQuiz() {
    deleteCookie("q1");
    for (let i = 1; i <= 10; i++) {
        clearStyles(i);
    }
    clearAnswerNotes();
    clearScore();
    makeQuiz();
}
function setAnswer(id) {
    //recieves id of currently selected answer
    let index = parseInt(id.substring(0,2)) - 1;
    let option = id.substring(id.length - 2, id.length);
    let answer = "";
    if (option == "o1") {
        answer = allQuestions[questions[index]].o1;
    }
    else if (option == "o2") {
        answer = allQuestions[questions[index]].o2;
    }
    else if (option == "o3") {
        answer = allQuestions[questions[index]].o3;
    }
    else if (option == "o4") {
        answer = allQuestions[questions[index]].o4;
    }
    clearStyles(index + 1);
    document.getElementById(id).style.backgroundColor = "lightgrey";
    answers[index] = answer
}
function clearStyles (qNum) {
    document.getElementById(qNum + "o1").style.backgroundColor = "";
    document.getElementById(qNum + "o2").style.backgroundColor = "";
    document.getElementById(qNum + "o3").style.backgroundColor = "";
    document.getElementById(qNum + "o4").style.backgroundColor = "";
}
function clearAnswerNotes() { //clears all answer notes and results
    for (let i = 1; i <= 10; i++) {
        document.getElementById("res" + i).parentElement.style.display = "none"; //clear correct/incorrect
        document.getElementById("ans" + i).style.display = "none"; //clear answerbox
    }
    document.getElementById("score-container").style.display = "none";
}
function clearScore() { //clears score

}
function submitAnswers() {
    //checks if answers are correct
    let score = 0;
    for (let index in answers) {
        document.getElementById("ans" + (parseInt(index) + 1)).style.display = "block";
        
        //console.log(index);
        //console.log(answers[index]);
        document.getElementById("a" + (parseInt(index) + 1)).innerHTML = allQuestions[questions[index]].answer;
        document.getElementById("r" + (parseInt(index) + 1)).style.display = "block";
        document.getElementById("n" + (parseInt(index) + 1)).innerHTML = allQuestions[questions[index]].notes;
        document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.display = "block";

        if (answers[index] ==  allQuestions[questions[index]].answer) { //if answer is correct
            document.getElementById("res" + (parseInt(index) + 1)).innerHTML = "correct!";
            document.getElementById("res" + (parseInt(index) + 1)).style.color = "green";
            document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.backgroundColor = "lightgreen";
            score++;
        }
        else { //if answer is not correct
            document.getElementById("res" + (parseInt(index) + 1)).innerHTML = "incorrect :(";
            document.getElementById("res" + (parseInt(index) + 1)).style.color = "red";
            document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.backgroundColor = "lightpink";
        }
    }
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = score + "/10";
    //make play again? button appear (or only make new quiz button appear after submission)
}