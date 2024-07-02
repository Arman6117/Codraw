"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";

import Search from "./search";
import InviteButton from "./invite-button";

const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className=" flex items-center gap-x-4 p-5">
      <div className="lg:flex lg:flex-1 hidden ">
        <Search />
      </div>
      <div className="flex-1 lg:hidden block">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                scale: "1.1",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                justifyContent: "space-between",
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};

export default Navbar;
