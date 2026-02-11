function Skill({ title, value, visible }) {
  return (
    <div className="skill-item">
      <h4>{title}</h4>
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: visible ? `${value}%` : '0%'
          }}
          aria-valuenow={value}
        ></div>
      </div>
    </div>
  )
}
export default Skill;