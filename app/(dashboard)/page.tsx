"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import * as React from "react";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function DashboardPage(props: DashboardPageProps) {
  const { organization } = useOrganization();
  const { search, favorites } = React.use(
    props.searchParams as unknown as Promise<any>
  );

  return (
    <div className="flex flex-col flex-1 h-[calc(100%-76px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={{ search, favorites }} />
      )}
    </div>
  );
}
