import React, { useEffect, useState } from 'react';
import { List } from './List/List'

import { getAllUsers } from "../api/usersApi"

export default () => {
  const [initialData, setInitialData] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllUsers();
      setInitialData(data)
    }
    getData()
  }, [])

  return (
    <>
      {initialData && <List data={initialData} />}
    </>
  )
}


