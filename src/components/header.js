const Header = (title, date, temp) => {
  const headerClass = document.createElement('div');
  const dateClass = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempClass = document.createElement('span');
  
  headerClass.appendChild(dateClass);
  headerClass.appendChild(titleH1);
  headerClass.appendChild(tempClass);

  headerClass.classList.add('header');
  dateClass.classList.add('date');
  tempClass.classList.add('temp');

  dateClass.textContent = date;
  titleH1.textContent = title;
  tempClass.textContent = temp;

  
  return headerClass; 
  

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
const headerContainer = document.querySelector(selector);
headerContainer.appendChild(Header('Star Lord', 'Zero to Hero', 98));



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
