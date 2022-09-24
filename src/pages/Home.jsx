import Card from '../components/Card';
function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart
}) {
    return (
        <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу : ${searchValue}` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search svg" />
          {searchValue && (
          <img
            onClick={() => setSearchValue('')} 
            className="clear cu-p" 
            src="/img/btn-remove.svg" 
            alt="clear" />
            )}
          <input 
            onChange={onChangeSearchInput} 
            value={searchValue} 
            placeholder="Поиск ..."/> 
        </div>
      </div>
      
      <div className="d-flex flex-wrap">
        {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index)=>(
          <Card 
          key={index}
          onFavorite={onAddToFavorite}
          onPlus={(obj) => {onAddToCart(obj)}}
          added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
          {...item}
          />
        ))}

      </div>

    </div>
    )
}

export default Home;