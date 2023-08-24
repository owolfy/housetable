const Home = ({ setView }) => {
  return (
    <div>
      <h1>Welcome to HOUSETABLE</h1>
      <p>A renovation loan that works for you</p>

      <h3>What shall we do?</h3>

      <section className='options-wrapper'>
        <a onClick={() => setView('new')}>Create new</a>
        <a onClick={() => setView('load')}>Load</a>
      </section>
    </div>
  );
};

export default Home;
