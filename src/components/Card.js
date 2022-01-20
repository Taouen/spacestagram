import { useState } from 'react';

export default function Card({ photo }) {
  const { title, url, date, explanation } = photo;
  const [liked, setLiked] = useState(false);

  return (
    <figure className="drop-shadow-xl w-4/5 md:max-w-screen-sm lg:max-w-xl flex flex-col mb-8 bg-white rounded">
      <img src={url} alt="" className="rounded-t rounded-b-none" />
      <figcaption className="w-full p-4 mt-2">
        <h2 className="text-lg font-bold md:text-xl mb-2">{title}</h2>

        <div className="flex w-full mb-4    items-center justify-between">
          <p className="md:text-lg text-gray-500">{date}</p>
          <button
            onClick={() => setLiked(!liked)}
            className="w-1/4 md:w-1/6 border border-black rounded"
          >
            {liked ? '❤️' : 'Like'}
          </button>
        </div>

        <p className="md:text-lg">{explanation}</p>
      </figcaption>
    </figure>
  );
}
