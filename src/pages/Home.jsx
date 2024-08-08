import '../App.css';
import LoadMoreData from '../components/loadMore';

export default function Home() {
	
    return (
        <div className="App">
			<h1>This is Home Page</h1>
			{/* Loading More Data Component */}
            <LoadMoreData />
		</div>
    )
}