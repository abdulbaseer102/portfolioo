import Image from "next/image";
import Header from "./components/header/Header";
import Body from "./components/body/body";
import Exeperianse from "./components/experiense/Exeperianse";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Header />

      <Body/>

      <Exeperianse/>

      <Skills/>

      <Contact/>
    </main>
  );
}