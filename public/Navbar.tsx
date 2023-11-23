import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";

function Navbar() {
  const user = false;

  return (
    <div className="h-12 text-red-900 p-4 flex justify-between items-center border-b-2 border-b-red-900 uppercase md:h-24 lg:px20 xl:px-40">
      <div className="hidden md:flex gap-4 " /*Left Links */>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        {/* <Link href="/contact">Contact</Link> */}
      </div>
      <div className="text-lg md:font-bold " /*Logo */>
        <Link href="/">ASNDANIEL PIZZ</Link>
      </div>
      <div className="md:hidden" /*Mobile Menu */>
        <Menu />
      </div>
      <div
        className="hidden md:flex gap-4 items-center justify-end " /*Right Links */
      >
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
