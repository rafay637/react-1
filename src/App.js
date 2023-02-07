import logo from './logo.svg';
import './App.css';

function App() {

  function add(e) {
    e.preventDefault()
    if (!text) {
      alert("Please fill the Todo")
    }
    else {
      list.push(text)
      setList([...list])
      // console.log(list)
    }
    setText("")
  }

  function click(i) {
    let data = [...list]
    data.splice(i, 1)
    // console.log(i)
    // console.log(data)
    setList(data)
  }

  function deleteall() {
    setList([])
  }

  function updated(index, newList) {
    let arr = []
    list.map((list, i) => {
      // console.log(list);
      if (index === i) {
        arr.push(newList)
      } else {
        arr.push(list)
      }
    })
    // console.log(newList)
    // console.log(arr);
    setList(arr)
  }
  
  function cancel() {
    setList(list)
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>Todo With React </h1>
          <input type="text" value={text} placeholder='ENTER THE TODO' onChange={(e) => {
            setText(e.target.value)
          }} />
          <button onClick={add} className="btn">Add</button>
          <div className='main1'>
            <div >{list.map((e, i) => {
              return <div className='main2'>
                <li key={i}>{e}</li>
                <button dfval="delete" i={i} click={click} />
                <button dfval="edit" i={i} edit={() => {
                  setUpdate(true);
                  setEditIndex(i);
                }} />
                <div>
                  {update && editIndex === i ?
                    <li><edit dtval="save" cancel={cancel}
                      index={i}
                      list={e}
                      updated={updated} />
                    </li>
                    :
                    null
                  }
                </div>
              </div>
            })}
            </div>
          </div>
          <button onClick={deleteall} className="btn2">DeleteAll</button>
      </header>
    </div>
  );
}

export default App;
