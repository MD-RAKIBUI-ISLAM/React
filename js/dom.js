// let array = [];
// increment = 0;
// let container = document.querySelector('.container');

//fast

// while(increment < 10000) {
//     array.push(++increment);
// }

// container.innerHTML = array.join(' ');

//slow

// while(increment < 10000){
//     increment++;
//     container.innerHTML += ' ' + increment;
// }


/*
 * Title: React JS File
 * Description: A React JS Implementation of efficient DOM manipulation
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 02/08/2021
 *
 */

const domContainer = document.querySelector("#root");

const Fruits = () => {
  const [fruit, setFruit] = React.useState('');
  const [fruits, setFruits] = React.useState(['mango', 'guava', 'apple', 'oragne']);
  
  return (
    <div className="container">
      <ul id="fruits">
        {fruits.sort().map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <br/>
      <p><input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} /></p>
      <button onClick={() => setFruits([...fruits, fruit])}>Add Item</button>
    </div>
  );
};

ReactDOM.render(<Fruits />, domContainer);