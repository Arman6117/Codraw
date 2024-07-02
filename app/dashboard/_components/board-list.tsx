"use client";

import EmptyBoards from "./empty-boards";
import EmptyFav from "./empty-fav";
import EmptySearch from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO:API Call

  if (!data.length && query.search) {
    return <EmptySearch/>}
  if (!data.length && query.favorites) {
    return <EmptyFav/>
  }

  if (!data.length) {
    return <EmptyBoards/>
  }
  return <div>BoardList</div>;
};

export default BoardList;
