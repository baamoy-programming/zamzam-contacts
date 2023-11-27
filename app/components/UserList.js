import { MdDownload, MdPersonAdd } from "react-icons/md";
import Link from "next/link";
import Card from "./Card";

const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/users`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading users: ", error);
  }
};
const UserList = async () => {
  const { users } = await getUsers();
  return (
    <div className=" relative">
      <div className=" text-zinc-600 mb-12 flex justify-between">
        <h1 className=" text-xl">Customers</h1>
        <div className=" flex gap-1">
          <Link
            href="/add-customer"
            className=" text-xs text-white p-2 bg-blue-500 border-none rounded-sm flex items-center gap-2"
          >
            <MdPersonAdd />
            <small>Add New</small>
          </Link>
          <button className=" border border-zinc-100 py-1 px-3 rounded-sm">
            <MdDownload />
          </button>
        </div>
      </div>
      <div className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {users.map((user) => (
          <div key={user._id}>
            <Card user={user} key={user._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
