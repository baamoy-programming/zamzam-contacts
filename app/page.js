import { MdDownload, MdPersonAdd } from "react-icons/md";
import Card from "./components/Card";
import Form from "./components/Form";
import Link from "next/link";
import UserList from "./components/UserList";

export default async function Home() {
  return <UserList />;
}
