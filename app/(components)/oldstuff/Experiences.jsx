import ExpCards from "./ExpCards";

const Experiences = ({ experience }) => {
  return (
    <main className="bg-slate-700 py-10" id="experiences">
      <h1 className="text-center text-[3rem] font-bold mb-6 text-white font-noto">
        Experiences
      </h1>
      <ExpCards experience={experience} />
    </main>
  );
};

export default Experiences;
