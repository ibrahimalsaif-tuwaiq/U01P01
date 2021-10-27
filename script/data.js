let comicsData = [
    {
        title: 'The United States of Captain America',
        img: 'https://i2.wp.com/getcomics.info/share/uploads/2021/10/The-United-States-of-Captain-America-5-2021.jpg?fit=400%2C615&ssl=1',
        desc: `After the shield thieves free a deadly villain, Bucky Barnes teams up with an air force intelligence officer who might know how to recapture the villain, while John, Sam and Steve give pursuit. When his allies run into trouble, Bucky is forced to face his complicated feelings about taking up the Captain America mantle again. The Captains Network bands together in one last epic battle to keep the shield from being used for nefarious purposes. Don’t miss the pulse-pounding finale of this groundbreaking miniseries!`,
        inReadingList: false,
        type: 'Marvel',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/the-united-states-of-captain-america-2021/5/1'
    },
    {
        title: 'Task Force Z ',
        img: 'https://i2.wp.com/getcomics.info/share/uploads/2021/10/Task-Force-Z-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `In life, they’ve terrorized the people of Gotham. Now, they are Gotham’s last hope. Task Force X saw villains working their way to freedom. Task Force Z will see dead villains working for a new chance at life! On A-DAY, the attack on Arkham Asylum left hundreds of Gotham’s most cunning and deranged criminals dead…now, a mysterious benefactor has activated the government’s TASK FORCE clause to bring them back as the ultimate army of the night! To lead this team of the undead, only a person who knows exactly what it feels like to be brutally murdered and brought back to life can handle the job…enter: RED HOOD. But when Jason Todd unravels the mystery surrounding Task Force Z’s creation, will he try to destroy it…or embrace it? BANE. MAN-BAT. THE ARKHAM KNIGHT. SUNDOWNER. MR. BLOOM. RED HOOD. THEY ARE TASK FORCE Z, AND DEATH WAS JUST THE BEGINNING...!`,
        inReadingList: false,
        type: 'DC',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/task-force-z-2021/1'
    },
    {
        title: 'Time Before Time',
        img: 'https://i0.wp.com/getcomics.info/share/uploads/2021/10/Time-Before-Time-Vol.-1-TPB-2021.jpg?fit=400%2C615&ssl=1',
        desc: `2140. To escape a world with no future, many turn to the Syndicate—a criminal organization that, for the right price, will smuggle you back in time to the promise of a better yesterday. Tatsuo, a Syndicate smuggler, wants to leave his life of crime behind, but when an FBI agent disrupts his escape plan, they both find themselves hunted across time by his former employers. A mix of SAGA and Looper, TIME BEFORE TIME is a sci-fi crime tale that proves the one thing you can never escape is your past.`,
        inReadingList: false,
        type: 'Others',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/time-before-time-2021/1'
    },
    {
        title: 'Aquaman – The Becoming',
        img: 'https://i0.wp.com/getcomics.info/share/uploads/2021/10/Aquaman-The-Becoming-2-2021.jpg?fit=400%2C615&ssl=1',
        desc: `Someone launched a terrorist attack on Atlantis, and Jackson Hyde is the prime suspect! Despite Mera’s best efforts to defend Jackson against the accusations of the Atlantean guard, the evidence is mounting and time’s running out. How far will Jackson go to prove his innocence?`,
        inReadingList: false,
        type: 'DC',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/aquaman-the-becoming-2021/2'
    },
    {
        title: 'The Darkhold – Iron Man',
        img: 'https://i0.wp.com/getcomics.info/share/uploads/2021/10/The-Darkhold-Iron-Man-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `Ryan North turns his talents to a brand-new genre! Called forth to face the dread god Chthon, Iron Man reads from the ancient ill-fated text the Darkhold…and it changes the course of his entire life. The armor that has saved him countless times is about to become a prison—one whose only escape is a fate worse than death. The brilliant comedic mind behind The Unbeatable Squirrel Girl and Dinosaur Comics brings you the body-horror tale of the century!!`,
        inReadingList: false,
        type: 'Marvel',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/the-darkhold-iron-man-2021/1'
    },
    {
        title: 'Firefly – River Run',
        img: 'https://i1.wp.com/getcomics.info/share/uploads/2021/09/Firefly-River-Run-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `How did Simon save River from the terrifying Hands-Of-Blue? The great lengths Dr. Simon Tam had to go to in order to save his only sister, River, from her captors are finally revealed in this special standalone issue! Follow Simon’s “fall from grace” as he risks it all and races against time to save River… even as she struggles to hold onto her sanity.`,
        inReadingList: false,
        type: 'Others',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/firefly-river-run-2021/1'
    },
    {
        title: 'Suicide Squad',
        img: 'https://i2.wp.com/getcomics.info/share/uploads/2021/10/Suicide-Squad-8-2021.jpg?fit=400%2C615&ssl=1',
        desc: `Squad in Hell! “Hell and Back” Part 2! Stuck in Hell, the Squad’s only chance for survival is…Ambush Bug?! While one Squad deals with its newest fourth wall-breaking member, Peacemaker and his crew fight for survival as they hunt for the Swamp Thing!`,
        inReadingList: false,
        type: 'DC',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/suicide-squad-2021/8'
    },
    {
        title: 'Black Panther Legends',
        img: 'https://i1.wp.com/getcomics.info/share/uploads/2021/10/Black-Panther-Legends-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `Dive into the legend of the Black Panther in this new origin story by acclaimed author Tochi Onyebuchi and New York Times-bestselling illustrator Setor Fiadzigbey, perfect for middle grade readers! T’Challa and Hunter are brothers growing up in the idyllic royal palace of Wakanda. Theirs goes beyond the usual sibling rivalry, though—Hunter, although older, is adopted, and T’Challa is the true heir to the throne. Both brothers wrestle with fairness and the future, readying themselves for responsibility, when tragedy strikes and takes the choice from them. This new series, ideal for young fans and loyal readers alike, will explore the moments that make T’Challa who he is, from his adventurous upbringing to his walkabout as a teen where he meets the enchanting Ororo Munroe before she becomes the legendary Storm, to when he first invites the Fantastic Four into Wakanda! Son, Brother, Warrior, King—as each chapter unfolds, new pieces of T’Challa’s character will be revealed and the Black Panther will emerge.`,
        inReadingList: false,
        type: 'Marvel',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/black-panther-legends-2021/1'
    },
    {
        title: 'Eternals Forever',
        img: 'https://i0.wp.com/getcomics.info/share/uploads/2021/10/Eternals-Forever-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `IKARIS, AGENT OF THE DEVIANTS?! The Deviants have captured Ikaris! Now under their control, Ikaris has been brainwashed into assassinating Ajak! It’s up to Gilgamesh and Sprite to stop him and prevent all-out war between the Eternals and the Deviants!`,
        inReadingList: false,
        type: 'Marvel',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/eternals-forever-2021/1'
    },
    {
        title: 'Dune – House Atreides',
        img: 'https://i2.wp.com/getcomics.info/share/uploads/2021/10/Dune-House-Atreides-11-2021.jpg?fit=400%2C615&ssl=1',
        desc: `The newly crowned Duke Leto Atreides has been framed for a crime he did not commit and must risk everything to prove his innocence to Imperium’s royal houses. Will it work or will Baron Harkonnen’s evil plan finally come to fruition? The Bene Gesserit assert their influence once more, having predicted a great importance in the Atreides bloodline, one that will influence the coming of their messiah — the Kwisatz Haderach!`,
        inReadingList: false,
        type: 'Others',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/dune-house-atreides-2020/11'
    },
    {
        title: 'Batman – The Imposter',
        img: 'https://i2.wp.com/getcomics.info/share/uploads/2021/10/Batman-The-Imposter-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `Bruce Wayne’s mission as the Batman has only been underway for a year or so, but he can tell he’s making a difference. Unfortunately, he’s made some powerful enemies. All the traditional power brokers of Gotham resent the disruption the Batman has brought to town…and it seems one of them has a plan to neutralize him. There’s a second Batman haunting Gotham’s rooftops and alleys—and this one has no qualms about murdering criminals, live and on tape. With the entire might of the Gotham City Police Department and Gotham’s rich and powerful coming down on his head, Batman must find this imposter and somehow clear his name…but how can you prove your innocence from behind a mask? Director and screenwriter Mattson Tomlin (Project Power, Little Fish) has teamed up with Eisner-winning suspense and horror artist Andrea Sorrentino (Joker: Killer Smile, Gideon Falls) to create a wholly new version of Gotham City, informed by grim reality, where every punch leaves a broken bone and every action has consequences far, far beyond Batman’s imagination!`,
        inReadingList: false,
        type: 'DC',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/batman-the-imposter-2021/1'
    },
    {
        title: 'Hardware – Season One',
        img: 'https://i1.wp.com/getcomics.info/share/uploads/2021/10/Hardware-Season-One-2-2021.jpg?fit=400%2C615&ssl=1',
        desc: `With Dakota convinced that Curtis Metcalf is to blame for the Big Bang riot and the police hot on his trail, Curtis decides to change the game in a way that Edwin Alva won’t see coming. He just needs to find a way to leave the country without getting caught.`,
        inReadingList: false,
        type: 'DC',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/hardware-season-one-2021/2'
    },
    {
        title: 'Dungeons and Dragons – Mindbreaker',
        img: 'https://i2.wp.com/getcomics.info/share/uploads/2021/10/Dungeons-and-Dragons-Mindbreaker-1-2021.jpg?fit=400%2C615&ssl=1',
        desc: `The prelude to the much-anticipated video game Baldur’s Gate III begins here! Changed by their experiences in Avernus, Krydle, Shandie, Delina, Nerys, Minsc, and Boo return home to Baldur’s Gate to find that something much more insidious has taken root… what could be behind the odd behavior of the Head Librarian of the Knowledge-Hold?`,
        inReadingList: false,
        type: 'Others',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/dungeons-dragons-mindbreaker-2021/1'
    },
    {
        title: 'Deadpool – Black, White & Blood',
        img: 'https://i0.wp.com/getcomics.info/share/uploads/2021/10/Deadpool-Black-White-Blood-3-2021.jpg?fit=400%2C615&ssl=1',
        desc: `YOUR CUP RUNNETH OVER! WITH BLOOD! Jay Baruchel & Paco Medina are bringing you a story so insane we refuse to even talk about it! Frank Tieri & Takashi Okazaki are gonna give you some sweet Deadpool VS. Bullseye! Stan Sakai tells the age-old parable “How the Deadpool Got His Swords!”`,
        inReadingList: false,
        type: 'Marvel',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/deadpool-black-white-blood-2021/3'
    },
    {
        title: 'Dark Ages',
        img: 'https://i1.wp.com/getcomics.info/share/uploads/2021/10/Dark-Ages-2-2021.jpg?fit=400%2C615&ssl=1',
        desc: `It has been years since the age of technology ended in a single moment, like a switch had been flicked to off for an entire planet. Now Earth’s heroes attempt to bring humanity together in the darkness. X-Men and Avengers, vigilantes and villains all work together to create something better. But something darker than the night is descending on the world. Our postapocalyptic world is about to face Apocalypse.`,
        inReadingList: false,
        type: 'Marvel',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/dark-ages-2021/2'
    },
    {
        title: 'The Secret Land ',
        img: 'https://i1.wp.com/getcomics.info/share/uploads/2021/10/The-Secret-Land-4-2021.jpg?fit=400%2C615&ssl=1',
        desc: `To the powers the Nazis have unleashed, humanity is a petty thing. But must it be? As war engulfs the edge of the world, Ben and Katherine confront the truth about the boundaries of love, and what lies beyond them.`,
        inReadingList: false,
        type: 'Others',
        rating: {rate: 'no rating yet', total: 0},
        comicLink: 'https://readcomicsonline.ru/comic/the-secret-land-2021/4'
    }
]