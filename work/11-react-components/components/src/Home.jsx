import Card from './Card';
import cards from './card-list';
import './Card.css'
import './App.css';
import './index.css';

function Home({pageChange}) {
  return (
    <main className="main">
        <div className="cards">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} path={item.path} text={item.text} PageChange={pageChange} showButton={item.showButton}/>
        ))}
        </div>

      </main>
  );
}

export default Home;