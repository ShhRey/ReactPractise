import { useEffect, useState, useRef } from 'react';
import './styles.css';

export default function LoadMoreData() {
    // Create states for maintaining Product Loading Status
    const [loading, setLoading] = useState(false);

    // Create states for maintaining Products and Load Counter
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    // Create state check if More Products are available on API
    const [hasMore, setHasMore] = useState(true);

    // Manage Load More visibility on Product Count
    const [disableBtn, setDisableBtn] = useState(false);

    // Using useRef to track the Initial Page Load
    const initialLoad = useRef(true);

    async function fetchProducts() {
        // Try if data is being fetched or not
        try {
            setLoading(true);
            // Define the API Fetch Limit here
            const limit = 20;
            // Since we are storing count in state, we will skip count*20 data and start loading after that
            const resp = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${count * limit}`);
            // Store response in json format
            const result = await resp.json();

            // Store data in useState only when data is fetched and Products are being returned
            if (result && result.products && result.products.length) {
                setProducts(prevProducts => [...prevProducts, ...result.products]);
                setCount(prevCount => prevCount + 1);
                // Check for Products Available
                if (result.products.length < limit) {
                    setHasMore(false);
                }
                else {
                    setHasMore(true);
                }

                setLoading(false);
            }
            console.log(result);
        }
        // Return Error and stop loading data since no Products are fetched
        catch (e) {
            console.log("Error: ", e);
            setLoading(false);
        }
    }

    // To call fetchProducts function once the Page Load is Complete
    useEffect(() => {
        if (initialLoad.current) {
            initialLoad.current = false;
            fetchProducts();
        }
    }, []);

    useEffect(() => {
        if (products && products.length === 194) {
            setDisableBtn(true);
        }
    }, [products]);

    // If data is taking time to be fetched, display the following
    if (loading && products.length === 0) {
        return <div>Loading Data! Please Wait...</div>
    }

    return (
        <div className='dataContainer'>
            <div className='prodContainer'>
                {
                    products && products.length ?
                        products.map(item =>
                            <div className='product' key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p style={{fontWeight: "bold"}}>{item.title}</p>
                                <div className='prodDetails'>
                                    <p>Price: ${item.price}</p>
                                    <p>Discount: {item.discountPercentage}%</p>
                                    <p>Qty Avail: {item.stock}</p>
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
            <div className='loadBtn'>
                <button disabled={disableBtn} onClick={fetchProducts}>Load More Products</button>
            </div>
            {disableBtn ? <div>You have reached the End of Page, There are no More Products !!</div> : null}
        </div>
    )
}
