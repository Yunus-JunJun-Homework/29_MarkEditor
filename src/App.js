import './App.css';
import MarkEditor from './components/MarkEditor';

function App() {
  return (
    <div className="App">
      <MarkEditor onContentChange={console.log} />
    </div>
  );
}

export default App;
