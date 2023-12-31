import "./app-info.css";

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников компании</h1>
      <h2>Общее число сотрудников: {props.countEmployees}</h2>
      <h2>Премию получат: {props.countIncrease}</h2>
    </div>
  )
};

export default AppInfo;