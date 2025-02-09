import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);
  async function getPosts() {
    const { data } = await axios.get("http://localhost:8000/posts");
    setData(data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <h1 className="text-center">posts</h1>
      <div className="container con">
        {data.map((post) => {
          return (
            <>
              <div className="cards  w-1/3  ">
                <div className="card bg-base-100  shadow-xl  ">
                  <div className="card-body text-center ">
                    <h2 className="card-title text-center h-25 ">{post.title}</h2>
                    <p  className="h-25 "> {post.body}</p>
                  </div>
                  <figure className="w-1/3">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
