import React, { Component } from 'react';


//css
import './horario-style.css';

//images
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'

export default class horarios extends Component {
  render() {
    return (
      <div>

<div className="flex-container">
                <div className="item">
                  <h1>john doe</h1>
                  <div><img src={img1} alt='extra del gym'/></div>
                </div>
                <div className="item">
                  <h1>jena doe</h1>
                  <div><img src={img2} alt='extra del gym'/></div>
                </div>   
            </div>	

<section>
<div id="demoObject">bienvenido</div>
        <table classname="table divTable">
	<tbody>
		<tr classname="divTableRow">
			<td classname="table1 divTableHeading">&nbsp;</td>
			<td classname="table1 divTableHeading">LUNES</td>
			<td classname="table1 divTableHeading">MARTES</td>
			<td classname="table2 divTableHeading">MIERCOLES</td>
			<td classname="table2 divTableHeading">JUEVES</td>
			<td classname="table2 divTableHeading">VIERNES</td>
			<td classname="table2 divTableHeading">SABADO</td>
			<td classname="table2 divTableHeading">DOMINGO</td>
		</tr>
		<tr classname="divTableRow" >
			<td classname="table1 divTableCell divTableHead">5AM-6AM</td>
			<td classname="table1 divTableCell">JANE</td>
			<td classname="table1 divTableCell">JOHN</td>
			<td classname="table2 divTableCell">MICHAEL</td>
			<td classname="table2 divTableCell">JOE</td>
			<td classname="table2 divTableCell">MARTIN</td>
			<td classname="table2 divTableCell">CARL</td>
			<td classname="table2 divTableCell">CARL</td>
		</tr>
		<tr classname="divTableRow">
			<td classname="table1 divTableCell divTableHead">7AM-8AM</td>
			<td classname="table1 divTableCell">JOHN</td>
			<td classname="table1 divTableCell">MICHAEL</td>
			<td classname="table2 divTableCell">CARL</td>
			<td classname="table2 divTableCell">MICHAEL</td>
			<td classname="table2 divTableCell">&nbsp;</td>
			<td classname="table2 divTableCell">MICHAEL</td>
			<td classname="table2 divTableCell">MICHAEL</td>
		</tr>
		<tr classname="divTableRow">
			<td classname="table1 divTableCell divTableHead">10-AM-11AM</td>
			<td classname="table1 divTableCell">MICHAEL</td>
			<td classname="table1 divTableCell">JOHN</td>
			<td classname="table2 divTableCell">JANE</td>
			<td classname="table2 divTableCell">CARL</td>
			<td classname="table2 divTableCell">JOHN</td>
			<td classname="table2 divTableCell">&nbsp;</td>
			<td classname="table2 divTableCell">JOHN</td>
		</tr>
		<tr classname="divTableRow">
			<td classname="table1 divTableCell divTableHead">2PM-3PM</td>
			<td classname="table1 divTableCell">CARL</td>
			<td classname="table1 divTableCell">MARTIN</td>
			<td classname="table2 divTableCell">JOHN</td>
			<td classname="table2 divTableCell">MARTIN</td>
			<td classname="table2 divTableCell">MARTIN</td>
			<td classname="table2 divTableCell">JOHN</td>
			<td classname="table2 divTableCell">MARTIN</td>
		</tr>
		<tr classname="divTableRow">
			<td classname="table1 divTableCell divTableHead">5PM-6PM</td>
			<td classname="table1 divTableCell">JANE</td>
			<td classname="table1 divTableCell">&nbsp;</td>
			<td classname="table2 divTableCell">MICHAEL</td>
			<td classname="table2 divTableCell">&nbsp;</td>
			<td classname="table2 divTableCell">JANE</td>
			<td classname="table2 divTableCell">&nbsp;</td>
			<td classname="table2 divTableCell">CARL</td>
		</tr>
	</tbody>
</table>
</section>
</div>
        
  
    )
  }
}
