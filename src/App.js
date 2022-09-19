import { useState } from 'react';
import {Container} from 'react-bootstrap'
import NavBar from './component/NavBar'
import Header from './component/Header';
import Category from './component/Category';
import ItemList from './component/ItemList';
import {items} from './data'
function App() {
  const [itemsData, setItemsData] = useState(items)
  //get all category
  const allCategory = ['الكل',...new Set(items.map((i)=>i.category))]
  console.log(allCategory)
  //filter by category
  const filterByCategory = (cat)=>{
    if(cat==='الكل'){
      setItemsData(items)
    }else{
      const newArr = items.filter((item)=>item.category===cat)
    setItemsData(newArr)
    }
  }

  //filter by search
  const filterBySearch = (word)=>{
    if(word !== ''){
      const newArr = items.filter((item)=>item.title===word)
    setItemsData(newArr)
    }
  }


  return (
    <div className="color-body font">
      <NavBar filterBySearch ={filterBySearch}/>
      <Container>
        <Header/>
        <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
        <ItemList itemsData={itemsData}/>
      </Container>
      
    </div>
  );
}

export default App;
