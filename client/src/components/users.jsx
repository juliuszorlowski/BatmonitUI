import { useState, useEffect } from "react";
import ListGroup from "./common/listGroup";
import { getUsers } from "../services/userService";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getUsers();
      const user = [{ uuid: "", name: "All" }, ...data];
      setUsers(user);
    }
    fetchData();
  }, []);

  function handleUserSelect(user) {
    setSelectedUser(user);
  }

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={users}
            selectedItem={selectedUser}
            onItemSelect={handleUserSelect}
          />
        </div>
      </div>
    </div>
  );
}
