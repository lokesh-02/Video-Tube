
import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

function App() {
  

  return (
    <Provider store={store}>
    <>
      <Head/> 
      <RouterProvider router={appRouter}/>
    </>
    </Provider>
  );
}
const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element: <MainContainer/>
    },
    
    {
      path:'/watch',
      element: <WatchPage/>
    },
    {
      path:'/search',
      element: <SearchPage/>
    }
  ]
}])

export default App; 
