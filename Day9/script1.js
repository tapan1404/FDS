async function fetchData() {
    try {
        let response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
        let data = await response.json();
        
        // Accessing the articles array within the data
        data.articles.forEach((element) => {
            let h1 = document.createElement("h2");
            h1.textContent = element.title;  // Article title

            let a = document.createElement("a");
            a.textContent = "Read more";
            a.setAttribute("href", element.url); // Article URL
            a.setAttribute("target", "_blank");   // Open in new tab

            let description = document.createElement("p");
            description.textContent = element.description;  // Article description

            let top = document.getElementById("div1");
            top.appendChild(h1);
            top.appendChild(description);
            top.appendChild(a);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call fetchData when the page loads
window.onload = fetchData;
