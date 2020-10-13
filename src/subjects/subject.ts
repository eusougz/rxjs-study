import { Subject } from "rxjs/Subject";

var subject = new Subject();

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 completed')
)

subject.next('First...')

var observer2 = subject.subscribe(
  data => addItem('Observer 2: ' + data)
)

subject.next('Second...')

observer2.unsubscribe();

subject.next('Third...')

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
