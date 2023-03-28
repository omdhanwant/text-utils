import './css/App.css'
import ClassComponent from './components/ClassComponent';
import TextUtils from './components/TextUtils';
// import FunctionComponent from './components/FunctionComponent';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-12 justify-center align-items-center">
            <ClassComponent componentType="Utils"></ClassComponent>
          </div>
        </div>
      </header>
      <TextUtils/>
    </div>
  );
}

export default App;
