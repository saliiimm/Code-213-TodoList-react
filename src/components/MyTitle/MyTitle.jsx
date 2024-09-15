/* eslint-disable react/prop-types */
import './MyTitle.css';

const MyTitle = ({ titre }) => {
  return (
    <div className="header">
      <h1>{titre}</h1>
    </div>
  );
};

export default MyTitle;
