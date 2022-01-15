import { HeartIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <>
      <div className="mx-5">
        Please Note - I have loaded only first page of the Mars Rover Photos API
        & Header Icons are static
      </div>
      <footer className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
        <div className="flex">
          Made with{" "}
          <HeartIcon className="px-2 h-6 mb-1 group-hover:animate-bounce" /> by
          Harsh Bhatt
        </div>
        <div>
          LinkedIn:{" "}
          <a
            className="hover:text-white group transition duration-200 ease-in transform"
            href="https://www.linkedin.com/in/harsh-bhatt-a2771b161/"
          >
            Harsh Bhatt
          </a>
        </div>
        <div>
          GitHub Repo:{" "}
          <a
            className="hover:text-white group transition duration-200 ease-in transform"
            href="https://github.com/HarshSBhatt/NASA-API---Shopify-Technical-Challenge"
          >
            HarshSBhatt
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
