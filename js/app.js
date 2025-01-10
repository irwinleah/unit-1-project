const categories = {
    skyrimQuestions: [
        {
            question: "What level do you have to be to have the Ebony Warrior appear?",
            answers: ["Level 75", "Level 80", "Level 85", "Level 90"],
            correctAnswer: "Level 80"
        },
        {
            question: "How old is Skyrim as of 2024? (Years, not months/days)",
            answers: ["8 years old", "10 years old", "13 years old", "14 years old"],
            correctAnswer: "13 years old"
        },
        {
            question: "What is the strongest armor in Skyrim? (chestplates only) (not including DLC)",
            answers: ["Ebony Armor", "Dragon Plate Armor", "Daedric Armor", "Legacy Armor"],
            correctAnswer: "Daedric Armor"
        },
        {
            question: "What is the ore found in Gloombound Mine?",
            answers: ["Ebony Ore", "Gold Ore", "Iron Ore", "Malachite Ore"],
            correctAnswer: "Ebony Ore"
        },
        {
            question: "Where is the Sightless Pit located?",
            answers: ["Northeast of Shrine of Azura", "Northwest of Rorikstead", "Southwest of Dragon Bridge", "Southeast of Saarthal"],
            correctAnswer: "Southeast of Saarthal"
        },
        {
            question: "what is your reward for completing Kagrumez?",
            answers: ["Orcish Greatsword of Destiny", "Elven Shield of Great Protection", "5 Black Soul Gems filled with Grand Souls", "Dwarven Black Bow of Fate"],
            correctAnswer: "Dwarven Black Bow of Fate"
        },
        {
            question: "What is the ore that can only be mined with a special pickaxe?",
            answers: ["Chaurus Ore", "Daedric Ore", "Stalhrim Ore", "Dwarven Metal Ore"],
            correctAnswer: "Stalhrim Ore"
        },
        {
            question: "What is the name of the pickaxe used to mine Stalhrim Ore?",
            answers: ["Ancient Nordic Pickaxe", "Notched Pickaxe", "Dragon Bone Pickaxe", "Falmer Pickaxe of Binding"],
            correctAnswer: "Ancient Nordic Pickaxe"
        },
        {
            question: "What happens if you kill someone important?",
            answers: ["The Grandmaster Thief approaches you and guts you like a fish", "A Dark Brotherhood grunt tries to kill you and a message is on their corpse", "An Imperial squadron approaches you and demands you to go to Solitude", "A Stormcloak squadron approaches you and demands you go to Windhelm"],
            correctAnswer: "A Dark Brotherhood grunt tries to kill you and a message is on their corpse"
        },
        {
            question: "Who is killed after running from an execution block?",
            answers: ["Lokir of Rorikstead", "Roggvir of Solitude", "Ulfric of Windhelm", "Tullius of Solitude"],
            correctAnswer: "Lokir of Rorikstead"
        },
        {
            question: "What is the name of the dragon that attacks Kynesgrove? (not Alduin)",
            answers: ["Odahviing", "Sahloknir", "Paarthurnax", "Mirmulnir"],
            correctAnswer: "Sahloknir"
        },
        {
            question: "Who can be found in Ragnvald?",
            answers: ["Vekel the Man", "Katria", "Arvel the Swift", "Otar the Mad"],
            correctAnswer: "Otar the Mad"
        },
        {
            question: "Who do you work with to infiltrate the Thalmor Embassy?",
            answers: ["Malborn", "Melborn", "Mulburn", "Malburn"],
            correctAnswer: "Malborn"
        },
        {
            question: "What can you do to a perk/skill when it reaches level 100?",
            answers: ["Make it Mythic and gain 5 more perk/skill points to use on another perk/skill", "Make it Superlevel and receive an achievement/trophy worth 100G for Xbox", "Unlock a secret armor set called the 'Legacy Set' that is heavier than Dragonplate, but stronger", "Make it Legendary and get your perk/skill points back, but reset it to 15"],
            correctAnswer: "Make it Legendary and get your perk/skill points back, but reset it to 15"
        },
        {
            question: "Who is the original owner of the Boots of Waterwalking?",
            answers: ["Ahzidal", "Zahkriisos", "Dukaan", "Konahrik"],
            correctAnswer: "Ahzidal"
        },
        {
            question: "Which Dragon Priest can grant water-breathing and give a 20 point bonus to carry weight and bartering?",
            answers: ["Nahkriin", "Volsung", "Morokei", "Krosis"],
            correctAnswer: "Volsung"
        },
        {
            question: "What is the name of the guard of the Hall of Valor?",
            answers: ["Arisa", "Kodlak", "Tsun", "Narfi"],
            correctAnswer: "Tsun"
        },
        {
            question: "How many arrows can you carry of any type?",
            answers: ["50,742", "Infinite", "81,409", "76,124"],
            correctAnswer: "Infinite"
        },
        {
            question: "What happens to your stats in Survival Mode?",
            answers: ["Carry weight is halved", "A hunger bar is added above your stamina bar. If you don't eat, you will die", "A sleep bar is added above your magicka bar. If you don't sleep, your spells with be weaker", "A warmth bar is added above your health bar. If you don't stay warm, you will die from frostbite"],
            correctAnswer: "Carry weight is halved"
        },
        {
            question: "Where is Arcwind Point?",
            answers: [`North of Dragon Bridge`, `South of Haemar's Shame`, `East of Shor's Stone`, `West of Pinewatch`],
            correctAnswer: `South of Haemar's Shame`
        },
        {
            question: "What is the base carry weight? (Not Survival Mode)",
            answers: ["250", "325", "300", "275"],
            correctAnswer: "300"
        },
        {
            question: "Who and where is the last Snow Elf (not Falmer) in Skyrim (first encounter --> final encounter)?",
            answers: ["Knight-Paladin Geleborn, Darkfall Cave --> Forgotten Vale", "Auri-El, Arkngthamz --> Blackreach", "Arch-Curate Vyrthur, Blackreach --> Altfand", "Narfi, Ivarstead --> Skuldafn"],
            correctAnswer: "Knight-Paladin Geleborn, Darkfall Cave --> Forgotten Vale"
        },
        {
            question: "Where do you find Serana?",
            answers: ["Dimhollow Abyss", "Dimhollow Grotto", "Dimhollow Cavern", "Narfi's House"],
            correctAnswer: "Dimhollow Cavern"
        },
        {
            question: "Who is Narfi?",
            answers: ["A person with PTSD looking for his lost sister, Reyda", "The true Dragonborn and heir to the throne of Skyrim and has transcended the bounds of Tamriel and has become the most powerful of the Ten Divines", "The worst character in the game (do not click this option unless you're evil)", "A target that you are required to assassinate, with no remorse, for the Dark Brotherhood"],
            correctAnswer: "A person with PTSD looking for his lost sister, Reyda"
        },
        {
            question: "Where does your journey start?",
            answers: ["Helgen", "Whiterun", "The Pale Pass", "Rorikstead"],
            correctAnswer: "The Pale Pass"
        },
        {
            question: " What abilities does the Khajiit race get?",
            answers: ["Khajiit War Cry Ability", "Night Eye and Claws Abilities", "Higher Heavy Armor and Smithing perk/skill when you start your game", "Last Resort Ability"],
            correctAnswer: "Night Eye and Claws Abilities"
        },
        {
            question: "Where can the friendly Riekling Chief be found?",
            answers: ["Hall of Valor", "Skaal Town Hall", "Raven Rock Town Hall", "Thirsk Mead Hall"],
            correctAnswer: "Thirsk Mead Hall"
        },
        {
            question: "What is the strongest enemy in the game?",
            answers: ["Alduin, the World-Eater", "Karstaag the Frost Troll", "Gartofph, Dwarven Alpha Centurion Grandmaster of Blackreach", "Narfi"],
            correctAnswer: "Karstaag the Frost Troll"
        },
        {
            question: "What ability does the Nords race have?",
            answers: ["Find more coin, Voice of the Emperor", "Poison resistance by 30%, Command Animal", "Frost resistance by 50%, Battle Cry", "Berserker Rage, 50% Fire Resistance"],
            correctAnswer: "Frost resistance by 50%, Battle Cry"
        },
        {
            question: "What abilities does the Argonian race have?",
            answers: ["Waterbreathing and 50% disease resistance, histskin", "Adrenaline Rush, 50% frost resistance", "35% magic resistance, dragonskin", "Adrenaline Rush, 50% poison resistance"],
            correctAnswer: "Waterbreathing and 50% disease resistance, histskin"
        },
        {
            question: "What abilities does the Redguard race have?",
            answers: ["Find more coin than usual, Berserker Rage", "50% poison resistance, Adrenaline Rush", "Dragonskin, 50% disease and poison resistance", "Can enter Orc Strongholds without becoming blood-kin"],
            correctAnswer: "50% poison resistance, Adrenaline Rush"
        },
        {
            question: "What abilities does the Breton race have?",
            answers: ["+50 Magicka, highborn", "Berserker Rage, Command Animals", "50% disease & poison resistance, Voice of the Emperor", "25% magic resistance, Dragonskin"],
            correctAnswer: "25% magic resistance, Dragonskin"
        },
        {
            question: "What abilities does the Imperial race have?",
            answers: ["Find more coin than usual, Voice of the Emperor", "50% fire resistance, Ancestor’s Wrath", "+50 magicka, Command Animal", "+50 magicka, Highborn"],
            correctAnswer: "Find more coin than usual, Voice of the Emperor"
        },
        {
            question: "What abilities does the Orsimer have?",
            answers: ["Berserker Rage, can enter Orc Strongholds without becoming Blood-kin", "+50 magicka, highborn", "25% fire resistance, Ancestor’s Wrath", "Voice of the Emperor, 50% disease & poison resistance"],
            correctAnswer: "Berserker Rage, can enter Orc Strongholds without becoming Blood-kin"
        },
        {
            question: "What abilities does the Bosmer race have?",
            answers: ["Find more coin, Voice of the Emperor", "Disease & poison resistance by 50%, Command Animal", "Frost resistance by 50%, Battle Cry", "Berserker Rage, 50% Fire Resistance"],
            correctAnswer: "Disease & poison resistance by 50%, Command Animal"
        },
        {
            question: "What abilities does the Altmer race have?",
            answers: ["Find more coin than usual, Berserker Rage", "50% poison resistance, Adrenaline Rush", "Dragonskin, 50% disease and poison resistance", "+50 magicka, Highborn"],
            correctAnswer: "+50 magicka, Highborn"
        },
        {
            question: "What abilities does the Dunmer race have?",
            answers: [`Can enter Orc Strongholds without becoming Blood-kin, Berserker Rage`, `50% disease & poison resistance, Command Animals`, `+50 magicka, Highborn`, `50% fire resistance, Ancestor’s Wrath`],
            correctAnswer: `50% fire resistance, Ancestor’s Wrath`
        },
        {
            question: "What level can you buy a house outside Falkreath and how much coin?",
            answers: [`Level 15, 12,000 coins`, `Level 9, 5,000 coins`, `Level 20, 10,000 coins`, `Level 10, 4,000 coins`],
            correctAnswer: `Level 9, 5,000 coins`
        },
        {
            question: "What ingredients do you need to make a water breathing potion?",
            answers: [`Nirnroot, blue mountain flower, luna moth wing`, `Lavender, salt, bear claws`, `Chicken’s egg, hiscarp, nordic barnacle`, `Glow dust, garlic, mudcrab chitin`],
            correctAnswer: `Chicken’s egg, hiscarp, nordic barnacle`
        },
        {
            question: "How does owning/riding a horse help you in Skyrim?",
            answers: [`Can help you find wheat and carrots easier`, `Mounted combat, carry capacity increase, run faster`, `Allows you to become a knight`, `Less chance of being robbed`],
            correctAnswer: `Mounted combat, carry capacity increase, run faster`
        },
        {
            question: "Who do you talk to about adoption (child)?",
            answers: ["Grelod the Kind", "Francoise Beaufort", "Constance Michel", "Babette"],
            correctAnswer: "Constance Michel"
        },
        {
            question: "Which arrow has the highest damage?",
            answers: ["Orcish arrow", "Glass arrow", "Daedric Arrow", "Dragonbone Arrow"],
            correctAnswer: "Dragonbone Arrow"
        },
        {
            question: "Which ore deposit costs the most?",
            answers: ["Orichalcum", "Gold", "Ebony", "Malachite"],
            correctAnswer: "Ebony"
        },
        {
            question: "How do you create Dwarven Metal Ingots?",
            answers: ["Iron + corundum ores", "Gold + gems", "Dwarven scrap metal", "Steel ingots + dwarven scrap metal"],
            correctAnswer: "Dwarven scrap metal"
        },
        {
            question: "Which standing stone allows stealth skills increase 20% faster?",
            answers: ["The Tower Stone", "The Serpent Stone", "The Thief Stone", "The Lover Stone"],
            correctAnswer: "The Thief Stone"
        },
        {
            question: "What effect does The Warrior Stone have?",
            answers: ["Carry weight +100, equipped armor has no weight and causes no movement penalty", "Paralyze the target for 5 seconds and do 25 points of poison damage once per day", "Combat skills increase 20% faster", "All skills increase 15% faster"],
            correctAnswer: "Combat skills increase 20% faster"
        },
        {
            question: "Purpose of ruined books in Skyrim?",
            answers: ["Decor", "Craft spell tomes using the atronach forge", "Can jumpstart quests", "Increase your knowledge of specific skills"],
            correctAnswer: "Craft spell tomes using the atronach forge"
        },
        {
            question: "Perks of getting married in Skyrim?",
            answers: [`Daily allowance of gold, home cooked meal, follower potential, “Lover’s Comfort”`, `Home cooked meal, battle partner, you are gifted a horse`, `Allows you to buy a larger house, daily allowance, receive the Amulet of Mara`, `Restoration spells reduced by 10%, 15% speech increase`],
            correctAnswer: `Daily allowance of gold, home cooked meal, follower potential, “Lover’s Comfort”`
        },
        {
            question: "How do you make a frost atronach?",
            answers: ["Emerald and frost salts", "Sapphire and frost salts", "Diamond and fire salts", "Sapphire and ice wraith teeth"],
            correctAnswer: "Sapphire and frost salts"
        },
        {
            question: "At some point in the game, who steals the souls of the dragons you slay?",
            answers: ["Miraak", "Serana", "Ancano", "Uthgerd the Unbroken"],
            correctAnswer: "Miraak"
        }
    ],
    harryPotterQuestions: [
        {
            question: "How many Horcruxes did Voldemort create intentionally?",
            answers: ["Five", "Seven", "Six", "Ten"],
            correctAnswer: "Six"
        },
        {
            question: "What is the correct birth order of the Weasley children?",
            answers: ["Bill, Charlie, Percy, Fred and George, Ron, Ginny", "Percy, Charlie, Bill, Fred and George, Ron, Ginny",
                "Charlie, Bill, Percy, Fred and George, Ron, Ginny", "Bill, Percy, Charlie, George and Fred, Ron, Ginny"],
            correctAnswer: "Bill, Charlie, Percy, Fred and George, Ron, Ginny"
        },
        {
            question: "What is the name of the magical map that shows the entire layout of Hogwarts?",
            answers: [`Luna’s Map`, `Marauder's Map`, `Errol’s Map`, `McGonagall’s Map`],
            correctAnswer: `Marauder's Map`
        },
        {
            question: "What is Harry’s middle name?",
            answers: ["Jerry", "James", "John", "Alexander"],
            correctAnswer: "James"
        },
        {
            question: "What is Voldemort’s Mother’s name?",
            answers: ["Marty Poppins", "Alice Wright", "Merope Gaunt", "Kathryn Haun"],
            correctAnswer: "Merope Gaunt"
        },
        {
            question: "What kind of wood is Harry’s first wand made out of?",
            answers: ["Cherry", "Oak", "Pine", "Holly"],
            correctAnswer: "Holly"
        },
        {
            question: "What is the name of the popular wizarding newspaper based in London, England?",
            answers: ["The Daily Wizzard", "The Daily Prophet", "The Daily News", "The Daily Magic"],
            correctAnswer: "The Daily Prophet"
        },
        {
            question: "What year was The Goblet of Fire published?",
            answers: ["1999", "2001", "2005", "2000"],
            correctAnswer: "2000"
        },
        {
            question: "What is Harry's owl's name",
            answers: ["Fluffy", "Hedwig", "Harry Jr", "Snape"],
            correctAnswer: "Hedwig"
        },
        {
            question: "What is Professor McGonagall’s animagus?",
            answers: ["Orange tabby cat", "Brown tabby cat", "Silver tabby cat", "Owl"],
            correctAnswer: "Silver tabby cat"
        },
        {
            question: "What are the employees of the department of the Mysteries called?",
            answers: ["Unbreakables", "Untouchables", "Unspeakables", "Uncrustables"],
            correctAnswer: "Unspeakables"
        },
        {
            question: "What position in Quidditch does Harry play?",
            answers: ["Beater", "Seeker", "Chaser", "Goalie"],
            correctAnswer: "Seeker"
        },
        {
            question: "What type of dragon is guardian Gringott’s bank?",
            answers: ["Ukrainian Ironbelly", "Peruvian Vipertooth", "Hungarian Horntail", "Swedish Short-Snout"],
            correctAnswer: "Ukrainian Ironbelly"
        },
        {
            question: "What does Hagrid use to channel the pieces of his wand once it’s been broken?",
            answers: ["Black broom", "Pink umbrella", "Brown walking stick", "Wooden cane"],
            correctAnswer: "Pink umbrella"
        },
        {
            question: "Who is the Slytherin ghost?",
            answers: ["The Leaky Cauldron", "The Sappy Siren", "The Charming Chap", "The Bloody Baron"],
            correctAnswer: "The Bloody Baron"
        },
        {
            question: "What is Hermione’s Cat’s name?",
            answers: ["Crookshanks", "Shalesmith", "Meowth", "Sweetiepie"],
            correctAnswer: "Crookshanks"
        },
        {
            question: "What type of animal does Harry accidently set free while they’re at the zoo?",
            answers: ["Lion", "Bear", "Boa constrictor", "Tarantula"],
            correctAnswer: "Boa constrictor"
        },
        {
            question: "Voldemort’s real name?",
            answers: ["Tom Mario Riddle", "Tim Pavlof Riddle", "Turner Riddle", "Tom Marvolo Riddle"],
            correctAnswer: "Tom Marvolo Ridlle"
        },
        {
            question: "What creature is Ron famously afraid of?",
            answers: ["Snakes", "Rats", "Spiders", "Dogs"],
            correctAnswer: "Spiders"
        },
        {
            question: "What is Hermione’s patronus?",
            answers: ["Bear", "Wolf", "Otter", "Deer"],
            correctAnswer: "Otter"
        },
        {
            question: "Who is Hagrid’s half brother?",
            answers: ["Goop", "Grawp", "Greene", "Doug"],
            correctAnswer: "Grawp"
        },
        {
            question: "Where was Harry Potter born?",
            answers: [`Godric's Hollow`, `Deathly Hallows`, `Diagon Alley`, `Grey Mansion`],
            correctAnswer: `Godric's Hollow`
        },
        {
            question: "What is the name of the Gryffindor ghost?",
            answers: ["Fainting Fred", "Big Smile Ben", "Nearly Headless Nick", "Gorgeous George"],
            correctAnswer: "Nearly Headless Nick"
        },
        {
            question: "When is Harry’s birthday?",
            answers: ["June 30", "July 31", "July 4", "July 29"],
            correctAnswer: "July 31"
        },
        {
            question: "What is the name of Hagrid’s boarhound dog?",
            answers: ["Fluffy", "Fred", "Fang", "Faline"],
            correctAnswer: "Fang"
        },
        {
            question: "Who is Harry’s godfather?",
            answers: ["Hagrid", "Dumbledor", "Voldemort", "Sirius Black"],
            correctAnswer: "Sirius Black"
        },
        {
            question: "Which Weasley dies during the final battle of Hogwarts?",
            answers: ["George", "Ginnie", "Charlie", "Fred"],
            correctAnswer: "Fred"
        },
        {
            question: "What magazine does Xenophilius Lovegood publish?",
            answers: ["Transfiguration News", "The Quibbler", "Hot Press", "Broomstick Journal"],
            correctAnswer: "The Quibbler"
        },
        {
            question: "What is the address of the Black family home?",
            answers: ["13 Grimmauld Place", "20 Grimmauld Place", "7 Grimmauld Place", "12 Grimmauld Place"],
            correctAnswer: "12 Grimmauld Place"
        },
        {
            question: "Who anonymously sends Harry his father's invisibility cloak on Christmas?",
            answers: ["Hagrid", "Sirius Black", "James Potter", "Albus Dumbledore"],
            correctAnswer: "Albus Dumbledore"
        },
        {
            question: "What animal symbol of Ravenclaw?",
            answers: ["Raven", "Eagle", "Hippogriff", "Dove"],
            correctAnswer: "Eagle"
        },
        {
            question: "What class does Professor McGonagall teach?",
            answers: ["Potions", "Incantations", "Transfigurations", "Quidditch"],
            correctAnswer: "Transfigurations"
        },
        {
            question: "Who kills Dobby?",
            answers: ["Voldemort", "Bellatrix Lestrange", "Ron Weasley", "Lucius Malfoy"],
            correctAnswer: "Bellatrix Lestrange"
        },
        {
            question: "What was the name of Hagrid’s pet dragon?",
            answers: ["Herbert", "Norbert", "Langford", "Snowy"],
            correctAnswer: "Norbert"
        },
        {
            question: "What is the name of the Weasley family home?",
            answers: ["The Burrow", "The Cottage", "Creekside Home", "Weasley Manor"],
            correctAnswer: "The Burrow"
        },
        {
            question: "What is the maiden name of sisters Lily Potter and Petunia Dursley?",
            answers: ["Brown", "Goyle", "Evans", "Parkinson"],
            correctAnswer: "Evans"
        },
        {
            question: "What day did James and Lily Potter die?",
            answers: ["Feb 14", "July 4", "Oct 31", "Dec 25"],
            correctAnswer: "Oct 31"
        },
        {
            question: "Where is the entrance to the Chamber of Secrets hidden?",
            answers: [`Ravenclaw's common room`, `Library`, `The girls’ bathroom`, `Professor McGonagall’s office`],
            correctAnswer: `The girls’ bathroom`
        },
        {
            question: "What house is Justin Finch-Fletchley in?",
            answers: ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"],
            correctAnswer: "Hufflepuff"
        },
        {
            question: "How many players are on a Quidditch team?",
            answers: ["Twelve", "Eleven", "Five", "Seven"],
            correctAnswer: "Seven"
        },
        {
            question: "What teleportation magic do sixth-years learn?",
            answers: ["Apparition", "Aguamenti", "Expelliarmus", "Avada Kedavra"],
            correctAnswer: "Apparition"
        },
        {
            question: "What is Ron’s favorite Quidditch team?",
            answers: ["Fighting Ferrets", "Chudley Cannons", "Leaping lizards", "Red Ravenclaws"],
            correctAnswer: "Chudley Cannons"
        },
        {
            question: "What does Charlie Weasley do for a living after graduation?",
            answers: ["Study spiders", "Hunt unicorns", "Study dragons", "Tame dragons"],
            correctAnswer: "Study dragons"
        },
        {
            question: "Who is the first person to ever successfully break into Gringotts?",
            answers: ["James Potter", "Quirinus Quirrell", "Moaning Myrtle", "Albus Dumbledore"],
            correctAnswer: "Quirinus Quirrell"
        },
        {
            question: "Who is related to Tonks?",
            answers: ["Professor Severus Snape", "Harry Potter", "Bellatrix Lestrange", "Hermione Granger"],
            correctAnswer: "Bellatrix Lestrange"
        },
        {
            question: "How old was the Sorcerer’s Stone co-creator Nicolas Flamel when he decided to destroy it?",
            answers: ["500", "665", "28", "725"],
            correctAnswer: "665"
        },
        {
            question: "How many staircases does Hogwarts have?",
            answers: ["150", "167", "142", "132"],
            correctAnswer: "142"
        },
        {
            question: "How many possible Quidditch fouls are there?",
            answers: ["700", "73", "777", "50"],
            correctAnswer: "700"
        },
        {
            question: "For Harry's 17th birthday, what color did Hermione turn the leaves of the Weasleys’ crabapple tree?",
            answers: ["Silver", "Yellow", "Gold", "Green"],
            correctAnswer: "Gold"
        },
        {
            question: "What is the max speed of a Firebolt broomstick?",
            answers: ["125 mph", "150 mph", "75 mph", "200 mph"],
            correctAnswer: "150 mph"
        }
    ]
};

let score, categoryQuestions, questionIdx; // declaring three variables (keep track of score, questions for a specific category, used to track the current question's index so you know which question you're on)

// each of the below is grabbing HTML elements form the page using the document.getElementById, allows you to manipulate or interact with the DOM
const skyrimCat = document.getElementById("skyrimQuestions"); //pooling questions from each category
const harryPotterCat = document.getElementById("harryPotterQuestions");
const questionEl = document.getElementById("question"); //refers to the HTML elements that will dispaly the current question
const answerA = document.getElementById("a"); // all correspond to the 
const answerB = document.getElementById("b"); // answer options
const answerC = document.getElementById("c");
const answerD = document.getElementById("d");
const questionContainer = document.getElementById("question-container") //container element that wraps the questions and answers
questionContainer.style.visibility = "hidden";
const scoreEl = document.getElementById("score"); //display current score
const resetButton = document.getElementById("resetButton"); //button element to reset quiz
const gameStart = document.querySelector(".game-start") //because it's a class
const message = document.getElementById("gameMessage")
// Booleans that help track the state of the game
let questionAnswered = false //keeps track of whether the current question has been answered yet, starts false because no answer has been selected yet
let resetButtonClicked = false //tracks whether the reset button has been clicked
let answeredQuestions = 0; // counter for answered questions


skyrimCat.addEventListener("click", init) // waiting for user to click the category 
harryPotterCat.addEventListener("click", init) //will then run the init function
resetButton.addEventListener("click", resetQuiz)
answerA.addEventListener("click", checkAnswer)//waiting for user to click an answer choice 
answerB.addEventListener("click", checkAnswer)//and will then run check answer function on 
answerC.addEventListener("click", checkAnswer) //what the user clicked
answerD.addEventListener("click", checkAnswer)





function init(evt) {
    score = 0; // lets score equal 0 whenever the init function is called. The init function is triggered when the user clicks on a category, so each time a new category is chosen the score is set back to 0
    categoryQuestions = categories[evt.target.id]; //sets the categoryQuestions variable to hold the questions for the selected category. The evt object (the event) contains details about the click. evt.targte.id gives the ID of the element that was clicked, which category was picked and pool the questions from that category
    console.log(evt.target.id) //allows you to see which category was clicked and verify that the event handler is working as expected
    console.log(categoryQuestions) // to ensure the correct set of questions is being loaded
    renderQuestions(); //responsible for dispalying the first question in the selected category on the page. This might involved populating the HTML with the question and asnwer options
    resetQuiz(); // reset for game to start fresh
    gameStart.style.visibility = "hidden"
    questionContainer.style.visibility = "visible"
}
// flow for init function: -when a user clicks a category the init func is called
// -the score is reset to 0 to start fresh
// - the category's questions are loaded based on which category was clicked using the evt.target.id
// -the questions are logged to the console for debugging
// -the questions are rendered on the page using renderQuestions(), which likely displays the current question and answer choices
// -the quiz state is reset with resetQuiz() to prepare for the new quiz

// 1. User clicks on a category (skyrim or harry potter)
// 2. the init function starts:
//    - resets the score to 0
//    - loads the questions for the selected category
//    - displays the first question and answers
//    - resets any previous state

function renderQuestions() {
    console.log(score) // logs current score here to debug and make sure we are grabbing the correct element
    scoreEl.innerText = `Score: ${score}` // this will display the current score in a user friendly format
    questionAnswered = false; // this resets the questionedAnswered flag to false, this flag tracks whether the current question has been answered or not
    answerA.style.backgroundColor = "#f0f0f0" //resets the color back to light gray for the buttons so 
    answerB.style.backgroundColor = "#f0f0f0" //they don't stay red or green
    answerC.style.backgroundColor = "#f0f0f0"
    answerD.style.backgroundColor = "#f0f0f0"
    questionIdx = Math.floor(Math.random() * 50) + 1; // this line generates a random index (questionIdx) between 1 and 50, it uses Math.random() to generate a random decimal number between 0 and 1, multiplies that by 50 to scale it, and then uses Math.floor() to round it down to the nearest whole number. Adding 1 ensures that the range of possible indices is between 1 and 50(not 0 and 49)
    // questionIdx = 2

    questionEl.innerText = categoryQuestions[questionIdx].question //this sets the inner text to questionEl element to the question text of the randomly selected question: //categoryQuestions[questionIdx] accesses the question at the index questionIdx // .question is accessing the text of the question itself
    answerA.innerText = categoryQuestions[questionIdx].answers[0] //these lines update the inner text of the answer buttons with possible answer choices. It takes the answers for the randomly selected question and assigns them to the respective answer buttons. // categoryQuestions[questionIdx].answers refers to an array containing the four answer choices. // the answers are displayed on the page as the options for the user to choose from.
    answerB.innerText = categoryQuestions[questionIdx].answers[1]
    answerC.innerText = categoryQuestions[questionIdx].answers[2]
    answerD.innerText = categoryQuestions[questionIdx].answers[3]
    const nextButton = document.getElementById("Next"); // this line searches for an HTML element with the ID "next". Presumably, this is a "Next" button that allows the user to go to the next question once thye've answered the current one.
    if (nextButton) { //this checks if the "Next" button (nextButton) exists in the DOM: // if the nextButton is found, it will be removed from the questionContainer. This might happen when the user answers the question, and a "Next" button is created dynamically for the user to click and move to the next question. Removing the button ensures that the UI is cleaned up before displaying the new question. // If the nextButton doesn't exist the function simply returns early and does nothing so no action is taken.
        questionContainer.removeChild(nextButton)
    } else {
        return
    }
}
// Current Flow of renderQuestions Function:
//   1. score display
//   2. reset states:
//        - the questionAnswered flag is set to false, signaling that no answer has been given yet
//        - the background color of all answer buttons is reset to gray
//   3. load random question:
//        - a random question is selected from the categoryQuestions array using the randomly 
//          generated questionIdx
//   4. Update UI:
//        -the question text and the answer options (A, B, C, D) are displayed on the page
//   5. Remove next button:
//        - if a "Next" button exhists from the previous question, it is removed from the DOM to 
//          clean up the UI for the next question



function checkAnswer(evt) {
    if (questionAnswered) return // checks if the question has been answered, this prevents the user from answering the same question multiple times
    console.log(evt.target.id) // logs the ID of the clicked answer button to the console.
    if (evt.target.id === "a") {
        if (categoryQuestions[questionIdx].answers[0] === categoryQuestions[questionIdx].correctAnswer) {
            score += 1 // this section checks to see if the user clicked on A and if A is correct or not, compares .answers to .correctAnswer
            answerA.style.backgroundColor = "#20c22d"
        } else { // adds 1 point and makes it green if correct, makes it red if not correct
            answerA.style.backgroundColor = "red"
        }
    } else if (evt.target.id === "b") {
        if (categoryQuestions[questionIdx].answers[1] === categoryQuestions[questionIdx].correctAnswer) {
            score += 1
            answerB.style.backgroundColor = "#20c22d"
        } else {
            answerB.style.backgroundColor = "red"
        }
    } else if (evt.target.id === "c") {
        if (categoryQuestions[questionIdx].answers[2] === categoryQuestions[questionIdx].correctAnswer) {
            score += 1
            answerC.style.backgroundColor = "#20c22d"
        } else {
            answerC.style.backgroundColor = "red"
        }
    } else if (evt.target.id === "d") {
        if (categoryQuestions[questionIdx].answers[3] === categoryQuestions[questionIdx].correctAnswer) {
            score += 1
            answerD.style.backgroundColor = "#20c22d"
        } else {
            answerD.style.backgroundColor = "red"
        }
    }

    scoreEl.innerText = `Score: ${score}`
    answeredQuestions++;
    if (answeredQuestions >= 10) {
        endGame();
    } else {
        const nextButton = document.createElement("button"); // creates a new button element dynamically in the javascript code. This button will allow the user to move on to the next question
        nextButton.innerText = "Next" //this sets the text of the newly created button to "next" so the button will appear with that label on the page
        nextButton.addEventListener("click", renderQuestions) //attaches an event listener to the "Next" button. When cliked it triggers the renderQuestions function. This will likely display the next question and update the UI accordingly
        nextButton.setAttribute("id", "Next") // this sets the id attribute of the "Next" button to "next", this ensures that the button has a unqiue ID, which is useful if you want to reference it in other parts of the code
        questionContainer.appendChild(nextButton) //this append the "Next" button to the questionContainer element, which is the HTML container where the question and answers are displayed. this adds the button to the page so the user can click it.
        questionAnswered = true; // this sets the questionAnswered flag to true, indicating that he current question has been answered. This prevents the user from answering the same question multiple times.
    }
}
// 1. Answer Selection:
//     -When the user clicks on an answer button (A, B, C, D), the checkAnswer function is called.
// 2. Check Answer:
//     -The function checks whether the answer selected by the user matches the correct answer for the current question:
//          ~ if correct, the score is incremented, and the background color of the slected answer button is changed to green.
//          ~ if incorrect, the background color of the selected answer button is changed to red.
// 3. Next Button:
//     -after the user selects an answer, a "Next" button is dynamically created and appended to the page. This button allows the user to proceed to 
//      the next question
// 4. Prevent Multiple Answers:
//     - the questionAnswered flag ensures that the user can only answer a question once. If the question has already been answered, the function 
//      does nothing.


//HOW THIS TIES INTO THE OVERALL FLOW:
// User Interactions: this function cpatures the user's answer and evaluates it
// Visual Feedback: the background color chang provides immediate visual feedback to the user, indicating whether they got the answer right or wrong.
// Score Update: the score is incremented when the user answers correctly, and the score is displayed on the page.
// Next Question: once the answer is selected, the user can click the "Next" button to proceed to the next question

function endGame() {
    answerA.disabled = true; //this disables the buttons so the user can't click on them once the game has ended
    answerB.disabled = true;
    answerC.disabled = true;
    answerD.disabled = true;

    const nextButton = document.getElementById("Next"); //this lione is searching for an HTML element with the id="next" and storing it in the variable nextButton. The nextButton could be the button used to proceed to the next question or may to restart the game
    if (nextButton) { //checks if the nextButton exists, if it does it disables the button, essentially it prevents 
        nextButton.disabled = true; //any further actions after the game ends
    }
    scoreEl.innerText = `Score: ${score}` //this updates the text for the player to see thier current score, The player
    message.innerText = `Game Over! Your final score is: ${score}`; // will see their final score at the end of game
    questionContainer.appendChild(message); // this adds the messahe element to another container element called questionContainer. this makes the game over message visible on the screen. The message was likely created beforehand, and now it's added to the DOM so the player can see it
    resetButton.style.visibility = "visible"; //makes the reset button visible. allows the user to restart the game once the game has ended.
}

// FLOW OF EXECUTION
// when endGame() is called:
// 1. all the answer buttons (answerA, answerB, answerC, answerD) are disabled to prevent further input.
// 2. if there's a "Next" button (nextButton), it's disabled too.
// 3. The score is displayed by updating the text content of scoreEl.
// 4. A game-over message is displayed by setting the text of message and appending it to questionContainer.
// 5. The reset button (resetButton) is made visible, allowing the user to restart the game

function resetQuiz(evt) {
    score = 0; // sets the score to 0 when the game is reset
    answeredQuestions = 0; // sets answeredQuestions to 0 so the count can start over, this variable keeps track of how many questions the player has answered
    scoreEl.innerText = `Score: ${score}`; // update the scoreEl element to 0 becuase the score has just been reset to 0

    questionContainer.style.visibility = "hidden"; // hides the questionsContainer element once game has been reset until a new game has started
    gameStart.style.visibility = "visible"; // makes the gameStart element visible again, the choose your category portion
    resetButton.style.visibility = "hidden"; //hides the reset button until the end
    answerA.disabled = false; // this enables the answers to be clicked on again, game has reset so it needs to be interactive again
    answerB.disabled = false;
    answerC.disabled = false;
    answerD.disabled = false;
    message.innerText = ""; // clears the text content of the message element. When the gsme ends and a "Game Over" messgae was shown, we need to clear that message when the game is reset
    resetButtonClicked = false; // set the variable called resetButtonClicked to false, it likely tracks whether the reset button was clicked, and resetting it to falsse helps manage the state of the reset process
    questionAnswered = false; // this resets the questionAnswered flag to false, this variable might track if the user has answered the current question, resetting it ensures thaht the next question will be treated as unanswered
    // reset score to 0, score variable update what you see on the page in your innertext
    // clear questions, clear elements inside the questionContainer
    renderQuestions(); // this calls the renderQuestions function, which handles the logic of rendering questions, after resetting everything else, renderQuestions() would reinitialize the questions and possible set up new ones for the player to answer
}

// Flow of Execution:
// when resetQuiz(evt) is called:
// 1. it resets the score to 0 and updates the score display.
// 2. The game UI is updated to hide the current question container and show the start game section again.
// 3. All answer buttons are re-enabled for the next round.
// 4. the reset button is hidden until needed again.
// 5. The message element is cleared to remove any "GameOver" text.
// 6. Flags like resetButtonClicked and questionAnswered are reset to their initial states.
// 7. Finally, the renderQuestions() function is called, which will likely generate new questions and display them to the user.

// next steps every time you click the button the number of rounds goes up, once you reach 10 rounds the game is over, then score pops up and then another button to play another round pops up