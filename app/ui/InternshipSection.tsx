export default function InternshipSection() {
  return (
    <section id="connect" className="bg-gray-800 text-white py-12 px-6 text-center w-full">
      <h2 className="text-3xl font-bold mb-6">Looking for an intern? Look no further.</h2>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={(e) => {handleSumbit(e)}}>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          placeholder="Your LinkedIn"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  console.log(e);
}