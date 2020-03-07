import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

const Profile = () => {
  const user = useUserContext();
  const setUserContext = useSetUserContext();

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (user.email !== "" && user.name !== "") {
            setUserContext({
              ...user
            })
          }
        }}
      >
        <input
          name="email"
          value={user.email}
          onChange={e => {
            setUserContext({
              email: e.target.value
            })
          }}
        />
        <input
          name="name"
          value={user.name}
          onChange={e => {
            user.name = e.target.value;
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
