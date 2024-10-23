import React from 'react'

function MarkSheet(props) {
    let Tmarks= Number(props.Tmarks);
    let Hmarks= Number(props.Hmarks);
    let Emarks= Number(props.Emarks);
    let Mmarks= Number(props.Mmarks);
    let Scmarks= Number(props.Scmarks);
    let Somarks= Number(props.Somarks);
    let result= (props.result);
    let remarks= (props.remarks);

    let Total = Tmarks+Hmarks+Emarks+Mmarks+Scmarks+Somarks;
    let perc = (Total/600)*100
  return (
    <div className="App">
        <h3>{props.name}</h3>
     <table>
      <thead>
      <tr>
        <th>Subject</th>
        <th>Max Marks</th>
        <th>Marks Obtained</th>
        <th>Result</th>
        <th>Remarks</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Telugu</td>
          <td>100</td>
          <td>{Tmarks}</td>
          <td>{Tmarks>=35?"Pass":"Fail"}</td>
          <td>{Tmarks>=35?"Very Good":"Needs Improvement"}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Hindi</td>
          <td>100</td>
          <td>{Hmarks}</td>
          <td>{Hmarks>=35?"Pass":"Fail"}</td>
          <td>{Hmarks>=35?"Very Good":"Needs Improvement"}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>English</td>
          <td>100</td>
          <td>{Emarks}</td>
          <td>{Emarks>=35?"Pass":"Fail"}</td>
          <td>{Emarks>=35?"Very Good":"Needs Improvement"}</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>Maths</td>
          <td>100</td>
          <td>{Mmarks}</td>
          <td>{Mmarks>=35?"Pass":"Fail"}</td>
          <td>{Mmarks>=35?"Very Good":"Needs Improvement"}</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>Science</td>
          <td>100</td>
          <td>{Scmarks}</td>
          <td>{Scmarks>=35?"Pass":"Fail"}</td>
          <td>{Scmarks>=35?"Very Good":"Needs Improvement"}</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Social</td>
          <td>100</td>
          <td>{Somarks}</td>
          <td>{Somarks>=35?"Pass":"Fail"}</td>
          <td>{Somarks>=35?"Very Good":"Needs Improvement"}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>600</td>
          <td>{Total}({perc.toFixed(2)}%)</td>
          <td>{result}</td>
          <td>{remarks}</td>
        </tr>
      </tfoot>
     </table>
    </div>
  )
}

export default MarkSheet
