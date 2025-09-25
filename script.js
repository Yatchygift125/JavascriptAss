let user = "Guest";
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome back, " + user);
} else {
    console.log("Welcome , Visitor");
}
function readMore(travelBlog) {
    alert("You clicked Read More on:" + travelBlog);
}
function greetUser() {
    let name = prompt("Enter your name;");
    if (name) {
        alert("Hello," + name );
    }
}
let recentPosts = ["Blog Post Two", "Blog Post One", "Blog Post Three"];
let recntList = document.getElementById("recentPosts");
for (let i = 0; i <recentPosts.length; i++) {
    let li = d0cument.createElement("li");
    li.textContent = recentPosts[i];
    SpeechRecognitionResultList.appendChild(li);
}
let article = document.createElement("article");
article.innerHTML = ``
<h2>
<small>05 September</small>

