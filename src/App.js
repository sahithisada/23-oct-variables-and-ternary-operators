import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
      <h3>Mark Sheets</h3>
     <MarkSheet name="RollNo: 1 MarkSheet" Tmarks="98" Hmarks="90" Emarks="96" Mmarks="91" Scmarks="93" Somarks="95" result="Pass" remarks="Excellent"></MarkSheet>
     <MarkSheet name="RollNo: 2 MarkSheet" Tmarks="56" Hmarks="37" Emarks="74" Mmarks="69" Scmarks="23" Somarks="82" result="Fail" remarks="Needs Improvement"></MarkSheet>
     <MarkSheet name="RollNo: 3 MarkSheet" Tmarks="68" Hmarks="89" Emarks="58" Mmarks="84" Scmarks="77" Somarks="90" result="Pass" remarks="Excellent"></MarkSheet>
     <MarkSheet name="RollNo: 4 MarkSheet" Tmarks="67" Hmarks="21" Emarks="55" Mmarks="15" Scmarks="63" Somarks="51"result="Fail" remarks="Needs Improvement"></MarkSheet>
     <MarkSheet name="RollNo: 5 MarkSheet" Tmarks="18" Hmarks="23" Emarks="42" Mmarks="9" Scmarks="32" Somarks="45" result="Fail" remarks="Needs Improvement"></MarkSheet>
     </div>
  );
}

export default App;
