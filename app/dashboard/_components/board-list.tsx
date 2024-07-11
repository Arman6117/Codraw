"use client";
import { useQuery } from "convex/react";
import EmptyBoards from "./empty-boards";
import EmptyFav from "./empty-fav";
import EmptySearch from "./empty-search";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl ">
          {query.favorites ? "Favorites Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-6 xl:grid-cols-5 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled/>
          <BoardCard.Skeleton/>
          <BoardCard.Skeleton/>
          <BoardCard.Skeleton/>
          <BoardCard.Skeleton/>
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }
  if (!data.length && query.favorites) {
    return <EmptyFav />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }
  return (
    <div>
      <h2 className="text-3xl ">
        {query.favorites ? "Favorites Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-6 xl:grid-cols-5 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            orgId={board.orgId}
            authorName={board.authorName}
            authorId={board.authorId}
            createdAt={board._creationTime}
            imageUrl={board.imageUrl}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
