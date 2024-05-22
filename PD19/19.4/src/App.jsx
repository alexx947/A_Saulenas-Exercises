import { useState } from "react";

const users = [
  { name: "Shephard", id: 1 },
  { name: "White", id: 2 },
  { name: "Fischer", id: 3 },
  { name: "Lane", id: 4 },
  { name: "Williamson", id: 5 },
  { name: "Lymen", id: 6 },
  { name: "Wilson", id: 7 },
  { name: "Nye", id: 8 },
  { name: "Zimmer", id: 9 },
  { name: "Lahey", id: 10 },
];

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;