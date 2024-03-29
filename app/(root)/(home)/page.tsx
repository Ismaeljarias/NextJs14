import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to use React Router",
    author: {
      _id: "1",
      name: "John Doe",
      picture: "/assets/icons/user.svg",
      clerkId: "1",
    },
    upvotes: 50000,
    views: 300,
    answers: [
      {
        _id: "1",
        answer: "You can use React Router by following the documentation",
      },
    ],
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "React Router",
      },
    ],
  },
  {
    _id: "2",
    title: "How to manage state in React",
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "/assets/icons/user.svg",
      clerkId: "2",
    },
    upvotes: 10000000,
    views: 500,
    answers: [
      {
        _id: "2",
        answer:
          "You can manage state in React using hooks like useState and useContext",
      },
    ],
    createdAt: new Date("2021-09-05T00:00:00.000Z"),
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "3",
        name: "State Management",
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
