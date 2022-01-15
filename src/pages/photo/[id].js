import { useRouter } from "next/router";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";
import FlipMove from "react-flip-move";
import SelectedPhoto from "components/Photo";

function Photo() {
  const router = useRouter();
  const result = router.query.photo ? JSON.parse(router.query.photo) : null;
  return (
    <div>
      {!isEmpty(result) ? (
        <FlipMove className="my-2 sm:grid">
          <SelectedPhoto result={result} />
        </FlipMove>
      ) : (
        <div className="h-auto text-center p-8">
          <p className="uppercase text-lg font-bold tracking-wider">
            No details found
          </p>
          <Link href="/">
            <p className="text-base uppercase mt-4 cursor-pointer hover:underline">
              Go to home
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Photo;
