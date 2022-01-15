import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import { useRouter } from "next/router";

function Results({ photos }) {
  const router = useRouter();
  const handleClick = (id, photo) => {
    router.push({
      pathname: `/photo/${id}`,
      query: { photo: JSON.stringify(photo) },
    });
  };
  const handleLikeClick = (id) => {
    localStorage.setItem([id], id);
  };
  return (
    <FlipMove className="px-1 sm:px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {photos?.map((photo) => {
        return (
          <Thumbnail
            key={photo.id}
            photo={photo}
            onClick={() => handleClick(photo.id, photo)}
            handleLikeClick={() => handleLikeClick(photo.id)}
          />
        );
      })}
    </FlipMove>
  );
}

export default Results;
