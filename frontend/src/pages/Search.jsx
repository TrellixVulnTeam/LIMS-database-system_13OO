import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import searchTable from "../components/searchTable";


class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchType: "",
            searchID:"",
            searchLoc:"",
            searchStatus:"",
            searchQ:"",
            searchUnit:"",
            searchCustodian:"",
            outputData:""

        }
        this.handleInput = this.handleInput.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    async fun() {
        const _this = this;
        await axios.post('/search', {
            sample_type: _this.state.searchType,
                    sample_ID: _this.state.searchID,
                    loc: _this.state.searchLoc,
                    status: _this.state.searchStatus,
                    Q: _this.state.searchQ,
                    unit: _this.state.searchUnit,
                    custodian: _this.state.searchCustodian
                })
                    .then(function (response) {
                        _this.setState({
                            outputData: response.data
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }

    handleInput = (e) => {
        if (e.target.id === "searchSampleType"){
            this.setState({
                searchType: e.target.value
            })
        }
        if (e.target.id === "searchSampleID"){
            this.setState({
                searchID: e.target.value
            })
        }
        if (e.target.id === "searchLocation"){
            this.setState({
                searchLoc: e.target.value
            })
        }
        if (e.target.id === "searchStatus"){
            this.setState({
                searchStatus: e.target.value
            })
        }
        if (e.target.id === "searchQuantity"){
            this.setState({
                searchQ: e.target.value
            })
        }
        if (e.target.id === "searchUnit"){
            this.setState({
                searchUnit: e.target.value
            })
        }
        if (e.target.id === "searchCustodian"){
            this.setState({
                searchCustodian: e.target.value
            })
        }

    }

    onButtonClick = (e) => {
        //console.log('.....');
        if (e.target.id === "searchButton") {
            this.fun().then(r => console.log(r))
        }

        else if (e.target.id === "closeButton"){
            this.setState({
                searchType: "",
                searchID:"",
                searchLoc:"",
                searchStatus:"",
                searchQ:"",
                searchUnit:"",
                searchCustodian:"",
                outputData:""
            })
        }
    }

    render() {
        return (
        <div>
            <body className="d-flex text-left text-white bg-dark">
            <div className="main-page-config d-flex p-3 mx-auto flex-column">
                <h4 className="float-md-start font-monospace">Please log sample transaction：</h4>
                <form>
                    <div className="mb-0">
                        <label htmlFor="inputSampleType" className="Sample Type:">Sample Type:</label>
                        <input type="type" className="form-control" id="searchSampleType"
                               aria-describedby="typeHelp" onChange={this.handleInput}/>
                            <div id="typeHelp" className="form-text">e.g., blood, DNA, RNA, etc.</div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="inputSampleID" className="form-label">Sample ID:</label>
                        <input type="id" className="form-control" id="searchSampleID"
                               aria-describedby="idHelp" onChange={this.handleInput}/>
                            <div id="idHelp" className="form-text">e.g., blo001, DNA123, RNA024, etc.</div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="searchLocation" className="form-label">Storage Location:</label>
                        <input type="loc" className="form-control" id="searchLocation"
                               aria-describedby="locHelp" onChange={this.handleInput}/>
                            <div id="locHelp" className="form-text">e.g., f1, f5, f10, etc.</div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="searchStatus" className="form-label">Status:</label>
                        <input type="status" className="form-control" id="searchStatus"
                               aria-describedby="statusHelp" onChange={this.handleInput}/>
                            <div id="statusHelp" className="form-text">i.e., available, in use, booked.</div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="searchQuantity" className="form-label">Quantity Variation:</label>
                        <input type="q" className="form-control" id="searchQuantity"
                               aria-describedby="qHelp" onChange={this.handleInput}/>
                            <div id="qHelp" className="form-text">e.g., 10, -5, -1.5, etc.</div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="searchUnit" className="form-label">Unit:</label>
                        <input type="unit" className="form-control" id="searchUnit"
                               aria-describedby="unitHelp" onChange={this.handleInput}/>
                            <div id="unitHelp" className="form-text">e.g., ml, plate, tube, etc.</div>
                    </div>
                    <div className="mb-1">
                        <label htmlFor="searchCustodian" className="form-label">Custodian:</label>
                        <input type="custodian" className="form-control" id="searchCustodian"
                               aria-describedby="custodianHelp" onChange={this.handleInput}/>
                            <div id="custodianHelp" className="form-text">e.g., peter, helen, mary, etc.</div>
                    </div>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop" id= "searchButton"
                            onClick={this.onButtonClick}>Search</button>

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                         data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-dark" id="staticBackdropLabel">Notice</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-dark">
                                    {JSON.stringify(this.state.outputData)}
                                </div>
                                <div className="modal-footer">
                                    <button type="reset" className="btn btn-primary" data-bs-dismiss="modal"
                                            id="closeButton">Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
            </body>
        </div>
    );
  }
}

export default Search;

