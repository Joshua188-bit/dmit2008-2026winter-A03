// 1. select form & topic list
let topicForm = document.querySelector(".new-topic-form")
let topicList = document.querySelector(".topics-list")

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
// 1 select form
let topicForm = document.querySelector(".new-topic-form")
let list = document.querySelector(".list-group-item");

console.log(topicForm);
//5. create function to add the text input
const addTopicToPage = (topicName, topicListElement) => {
    //6.a) create template string
    let newTopicElement = `<li class="list-group-item">${topicName}</li>`
    topicListElement.innerHTML += newTopicElement;

}


// 2. add event listener and stop default form submission
topicForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //3. grab input text & store value
    let topicInput = e.target.elements["new topic"];
    let topicText = topicInput.value;

    //4. input validation (no empty strings, use bootstrap classes)
    if (!topicText) {
        topicInput.classList.add("is-invalid")
    } else {
        topicInput.classList.remove("is-invalid");
    }
    //6. call the function
    addTopicToPage(topicText, list);

    
    
});
