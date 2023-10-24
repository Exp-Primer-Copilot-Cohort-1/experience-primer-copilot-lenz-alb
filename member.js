function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberTab = document.getElementById("memberTab");
    var skillsTab = document.getElementById("skillsTab");
    var contactTab = document.getElementById("contactTab");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberTab.style.backgroundColor = "#2c3e50";
    skillsTab.style.backgroundColor = "#34495e";
    contactTab.style.backgroundColor = "#34495e";
}