import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css'
export const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.homeList}>
          <li>
            <NavLink className={css.homeItem} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={css.homeItem} to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </main>
    </div>
  );
};
