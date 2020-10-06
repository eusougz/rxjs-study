import { Observable } from "rxjs";

var observable = new Observable((observer) => {
  try {
    observer.next("My first own observable!");
    setInterval(() => {
      observer.next("This world is crazy.");
    }, 2000);
    // observer.complete();
    // observer.next("This will not send");
  } catch (err) {
    observer.error(err);
  }
});

var observer = observable.subscribe(
  (value) => addItem(value),
  (error) => addItem(error),
  () => addItem("Completed")
);

var observer2 = observable.subscribe((value) => addItem(value));

setTimeout(() => {
  observer.unsubscribe();
}, 6001);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
