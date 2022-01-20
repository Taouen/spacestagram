import { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';
import Card from './components/Card';
import { RingLoader } from 'react-spinners';

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
      const data = await fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${lastWeek}&api_key=UeXaTew173Cfq0EDPllzOSgDX2chcDq81BYf6e6c`
      )
        .then((data) => data.json())
        .catch((error) => console.error(error));
      setPhotos(data.reverse());
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <main className="w-full text-white h-screen flex flex-col items-center overflow-scroll bg-gray-600">
      <header>
        <h1 className="text-2xl my-4">Spacestagram</h1>
      </header>
      {loading ? (
        <RingLoader loading={loading} color="#6BD5FF" />
      ) : (
        <div className="flex flex-col w-full items-center text-black">
          {photos.map((photo) => {
            return <Card key={photo.url} photo={photo} />;
          })}
        </div>
      )}
    </main>
  );
}

export default App;
