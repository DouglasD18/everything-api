import React, { useEffect, useState } from "react";
import UserCardComponent from "../components/UserCardComponent";
import RandomUserGenerator from '../helpers/RandomUsers';

export default function RandomUsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(10);

  const nextPage = () => {
    setPage(page + 10);
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
        if (index < page && ) {
          
        }
      })}
      <button
        type="submit"
        onClick={ nextPage }
      >Próxima página</button>
    </div>
  );
}
