import React from 'react'

function EducationItem({education}) {
  const {
    degreeName,
    branchName,
    markType,
    marks,
    admissionMonth,
    admissionYear,
    passingMonth,
    passingYear,
    collegeName,
    collegeAddress,
  } = education;
  return (
    <>
      <article className="education-item">
            <h4>{degreeName}</h4>
            <p>{branchName} - {markType} : {marks}</p> 
            <h5>{admissionYear} - {passingYear}</h5>
            <p className="institution"><em>{collegeName}, {collegeAddress}</em></p>
     </article>
    </>
  )
}

export default EducationItem
