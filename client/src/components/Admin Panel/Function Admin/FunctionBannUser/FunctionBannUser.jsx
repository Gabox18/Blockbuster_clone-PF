import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asynbanUsers,
  asyncallUsers,
  asynDesBanUsers,
  asynNewAdmin,
  asyncSpamBan,
  asyncSpamUnban,
} from "../../../../redux/slice";
import "./functionBannUser.css";

function FunctionBannUser() {
  const dispatch = useDispatch();

  let { allUsers } = useSelector((state) => state.alldata);

  let [obj, setObj] = useState({
    email: "",
  });
  let user = allUsers;
  console.log(obj);

  useEffect(() => {
    Array.isArray(allUsers)
      ? dispatch(asyncallUsers())
      : dispatch(asyncallUsers());
  }, [dispatch, allUsers]);

  const usersAll = allUsers;
  const handeOnBan = (e) => {
    e.preventDefault();
    let objetito = { id: e.target.value };
    
    let infoUserBan = allUsers.filter((x) => x.id == objetito.id);  
    let email = infoUserBan.map((e)=> e.email)
    let emailS = email.pop()
    
  
    dispatch(asynbanUsers(objetito));
    dispatch(asyncallUsers());
    dispatch(asyncSpamBan(emailS));
  };

  const handeOnDesBan = (e) => {
    e.preventDefault();
    setObj({
      id: e.target.value,
    });
    let objetito = { id: e.target.value };
    let infoNode = {
      id: obj.id,
    };
    let infoUserBan = allUsers.filter((x) => x.id == objetito.id);  
    let email = infoUserBan.map((e)=> e.email)
    let emailS = email.pop()
    
    dispatch(asynDesBanUsers(objetito));
    dispatch(asyncallUsers());
    dispatch(asyncSpamUnban(emailS))
  };

  const handeOnNewAdmin = (e) => {
    e.preventDefault();
    let objetito = { id: e.target.value };
    dispatch(asynNewAdmin(objetito));
    dispatch(asyncallUsers());
  };
  return (
    <div className="allFondo">
      <h1>USUERS</h1>

      <div>
        <p className="titleInp">
          <b>Bann User</b>
        </p>
        <select className="impAdmin" onChange={handeOnBan}>
          {Array.isArray(allUsers) ? (
            usersAll.map((e) => {
              return (
                <option value={e.id}>
                  Nickname: {e.nickname} ~ id:{e.id} ~ status:{" "}
                  {e.status.toString()}
                </option>
              );
            })
          ) : (
            <option>Loading !!</option>
          )}
        </select>
      </div>
      <div>
        <p className="titleInp">
          <b>UnBann User</b>
        </p>
        <select className="impAdmin" onChange={handeOnDesBan}>
          {Array.isArray(allUsers) ? (
            usersAll.map((e) => {
              return (
                <option value={e.id}>
                  Nickname: {e.nickname} ~ id:{e.id} ~ status:{" "}
                  {e.status.toString()}
                </option>
              );
            })
          ) : (
            <option>Loading !!</option>
          )}
        </select>
        <p className="titleInp">
          <b>Choose new admin</b>
        </p>
        <select className="impAdmin" onChange={handeOnNewAdmin}>
          {Array.isArray(allUsers) ? (
            usersAll.map((e) => {
              return (
                <option value={e.id}>
                  Nickname: {e.nickname} ~ id:{e.id} ~ category: {e.category}
                </option>
              );
            })
          ) : (
            <option>Loading !!</option>
          )}
        </select>
      </div>
      <div>
        <b>With great power comes great responsibility</b>
      </div>
    </div>
  );
}
export default FunctionBannUser;
