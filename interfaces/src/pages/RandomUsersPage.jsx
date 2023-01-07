import React, { useEffect, useState } from "react";
import UserCardComponent from "../components/UserCardComponent";
import RandomUserGenerator from '../helpers/RandomUsers';

export default function RandomUsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await RandomUserGenerator.get();
      setUsers(users);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      { users.map((user, index) => {

      })}
      <button
        type="submit"
        onClick={ nextPage }
      >Próxima página</button>
    </div>
  );
}
