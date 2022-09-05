import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { RequestQuery } from '../Service';
import Header from '../Components/Header';
import Loading from '../Components/Loading';

function Detais() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState([]);
  const [contributors, setContributors] = useState([]);

  const api = async () => {
    setLoading(true);
    const result = await RequestQuery(id);
    setTitle(result.title || '');
    setAuthors(result.authors || []);
    setContributors(result.contributors || []);
    setLoading(false);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        { loading && <Loading /> }

        <div className="row mt-4">
          <h1>{title === '' ? 'Sem titulo' : title}</h1>
          <div className="col-5 mt-4 border border-dark rounded p-2 border-opacity-25 ms-3">
            <p>Autores:</p>
            <ul className="list-group">
              {
                authors.length > 0
                  ? authors.map((author) => <li key={uuid()} className="list-group-item">{author}</li>)
                  : <p>Sem Autores</p>
              }
            </ul>
          </div>

          <div className="col-5 mt-4 border border-dark rounded p-3 border-opacity-25 ms-5">
            <p>Contribuidores:</p>
            <ul className="list-group">
              {
                contributors.length > 0
                  ? contributors.map((contributor) => <li key={uuid()} className="list-group-item">{contributor}</li>)
                  : <p>Sem Contribuidores</p>
              }
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Detais;
