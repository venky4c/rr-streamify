CSS: App.js Make the components responsive ; figure out grid-template-rows
header css :TBD
Footer js: TBD

react: learn about fetch to link to json data

do I need to use HOcomponents or nested is enough: nested
------------------------------
working code:
useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllTitles(data))
    }, [])
	console.log(allTit

inside fetch : conditional loading in Movies and Series pages (https://scrimba.com/p/p7P5Hd/c4kJNSL)
-------------------------
// function Products() {    //React router practice 2
    //     const products = productsData.map(prod => (
    //         <div key={prod.id}>
    //             <h3>{prod.name}</h3>
    //             <p>Price: ${prod.price}</p>
    //             <hr />
    //         </div>
    //     ))
	
	 /* const [data, setData] = useState([])

    const fetchMyAPI = useCallback(async () => {
    const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
    let response = await fetch(url)
    console.log(response)
    response = await response.json()    
    setData(response)
    }, [])

    useEffect( () => {
        fetchMyAPI()
    }, [fetchMyAPI])    
     */    