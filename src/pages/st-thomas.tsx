import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainNav from "../components/MainNav";
import MainFeed from "../components/MainFeed";

export default function StThomasPage() {
  return (
    <div className="">
      <MainNav />
      <MainFeed />
    </div>
  );
}
