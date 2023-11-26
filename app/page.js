import { MdDownload, MdPersonAdd } from "react-icons/md";
import Card from "./components/Card";
import Form from "./components/Form";
import Link from "next/link";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading users: ", error);
  }
};

export default async function Home() {
  const { users } = await getUsers();
  return (
    <div className=" relative">
      <div className=" text-zinc-600 mb-12 flex justify-between">
        <h1 className=" text-xl">Customers</h1>
        <div className=" flex gap-1">
          <Link href='/add-customer' className=" text-xs text-white p-2 bg-blue-500 border-none rounded-sm flex items-center gap-2">
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
          <Card user={user} />
        ))}
      </div>
    </div>
  );
}
