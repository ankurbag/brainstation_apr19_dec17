import { Link } from 'react-router-dom';
import Tea from '../Tea';
import './TeaList.scss';

function TeaList({ teas }) {
  return (
    <ul className="TeaList">
      {teas.map((tea) => (
        <li key={tea._id} className="TeaList__item">
          <Link to={`/teas/${tea._id}`} className="TeaList__Link">
            <Tea name={tea.name} image={tea.image} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TeaList;
