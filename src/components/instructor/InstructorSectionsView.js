import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../../Constants";
import { useLocation } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../../Constants";
import { useLocation } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Link } from "react-router-dom";

// instructor views a list of sections they are teaching
// use the URL /sections?email=dwisneski@csumb.edu&year= &semester=
// the email= will be removed in assignment 7 login security
// The REST api returns a list of SectionDTO objects
// The table of sections contains columns
//   section no, course id, section id, building, room, times and links to assignments and enrollments
// hint:  
// <Link to="/enrollments" state={section}>View Enrollments</Link>
// <Link to="/assignments" state={section}>View Assignments</Link>

const InstructorSectionsView = (props) => {

    
     
    return(
        <> 
           <h3>Not implemented</h3>
        </>
    );
}

export default InstructorSectionsView;