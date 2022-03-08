// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// fakeRequestCallback(
//   "books.com/page1",
//   (response) => {
//     console.log("IT WORKED!!!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       (response) => {
//         console.log("IT WORKED AGAIN!!!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           (response) => {
//             console.log("IT WORKED AGAIN (3nd req)!!!");
//             console.log(response);
//           },
//           (err) => {
//             console.log("ERROR (3nd req)!!!", err);
//           }
//         );
//       },
//       (err) => {
//         console.log("ERROR (2nd req)!!!", err);
//       }
//     );
//   },
//   (err) => {
//     console.log("ERROR!!!", err);
//   }
// );

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("IT WORKED!!! (page 1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("IT WORKED!!! (page 2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("IT WORKED!!! (page 3)");
//           })
//           .catch(() => {
//             console.log("OH NO, ERROR!!! (page 3)");
//           });
//       })
//       .catch(() => {
//         console.log("OH NO, ERROR!!!  (page 1)");
//       });
//   })
//   .catch(() => {
//     console.log("OH NO, ERROR!!! (page 1)");
//   });

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("IT WORKED!!!!!! (page1)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page2)");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("IT WORKED!!!!!! (page3)");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO, A REQUEST FAILED!!!");
    console.log(err);
  });
