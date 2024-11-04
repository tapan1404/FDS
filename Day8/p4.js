function fetchdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = [
            {name: "abc", score: 60},
            {name: "art", score: 35},
            {name: "gds", score: 75},
            {name: "gsaa", score: 80},
            {name: "abts", score: 90},
        ];
        resolve(students);
    },4000);
});
}
fetchdata()
.then((data) => {
    let sum = 0;
    data.forEach(element => {
        sum += element.score;
    });
    console.log(sum);
  })
  .catch((error) => {
    console.log(error);
  });