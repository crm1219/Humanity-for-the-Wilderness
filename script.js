// Quote Generator Section //

//list of quotes to draw from//
var quoteList = [
  "“On the ragged edge of the world I'll roam, <br> And the home of the wolf will be my home, <br> And a bunch of bones on the boundless snows <br> The end of my trail . . . who knows, who knows!”<br></br> - Robert William Service, “The Nostomaniac”, Rhymes of a Rolling Stone, 1912",
  "“All good things are wild and free.” <br></br> - Henry David Thoreau, “Walking”",
  "“The woods were made for the hunters of dreams, <br> The brooks for the fishers of song; <br> To the hunters who hunt for the gunless game <br> The streams and the woods belong. <br> There are thoughts that moan from the soul of the pine,<br>  And thoughts in a flower bell curled; <br> And the thoughts that are blown with the scent of the fern <br> Are as new and as old as the world.” <br></br> - Sam Walter Foss, “The Bloodless Sportsman”",
  "“Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity; and that mountain parks and reservations are useful not only as fountains of timber and irrigating rivers, but as fountains of life.” <br></br> - John Muir, Our National Parks, 1901",
  "“If you knew wilderness in the way that you know love, you would be unwilling to let it go.” <br></br> - Williams, Terry Tempest. Red: Passion and Patience in the Desert. Knopf Doubleday Publishing Group, 2008.",
  "“O Solitude! if I must with thee dwell, <br> Let it not be among the jumbled heap <br> Of murky buildings; climb with me the steep,<br> — Nature’s observatory—whence the dell, <br> Its flowery slopes, its river’s crystal swell, <br> May seem a span; let me thy vigils keep <br> ’Mongst boughs pavillion’d, where the deer’s swift leap <br> Startles the wild bee from the fox-glove bell. <br> But though I’ll gladly trace these scenes with thee, <br> Yet the sweet converse of an innocent mind, <br> Whose words are images of thoughts refin’d, <br> Is my soul’s pleasure; and it sure must be <br> Almost the highest bliss of human-kind, <br>When to thy haunts two kindred spirits flee.”<br></br>  -John Keats, “Sonnet VII (O Solitude! If I must with thee dwell)”",
  "“And into the forest I go <br> To lose my mind and find my soul.” <br></br> - Unknown"
]

//defining variables for buttons and count//
var backwardButton = document.getElementById("backwardButton");
var forwardButton = document.getElementById("forwardButton");
var quote = document.getElementById("quote");

var count = 0

//functions to change count and text//
function forwardQuote() {
  
  count += 1;
  if (count == quoteList.length) {
    count = 0;
  }
  quote.innerHTML = quoteList[count];
}

function backwardQuote() {
  
  if (count == 0) {
    count = quoteList.length;
  }
  count -= 1;
  quote.innerHTML = quoteList[count];
}

//event listeners for the buttons//
if (forwardButton) {
  forwardButton.addEventListener("click", forwardQuote);
}
  
if (backwardButton) {
  backwardButton.addEventListener("click", backwardQuote);
}

// "Why Wilderness Matters" Buttons Section //

//defining variables for the buttons//
var resources = document.getElementById("resources");
var ecosystem = document.getElementById("ecosystem");
var climate = document.getElementById("climate");
var indigenous = document.getElementById("indigenous");
var intrinsic = document.getElementById("intrinsic");
//defining variables for the text that appears//
var restext = document.getElementById("restext");
var ecotext = document.getElementById("ecotext");
var climtext = document.getElementById("climtext");
var inditext = document.getElementById("inditext");
var intritext = document.getElementById("intritext");

//functions that make the text of one button visible and the text of all others invisible//
function text1() {
  restext.innerHTML = "Wilderness areas are vital sources of clean air and water, making them all the more necessary in a time of rampant air and water pollution.";
  ecotext.innerHTML = "";
  climtext.innerHTML = "";
  inditext.innerHTML = "";
  intritext.innerHTML = "";
}

function text2() {
  ecotext.innerHTML = "Wilderness areas sustain biodiversity, providing refuges for threatened and endangered species.";
  restext.innerHTML = "";
  climtext.innerHTML = "";
  inditext.innerHTML = "";
  intritext.innerHTML = "";
}

function text3() {
  climtext.innerHTML = " Intact wildernesses regulate weather and water cycles and frequently serve as carbon sinks, lands which absorb CO2 emissions, maintaining stability in the face of instability caused by climate change. When they are degraded, the planet loses buffers against extreme weather and the only places that reduce carbon emissions instead of contributing to them.";
  restext.innerHTML = "";
  ecotext.innerHTML = "";
  inditext.innerHTML = "";
  intritext.innerHTML = "";
}

function text4() {
  inditext.innerHTML = "Many indigenous peoples living in wilderness areas depend on them for essential resources, and their lands are integral to their culture and way of life. Colonialism has already led to so many of the lands that compose their heritage being unjustly taken from them and exploited for profits, turning the need to protect wilderness into not just an issue of environmentalism, but also one of social justice.";
  restext.innerHTML = "";
  ecotext.innerHTML = "";
  climtext.innerHTML = "";
  intritext.innerHTML = "";
}

function text5() {
  intritext.innerHTML = "As a haven apart from the stress and sensory overload of the cities, the wilderness is a source of peace and spirituality that benefits our mental and physical wellbeing, a location for many recreational activities like hiking, camping, and swimming, and above all, a place of untamed and unparalleled beauty.";
  restext.innerHTML = "";
  ecotext.innerHTML = "";
  climtext.innerHTML = "";
  inditext.innerHTML = "";
}

//event listeners for each button//
if (resources) {
  resources.addEventListener("click", text1);
}
if (ecosystem) {
  ecosystem.addEventListener("click", text2);
}
if (climate) {
  climate.addEventListener("click", text3);
}
if (indigenous) {
  indigenous.addEventListener("click", text4);
}
if (intrinsic) {
  intrinsic.addEventListener("click", text5);
}

// Info About Different Ecosystems Section //

//defining variables for each picture and the text that appears//
var boreal = document.getElementById("boreal");
var rainforest = document.getElementById("rainforest");
var grasslands = document.getElementById("grasslands");
var coral = document.getElementById("coral");
var ocean = document.getElementById("ocean");

var environment = document.getElementById("environment");

//functions to change the text that appears//
function eco1() {
  environment.innerHTML = "Boreal forests, lying between the tundra and temperate forests, serve as a crucial carbon sink, and they are threatened by logging to produce paper products.";
}

function eco2() {
  environment.innerHTML = "Tropical rainforests are essential to biodiversity, containing roughly half of all species in the world, and they are threatened by deforestation to pave way for development.";
}

function eco3() {
  environment.innerHTML = "Grasslands were found in California to be a more reliable carbon sink than trees due to the wildfire risks of forests, and they are threatened by farming, overgrazing, and invasive species.";
}

function eco4() {
  environment.innerHTML = "Coral reefs contribute greatly to the ocean’s biodiversity, serve as a source of food and protection for many marine species, and protect coastlines from tidal waves and hurricanes. They are threatened by pollution and rising ocean temperatures.";
}

function eco5() {
  environment.innerHTML = "The ocean, a vast carbon sink, is vital to the world’s water cycle, and it is threatened by pollution and rising temperatures due to climate change.";
}

//event listeners for each picture//
if (boreal) {
  boreal.addEventListener("click", eco1);
}
if (rainforest) {
  rainforest.addEventListener("click", eco2);
}
if (grasslands) {
  grasslands.addEventListener("click", eco3);
}
if (coral) {
  coral.addEventListener("click", eco4);
}
if (ocean) {
  ocean.addEventListener("click", eco5);
}

// Plan Generator Section //

//defining variables for the button and plan//
var plan = document.getElementById("plan");
var planButton = document.getElementById("planButton");

//function to define variables for each inputted value and insert these variables into a generated script//
function createPlan() {
  var action1 = document.getElementById("action1").value;
  var date1 = document.getElementById("date1").value;
  var reason1 = document.getElementById("reason1").value;
  var action2 = document.getElementById("action2").value;
  var date2 = document.getElementById("date2").value;
  var reason2 = document.getElementById("reason2").value;
  var action3 = document.getElementById("action3").value;
  var date3 = document.getElementById("date3").value;
  var reason3 = document.getElementById("reason3").value;

  plan.innerHTML = "My Plan to Protect the Environment: <br></br> First, I aim to " + action1 + " by " + date1 + " to " + reason1 + ". <br></br>Second, I aim to " + action2 + " by " + date2 + " to " + reason2 + ". <br></br>Third, I aim to " + action3 + " by " + date3 + " to " + reason3 + ".";

}

//event listener for the script-generating button//
if (planButton) {
  planButton.addEventListener("click", createPlan);
}
