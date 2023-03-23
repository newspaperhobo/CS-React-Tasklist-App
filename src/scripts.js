// SKELETON CODE
//Info: Accessing data from an API is one of the most common things you will do in web development, and the way to access APIs is with fetch. Fetch is function built into JavaScript that allows you to query any URL/API to get back data. The most important part is that fetch is asynchronous so it will run in the background and let you know when it finishes using promises

// -------------
// URL: "https://jsonplaceholder.typicode.com/posts"
// syntax: 
fetch("https://jsonplaceholder.typicode.com/posts", {});
// ALL of the posts. the second parameter is optional

// console.log --> gives us a promise object --> console.log(fetch("URL"), {})
console.log(fetch("https://jsonplaceholder.typicode.com/posts"), {});

// GET Request-
/*

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     // 200 = ok
//     if (res.ok) {
//       console.log("Successful connection");
//     } else {
//       console.log("Not successful");
//     }
//     // CAN ALSO BE WRITTEN AS:
//     if (res.status === 200) {
//       console.log(res.status);
//     } else {
//       console.error("An error occurred");
//     }
//     // res.json()
//   })
//   .then((res) => res.json())
//   // activate when you reach a page that doesn't exist
//   .catch((err) => console.log("Request Failed", err));

*/
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    // 200 = ok
    if (res.ok) {
      console.log("Successful connection");
    } else {
      console.log("Not successful");
    }
    // CAN ALSO BE WRITTEN AS:
    // if (res.status === 200) {
    //   console.log(res.status);
    // } else {
    //   console.error("An error occurred");
    // }
    // res.json()
  })
  .then((res) => res)
  // activate when you reach a page that doesn't exist
  .catch((err) => console.log("Request Failed", err));

// CRUD - requests other than GET use the second parameter
// Create Request
/*
fetch("URL", {
    method: "",
    headers: {},
    body:
})
.then((res) = {
    if(res.status === 200) {
        console.log()
        //redirectHome()
    }
})
.catch(err => console.log("Request Failed", err));

*/
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        name: "CodeSquader"
    })
})
.then((res) => {
    if(res.status === 200) {
        console.log(res.status)
        //redirectHome()
    }
})
.catch(err => console.log("Request Failed", err));


// Update Request-  NOTICE THE URL change
/*
fetch("URL/${id}", {
    method: "",
    headers: {},
    body:
})
.then((res) = {
    if(res.status === 200) {
        console.log()
        //setVisible()
    } else {
        console.error()
    }
})
.catch(err => console.log("Request Failed", err));

*/
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({
        name: "CodeSquader"
    })
})
.then((res) => {
    if(res.status === 200) {
        console.log("Data updated")
        //setVisible()
    } else {
        console.error("Form Submission Not Successful")
    }
})
.catch(err => console.log("Request Failed", err));


// Delete request- NOTICE THE URL change
/*

fetch("URL", {
    method: "DELETE",
    // don't pass the header when deleting
    body: "posts/1"
}).then(res => {
    // CAN ALSO BE WRITTEN AS:
    if (res.status === 200) {
        console.log(res.status)
        // for delete ONLY
        onclose();
    } 
})
// activate when you reach a page that doesn't exist
.catch(err => console.log("Request Failed", err));

*/
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
  // don't pass the header when deleting
  body: "posts/1",
})
  .then((res) => {
    // CAN ALSO BE WRITTEN AS:
    if (res.status === 200) {
      console.log(res.status);
      // for delete ONLY
    //   onclose();
    }
  })
  // activate when you reach a page that doesn't exist
  .catch((err) => console.log("Request Failed", err));

// -------END--------
