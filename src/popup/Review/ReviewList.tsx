import ReviewStars from "./ReviewStars";

export type Stars = 1 | 2 | 3 | 4 | 5;

type Review = {
  shopTitle: string;
  shopUrl: string;
  stars: Stars;
  title: string;
  content: string;
  images: string;
  createTime: string;
};

const ReviewList = () => {
  const datas: Review[] = [
    {
      shopTitle: "shop1",
      shopUrl: "http://google.com",
      stars: 1,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop2",
      shopUrl: "http://google.com",
      stars: 2,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop3",
      shopUrl: "http://google.com",
      stars: 3,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop4",
      shopUrl: "http://google.com",
      stars: 4,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop5",
      shopUrl: "http://google.com",
      stars: 5,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
  ];

  return (
    <ul className="flex flex-col py-2 w-full relative pt-[60px]">
      {datas.map((data, i: number) => {
        return (
          <li
            key={i}
            className="w-full px-4 py-2 flex flex-col border-b border-gray-200"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg truncate">
                <a href={data.shopUrl}>{data.shopTitle}</a>
              </h4>
              <ReviewStars stars={data.stars} />
            </div>
            <div className="font-bold">{data.title}</div>
            <div className="w-full">{data.content}</div>
            <div className="text-sm text-right">{data.createTime}</div>
          </li>
        );
      })}
      {datas.map((data, i: number) => {
        return (
          <li key={i} className="w-full p-2 flex flex-col">
            <div className="flex justify-between items-center">
              <h4 className="text-lg truncate">
                <a href={data.shopUrl}>{data.shopTitle}</a>
              </h4>
              <ReviewStars stars={data.stars} />
            </div>
            <div className="font-bold">{data.title}</div>
            <div className="w-full">{data.content}</div>
            <div className="text-sm text-right">{data.createTime}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
