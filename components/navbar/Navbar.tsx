"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const user = useUser();
  const userEmail = user.user?.emailAddresses[0].emailAddress;

  return (
    <nav className="lg:w-[70%] mx-auto p-4  border-b">
      <div className="flex items-center justify-between">
        <h1 className="uppercase tracking-widest ">Discipline Tracker</h1>
        <div className="space-x-3 flex items-center">
          {user.user?.firstName && (
            <p>
              {user.user?.firstName} {user.user?.lastName}
            </p>
          )}

          {!user.user?.firstName && <p>{userEmail?.substring(0, 16)}...</p>}

          {user.isSignedIn ? (
            <SignOutButton>
              <Button>Sign Out</Button>
            </SignOutButton>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
