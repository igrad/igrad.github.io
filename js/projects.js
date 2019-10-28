var projectAbbrevs = ["CHK", "GMWN", "Rodney", "Guy", "BoH"]

function ShowProject(projectID) {
	// Close all project articles
	$(".project_article").css("display", "none")

	// Validate arg
	if (projectAbbrevs.indexOf(projectID) == -1) projectID = "CHK"

	// Open project article
	$("#project_" + projectID).css("display", "block")
}
