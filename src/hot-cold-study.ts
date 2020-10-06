import { Observable } from "rxjs";
import { share } from "rxjs/operators";

var observable = new Observable((observer) => {
  try {
    observer.next("My first own observable!");
    setInterval(() => {
      observer.next("This world is crazy.");
    }, 100);
  } catch (err) {
    observer.error(err);
  }
}).pipe(share());

// com o uso do share(), o observable passa a ser
//  do tipo hot, isto é, só transmite para os observer
//  os dados gerados a partir daquele momento

// um observable cold transmite todos os dados já passados
//  quando o observer se inscreve

observable.subscribe(
  (value) => addItem(value),
  (error) => addItem(error),
  () => addItem("Completed")
);

setTimeout(() => {
  observable.subscribe((value) => addItem("Subscriber 2: " + value));
}, 1000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
