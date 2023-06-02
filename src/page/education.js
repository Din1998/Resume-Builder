import LiveBoard from "../components/liveBoard";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'

export default function Education({info,expriance,schoolInput, setSchool, school, addSchool,skills,summary}){

console.log(school)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const onInputChange = (e) => {

    setSchool((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

  // const onInputChange = (event) => {
  //   setInput(event.target.value)
  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    addSchool([...school,schoolInput
    
    ]);
    setSchool("")
  }
  return(
    <div className="container-md py-5">
    <div className="row">
      <div className="col-md-6">
        <div>
          <h1>Add your education.</h1>
          <p>Please fill out .</p>
        </div>
        <div>
        <form className="py-2" onSubmit={onFormSubmit}>
            <div className="row mb-3">
              <div className="col-6">
                <label className="form-label">Institute Name</label>
                <input 
                  name="SchoolName"
                  type="text" 
                  required={true} 
                  className="form-control" 
               
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
              
                />
              </div>
              <div className="col-6">
                <label  className="form-label">Institute Location</label>
                <input 
                  name="SchoolLocation"
                  type="text" 
                  required={true} 
                  className="form-control" 
                 
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
            </div>

            {/*  */}

            <div className="row mb-3">
              <div className="col-6">
                <label  className="form-label">Subject</label>
                <input 
                  name="Subject"
                  type="text" 
                  required={true} 
                  className="form-control" 
                  
                  aria-describedby="emailHelp" 
                  onChange={onInputChange}
                />
              </div>
              <div className="col-6">
                <label  className="form-label">Result</label>
                <input 
                  name="Result"
                  type="text" 
                  required={true} 
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
                  required={true} 
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
                <label className="form-check-label">
                  Continue
                </label>
              </div>
              {/* Modal */}
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
                      <Modal.Title>Add More Education History.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="py-2" onSubmit={onFormSubmit}>
                          <div class="row mb-3">
                            <div className="col-6">
                              <label  className="form-label">Institute Name</label>
                              <input 
                                name="SchoolName"
                                type="text" 
                                required={true} 
                                className="form-control" 
                      
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                            
                              />
                            </div>
                            <div className="col-6">
                              <label  className="form-label">Institute Location</label>
                              <input 
                                name="SchoolLocation"
                                type="text" 
                                required={true} 
                                className="form-control" 
                              
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                          </div>

                          {/*  */}

                          <div classNam="row mb-3">
                            <div className="col-6">
                              <label  className="form-label">Subject</label>
                              <input 
                                name="Subject"
                                type="text" 
                                required={true} 
                                className="form-control" 
                                
                                aria-describedby="emailHelp" 
                                onChange={onInputChange}
                              />
                            </div>
                            <div className="col-6">
                              <label  className="form-label">Result</label>
                              <input 
                                name="Result"
                                type="text" 
                                required={true} 
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
                                required={true} 
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
              <Link className="link" to='/yourExpriance'><button className="mt-5 actn__btn">Back</button></Link>
              </div>
              <div className="col-6">
              <Link className="link" to='/yourSkill'><button className="mt-5 actn__btn">Next</button></Link>
              </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 live__section">
        <LiveBoard personalInfo={info} expriance={expriance} school={school} skills={skills} summary={summary} />
      </div>
    </div>
  </div>
  )
}