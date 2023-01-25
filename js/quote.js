const verse = document.getElementById("verse");
const chapter = document.getElementById("chapter");

const verses = [
    {
        verse: "and be found in him, not having a righteousness of my own that comes from the law, but that which is through faith in Christ—the righteousness that comes from God on the basis of faith.",
        chapter: "Philippians 3:09",
    },

    {
        verse: "Now about your love for one another we do not need to write to you, for you yourselves have been taught by God to love each other.",
        chapter: "Thessalonians 4:9",
    },

    {
        verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        chapter: "Matthew 6:33",
    },

    {
        verse: "We are from God, and whoever knows God listens to us; but whoever is not from God does not listen to us. This is how we recognize the Spirit[a] of truth and the spirit of falsehood.",
        chapter: "John 4:06",
    },

    {
        verse: "So do not be ashamed of the testimony about our Lord or of me his prisoner. Rather, join with me in suffering for the gospel, by the power of God.",
        chapter: "Timothy 1:08",
    },

    {
        verse: "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
        chapter: "Matthew 5:16",
    },

    {
        verse: "Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me.",
        chapter: "Matthew 5:11",
    },

    {
        verse: "who wants all people to be saved and to come to a knowledge of the truth.",
        chapter: "Timothy 2:04",
    },

    {
        verse: "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
        chapter: "Peter 3:09",
    },

    {
        verse: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
        chapter: "Revelation 21:04",
    },
];

const todayverses = verses[Math.floor(Math.random() * verses.length)];

verse.innerText = todayverses.verse;
chapter.innerText = todayverses.chapter;