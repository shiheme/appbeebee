import { QueryResult, QueryResultRow } from "pg";

import type { View } from '../theme/types';
import { getDb } from "./db";

export async function insertView(view: View) {
  const db = getDb();
  const res = await db.query(
    `INSERT INTO views 
        (id, views, created_at, status) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
    [
      view.id,
      view.views,
      view.created_at,
      view.status,
    ]
  );

  return res;
}

// export async function updateView(
//   order_no: string,
//   order_status: number,
//   is: string
// ) {
//   const db = getDb();
//   const res = await db.query(
//     `UPDATE views SET views=$1 WHERE id=$3`,
//     [order_status, paied_at, order_no]
//   );

//   return res;
// }

export async function getPostCount(): Promise<number> {
  const db = getDb();
  const res = await db.query(`SELECT count(1) as count FROM views`);
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}

export async function getUserCoversCount(user_email: string): Promise<number> {
  const db = getDb();
  const res = await db.query(
    `SELECT count(1) as count FROM covers WHERE user_email = $1`,
    [user_email]
  );
  if (res.rowCount === 0) {
    return 0;
  }

  const { rows } = res;
  const row = rows[0];

  return row.count;
}

export async function findViewsById(id: number): Promise<View | undefined> {
  const db = getDb();
  const res = await db.query(
    `select w.* from views where w.id = $1`,
    [id]
  );
  if (res.rowCount === 0) {
    return;
  }

  const cover = (res.rows[0]);

  return cover;
}
