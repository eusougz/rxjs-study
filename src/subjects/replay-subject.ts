import { ReplaySubject } from "rxjs/ReplaySubject";

/**
 * É possível determinar o tamanho do seu buffer.
 * > buffer: quantidade de valores que serão emitidos
 *    assim que algum observer se inscrever
 * 
 * Também é possível colocar um tempo limite que o evento
 *  foi emitido.
 */

var subject = new ReplaySubject(30, 200);

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 completed')
)

var i = 1;
setInterval(() => subject.next(i++), 100)

setTimeout(() => {
  var observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
  )
}, 500)

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
