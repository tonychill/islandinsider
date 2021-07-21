import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layout";
import Link from "next/link";
import MainFeed from "../components/MainFeed";
import MainNav from "../components/MainNav";

export default function Home() {
  
  return (
    <div className="">
      <MainNav/>
      <MainFeed />
    </div>
  );
}
