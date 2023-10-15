import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogCard = ({ title, publishedAt, link, content }) => {
	const [img, setImg] = useState();
	useEffect(() => {
		console.log(content);
		const imgRegex = /<img.*?src="(.*?)"/;
		const paraRegex = /<p>(.*?)<\/p>/g;
		const imgMatches = content.match(imgRegex);
		const paraMatches = content.match(paraRegex);
		console.log(imgMatches);
		const imageUrl = imgMatches ? imgMatches[1] : null;
		const extractedParagraphs = paraMatches
			? paraMatches.map((match) => match.replace(/<\/?p>/g, "").trim())
			: [];
		setImg(imageUrl);
		const sortDescription =
			extractedParagraphs?.length > 24
				? extractedParagraphs.slice(0, 20) + "..."
				: extractedParagraphs;
		setDescription(sortDescription);
		console.log(img);
		console.log("paragraph", extractedParagraphs);
	}, []);

	const [description, setDescription] = useState();
	return (
    <div className=" border rounded-lg shadow bg-gray-800 border-gray-700 flex flex-col">
      <a href="#">
        <img
          className="rounded-t-lg h-52 w-full object-cover"
          src={img}
          alt=""
        />
      </a>
      <div className="h-full flex flex-col items-start p-5">
        <a href={link}>
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight h-[100px] overflow-hidden text-ellipsis text-white">
            <span className="line-clamp-3">{title}</span>
          </h5>
        </a>

        <p className="mb-3 font-normal  text-gray-400 h-[150px] overflow-hidden text-ellipsis">
				<p className="line-clamp-6">{description}</p>
        </p>
        <a
          target="_blank"
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
