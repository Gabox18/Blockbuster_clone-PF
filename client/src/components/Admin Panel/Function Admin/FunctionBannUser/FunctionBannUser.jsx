import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asynbanUsers,
  asyncallUsers,
  asynDesBanUsers,
  asynNewAdmin,
} from "../../../../redux/slice";
import "./functionBannUser.css";

function FunctionBannUser() {
  const dispatch = useDispatch();

  let { allUsers } = useSelector((state) => state.alldata);
  useEffect(() => {
    Array.isArray(allUsers)
      ? dispatch(asyncallUsers())
      : dispatch(asyncallUsers());
  }, [dispatch, allUsers]);

  const usersAll = allUsers;

  const handeOnBan = (e) => {
    e.preventDefault();
    let objetito = { id: e.target.value };
    console.log(objetito);
    dispatch(asynbanUsers(objetito));
    dispatch(asyncallUsers());
  };
  const handeOnDesBan = (e) => {
    e.preventDefault();
    let objetito = { id: e.target.value };
    console.log(objetito);
    dispatch(asynDesBanUsers(objetito));
    dispatch(asyncallUsers());
  };

  const handeOnNewAdmin = (e) => {
    e.preventDefault();
    let objetito = { id: e.target.value };
    console.log(objetito);
    dispatch(asynNewAdmin(objetito));
    dispatch(asyncallUsers());
  };
  return (
    <div className="allFondo">
      <h1>ESTO ES BANEAR UN USUARIO</h1>

      <div>
        <p className="titleInp">
          <b>Bann User</b>
        </p>
        <select className="impAdmin" onChange={handeOnBan}>
          {Array.isArray(allUsers) ? (
            usersAll.map((e) => {
              return (
                <option value={e.id}>
                  Nickname: {e.nickname} ~ id:{e.id} ~ status: {e.status}
                </option>
              );
            })
          ) : (
            <option>cargando !!</option>
          )}
        </select>
      </div>
      <div>
        <p className="titleInp">
          <b>DesBann User</b>
        </p>
        <select className="impAdmin" onChange={handeOnDesBan}>
          {Array.isArray(allUsers) ? (
            usersAll.map((e) => {
              return (
                <option value={e.id}>
                  Nickname: {e.nickname} ~ id:{e.id} ~ status: {e.status}
                </option>
              );
            })
          ) : (
            <option>cargando !!</option>
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
            <option>cargando !!</option>
          )}
        </select>
      </div>
    </div>
  );
}
export default FunctionBannUser;
