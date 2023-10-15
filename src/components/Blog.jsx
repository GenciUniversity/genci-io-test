import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
	const [data, setData] = useState([]);

	const fetchMediumPost = () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		var requestOptions = {
			method: "get",
			headers: myHeaders,
		};

		fetch(process.env.NEXT_PUBLIC_MEDIUM_API_URL, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				if (!result.Error) {
					console.log(result.result.items);
					setData(result.result.items);
				} else console.log("AN Error Occurred");
			})
			.catch((error) => console.log("error", error));
		console.log(data);
	};

	useEffect(() => {
		fetchMediumPost();
	}, []);

	return (
		<div className="my-20 pt-5 mx-10	 sm:mx-16">
			<h2 className="font-bold text-5xl stroke-text-1 self-start w-full text-center lg:text-left lg:w-1/3 ">
      Shaping Minds Sharing Ideas.
      </h2>
			<br />
			<br />
			<div className="flex justify-center">
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{data?.map((item, index) => (
						<BlogCard
							key={index}
							title={item.title}
							publishedAt={item.published}
							link={item.link}
							content={item.content}
						/>
					))}
				</div>
			</div>

			<br />
			<style>
				{`
				.strokeme {
					color: black;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
				  }`}
			</style>
		</div>
	);
};

export default Blog;
