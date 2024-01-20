import styles from "./Blog.module.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

function Blog() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const url = 'https://blogsapi.p.rapidapi.com/?ordering=-date_published';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1cacde308fmsh51530d9b1f4230dp1083b0jsn8a8655591289',
      'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
    }
  };


  const fetchData = async (url) => {
    try {

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result.results)

      // const items = await fetch(url);
      // const json = await items.json();
      // setData(json);
      // console.log(data);
      console.log("fetched")
      setloading(false);
    } catch (error) {
      setData([]);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);


  let history = useHistory();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.blogs}>
      <div className={styles.wrapper}>
        {data.slice(2, 6).map((blog) => (
          <div
            onClick={() =>
              history.push({
                pathname: `/blogs/${blog._id}`,
                state: {
                  data: blog,
                },
              })
            }
            className={styles.item}
            key={blog._id}
          >
            <div>
              <h2>{blog.title}</h2>
            </div>
            <div>
              {" "}
              <img className={styles.image} src={blog.image} alt="" />
            </div>
          </div>
        ))}
      </div>

      <h1 className={styles.h1}> New Added </h1>
      <div className={styles.texts}>
        {data.map((blog) => (
          <div
            onClick={() =>
              history.push({
                pathname: `/blogs/${blog._id}`,
                state: {
                  data: blog,
                },
              })
            }
            className={styles.innertext}
            key={blog._id}
          >
            <img className={styles.image2} src={blog.image} alt="" />
            <h2>{blog.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
