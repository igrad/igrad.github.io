// Catalog of posts
// Format: {id: (post ID #), title: (post title), date: (date), month: (month), year: (year), tags: ["tag1", "tag2", ...]}
var catalog = [
   {  id: 0,
      title: "\"Hello, world!\\n\"",
      date: "September 18, 2019",
      month: 9,
      year: 2019,
      tags: ["misc"]
   },
   {  id: 1,
      title: "[Song] \"Lay-by\" by Tennyson",
      date: "September 26, 2019",
      month: 9,
      year: 2019,
      tags: ["music"]
   },
   {  id: 2,
      title: "[Game] WoW Classic",
      date: "September 26, 2019",
      month: 9,
      year: 2019,
      tags: ["gaming"]
   },
   {  id: 3,
      title: "[Song] \"Schism\" by Tool",
      date: "October 11, 2019",
      month: 10,
      year: 2019,
      tags: ["music"]
   },
   {  id: 4,
      title: "Programmers and Serial Killers",
      date: "October 23, 2019",
      month: 10,
      year: 2019,
      tags: ["programming"]
   }
]


function GetListOfPosts(filter) {
   // Return a list of references to the posts we want, as determined by filter
   if (filter == null) return catalog
   else return catalog.filter(item => item.tags.includes(filter))
}

function ShowIndex(filter) {
   // Post HTML code of the index of the included posts to screen
   var list = GetListOfPosts(filter)

   var html = "<div id='post_index'><div id='fade'></div>"
   html += "<div id='post_index_header' style='box-shadow: 0px 2px #dddddd; font-weight: bold'>Filtered Posts</div>"

   var currentYear = 0
   for (var i = list.length-1; i > -1; i--) {
      var item = list[i];
      if (item.year != currentYear) {
         if (currentYear != 0) html += "<br/>"
         currentYear = item.year
         html += "<div id='year_" + currentYear + "' class='index_year'>"
         html += currentYear
         html += "</div>"
      }
      html += "<div id='" + item.id + "' class='index_entry'>"
      html += item.title
      html += "</div>"
   }

   html += "</div></div>"

   // Post the HTML to the page
   $("#posts_index_wrapper")[0].innerHTML = html

   // Update event handlers on necessary elements
   $(".index_entry").hover(function() {
      $(this).css("color", "white")
   }, function () {
      $(this).css("color", "")
   })
   $(".index_entry").click(function() {
      ShowPost($(this).attr("id"))
   })
}

function ShowPost(postID) {
	// Validate arg
	if (postID == null || postID == "") postID = -1
	else postID = parseInt(postID)

	if (postID < 0 || postID >= catalog.length) postID = catalog.length - 1

	// Load HTML of post to the screen in iframe
	$("#posts_body").attr("src", "posts\\" + postID + ".html")

	// Update url for easy copy-paste
	history.replaceState({
		section: "posts"
	}, "home", "index.html?section=posts&q=" + postID)
}

function ShowMostRecentPost() {
   // Displays the most recently-created post
   ShowPost(catalog.length - 1)
}

function UpdateFilters () {
   // Fetch the filter selection updates from screen and populate index
   // results accordingly
   var filter = null
   if ($(".filter_cb[ischecked=true]").length > 0) {
      filter = $(".filter_cb[ischecked=true]").attr("id").split("_")[1]
   }

   ShowIndex(filter)
}
