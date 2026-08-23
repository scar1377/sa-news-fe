import { getTopics } from "@/utils/api";
import Link from "next/link";

const Topics = async () => {
  const topics = await getTopics();

  return (
    <>
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} href={`/topics/${topic.slug}/articles`}>
              <li>
                <h3>{topic.slug}</h3>
                <p>{topic.description}</p>
                <img
                  src={
                    topic.img_url
                      ? topic.img_url
                      : "https://placehold.co/700x500"
                  }
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Topics;
