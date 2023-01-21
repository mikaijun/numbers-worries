import React from "react"
import Link from "next/link"

import { useSessionStorage } from "@/hooks/useSessionStorage"

import type { NextPage } from "next"

import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
query GetUsers {
  users {
    id
    name
    email
  }
}
`;

const Page: NextPage = () => {
  const { worries } = useSessionStorage()
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>ローディング中です</p>;
  if (error) return <p>エラーが発生しています</p>;

  const { users } = data;

  return (
    <div>
      <main>
        <h1>ユーザ情報</h1>
        {users.map((user: { id: number; name: string; email: string }) => (
          <div key={user.id}>Name: {user.name}</div>
        ))}
      </main>
      {worries.map((worry, index) => (
        <div key={index}>
          <Link href={`/${worry.id}`}>
            トップへ
            <span>心配事:</span>
            <span>{worry.worries_content}</span>
            <span>心配事割合:</span>
            <span>{worry.ratio}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Page
