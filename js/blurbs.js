let welcome = `
Hi, I'm Ian. I'm a software engineer with a passion for good design 
practice, intuitive UX, and strategic organization. I'm a native 
Iowan, University of Iowa grad (class of 2019), and currently a 
Software Engineer with RFA Engineering contracted to John Deere 
Intelligent Solutions Group.
`

let home = `
<h1>About Me</h1>

<p>This page is a small hub for everything you need to know about me, but 
    if you have any questions (professional or otherwise), feel free to 
    send me an email at 
    <a href="mailto:iangradert@gmail.com">iangradert@gmail.com</a>.</p>
    
<p>As mentioned above, I'm a native Iowan from the Quad Cities area, and 
    a University of Iowa grad. I've been happily married since August 2018, 
    and a proud father of a very large baby boy since July 2022. My family 
    and I live in the Des Moines area.</p>

<p>Outside of software development, I'm a huge fan of video games, music, 
    cinema, and table-top games. In fact, I have video games to thank for 
    introducing me to programming in the first place, way back when Call 
    of Duty 2 was popular in the mid 2000's. I became 
    recognizable in the modding scene for a few games before college, 
    where a more serious introduction to programming spurred my interest. 
    Since then, we've learned that C probably isn't the easiest first 
    programming language to learn. Now, I'm serviceable in a half-dozen 
    languages and frameworks, and I'm even proficient in a few - namely 
    C++ and Python. I'm still growing as a software developer - learning 
    new tricks, refining my style, and adopting new practices.</p>
    
<p>I currently have one project in active development, and several others 
    on the sketchboard, along with a plethora of other ideas that will 
    likely never come to fruition. The current project is a cross-platform
    note-taking application built on C++14 and Qt. It's a newer form of  
    note-taking application, dubbed a "knowledge base" or "second brain" 
    application, specifically targetted at creative authors and Game 
    Masters of fantasy games who conjure up their own worlds and need a 
    good tool to keep track of it all. Few applications on the market 
    suffice for this very niche task, but it's a niche that 
    <a href="https://github.com/igrad/Calliope">Calliope</a> aims to fill.
</p>
`

let programming = `
<h1>Programming</h1>

<p>
    My primary focus is on object-oriented programming via imperative 
    (namely C-based) languages such as C++. I also have a good amount of 
    experience with other paradigms, including front-end web development 
    and functional programming. I've written a substantial amount of code 
    in Python and Powershell for systems scripting (still learning my way 
    through bash). Currently I'm using C++14 and Python the most.
</p>

<p>
    Most of my programming knowledge has been self-taught; I've 
    found that no one seems to teach in the way that I learn best - highly 
    visual examples and guided practice. Data structures, object-oriented 
    paradigms, even code styling practices were all learned as a result of 
    my own curiosity. As a result, I'm still very flexible in my coding 
    practice. When I learn something new, I'm eager to implement it in 
    some way that fits in my current project, though that has put me in a 
    few pinches in the past - sometimes the new tool isn't the right one 
    for the job.
</p>
`

let projects = `
<h1>Projects</h1>

<h3>Current Project: Calliope</h3>
<p>
    As mentioned above, Calliope is an open-source, free-forever project
    that belongs to the next generation of note-taking and mind-mapping 
    software. It's currently in early develeopment. There are projects 
    in this vein that already exist, my favorite being
    <a href="http://obsidian.md">Obsidian</a>, but they are not geared
    specifically for the niche that I want them to fit. My own use case,
    similar to tens of thousands of others, is a journaling application
    designed to aid in the creation and maintenance of "living worlds" - a
    broad term that encompasses fictional settings created by tabletop-RPG
    Game Masters (predominantly) and fiction authors. Birthing and updating
    an entire second world is a daunting task for many people, and rightly 
    so, but I believe Calliope's design can help to ease that burden 
    through tried and tested mind-mapping methods, as well as innovative, 
    intuitive quick-access searching.
</p>
<p>
    The key to a useful search function when streaming one's train of 
    thought directly to the page is speed and accuracy, which sounds like 
    a no-brainer for a search utility, but there's a level to this 
    requirement that most software leaves untapped. With Obsidian, one 
    must type double square-brackets around the term they wish to 
    backlink to. There's a useful search function built into that, so 
    typing "[[New York ]]" might bring up options like "New York City", 
    "New York Pizza", and so on. Unfortunately, that is the only way to 
    access that light-weight search function without your hands leaving 
    the keyboard, unless you set up some fancy macros to access the search 
    bar from a keybinding. It's so close to being naturally intuitive, but 
    doesn't quite fit the bill. Calliope's search functionality aims to 
    take the best elements from Obsidian, OneNote, and other apps and 
    build on them to provide a lookup mechanism that works just as fast as 
    you can think it, without breaking your stream of consciousness.
</p>
<p>
    Calliope is also being built with moddability in mind, meaning upon 
    release, avid users and programmers familiar with C++ and Qt can 
    make their own plugins for other users to access. If there's one thing 
    that the video game industry has taught us, it is that giving your 
    tools to the fanbase is a sure-fire way to prolong product viability.
</p>

<br/>

<h3>Previous Project: Catacombs of Halfwind Keep</h3>
<p>
    <i>Catacombs is likely abandoned at this point, but I learned a great deal 
    from its partial development, both in video game development and in 
    advanced C++ optimizaitons.</i>
</p>
<p>
    If you've never played <a href="https://www.nethack.org/">NetHack</a>, 
    you're missing out on an experience that is essential to understanding 
    how much video games (and computers) have evolved since their 
    introduction to the mass market. NetHack is what the cutting edge of 
    the video game world used to look like, as Rogue and NetHack were among 
    the first games with graphics. It's fantastically fun, and equally 
    frustrating. There is A LOT to learn about the game, with odd 
    keybindings, no tutorial, and merciless AI. It's a pretty faithful 
    recreation of early Dungeons & Dragons: you're slapped into a dungeon 
    with little context, you can interact with most everything you find in 
    some way (often in ways more creative than you may initially think), 
    and you aren't expected to survive.
</p>
<p>
    Fast forward almost 35 years (NetHack was released in 1985!) and now 
    almost every game has a multiplayer aspect - and for good reason. 
    Multiplayer is a whole new layer of interaction with a game, and it 
    manifests in many different ways. One of my favorite multiplayer 
    systems is what you see in Minecraft. Players can fight against each 
    other, work cooperatively, or function independently and sparsely 
    interact. That freedom of choice is a game mechanic in itself, and one 
    that I want Catacombs of Halfwind Keep to revolve around. As Adam 
    Millard eloquently put it in his 
    <a href="https://www.youtube.com/watch?v=39DqD38J-l0">YouTube video</a> 
    about the changes we've seen in multiplayer games over the years:
</p>
<p>
    <div class="big_quote">
    "Playing a game with other people doesn't make it more fun -<br />
    what does, is <span style="font-style: normal;">interacting</span> 
    with them."
    </div>
</p>
<p>
    Catacombs of Halfwind Keep aims to bring the grind, nuance, and 
    vastness of NetHack into the 21st century by taking the same premise 
    and expanding it through graphics, character customization and growth, 
    exploration, and multiplayer interaction. Where NetHack is very 
    clunky, CHK aims to be more discrete and allow players to have more 
    refined control over their inevitable death. It draws heavily from 
    Dungeons and Dragons and NetHack's original vision, but I also want to 
    ensure that it becomes its own beast and not a clone.
</p>
<p>
    If you'd like to learn more about Catacombs to see logistics, status 
    updates, development screenshots, or the code itself, check out the 
    <a href="https://github.com/igrad/CHK">GitHub repo</a> for all the 
    latest.
</p>
`