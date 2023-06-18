import logo from './logo.svg';
import './App.css';
import ProductChainForm from './components/ProductChainForm';
import ProductChainQuery from './components/ProductChainQuery'; // 替换为组件文件的路径
import GetProductIndex from './components/GetProductIndex'; // 替换为组件文件的路径
import AddProductLink from './components/AddProductLink'; // 替换为组件文件的路径

function App() {
  return (
    <div className="App">
      <ProductChainForm />
      <ProductChainQuery />
      <GetProductIndex />
      <AddProductLink />
    </div>
  );
}

export default App;
