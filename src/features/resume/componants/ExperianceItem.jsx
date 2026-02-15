import React from 'react'

function ExperianceItem({ experience }) {
  const {
            designation,
            companyName,
            joiningMonth,
            joiningYear,
            releaseMonth,
            releaseYear,
            present,
            achievements,
        } = experience;

  const formatDate = () => {
    if (present) {
        return `${joiningMonth} ${joiningYear} – Present`;
        }
        return `${joiningMonth} ${joiningYear} – ${releaseMonth} ${releaseYear}`;
    };
  return (
    <>
    <article className="experience-item">
      <h4>{designation}</h4>
      <h5>{formatDate()}</h5>
      <p className="company">
        <em>{companyName}</em>
      </p>

      <ul>
        {achievements &&
          achievements.map((item, index) => (
            <li key={index}>{item.achievement}</li>
          ))}
      </ul>
    </article>
    </>
  )
}

export default ExperianceItem
