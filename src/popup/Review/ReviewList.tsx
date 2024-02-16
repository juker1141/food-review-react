import { useCallback, useEffect, useRef } from "react";

import RatingStars from "./RatingStars";

export type Rating = 1 | 2 | 3 | 4 | 5;

type Review = {
  shopTitle: string;
  shopUrl: string;
  rating: Rating;
  title: string;
  content: string;
  images: string;
  createTime: string;
};

const ReviewList = ({
  isTopReview,
  setIsTopReview,
}: {
  isTopReview: boolean;
  setIsTopReview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  const switchState = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop);
    if (scrollTop >= 30 && isTopReview) {
      setIsTopReview(false);
    } else {
      setIsTopReview(true);
    }
  }, [isTopReview, setIsTopReview]);

  useEffect(() => {
    const currentListRef = listRef.current;

    currentListRef?.addEventListener("scroll", switchState);

    return () => {
      currentListRef?.removeEventListener("scroll", switchState);
    };
  }, [switchState]);

  const datas: Review[] = [
    {
      shopTitle: "shop1",
      shopUrl: "http://google.com",
      rating: 1,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop2",
      shopUrl: "http://google.com",
      rating: 2,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop3",
      shopUrl: "http://google.com",
      rating: 3,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop4",
      shopUrl: "http://google.com",
      rating: 4,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
    {
      shopTitle: "shop5",
      shopUrl: "http://google.com",
      rating: 5,
      title: "Good",
      content: "好吃",
      images:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fshiba-inu&psig=AOvVaw3Pe1_YkTocoOH89vMNEhUY&ust=1706586686502000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjEq_zYgYQDFQAAAAAdAAAAABAD",
      createTime: "2024-01-29 10:23:54+08",
    },
  ];

  return (
    <ul
      ref={listRef}
      className="flex flex-col w-full relative overflow-y-auto h-[540px]"
    >
      {datas.map((data, i: number) => {
        return (
          <li
            key={i}
            className="w-full px-4 py-2 flex flex-col border-b border-gray-200"
          >
            <div className="flex justify-between items-center">
              {/* <h4 className="text-lg truncate">
                <a href={data.shopUrl}>{data.shopTitle}</a>
              </h4> */}
              <div className="font-bold truncate">{data.title}</div>
              <RatingStars rating={data.rating} />
            </div>
            <div className="w-full">{data.content}</div>
            <div className="text-sm text-right">{data.createTime}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
