const Tabs = (topics) => {
  const topicsClass = document.createElement('div');
  const javascript = document.createElement('div');
  const bootstrap = document.createElement('div');
  const technology = document.createElement('div');

  topicsClass.classList.add('topics');
  javascript.classList.add('tab');
  bootstrap.classList.add('tab');
  technology.classList.add('tab');

  javascript.textContent = topics[0];
  bootstrap.textContent = topics[1];
  technology.textContent = topics[2]; //should this be a .foreach? 

  topics.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    div.classList.add('tab');
    topicsClass.appendChild(div)
  })
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
