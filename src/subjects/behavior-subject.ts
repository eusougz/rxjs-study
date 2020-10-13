import { BehaviorSubject } from "rxjs/BehaviorSubject";

/**
 * Diferença de Subject:
 *  i. tem valor inicial
 *  ii. assim que um observer se inscreve, o *último* valor
 *   é passado para o mesmo, enquanto que no subject ele
 *   não receberia nada até que tenha uma prox chamada .next()
 */

var subject = new BehaviorSubject('Initial value');

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 completed')
)

subject.next('First...')
subject.next('... Observer 2 is now subscribed')

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
