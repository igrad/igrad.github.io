// Catalog of posts
// Format: {id: (post ID #), title: (post title), date: (date), month: (month), year: (year), tags: ["tag1", "tag2"], header: (some sample text about the post)}
var catalog = [
   {  id: 0,
      title: "Demo Post With a Very Long Title",
      date: "09/18/2019",
      month: 9,
      year: 2019,
      tags: ["misc"],
      header: "Test post to format website"
   }

]


function GetListOfPosts (filter) {
   // Return a list of references to the posts we want, as determined by filter
   if (filter == null) return catalog
   else return catalog.filter(item => item.tags.includes(filter))
}

function GetPostPreviews (filter) {
   // Get HTML code for what to display in a series of post previews

}

function ShowIndex (filter) {
   // Post HTML code of the index of the included posts to screen
   var list = GetListOfPosts(filter)

   var html = "<div id='post_index'><div id='fade'></div>"

   var currentYear = 0
   for (var i = list.length-1; i > -1; i--) {
      var item = list[i];
      if (item.year != currentYear) {
         currentYear = item.year
         html += "<div id='year_" + currentYear + "' class='index_year'>"
         html += currentYear
         html += "</div>"
      }
      html += "<div id='post_" + item.id + "' class='index_entry'>"
      html += item.title
      html += "</div>"
   }

   html += "</div></div>"

   $("#posts_index_wrapper")[0].innerHTML = html;
}

function ShowPost (postID) {
   //
}

function ShowPosts (filter) {
   // Accepts an enumeration as the filter to determine what type of
   // posts should be grabbed and loaded

}
