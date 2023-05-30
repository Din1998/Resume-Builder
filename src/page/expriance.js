import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'


export default function Expriance({info,Input,setInput,expriance,AddExpriance }){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(Input)
  console.log(info)
  console.log(expriance)
  
  const onInputChange = (e) => {

    setInput((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

  // const onInputChange = (event) => {
  //   setInput(event.target.value)
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    AddExpriance([...expriance,Input
    
    ]);
    setInput("")
  }


  return(
    <div className="container-md py-5">
    <div className="row">
      <div className="col-md-6">
        <div>
          <h1>Add your expriance.</h1>
          <p>Please fill out .</p>
        </div>
        <div>
        <form className="py-2" onSubmit={onFormSubmit}>
            <div className="row mb-3">
              <div className="col-6">
                <label for="exampleInputEmail1" className="form-label">Company name</label>
                <input 
                  name="CompanyName"
                  type="text" 
                  required="true" 
                  className="form-control" 
        
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
              
                />
              </div>
              <div className="col-6">
                <label  className="form-label">Job title</label>
                <input 
                  name="JobTitle"
                  type="text" 
                  required="true" 
                  className="form-control" 
                 
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
            </div>

            {/*  */}

            <div className="row mb-3">
              <div className="col-6">
                <label  className="form-label">City</label>
                <input 
                  name="City"
                  type="text" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
              <div className="col-6">
                <label  className="form-label">Country</label>
                <input 
                  name="Country"
                  type="text" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
            </div>

            {/*  */}

            <div className="row mb-3">
              <div className="col-6">
                <label className="form-label">Start Date</label>
                <input 
                  name="StartDate"
                  type="date" 
                  required="true" 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
              <div className="col-6">
                <label  className="form-label">End Date</label>
                <input 
                  name="EndDate"
                  type="date" 
                  
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
            </div>
            {/*  */}

            <div class="row mb-3">
              <div className="col-6">
                <div className="form-check py-3">
                  <input
                    name="Chacker" 
                    className="form-check-input" 
                    type="checkbox" 
                    value="Continue"
                  
                    onChange={onInputChange}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Continue
                  </label>
                </div>
                {/* ----Modal--- */}
                <div className="pt-4">
                  <div className="add__more">
                    <FontAwesomeIcon icon={faPlusCircle} className='add__icon' onClick={handleShow} />
                    <p>Add More</p>
                  </div>
                  
                  <Modal 
                    show={show} 
                    onHide={handleClose}  
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add More Expriance.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="py-2" onSubmit={onFormSubmit}>
                          <div class="row mb-3">
                            <div className="col-6">
                              <label  className="form-label">Company name</label>
                              <input 
                                name="CompanyName"
                                type="text" 
                                required="true" 
                                className="form-control" 
                      
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                            
                              />
                            </div>
                            <div className="col-6">
                              <label  className="form-label">Job title</label>
                              <input 
                                name="JobTitle"
                                type="text" 
                                required="true" 
                                className="form-control" 
                              
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                          </div>

                          {/*  */}

                          <div classNam="row mb-3">
                            <div className="col-6">
                              <label  className="form-label">City</label>
                              <input 
                                name="City"
                                type="text" 
                                required="true" 
                                className="form-control" 
                                
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                            <div className="col-6">
                              <label  className="form-label">Country</label>
                              <input 
                                name="Country"
                                type="text" 
                                required="true" 
                                className="form-control" 
                                
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                          </div>

                          {/*  */}

                          <div className="row mb-3">
                            <div className="col-6">
                              <label  className="form-label">Start Date</label>
                              <input 
                                name="StartDate"
                                type="date" 
                                required="true" 
                                className="form-control" 
                                
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                            <div className="col-6">
                              <label  className="form-label">End Date</label>
                              <input 
                                name="EndDate"
                                type="date" 
                                
                                className="form-control" 
                                
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                          </div>
                          {/*  */}

                          <div className="row mb-3">
                            <div className="col-6">
                              <div className="form-check py-3">
                                <input
                                  name="Chacker" 
                                  className="form-check-input" 
                                  type="checkbox" 
                                  value="Continue"
                                
                                  onChange={onInputChange}
                                />
                                <label className="form-check-label" for="flexCheckDefault">
                                  Continue
                                </label>
                              </div>
                              <div className="col-6">
                            <button className="mt-3 actn__btn" onClick={handleClose}>Add</button>
                            </div>
                          </div>
                          </div>
                      </form>
                    </Modal.Body>
                    
                  </Modal>


                </div>
                {/*  */}
              </div>
              <div className="col-6">
              <button className="mt-3 actn__btn">Add</button>
              </div>
            </div>
        </form>
        <div className="row mb-3">
              <div className="col-6">
              <Link className="link" to='/personalInfo'><button className="mt-5 actn__btn">Back</button></Link>
              </div>
              <div className="col-6">
              <Link className="link" to='/yourEducation'><button className="mt-5 actn__btn">Next</button></Link>
              </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 live__section">
        <LiveBoard personalInfo={info}/>
      </div>
    </div>
  </div>
  )
}