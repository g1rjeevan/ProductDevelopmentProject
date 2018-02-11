"use strict";
$ = jQuery = require('jquery');
var React = require('react');  

class RiskLists extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {risks: []};
        
    }
    componentDidMount() {
        this.RiskList();
    }
    RiskList() {
        $.getJSON('http://13.126.120.225:8000/risks/?format=json')
            .then((results) =>{
                this.setState({ risks: results });
                console.log(results);
            } );
    }
    
    render() {
        var number_val = "NUMBER, number and Number";
        var risk = this.state.risks.map((item, i) => (  
            <div className="card">
                <table>
                    <tbody>
                        <tr>
                            <td  style={{ 'float':'left'}}>
                                <p>
                                  <h3 className="number_round">{i+1}.</h3>
                                </p>
                            </td>
                            <td>
                                <div className="container"> 
                                    <span class="subject_name"><h4 className="heading_title"><b>{ item.title }</b></h4>  { item.description }</span> 
                                    <div  className="message" style={{ 'background': '#eff0f1' }}>
                                        {item.textfields ?
                                            <div >
                                            <br/>
                                            {item.textfields.map((textfield, txts) =>( 
                                                <div>
                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label" style={{ 'margin-top': '6px' }}>
                                                            <span class="subject_name">{textfield.keyname}</span>
                                                            {textfield.keymandatory ? <span class="subject_completion" style={{ 'color':'red'}}>*</span>:null }
                                                        </label>
                                                        <div className="col-md-4  control-label">
                                                            <input className="form-control" id={"id_"+ textfield.txts } name={textfield.keyname} placeholder={textfield.keydescription} required={ textfield.keymandatory ? "required" : null} title={textfield.keydescription} 
                                                                type={ textfield.keyname.toLowerCase().indexOf("number")
                                                                ? "text"
                                                                : "number"} maxLength={textfield.keymaxlimit} minLength ={textfield.keyminlimit}/>
                                                        </div>
                                                        <br/>
                                                    </div>
                                                    <br/>
                                                </div>
                                            )) }</div>: null }
                                        {item.date_pickers ?
                                            <div>
                                            <br/>
                                            {item.date_pickers.map((textfield, txts) =>( 
                                                <div>
                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label" style={{ 'margin-top': '6px' }}>
                                                            <span class="subject_name">{textfield.keyname}</span>
                                                            {textfield.keymandatory ? <span class="subject_completion" style={{ 'color':'red'}}>*</span>:null }
                                                        </label>
                                                        <div className="col-md-4  control-label">
                                                            <input
                                                                type="date"
                                                                title={textfield.keydescription}
                                                                id={"id_date"+ txts } 
                                                                onfocus="(this.type='date')"
                                                                min={textfield.keyminlimit}
                                                                max={textfield.keymaxlimit}
                                                                placeholderText={textfield.keydescription}
                                                                name={textfield.keyname} />

                                                        </div>
                                                        <br/>
                                                    </div>
                                                    <br/>
                                                </div>
                                            )) }</div>: null }
                                        {item.number_inputs ?
                                            <div  >
                                            <br/>
                                            {item.number_inputs.map((textfield, txts) =>( 
                                                <div>
                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label" style={{ 'margin-top': '6px' }}>
                                                            <span class="subject_name">{textfield.keyname}</span>
                                                            {textfield.keymandatory ? <span class="subject_completion" style={{ 'color':'red'}}>*</span>:null }
                                                        </label>
                                                        <div className="col-md-4  control-label">
                                                            <table>
                                                               <td>
                                                                <input className="form-control" id={"id_"+ textfield.txts } name={textfield.keyname} placeholder={textfield.keydescription} required={ textfield.keymandatory ? "required" : null} title={textfield.keydescription} 
                                                                    type=  "number"  maxLength={textfield.keymaxlimit} minLength ={textfield.keyminlimit}/></td><td style={{ 'margin-left':'5px' }}> {textfield.keyunit.toLowerCase().indexOf("none")?"  "+textfield.keyunit:null}</td>
                                                            </table>
                                                        </div>
                                                        <br/>
                                                    </div>
                                                    <br/>
                                                </div>
                                            )) }</div>: null }

                                        {item.other_inputs.length>0 ?
                                            <div>
                                                <br/>
                                            {item.other_inputs.map((textfield, txts) =>( 
                                                <div>
                                                    <div className="form-group">
                                                        <label className="col-md-2 control-label" style={{ 'margin-top': '6px' }}>
                                                            <span class="subject_name">{textfield.keyname}</span>
                                                            {textfield.keymandatory ? <span class="subject_completion" style={{ 'color':'red'}}>*</span>:null }
                                                        </label>
                                                        <div className="col-md-4  control-label">
                                                        <input className="form-control" id={"id_"+ textfield.txts } name={textfield.keyname} placeholder={textfield.keyvalue}  title={textfield.keyvalue} 
                                                            />  

                                                        </div>
                                                        <br/>
                                                    </div>
                                                    <br/>
                                                </div>
                                            )) }</div>: null }
                                    </div>            
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ));
    
        return (
          <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ risk }</div>
          </div>
        );
    }


  }

module.exports = {
    RiskLists: RiskLists
};