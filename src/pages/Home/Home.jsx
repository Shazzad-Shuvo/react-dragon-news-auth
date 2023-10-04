
import Header from '../shared/Header/Header';
import Navbar from '../shared/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold">This is home</h2>
        </div>
    );
};

export default Home;