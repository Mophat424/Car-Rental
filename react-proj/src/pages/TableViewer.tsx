import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

type TableRow = Record<string, unknown>;

const TableViewer: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [data, setData] = useState<TableRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTableData = async () => {
      if (!name) {
        setError('No table name provided.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Missing authentication token. Please login.');

        const res = await fetch(`http://localhost:3001/tables/${name}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error || `Error ${res.status}`);
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTableData();
  }, [name]);

  return (
    <div className="container">
      <h2>Table: {name}</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {Object.entries(row).map(([key, value]) => (
                  <td key={key}>{String(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && !error && data.length === 0 && <p>No data found for table <strong>{name}</strong>.</p>}
    </div>
  );
};

export default TableViewer;
