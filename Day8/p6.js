async function fetchdata() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();

        data.forEach(element => {
            console.log(`Login: ${element.login}, Node ID: ${element.node_id}, URL: ${element.url}`);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchdata();
